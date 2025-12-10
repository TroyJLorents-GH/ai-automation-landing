import React from 'react';
import { motion } from 'framer-motion';

const TrustLogos: React.FC = () => {
  const integrations = [
    {
      name: 'Make',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <circle cx="32" cy="32" r="28" fill="#6D00CC"/>
          <path d="M20 24h8v16h-8zM36 24h8v16h-8z" fill="white"/>
        </svg>
      )
    },
    {
      name: 'Zapier',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <path d="M32 0C14.327 0 0 14.327 0 32s14.327 32 32 32 32-14.327 32-32S49.673 0 32 0zm13.5 35h-9l6.4 6.4-3 3L33.5 38v9h-4v-9l-6.4 6.4-3-3 6.4-6.4h-9v-4h9l-6.4-6.4 3-3 6.4 6.4v-9h4v9l6.4-6.4 3 3-6.4 6.4h9v4z" fill="#FF4A00"/>
        </svg>
      )
    },
    {
      name: 'n8n',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <rect width="64" height="64" rx="12" fill="#EA4B71"/>
          <path d="M18 32a6 6 0 1112 0 6 6 0 01-12 0zm16 0a6 6 0 1112 0 6 6 0 01-12 0z" fill="white"/>
          <path d="M30 32h4" stroke="white" strokeWidth="3"/>
        </svg>
      )
    },
    {
      name: 'Slack',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <path d="M22.5 38.5a4 4 0 11-4-4h4v4zm2 0a4 4 0 118 0v10a4 4 0 11-8 0v-10z" fill="#E01E5A"/>
          <path d="M24.5 22.5a4 4 0 114 4h-10a4 4 0 110-8h6v4z" fill="#36C5F0"/>
          <path d="M40.5 24.5a4 4 0 11-4-4v-10a4 4 0 118 0v10a4 4 0 01-4 4z" fill="#2EB67D"/>
          <path d="M38.5 40.5a4 4 0 11-4 4v-4h4zm2 0a4 4 0 118 0 4 4 0 01-4 4h-4v-4z" fill="#ECB22E"/>
        </svg>
      )
    },
    {
      name: 'Airtable',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <path d="M28.3 8.6L6 18.5v27l22.3 9.9 29.7-13.2V15.2L28.3 8.6z" fill="#FCB400"/>
          <path d="M28.3 8.6v37.3L6 36.5V18.5l22.3-9.9z" fill="#18BFFF"/>
          <path d="M28.3 8.6l29.7 6.6v27L28.3 55.4V8.6z" fill="#F82B60"/>
          <path d="M28.3 45.9L6 36.5l22.3-9.9 29.7 6.6-29.7 12.7z" fill="#7C3AED" fillOpacity="0.3"/>
        </svg>
      )
    },
    {
      name: 'Power Apps',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <path d="M8 16l24-8 24 8v32l-24 8-24-8V16z" fill="#742774"/>
          <path d="M32 8l24 8v32l-24 8V8z" fill="#9B3D9B"/>
          <path d="M22 28l10 4 10-4v12l-10 4-10-4V28z" fill="white"/>
        </svg>
      )
    },
    {
      name: 'SharePoint',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <circle cx="32" cy="24" r="16" fill="#036C70"/>
          <circle cx="24" cy="36" r="12" fill="#1A9BA1"/>
          <circle cx="40" cy="40" r="10" fill="#37C6D0"/>
        </svg>
      )
    },
    {
      name: 'Google Workspace',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <path d="M32 12c-11 0-20 9-20 20s9 20 20 20c10 0 18.5-7 19.8-16H32v-8h28c.3 1.3.5 2.6.5 4 0 13.3-10.7 24-24 24S12 45.3 12 32 22.7 8 36 8c6 0 11.5 2.2 15.7 5.8l-6 6C42.7 17 38.5 15 34 15c-9.4 0-17 7.6-17 17s7.6 17 17 17c8.2 0 15-5.8 16.5-13.5H32v-8h27.8c.1 1.2.2 2.3.2 3.5 0 13.3-10.7 24-24 24S8 45.3 8 32 18.7 8 32 8z" fill="#4285F4"/>
          <path d="M12 32c0-8.3 5-15.4 12-18.5v37C17 47.4 12 40.3 12 32z" fill="#34A853"/>
          <path d="M32 52c-5.2 0-10-2-13.5-5.2l6-6c2.1 1.6 4.7 2.5 7.5 2.5 4.1 0 7.8-1.7 10.5-4.5l6 6C44.5 49.5 38.5 52 32 52z" fill="#FBBC05"/>
          <path d="M52 32c0 2.8-.6 5.5-1.6 8H32v-8h20z" fill="#EA4335"/>
        </svg>
      )
    },
    {
      name: 'Microsoft 365',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <rect x="8" y="8" width="22" height="22" fill="#F25022"/>
          <rect x="34" y="8" width="22" height="22" fill="#7FBA00"/>
          <rect x="8" y="34" width="22" height="22" fill="#00A4EF"/>
          <rect x="34" y="34" width="22" height="22" fill="#FFB900"/>
        </svg>
      )
    },
    {
      name: 'OpenAI',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <circle cx="32" cy="32" r="28" fill="#10A37F"/>
          <path d="M32 16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z" fill="white"/>
          <path d="M32 24v16M24 32h16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'Azure',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <path d="M20 12l12 40H12l20-32h12L20 12z" fill="#0089D6"/>
          <path d="M32 52l20-8-8-32L32 52z" fill="#0089D6"/>
          <path d="M32 52l12-40h8L32 52z" fill="#50E6FF"/>
        </svg>
      )
    },
    {
      name: 'AWS',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <path d="M32 8L8 20v24l24 12 24-12V20L32 8z" fill="#232F3E"/>
          <path d="M32 20l-16 8v8l16 8 16-8v-8l-16-8z" fill="#FF9900"/>
          <path d="M32 28v16l16-8v-8l-16 8z" fill="#FFB74D" fillOpacity="0.7"/>
        </svg>
      )
    },
    {
      name: 'Salesforce',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <path d="M26 16c4-4 10-4 14 0 3-2 7-2 10 1 4 4 4 10 0 14-2 3-2 7-6 9-4 2-9 1-12-2-4 3-10 3-14-1-4-4-4-10 0-14 2-3 2-7 8-7z" fill="#00A1E0"/>
          <path d="M32 26c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" fill="white"/>
        </svg>
      )
    },
    {
      name: 'HubSpot',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <circle cx="32" cy="32" r="28" fill="#FF7A59"/>
          <circle cx="32" cy="32" r="8" fill="white"/>
          <circle cx="32" cy="16" r="4" fill="white"/>
          <circle cx="32" cy="48" r="4" fill="white"/>
          <circle cx="18" cy="24" r="4" fill="white"/>
          <circle cx="46" cy="24" r="4" fill="white"/>
          <circle cx="18" cy="40" r="4" fill="white"/>
          <circle cx="46" cy="40" r="4" fill="white"/>
          <path d="M32 24v-4M32 44v-4M24 28l-4-2M40 28l4-2M24 36l-4 2M40 36l4 2" stroke="white" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'Notion',
      logo: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
          <rect x="12" y="8" width="40" height="48" rx="4" fill="white" stroke="#000" strokeWidth="2"/>
          <path d="M20 16h24M20 24h24M20 32h16M20 40h20" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-indigo-900 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-blue-300 font-medium uppercase tracking-wider text-sm mb-2">
            Trusted Integrations
          </p>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
            We Connect With Your Favorite Tools
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {integrations.map((integration) => (
            <motion.div
              key={integration.name}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -5 }}
              className="group relative"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:border-blue-400/50 hover:bg-white/20 transition-all duration-300 cursor-pointer p-3">
                {integration.logo}
              </div>
              {/* Tooltip */}
              <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <span className="text-xs text-white/80 whitespace-nowrap bg-black/50 px-2 py-1 rounded">
                  {integration.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '50+', label: 'Integrations' },
            { value: '100+', label: 'Businesses Served' },
            { value: '5K+', label: 'Hours Saved Monthly' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-display">
                {stat.value}
              </div>
              <div className="text-blue-300/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustLogos;
