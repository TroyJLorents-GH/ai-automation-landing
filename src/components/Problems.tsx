import React from 'react';
import { motion } from 'framer-motion';

const Problems: React.FC = () => {
  const problems = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Drowning in Repetitive Tasks",
      description: "Your team spends hours each day on data entry, responding to the same customer questions, and managing appointments manually. Time that could be spent growing your business.",
      stat: "20+ hrs/week",
      statLabel: "wasted on repetitive tasks"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Costly Human Errors",
      description: "Manual processes lead to mistakes in data entry, missed appointments, and inconsistent customer responses. Each error costs time and money to fix.",
      stat: "$10K+",
      statLabel: "lost annually to errors"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Slow Response Times",
      description: "Customers wait hours or days for responses to simple questions. In today's world, slow service means lost business to faster competitors.",
      stat: "60%",
      statLabel: "expect response in <1 hour"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Can't Scale Without Hiring",
      description: "Every time you want to grow, you need to hire more people for repetitive tasks. This limits your growth and eats into your profits.",
      stat: "$45K+",
      statLabel: "avg cost per new hire"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="problems" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4"
          >
            The Problem
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Sound Familiar?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These common pain points are holding your business back from reaching its full potential
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-100"
            >
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-300">
                    {problem.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {problem.description}
                  </p>

                  {/* Stat */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-lg">
                    <span className="text-lg font-bold text-red-600">{problem.stat}</span>
                    <span className="text-sm text-red-600/70">{problem.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Solution teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white shadow-lg">
            <span className="font-medium">Ready to solve these problems?</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;
