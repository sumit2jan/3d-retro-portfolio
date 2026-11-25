import React, { useState } from 'react';
import { Folder, ExternalLink, Github, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: string;
  tags: string[];
  points: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 'chekers-vip',
    title: 'Chekers VIP',
    subtitle: 'Enterprise Mobile & Cloud Payment Engine',
    period: 'June 2026 – Present',
    category: 'Mobile / Cloud / FinTech',
    tags: [
      'Flutter',
      'Dart',
      'Firebase',
      'Stripe API',
      'Google Cloud Platform (GCP)',
      'Cloud Functions',
      '3DS2 SCA',
      'HMAC-SHA256',
      'Play Integrity API'
    ],
    points: [
      'Production Payment Engine: Built an end-to-end Stripe Live payment system supporting 3 recurring subscription tiers and 6 à la carte microtransactions, compliant with 3DS2 Strong Customer Authentication (SCA).',
      'Serverless Webhook Architecture: Developed GCP Cloud Functions (us-central1) to process Stripe webhooks with raw HMAC-SHA256 signature verification and idempotent Firestore synchronization.',
      'Self-Service Billing Portal: Integrated the Stripe Customer Portal API so authenticated users can change plans, download tax invoices, and update payment methods independently.',
      'Phone Authentication & Device Verification: Implemented a custom phone-auth subsystem in Flutter with ITU E.164 formatting; resolved Google Play Integrity attestation failures (missing-client-identifier) via APK signing block (v2/v3) analysis and permanent keystore management.',
      'Database Security: Authored granular Cloud Firestore Security Rules enforcing role-based access control (RBAC), multi-tenant data isolation, and unique phone-number validation.'
    ],
    githubUrl: 'https://github.com/'
  },
  {
    id: 'thaught-form',
    title: 'Thaught Form',
    subtitle: 'AI-Powered Query Classification & Answering Platform',
    period: 'May 2026 – Present',
    category: 'AI / Full Stack MERN',
    tags: [
      'MERN Stack',
      'Gemini API',
      'NLI Models',
      'Google Knowledge Graph',
      'Serper Google Search',
      'MongoDB'
    ],
    points: [
      'AI Query Classification: Developed a MERN web application that classifies user queries into 114 predefined subcategories using 2 Natural Language Inference (NLI) models combined with AI-powered processing.',
      'Multi-Source Intelligence: Integrated Serper Google Search, Google Knowledge Graph, and the Gemini API to retrieve context-rich data and synthesize accurate responses.',
      'Confidence-Based Scoring: Designed an AI-driven pipeline that returns each answer with a confidence score, improving user trust and result verification.',
      'Full-Stack Architecture: Built a responsive React.js frontend and a robust Node.js/Express/MongoDB backend with API-driven communication across the platform.'
    ],
    githubUrl: 'https://github.com/'
  },
  {
    id: 'the-curator',
    title: 'The Curator',
    subtitle: 'AI-Powered Blogging & Social Platform',
    period: 'April 2026 – May 2026',
    category: 'Full Stack Web / Social',
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Cloudinary',
      'Gemini API',
      'OAuth'
    ],
    points: [
      'Full-Stack Architecture: Built an end-to-end MERN application with JWT authentication, popup-based Google OAuth, and role-based access control (RBAC) for user and admin roles.',
      'AI Integration & Media: Integrated the Google Gemini API for AI-assisted blog content generation and configured Cloudinary for optimized image uploads and cloud delivery.',
      'Admin Dashboard: Developed an admin dashboard with user management, content moderation workflows, and platform analytics.'
    ],
    githubUrl: 'https://github.com/'
  }
];

export const ProjectsApp: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <div className="h-full flex flex-col bg-[#c0c0c0] p-2 text-black text-xs font-sans select-text">
      {/* Top Explorer Address Bar */}
      <div className="win-outset bg-[#dfdfdf] p-2 mb-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Folder className="w-4 h-4 text-amber-600" />
          <span className="font-bold text-gray-800">C:\Sumit\Projects</span>
        </div>
        <span className="text-gray-600 font-mono text-[11px]">{projects.length} Object(s)</span>
      </div>

      {/* Main split view */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 overflow-hidden">
        {/* Left Project List */}
        <div className="win-inset bg-white p-2 overflow-y-auto space-y-1.5 md:col-span-1">
          {projects.map((proj) => {
            const isSelected = selectedProject.id === proj.id;
            return (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`p-2.5 cursor-pointer flex flex-col space-y-1 border ${
                  isSelected
                    ? 'bg-[#000080] text-white border-[#000080]'
                    : 'bg-gray-50 hover:bg-blue-100 text-gray-900 border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-1.5 font-bold">
                  {proj.id === 'chekers-vip' ? (
                    <Zap className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? 'text-yellow-300' : 'text-amber-500'}`} />
                  ) : (
                    <Folder className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? 'text-amber-300' : 'text-amber-500'}`} />
                  )}
                  <span className="truncate">{proj.title}</span>
                </div>
                <div className={`text-[10px] ${isSelected ? 'text-blue-200' : 'text-gray-500'} flex justify-between`}>
                  <span>{proj.category}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Details Panel */}
        <div className="win-inset bg-white p-4 overflow-y-auto md:col-span-2 flex flex-col">
          <div className="border-b border-gray-300 pb-2.5 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-base font-bold text-[#000080] flex items-center">
                  <Sparkles className="w-4 h-4 mr-1.5 text-amber-500" />
                  {selectedProject.title}
                </h2>
                <p className="font-semibold text-gray-700">{selectedProject.subtitle}</p>
              </div>
              <span className="font-mono text-gray-600 text-[11px] bg-gray-100 px-2 py-0.5 rounded border border-gray-300 flex-shrink-0">
                {selectedProject.period}
              </span>
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-1 mt-2.5">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-50 text-blue-900 border border-blue-200 px-1.5 py-0.5 text-[10px] font-mono rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements/Highlights */}
          <div className="flex-1">
            <h3 className="font-bold text-gray-700 uppercase tracking-wide text-[11px] mb-2 flex items-center">
              <Layers className="w-3.5 h-3.5 mr-1 text-[#000080]" /> Technical Implementation & Architecture:
            </h3>
            <ul className="space-y-2 pl-1">
              {selectedProject.points.map((pt, idx) => (
                <li key={idx} className="flex items-start text-gray-800 leading-relaxed text-xs">
                  <span className="text-[#000080] font-bold mr-2 mt-0.5">›</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions / Links */}
          <div className="mt-4 pt-3 border-t border-gray-200 flex space-x-2">
            {selectedProject.demoUrl && (
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="win-button px-3 py-1 font-bold text-xs flex items-center text-blue-900 hover:bg-gray-200"
              >
                <ExternalLink className="w-3 h-3 mr-1 text-green-700" /> View Live Demo
              </a>
            )}
            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="win-button px-3 py-1 font-bold text-xs flex items-center text-gray-900 hover:bg-gray-200"
              >
                <Github className="w-3 h-3 mr-1" /> View Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
