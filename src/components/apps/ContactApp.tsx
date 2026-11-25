import React, { useState } from 'react';
import { Send, Mail, CheckCircle, User, MessageSquare } from 'lucide-react';

export const ContactApp: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message || !senderEmail) return;

    // Create mailto link as fallback/direct submission
    const mailtoUrl = `mailto:rajputsumit2815@gmail.com?subject=Portfolio Message from ${encodeURIComponent(senderName || 'Visitor')}&body=${encodeURIComponent(
      `From: ${senderName} (${senderEmail})\n\nMessage:\n${message}`
    )}`;
    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="h-full flex flex-col bg-[#c0c0c0] p-3 text-black text-xs font-sans">
      {/* Top Menu Bar */}
      <div className="win-outset bg-[#dfdfdf] p-1.5 mb-2 flex items-center justify-between">
        <span className="font-bold flex items-center">
          <Mail className="w-4 h-4 mr-1.5 text-blue-800" />
          Express Mail Client — New Message
        </span>
        <span className="text-[11px] text-gray-500 font-mono">SMTP: READY</span>
      </div>

      {submitted ? (
        <div className="flex-1 win-inset bg-white p-6 flex flex-col items-center justify-center text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mb-2" />
          <h2 className="text-base font-bold text-[#000080]">Message Dispatched!</h2>
          <p className="text-gray-600 max-w-sm mt-1">
            Thank you for reaching out! Your email client has been prepared, or you can email directly at:
          </p>
          <a
            href="mailto:rajputsumit2815@gmail.com"
            className="font-bold text-sm text-blue-800 mt-2 hover:underline"
          >
            rajputsumit2815@gmail.com
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="win-button px-4 py-1 mt-4 font-bold"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex-1 win-inset bg-white p-3 flex flex-col space-y-2">
          {/* To Field (Read-only) */}
          <div className="flex items-center space-x-2 border-b border-gray-200 pb-1.5">
            <span className="font-bold text-gray-600 w-16 text-right">To:</span>
            <span className="font-bold text-[#000080] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              Sumit Singh &lt;rajputsumit2815@gmail.com&gt;
            </span>
          </div>

          {/* Name Field */}
          <div className="flex items-center space-x-2 border-b border-gray-200 pb-1.5">
            <label className="font-bold text-gray-600 w-16 text-right flex items-center justify-end">
              Name:
            </label>
            <input
              type="text"
              required
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Your Name / Recruiter / Organization"
              className="flex-1 p-1 text-xs border border-gray-400 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center space-x-2 border-b border-gray-200 pb-1.5">
            <label className="font-bold text-gray-600 w-16 text-right">
              Email:
            </label>
            <input
              type="email"
              required
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="flex-1 p-1 text-xs border border-gray-400 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Message Area */}
          <div className="flex-1 flex flex-col pt-1">
            <label className="font-bold text-gray-600 mb-1">
              Message:
            </label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Sumit, I came across your portfolio and wanted to discuss..."
              className="flex-1 p-2 text-xs border border-gray-400 focus:outline-none focus:border-blue-600 resize-none font-sans"
            />
          </div>

          {/* Send Button */}
          <div className="flex justify-between items-center pt-2 border-t border-gray-200">
            <span className="text-[11px] text-gray-500 font-mono">
              Phone: +91-8544972768
            </span>
            <button
              type="submit"
              className="win-button px-5 py-1.5 font-bold flex items-center text-sm text-[#000080] hover:bg-gray-200"
            >
              <Send className="w-3.5 h-3.5 mr-1.5 text-blue-700" />
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
