import React, { useState } from 'react';
import { soundManager } from '../../utils/audio';

const ROWS = 8;
const COLS = 8;
const MINES = 8;

interface Cell {
  row: number;
  col: number;
  isMine: boolean;
  isOpen: boolean;
  isFlagged: boolean;
  neighborMines: number;
}

export const GamesApp: React.FC = () => {
  const createBoard = (): Cell[][] => {
    let board: Cell[][] = [];
    for (let r = 0; r < ROWS; r++) {
      board[r] = [];
      for (let c = 0; c < COLS; c++) {
        board[r][c] = {
          row: r,
          col: c,
          isMine: false,
          isOpen: false,
          isFlagged: false,
          neighborMines: 0,
        };
      }
    }

    // Place mines randomly
    let placed = 0;
    while (placed < MINES) {
      const r = Math.floor(Math.random() * ROWS);
      const c = Math.floor(Math.random() * COLS);
      if (!board[r][c].isMine) {
        board[r][c].isMine = true;
        placed++;
      }
    }

    // Count neighbors
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (board[r][c].isMine) continue;
        let count = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc].isMine) {
              count++;
            }
          }
        }
        board[r][c].neighborMines = count;
      }
    }

    return board;
  };

  const [board, setBoard] = useState<Cell[][]>(createBoard());
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const resetGame = () => {
    soundManager.playMouseDown();
    setBoard(createBoard());
    setGameOver(false);
    setGameWon(false);
  };

  const revealCell = (r: number, c: number) => {
    if (gameOver || gameWon || board[r][c].isOpen || board[r][c].isFlagged) return;

    soundManager.playMouseDown();
    const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));

    if (newBoard[r][c].isMine) {
      // Game over - reveal all mines
      newBoard.forEach((row) =>
        row.forEach((cell) => {
          if (cell.isMine) cell.isOpen = true;
        })
      );
      setBoard(newBoard);
      setGameOver(true);
      return;
    }

    const floodFill = (row: number, col: number) => {
      if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return;
      if (newBoard[row][col].isOpen || newBoard[row][col].isMine || newBoard[row][col].isFlagged) return;

      newBoard[row][col].isOpen = true;

      if (newBoard[row][col].neighborMines === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            floodFill(row + dr, col + dc);
          }
        }
      }
    };

    floodFill(r, c);

    // Check win condition
    let unrevealedSafe = 0;
    newBoard.forEach((row) =>
      row.forEach((cell) => {
        if (!cell.isMine && !cell.isOpen) unrevealedSafe++;
      })
    );

    setBoard(newBoard);
    if (unrevealedSafe === 0) {
      setGameWon(true);
    }
  };

  const toggleFlag = (e: React.MouseEvent, r: number, c: number) => {
    e.preventDefault();
    if (gameOver || gameWon || board[r][c].isOpen) return;

    soundManager.playMouseDown();
    const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));
    newBoard[r][c].isFlagged = !newBoard[r][c].isFlagged;
    setBoard(newBoard);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center bg-[#c0c0c0] p-3 select-none">
      <div className="win-outset bg-[#c0c0c0] p-2 flex flex-col items-center">
        {/* Top Header */}
        <div className="win-inset bg-[#c0c0c0] p-2 mb-2 flex items-center justify-between w-full">
          <div className="bg-black text-red-600 font-mono text-sm px-2 py-0.5 border border-gray-600 font-bold">
            00{MINES}
          </div>
          <button
            onClick={resetGame}
            className="win-button px-2 py-1 text-base leading-none active:scale-95"
          >
            {gameOver ? '😵' : gameWon ? '😎' : '🙂'}
          </button>
          <div className="bg-black text-red-600 font-mono text-sm px-2 py-0.5 border border-gray-600 font-bold">
            {gameOver ? 'ERR' : gameWon ? 'WIN' : 'PLAY'}
          </div>
        </div>

        {/* Board Grid */}
        <div className="win-inset bg-gray-400 p-1 grid grid-cols-8 gap-0.5">
          {board.map((row, r) =>
            row.map((cell, c) => {
              return (
                <button
                  key={`${r}-${c}`}
                  onClick={() => revealCell(r, c)}
                  onContextMenu={(e) => toggleFlag(e, r, c)}
                  className={`w-6 h-6 flex items-center justify-center font-bold text-xs ${
                    cell.isOpen
                      ? 'bg-gray-300 border border-gray-400'
                      : 'win-button'
                  }`}
                >
                  {cell.isOpen ? (
                    cell.isMine ? (
                      '💣'
                    ) : cell.neighborMines > 0 ? (
                      <span
                        className={
                          cell.neighborMines === 1
                            ? 'text-blue-700'
                            : cell.neighborMines === 2
                            ? 'text-green-700'
                            : 'text-red-700'
                        }
                      >
                        {cell.neighborMines}
                      </span>
                    ) : (
                      ''
                    )
                  ) : cell.isFlagged ? (
                    '🚩'
                  ) : (
                    ''
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
