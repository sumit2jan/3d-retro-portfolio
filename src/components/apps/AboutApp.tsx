import React from 'react';
import { Mail, Phone, MapPin, Award, GraduationCap, Briefcase, ShieldCheck } from 'lucide-react';

export const AboutApp: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-4 bg-[#c0c0c0] text-black overflow-y-auto text-sm font-sans select-text">
      {/* Top Banner */}
      <div className="win-inset bg-white p-4 mb-4 flex items-center space-x-4">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white font-bold text-3xl win-outset shadow-md flex-shrink-0">
          SS
        </div>
        <div>
          <h1 className="text-xl font-bold text-[#000080] tracking-wide">SUMIT SINGH</h1>
          <p className="font-semibold text-gray-700">Software Developer Intern</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 mt-1">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-red-600" /> Chandigarh, India</span>
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1 text-green-700" /> +91-8544972768</span>
            <span className="flex items-center"><Mail className="w-3 h-3 mr-1 text-blue-700" /> rajputsumit2815@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="win-outset bg-[#dfdfdf] p-3 mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-1 flex items-center">
          <span className="w-2 h-2 bg-[#000080] inline-block mr-2"></span>Professional Summary
        </h2>
        <p className="text-xs leading-relaxed text-gray-800">
          Software Developer with hands-on experience building secure, production-grade web and cloud applications. Proven track record in full-stack MERN development, serverless cloud architecture (GCP/Firebase), secure payment infrastructure (Stripe Live with 3DS2), and AI-driven systems. Strong Java and algorithmic foundation, with a focus on clean architecture, system reliability, and performance optimization.
        </p>
      </div>

      {/* Experience History */}
      <div className="win-outset bg-[#dfdfdf] p-3 mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center">
          <Briefcase className="w-3.5 h-3.5 mr-1.5 text-[#000080]" /> Work Experience
        </h2>
        
        <div className="space-y-3">
          {/* Ducktale IT Services */}
          <div className="bg-white p-3 win-inset">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-sm text-[#000080]">Ducktale IT Services</h3>
              <span className="text-xs text-gray-600 font-mono">May 2026 – Present</span>
            </div>
            <p className="text-xs font-semibold text-gray-700 italic mb-1.5">Software Developer Intern • Chandigarh, India</p>
            <ul className="list-disc list-inside text-xs space-y-1 text-gray-800">
              <li><strong>Full-Stack Development:</strong> Design, build, and maintain full-stack web modules using React.js and Node.js/Express, optimizing server-side workflows and business logic for production environments.</li>
              <li><strong>API Design & Middleware:</strong> Develop RESTful services with custom Express middleware for request validation, error handling, and security; optimize MongoDB aggregation pipelines for faster query processing.</li>
              <li><strong>Frontend Systems & Performance:</strong> Build modular, reusable React.js component hierarchies with centralized state management and custom hooks, improving rendering performance and UI consistency.</li>
              <li><strong>Delivery & Reliability:</strong> Work in agile sprint cycles, participate in peer code reviews, debug production issues, and maintain Git/GitHub deployment workflows to ensure dependable releases.</li>
            </ul>
          </div>

          {/* iApp Technologies LLP */}
          <div className="bg-white p-3 win-inset">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-sm text-[#000080]">iApp Technologies LLP</h3>
              <span className="text-xs text-gray-600 font-mono">Dec 2025 – May 2026</span>
            </div>
            <p className="text-xs font-semibold text-gray-700 italic mb-1.5">Full Stack Developer Intern • Chandigarh, India</p>
            <ul className="list-disc list-inside text-xs space-y-1 text-gray-800">
              <li><strong>MERN Stack:</strong> Engineered full-stack web applications with MongoDB, Express.js, React.js, and Node.js; built reusable UI components with dynamic dashboards, search, and pagination supporting 100+ concurrent users.</li>
              <li><strong>API & Authentication:</strong> Designed RESTful APIs powering 5+ secure client-server flows; implemented JWT authentication with role-based access control and protected routes, reducing unauthorized-access risk.</li>
              <li><strong>Database Design:</strong> Modeled optimized MongoDB schemas with Mongoose, managing 500+ records with efficient queries, well-defined relationships, and a scalable data layer.</li>
              <li><strong>Version Control & Optimization:</strong> Used Git and GitHub across 10+ collaborative workflows; improved application response time by ~30% through query optimization and debugging.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education & Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
        {/* Education */}
        <div className="win-outset bg-[#dfdfdf] p-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center">
            <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-[#000080]" /> Education
          </h2>
          <div className="space-y-2 text-xs">
            <div className="bg-white p-2.5 win-inset">
              <p className="font-bold text-[#000080]">Chitkara University</p>
              <p className="text-gray-700">M.C.A. (Master of Computer Application)</p>
              <div className="flex justify-between text-gray-500 font-mono mt-1">
                <span>2024 – 2026</span>
                <span className="font-bold text-green-700">CGPA: 8.45 / 10</span>
              </div>
            </div>
            <div className="bg-white p-2.5 win-inset">
              <p className="font-bold text-[#000080]">Post Graduate Govt. College (PGGC-11)</p>
              <p className="text-gray-700">B.C.A. (Bachelor of Computer Application)</p>
              <div className="flex justify-between text-gray-500 font-mono mt-1">
                <span>2021 – 2024</span>
                <span className="font-bold text-green-700">Score: 62%</span>
              </div>
            </div>
            <div className="bg-white p-2.5 win-inset">
              <p className="font-bold text-[#000080]">Kendriya Vidyalaya O.C.F, Sec-29B</p>
              <p className="text-gray-700">12th — CBSE</p>
              <div className="flex justify-between text-gray-500 font-mono mt-1">
                <span>2021</span>
                <span className="font-bold text-green-700">Score: 79.20%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Honors & Responsibility */}
        <div className="win-outset bg-[#dfdfdf] p-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center">
            <Award className="w-3.5 h-3.5 mr-1.5 text-[#000080]" /> Honors & Responsibility
          </h2>
          <div className="space-y-2 text-xs">
            <div className="bg-white p-2.5 win-inset">
              <p className="font-bold text-[#000080] flex items-center">
                🥈 2nd Place Presentation Competition
              </p>
              <p className="text-gray-700 mt-1 leading-relaxed">
                Awarded 2nd Place in university-wide presentation competition at Chitkara University — demonstrated strong technical communication skills.
              </p>
            </div>
            <div className="bg-white p-2.5 win-inset">
              <p className="font-bold text-[#000080] flex items-center">
                🎖️ NCC Cadet
              </p>
              <p className="text-gray-700 mt-1 leading-relaxed">
                Developed discipline, leadership, and teamwork through structured training programs; recognized for commitment to team goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
