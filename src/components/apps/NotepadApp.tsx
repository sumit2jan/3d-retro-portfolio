import React, { useState } from 'react';
import { soundManager } from '../../utils/audio';

export const NotepadApp: React.FC = () => {
  const [content, setContent] = useState(
`WELCOME TO SUMIT SINGH'S RETRO OS!
===================================

Developer: Sumit Singh
Role: Software Developer Intern
Location: Chandigarh, India
Contact: rajputsumit2815@gmail.com | +91-8544972768

CORE SPECIALIZATIONS:
--------------------
* Full-stack MERN & mobile development (React.js, Flutter, Node.js)
* Cloud & Serverless infrastructure: Google Cloud Platform (GCP Cloud Functions, Cloud Run)
* Production FinTech & Payments: Stripe Live Engine with 3DS2 SCA & HMAC-SHA256
* Security & Integrity: Google Play Integrity API, Android Keystore, RBAC

FLAGSHIP PROJECTS:
------------------
1. Chekers VIP — Enterprise Mobile & Cloud Payment Engine (Flutter, GCP, Stripe Live)
2. Thaught Form — AI Query Classification & Answering (Gemini API, NLI Models)
3. The Curator — AI-Powered Blogging & Social Platform (MERN, OAuth, Cloudinary)

EDUCATION:
----------
* M.C.A. (Master of Computer Application) — Chitkara University (CGPA: 8.45/10)
* B.C.A. — Post Graduate Govt. College (PGGC-11)
* 2nd Place Presentation Competition & NCC Cadet

Feel free to edit or write notes here! Typing triggers mechanical keyboard audio.`
  );

  const handleKeyDown = () => {
    soundManager.playKeyClick();
  };

  return (
    <div className="h-full flex flex-col bg-[#c0c0c0] p-1.5 text-black font-sans text-xs">
      <div className="flex space-x-3 px-2 py-0.5 text-xs text-gray-700 border-b border-gray-400 mb-1">
        <span className="hover:underline cursor-pointer">File</span>
        <span className="hover:underline cursor-pointer">Edit</span>
        <span className="hover:underline cursor-pointer">Search</span>
        <span className="hover:underline cursor-pointer">Help</span>
      </div>
      <div className="flex-1 win-inset bg-white p-2 flex">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full h-full font-mono text-xs border-0 outline-none resize-none leading-relaxed select-text"
          spellCheck={false}
        />
      </div>
    </div>
  );
};
