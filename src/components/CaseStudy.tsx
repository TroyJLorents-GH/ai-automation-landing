import React from 'react';
import { motion } from 'framer-motion';

const CaseStudy: React.FC = () => {
  const stats = [
    { value: '80%', label: 'Workload reduction', detail: '200-280 hrs → 40-56 hrs', color: 'green' },
    { value: '900', label: 'Offer letters automated', detail: 'Each semester, automatically', color: 'blue' },
    { value: '$25K', label: 'Saved from errors', detail: 'Caught overpayment issues', color: 'purple' },
    { value: '$50K', label: 'Saved annually on staffing', detail: 'No additional hires needed', color: 'orange' },
  ];

  const colorClasses: Record<string, string> = {
    green: 'border-green-500 text-green-600',
    blue: 'border-blue-500 text-blue-600',
    purple: 'border-purple-500 text-purple-600',
    orange: 'border-orange-500 text-orange-600',
  };

  return (
    <section id="casestudy" className="pt-16 pb-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
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
            className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4"
          >
            Case Study
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses like yours save time and increase efficiency
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Case Study Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden shadow-xl border border-slate-100"
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left: Story */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    SUCCESS STORY
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                    Arizona State University HR: 80% Workload Reduction
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Fulton Schools of Engineering, ASU's largest school, processes 900+ student offer letters
                    each semester. Their HR team was spending 200-280 hours manually creating documents,
                    checking for errors, and managing the hiring workflow.
                  </p>

                  {/* Solutions implemented */}
                  <div className="space-y-4 mb-8">
                    {[
                      { title: 'Document Automation', desc: 'Adobe Sign & DocuSign integration for automated offer letter generation' },
                      { title: 'Real-Time Dashboard', desc: 'Live tracking of student hiring status with automated manager notifications' },
                      { title: 'Automated Reports & Storage', desc: 'Form fields auto-saved to reports with organized folder structures' },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          ✓
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <svg className="w-8 h-8 text-blue-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic mb-4 text-sm leading-relaxed">
                    "Working for the largest school within Arizona State University, we send out 900 student
                    offer letters each semester. Troy automated the entire hiring process with the click of a
                    button. This process used to take 200-280 hours—after the automation, our workload was cut by 80%."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      MS
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Maddie S.</div>
                      <div className="text-xs text-gray-500">HR Manager, Arizona State University</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right: Stats */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-8 rounded-2xl shadow-lg mb-6"
                >
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-display font-bold text-gray-900">Measurable Results</h4>
                  </div>
                  <div className="space-y-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className={`border-l-4 ${colorClasses[stat.color]} pl-4`}
                      >
                        <div className="text-3xl md:text-4xl font-display font-bold mb-1">
                          {stat.value}
                        </div>
                        <div className="text-gray-700 font-medium">{stat.label}</div>
                        <div className="text-sm text-gray-500 mt-0.5">{stat.detail}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Total Savings */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl text-center shadow-lg"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold mb-1">$75K+ Total Savings</div>
                  <div className="text-green-100">Annual cost reduction from automation</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { value: '100+', label: 'Businesses Automated' },
              { value: '5,000+', label: 'Hours Saved Monthly' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '2 weeks', label: 'Average Setup Time' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-all"
              >
                <div className="text-2xl md:text-3xl font-display font-bold text-blue-600 mb-1">
                  {item.value}
                </div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
