import React from 'react';
import { Download, Printer, Mail, Phone, MapPin } from 'lucide-react';

export const ResumeApp: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="h-full flex flex-col bg-[#c0c0c0] p-2 text-black text-xs font-sans">
      {/* Top action bar */}
      <div className="win-outset bg-[#dfdfdf] p-1.5 mb-2 flex items-center justify-between">
        <span className="font-bold text-gray-800 flex items-center">
          📄 Sumit_Singh_Resume.pdf (Document Viewer)
        </span>
        <div className="flex space-x-1.5">
          <button
            onClick={handlePrint}
            className="win-button px-2.5 py-1 text-xs font-bold flex items-center hover:bg-gray-200"
          >
            <Printer className="w-3.5 h-3.5 mr-1 text-gray-700" /> Print Resume
          </button>
          <a
            href="mailto:rajputsumit2815@gmail.com?subject=Resume%20Inquiry%20-%20Sumit%20Singh"
            className="win-button px-2.5 py-1 text-xs font-bold flex items-center text-blue-900 hover:bg-gray-200"
          >
            <Download className="w-3.5 h-3.5 mr-1 text-blue-700" /> Request Official PDF
          </a>
        </div>
      </div>

      {/* Main Resume Sheet View */}
      <div className="flex-1 win-inset bg-gray-600 p-4 overflow-y-auto flex justify-center">
        <div className="bg-white text-gray-900 shadow-2xl p-8 max-w-2xl w-full select-text font-serif leading-normal border border-gray-400">
          {/* Header */}
          <div className="text-center border-b pb-4 mb-4">
            <h1 className="text-2xl font-bold uppercase tracking-wider text-black">SUMIT SINGH</h1>
            <p className="text-sm font-semibold text-gray-700 mt-0.5">Software Developer Intern</p>
            <p className="text-xs text-gray-600 mt-1">
              Chandigarh, India • +91-8544972768 • rajputsumit2815@gmail.com
            </p>
            <div className="text-xs text-blue-700 space-x-2 mt-1 underline">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <span>•</span>
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <span>•</span>
              <a href="https://portfolio.com" target="_blank" rel="noreferrer">Portfolio</a>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1.5">
              SUMMARY
            </h2>
            <p className="text-xs text-gray-800 leading-relaxed font-sans">
              Software Developer with hands-on experience building secure, production-grade web and cloud applications. Proven track record in full-stack MERN development, serverless cloud architecture (GCP/Firebase), secure payment infrastructure (Stripe Live with 3DS2), and AI-driven systems. Strong Java and algorithmic foundation, with a focus on clean architecture, system reliability, and performance optimization.
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
              EXPERIENCE
            </h2>
            <div className="font-sans space-y-3">
              {/* Ducktale */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-xs">
                  <span>Ducktale IT Services — Software Developer Intern</span>
                  <span className="font-normal text-gray-600">May 2026 – Present</span>
                </div>
                <p className="text-[11px] text-gray-600 italic mb-1">Chandigarh, India</p>
                <ul className="list-disc list-inside text-xs space-y-1 text-gray-800">
                  <li><strong>Full-Stack Development:</strong> Design, build, and maintain full-stack web modules using React.js and Node.js/Express, optimizing server-side workflows and business logic for production environments.</li>
                  <li><strong>API Design & Middleware:</strong> Develop RESTful services with custom Express middleware for request validation, error handling, and security; optimize MongoDB aggregation pipelines for faster query processing.</li>
                  <li><strong>Frontend Systems & Performance:</strong> Build modular, reusable React.js component hierarchies with centralized state management and custom hooks, improving rendering performance and UI consistency.</li>
                  <li><strong>Delivery & Reliability:</strong> Work in agile sprint cycles, participate in peer code reviews, debug production issues, and maintain Git/GitHub deployment workflows to ensure dependable releases.</li>
                </ul>
              </div>

              {/* iApp Technologies */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-xs">
                  <span>iApp Technologies LLP — Full Stack Developer Intern</span>
                  <span className="font-normal text-gray-600">Dec 2025 – May 2026</span>
                </div>
                <p className="text-[11px] text-gray-600 italic mb-1">Chandigarh, India</p>
                <ul className="list-disc list-inside text-xs space-y-1 text-gray-800">
                  <li><strong>MERN Stack:</strong> Engineered full-stack web applications with MongoDB, Express.js, React.js, and Node.js; built reusable UI components with dynamic dashboards, search, and pagination supporting 100+ concurrent users.</li>
                  <li><strong>API & Authentication:</strong> Designed RESTful APIs powering 5+ secure client-server flows; implemented JWT authentication with role-based access control and protected routes, reducing unauthorized-access risk.</li>
                  <li><strong>Database Design:</strong> Modeled optimized MongoDB schemas with Mongoose, managing 500+ records with efficient queries, well-defined relationships, and a scalable data layer.</li>
                  <li><strong>Version Control & Optimization:</strong> Used Git and GitHub across 10+ collaborative workflows; improved application response time by ~30% through query optimization and debugging.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
              PROJECTS
            </h2>
            <div className="font-sans space-y-3">
              {/* Chekers VIP */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-xs">
                  <span>Chekers VIP — Enterprise Mobile & Cloud Payment Engine</span>
                  <span className="font-normal text-gray-600">June 2026 – Present</span>
                </div>
                <p className="text-[11px] text-gray-600 italic mb-1">
                  Flutter, Dart, Firebase, Stripe API, Google Cloud Platform (GCP), Cloud Functions
                </p>
                <ul className="list-disc list-inside text-xs space-y-1 text-gray-800">
                  <li><strong>Production Payment Engine:</strong> Built an end-to-end Stripe Live payment system supporting 3 recurring subscription tiers and 6 à la carte microtransactions, compliant with 3DS2 Strong Customer Authentication (SCA).</li>
                  <li><strong>Serverless Webhook Architecture:</strong> Developed GCP Cloud Functions (us-central1) to process Stripe webhooks with raw HMAC-SHA256 signature verification and idempotent Firestore synchronization.</li>
                  <li><strong>Self-Service Billing Portal:</strong> Integrated the Stripe Customer Portal API so authenticated users can change plans, download tax invoices, and update payment methods independently.</li>
                  <li><strong>Phone Authentication & Device Verification:</strong> Implemented a custom phone-auth subsystem in Flutter with ITU E.164 formatting; resolved Google Play Integrity attestation failures (missing-client-identifier) via APK signing block (v2/v3) analysis and permanent keystore management.</li>
                  <li><strong>Database Security:</strong> Authored granular Cloud Firestore Security Rules enforcing role-based access control (RBAC), multi-tenant data isolation, and unique phone-number validation.</li>
                </ul>
              </div>

              {/* Thaught Form */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-xs">
                  <span>Thaught Form — AI-Powered Query Classification & Answering Platform</span>
                  <span className="font-normal text-gray-600">May 2026 – Present</span>
                </div>
                <p className="text-[11px] text-gray-600 italic mb-1">
                  MERN Stack, Serper Google Search, Google Knowledge Graph, NLI Models, Gemini API
                </p>
                <ul className="list-disc list-inside text-xs space-y-1 text-gray-800">
                  <li><strong>AI Query Classification:</strong> Developed a MERN web application that classifies user queries into 114 predefined subcategories using 2 Natural Language Inference (NLI) models combined with AI-powered processing.</li>
                  <li><strong>Multi-Source Intelligence:</strong> Integrated Serper Google Search, Google Knowledge Graph, and the Gemini API to retrieve context-rich data and synthesize accurate responses.</li>
                  <li><strong>Confidence-Based Scoring:</strong> Designed an AI-driven pipeline that returns each answer with a confidence score, improving user trust and result verification.</li>
                  <li><strong>Full-Stack Architecture:</strong> Built a responsive React.js frontend and a robust Node.js/Express/MongoDB backend with API-driven communication across the platform.</li>
                </ul>
              </div>

              {/* The Curator */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-xs">
                  <span>The Curator — AI-Powered Blogging & Social Platform</span>
                  <span className="font-normal text-gray-600">April 2026 – May 2026</span>
                </div>
                <p className="text-[11px] text-gray-600 italic mb-1">
                  React.js, Node.js, Express.js, MongoDB, JWT, Cloudinary, Gemini API, OAuth
                </p>
                <ul className="list-disc list-inside text-xs space-y-1 text-gray-800">
                  <li><strong>Full-Stack Architecture:</strong> Built an end-to-end MERN application with JWT authentication, popup-based Google OAuth, and role-based access control (RBAC) for user and admin roles.</li>
                  <li><strong>AI Integration & Media:</strong> Integrated the Google Gemini API for AI-assisted blog content generation and configured Cloudinary for optimized image uploads and cloud delivery.</li>
                  <li><strong>Admin Dashboard:</strong> Developed an admin dashboard with user management, content moderation workflows, and platform analytics.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="mb-4 font-sans">
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1.5 font-serif">
              SKILLS
            </h2>
            <div className="text-xs space-y-1 text-gray-800">
              <p><strong>Languages:</strong> JavaScript (ES6+), Java, Dart, TypeScript, HTML5, CSS3, SQL</p>
              <p><strong>Frontend & Mobile:</strong> React.js, Flutter, FlutterFlow, Bootstrap, Responsive Design</p>
              <p><strong>Backend & Cloud:</strong> Node.js, Express.js, Google Cloud Platform (GCP), Cloud Functions, Cloud Run, REST APIs, JWT, MVC Architecture, Middleware</p>
              <p><strong>Databases:</strong> MongoDB, Cloud Firestore, MySQL, Mongoose</p>
              <p><strong>Payments & Security:</strong> Stripe Live API (3DS2 SCA), Google Play Integrity API, HMAC-SHA256 Verification, Android Keystore (.jks), RBAC</p>
              <p><strong>Tools & AI:</strong> Git, GitHub, Postman, Firebase SDK, Gemini API, NLI Models, Serper API, Axios, Multer, Nodemailer</p>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="mb-4 font-sans">
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1.5 font-serif">
              EDUCATION
            </h2>
            <div className="text-xs space-y-1.5">
              <div className="flex justify-between">
                <span><strong>Chitkara University</strong> — M.C.A. (Master of Computer Application)</span>
                <span>2024 – 2026 | CGPA: 8.45 / 10</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Post Graduate Govt. College (PGGC-11)</strong> — B.C.A.</span>
                <span>2021 – 2024 | 62%</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Kendriya Vidyalaya O.C.F, Sec-29B</strong> — 12th CBSE</span>
                <span>2021 | 79.20%</span>
              </div>
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="font-sans">
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1.5 font-serif">
              ACHIEVEMENTS & POSITIONS OF RESPONSIBILITY
            </h2>
            <ul className="list-disc list-inside text-xs space-y-1 text-gray-800">
              <li>Awarded <strong>2nd Place</strong> in university-wide presentation competition at Chitkara University — demonstrated strong technical communication skills.</li>
              <li><strong>NCC Cadet</strong> — developed discipline, leadership, and teamwork through structured training programs; recognized for commitment to team goals.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
