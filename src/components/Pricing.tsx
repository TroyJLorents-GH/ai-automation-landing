import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$500",
      description: "Perfect for small teams just getting started with automation",
      features: [
        "1 automation workflow",
        "Up to 500 tasks/month",
        "Email support",
        "Basic analytics",
        "Integration with 3 tools",
        "Setup & training included"
      ],
      highlighted: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$800",
      description: "Ideal for growing businesses ready to scale automation",
      features: [
        "Up to 3 automation workflows",
        "Up to 2,000 tasks/month",
        "Priority email & chat support",
        "Advanced analytics & reporting",
        "Integration with 10 tools",
        "Dedicated account manager",
        "Monthly optimization reviews",
        "Custom workflow design"
      ],
      highlighted: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For businesses that need comprehensive automation solutions",
      features: [
        "Unlimited automation workflows",
        "Unlimited tasks",
        "24/7 priority support",
        "Custom analytics dashboard",
        "Unlimited tool integrations",
        "Dedicated automation team",
        "Weekly optimization & strategy",
        "Custom AI model training",
        "SLA guarantee"
      ],
      highlighted: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include setup, training, and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl transform scale-105 relative'
                  : 'bg-white text-gray-900 shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-lg rounded-tr-2xl font-bold text-sm">
                  BEST VALUE
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-2">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-blue-600'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className={`ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                      /month
                    </span>
                  )}
                </div>
                <p className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className={`w-6 h-6 flex-shrink-0 ${plan.highlighted ? 'text-green-300' : 'text-green-500'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? 'text-blue-50' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Not sure which plan is right for you?</h3>
              <p className="text-blue-100 mb-4">
                Book a free consultation and we'll help you find the perfect automation solution for your business.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-blue-100">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No obligation consultation</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Custom pricing available</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
