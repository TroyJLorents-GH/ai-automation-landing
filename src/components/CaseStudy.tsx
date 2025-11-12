import React from 'react';

const CaseStudy: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses like yours save time and increase efficiency
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div>
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-4">
                  SUCCESS STORY
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Arizona State University HR: 80% Workload Reduction
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Fulton Schools of Engineering, ASU's largest school, processes 900+ student offer letters
                  each semester. Their HR team was spending 200-280 hours manually creating documents,
                  checking for errors, and managing the hiring workflow.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Document Automation</h4>
                      <p className="text-gray-600 text-sm">Adobe Sign & DocuSign integration for automated offer letter generation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Real-Time Dashboard</h4>
                      <p className="text-gray-600 text-sm">Live tracking of student hiring status with automated manager notifications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Automated Reports & Storage</h4>
                      <p className="text-gray-600 text-sm">Form fields auto-saved to reports with organized folder structures</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-600 italic mb-4">
                    "Working for the largest school within Arizona State University, we send out 900 student
                    offer letters each semester. Troy automated the entire hiring process with the click of a
                    button. Offer letters are generated with the correct information—spelling and numeric errors
                    are no longer an issue—and sent out automatically once completed. The offer letters are saved
                    into specific folder structures and database reports. All managers receive multiple automated,
                    tailored emails. Troy created an HR dashboard that's updated in real time, showing the current
                    status of where each student is in the hiring process. Reports that once took weeks, if not
                    months, to put together can now be downloaded at any point. This process used to take 200-280
                    hours—after the automation, our workload was cut by 80%."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      MS
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Maddie S.</div>
                      <div className="text-sm text-gray-600">HR Manager, Arizona State University</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Measurable Results</h4>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="text-4xl font-bold text-green-600 mb-1">80%</div>
                      <div className="text-gray-700 font-medium">Workload reduction per semester</div>
                      <div className="text-sm text-gray-500 mt-1">200-280 hrs → 40-56 hrs</div>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="text-4xl font-bold text-blue-600 mb-1">900</div>
                      <div className="text-gray-700 font-medium">Offer letters automated</div>
                      <div className="text-sm text-gray-500 mt-1">Each semester, automatically</div>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="text-4xl font-bold text-purple-600 mb-1">$25K</div>
                      <div className="text-gray-700 font-medium">Saved from error prevention</div>
                      <div className="text-sm text-gray-500 mt-1">Caught overpayment issues</div>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <div className="text-4xl font-bold text-orange-600 mb-1">$50K</div>
                      <div className="text-gray-700 font-medium">Saved annually on staffing</div>
                      <div className="text-sm text-gray-500 mt-1">No additional hires needed</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold mb-2">$75K+ Total Savings</div>
                  <div className="text-green-100">Annual cost reduction from automation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-700">Businesses Automated</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-700">Hours Saved Monthly</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-700">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
