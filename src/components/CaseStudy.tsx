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
                  Local Dental Practice Saves 25 Hours Per Week
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A busy dental practice with 35 employees was drowning in appointment scheduling,
                  patient follow-ups, and insurance verification calls. Their front desk staff was
                  overwhelmed, leading to long wait times and frustrated patients.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Automated Scheduling</h4>
                      <p className="text-gray-600 text-sm">AI handles 80% of appointment bookings and reminders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Patient Follow-ups</h4>
                      <p className="text-gray-600 text-sm">Automated post-appointment emails and satisfaction surveys</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Insurance Verification</h4>
                      <p className="text-gray-600 text-sm">Automated insurance checks before appointments</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-600 italic mb-4">
                    "This has been transformative for our practice. Our staff can now focus on
                    providing excellent patient care instead of being stuck on the phone all day.
                    Patient satisfaction is up, and we're seeing fewer no-shows."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      DM
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Dr. Michael Chen</div>
                      <div className="text-sm text-gray-600">Practice Owner</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Results After 3 Months</h4>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="text-4xl font-bold text-green-600 mb-1">25 hrs</div>
                      <div className="text-gray-700 font-medium">Saved per week</div>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="text-4xl font-bold text-blue-600 mb-1">40%</div>
                      <div className="text-gray-700 font-medium">Reduction in no-shows</div>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="text-4xl font-bold text-purple-600 mb-1">95%</div>
                      <div className="text-gray-700 font-medium">Patient satisfaction</div>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <div className="text-4xl font-bold text-orange-600 mb-1">$2,800</div>
                      <div className="text-gray-700 font-medium">Monthly cost savings</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold mb-2">ROI: 350%</div>
                  <div className="text-green-100">First-year return on investment</div>
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
