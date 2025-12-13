import React from 'react';
import { motion } from 'framer-motion';

const TrustLogos: React.FC = () => {
  const integrations = [
    { name: 'Zapier', logo: '/logos/zapier-icon-svgrepo-com.svg' },
    { name: 'Make', logo: '/logos/Make_logo_1.svg' },
    { name: 'n8n', logo: '/logos/n8n_pink+white_logo.svg' },
    { name: 'Slack', logo: '/logos/Slack_icon_2019.svg' },
    { name: 'Azure', logo: '/logos/Microsoft_Azure-brandlogos.net.svg' },
    { name: 'Power Apps', logo: '/logos/Powerapps-logo.svg' },
    { name: 'Microsoft Teams', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg' },
    { name: 'Google', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { name: 'Microsoft 365', logo: '/logos/microsoft-logo.svg' },
    { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg' },
    { name: 'Salesforce', logo: '/logos/Salesforce.com_logo.svg' },
    { name: 'Airtable', logo: '/logos/airtable-ar21~bgwhite.svg' },
    { name: 'QuickBooks', logo: 'https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg' },
    { name: 'DocuSign', logo: '/logos/DocuSign_Logo_0.svg' },
    { name: 'AWS', logo: '/logos/aws-svgrepo-com.svg' },
  ];

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

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden py-6"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-indigo-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10" />

          {/* Scrolling logos - using inline style for proper width calculation */}
          <div
            className="flex"
            style={{
              animation: 'marquee 40s linear infinite',
              width: 'fit-content',
            }}
          >
            {/* First set of logos */}
            <div className="flex shrink-0 items-center gap-8 px-4">
              {integrations.map((tool) => (
                <div
                  key={`first-${tool.name}`}
                  className="flex-shrink-0 group relative"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:border-blue-400/50 hover:bg-white/20 transition-all duration-300 p-3">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span className="text-xs text-white/80 whitespace-nowrap bg-black/50 px-2 py-1 rounded">
                      {tool.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Second set of logos (duplicate for seamless loop) */}
            <div className="flex shrink-0 items-center gap-8 px-4">
              {integrations.map((tool) => (
                <div
                  key={`second-${tool.name}`}
                  className="flex-shrink-0 group relative"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:border-blue-400/50 hover:bg-white/20 transition-all duration-300 p-3">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span className="text-xs text-white/80 whitespace-nowrap bg-black/50 px-2 py-1 rounded">
                      {tool.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
