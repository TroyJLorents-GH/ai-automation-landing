import React from 'react';
import { motion } from 'framer-motion';

const TrustLogos: React.FC = () => {
  const integrations = [
    { name: 'Make', logo: '/logos/Make_logo_1.svg' },
    { name: 'Zapier', logo: '/logos/zapier-icon-svgrepo-com.svg' },
    { name: 'n8n', logo: '/logos/n8n_pink+white_logo.svg' },
    { name: 'Slack', logo: '/logos/Slack_icon_2019.svg' },
    { name: 'Airtable', logo: '/logos/airtable-ar21~bgwhite.svg' },
    { name: 'Power Apps', logo: '/logos/Powerapps-logo.svg' },
    { name: 'Power Automate', logo: '/logos/microsoft-power-automate.svg' },
    { name: 'SharePoint', logo: '/logos/ms-sharepoint-svgrepo-com.svg' },
    { name: 'Microsoft 365', logo: '/logos/microsoft-logo.svg' },
    { name: 'Copilot', logo: '/logos/microsoft-copilot.svg' },
    { name: 'OpenAI', logo: '/logos/openai-svgrepo-com.svg' },
    { name: 'Azure', logo: '/logos/Microsoft_Azure-brandlogos.net.svg' },
    { name: 'AWS', logo: '/logos/aws-svgrepo-com.svg' },
    { name: 'Salesforce', logo: '/logos/Salesforce.com_logo.svg' },
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
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
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
