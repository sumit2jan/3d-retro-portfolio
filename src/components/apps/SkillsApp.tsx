import React, { useState } from 'react';
import { Cpu, Database, Code, Wrench, Sparkles, Terminal, Activity, ShieldCheck, Smartphone, Cloud } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  level: number;
  skills: { name: string; level: number; highlight?: boolean }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Core Languages',
    icon: <Code className="w-4 h-4 text-blue-600" />,
    level: 92,
    skills: [
      { name: 'JavaScript (ES6+)', level: 94, highlight: true },
      { name: 'TypeScript', level: 90, highlight: true },
      { name: 'Java (OOP & DSA)', level: 88, highlight: true },
      { name: 'Dart', level: 88, highlight: true },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    category: 'Frontend & Mobile',
    icon: <Smartphone className="w-4 h-4 text-purple-600" />,
    level: 91,
    skills: [
      { name: 'React.js', level: 94, highlight: true },
      { name: 'Flutter (Cross-Platform Mobile)', level: 90, highlight: true },
      { name: 'FlutterFlow', level: 86 },
      { name: 'Bootstrap / Tailwind CSS', level: 90 },
      { name: 'Responsive UI/UX Design', level: 92 },
    ],
  },
  {
    category: 'Backend & Cloud',
    icon: <Cloud className="w-4 h-4 text-emerald-600" />,
    level: 90,
    skills: [
      { name: 'Node.js & Express.js', level: 92, highlight: true },
      { name: 'Google Cloud Platform (GCP)', level: 88, highlight: true },
      { name: 'GCP Cloud Functions (Serverless)', level: 90, highlight: true },
      { name: 'Cloud Run', level: 84 },
      { name: 'RESTful API Architecture', level: 92 },
      { name: 'JWT Authentication & Middleware', level: 90 },
    ],
  },
  {
    category: 'Databases & Storage',
    icon: <Database className="w-4 h-4 text-amber-600" />,
    level: 89,
    skills: [
      { name: 'MongoDB', level: 92, highlight: true },
      { name: 'Cloud Firestore (NoSQL)', level: 90, highlight: true },
      { name: 'Mongoose ODM', level: 90 },
      { name: 'MySQL', level: 84 },
    ],
  },
  {
    category: 'Payments & Security',
    icon: <ShieldCheck className="w-4 h-4 text-rose-600" />,
    level: 90,
    skills: [
      { name: 'Stripe Live API (3DS2 SCA)', level: 92, highlight: true },
      { name: 'HMAC-SHA256 Webhook Verification', level: 92, highlight: true },
      { name: 'Google Play Integrity API', level: 88, highlight: true },
      { name: 'Android Keystore (.jks) & Signing', level: 86 },
      { name: 'Role-Based Access Control (RBAC)', level: 90 },
    ],
  },
  {
    category: 'AI & Developer Tools',
    icon: <Sparkles className="w-4 h-4 text-cyan-600" />,
    level: 90,
    skills: [
      { name: 'Google Gemini API', level: 92, highlight: true },
      { name: 'NLI Inference Models', level: 86, highlight: true },
      { name: 'Serper Search API', level: 88 },
      { name: 'Firebase SDK Suite', level: 90 },
      { name: 'Git & GitHub Workflows', level: 92 },
      { name: 'Postman, Axios, Multer, Nodemailer', level: 90 },
    ],
  },
];

export const SkillsApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="h-full flex flex-col bg-[#c0c0c0] p-3 text-black text-xs font-sans select-text">
      {/* Header Banner */}
      <div className="win-inset bg-black text-green-400 font-mono p-2.5 mb-2.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <span>DIAGNOSTICS://SUMIT_SINGH/FULLSTACK_MOBILE_CLOUD</span>
        </div>
        <div className="flex items-center space-x-2 text-[10px]">
          <Activity className="w-3.5 h-3.5 text-green-400 animate-pulse" />
          <span>STATUS: ONLINE (100% OPERATIONAL)</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 border-b border-gray-400 px-1 mb-2 overflow-x-auto">
        {skillGroups.map((group, idx) => (
          <button
            key={group.category}
            onClick={() => setActiveTab(idx)}
            className={`px-2.5 py-1 text-[11px] font-bold rounded-t flex items-center space-x-1.5 flex-shrink-0 ${
              activeTab === idx
                ? 'win-outset bg-[#c0c0c0] -mb-px pb-1.5 text-[#000080]'
                : 'bg-[#b0b0b0] text-gray-700 hover:bg-[#b8b8b8]'
            }`}
          >
            {group.icon}
            <span>{group.category}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Panel */}
      <div className="flex-1 win-inset bg-white p-3.5 overflow-y-auto">
        <div className="flex items-center justify-between mb-3 border-b pb-2">
          <h2 className="text-sm font-bold text-[#000080] flex items-center">
            {skillGroups[activeTab].icon}
            <span className="ml-1.5">{skillGroups[activeTab].category}</span>
          </h2>
          <span className="font-mono text-xs bg-blue-50 text-blue-900 border border-blue-200 px-2 py-0.5 rounded">
            Proficiency Rating: {skillGroups[activeTab].level}%
          </span>
        </div>

        {/* Skills List with Progress Meters */}
        <div className="space-y-3">
          {skillGroups[activeTab].skills.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className={`font-semibold flex items-center ${skill.highlight ? 'text-blue-950 font-bold' : 'text-gray-800'}`}>
                  {skill.highlight && <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-1.5"></span>}
                  {skill.name}
                </span>
                <span className="font-mono text-gray-500 text-[11px]">{skill.level}%</span>
              </div>
              {/* Retro segmented progress bar */}
              <div className="h-4 win-inset bg-gray-200 p-0.5 flex">
                <div
                  className="h-full bg-gradient-to-r from-blue-700 to-indigo-600 flex items-center justify-end pr-1 text-[9px] text-white font-mono"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-2 text-[11px] text-gray-600 flex justify-between items-center px-1 font-mono">
        <span>Stack: MERN • Flutter • GCP • Stripe Live</span>
        <span>Environment: Production-Grade Cloud & Mobile</span>
      </div>
    </div>
  );
};
