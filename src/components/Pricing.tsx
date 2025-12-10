import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe - you'll set this in your environment variables
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

interface Plan {
  name: string;
  price: string;
  priceId: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  isCustom?: boolean;
  monthlyPrice?: string;
}

interface AgentPlan {
  name: string;
  priceId: string;
  buildPrice: string;
  monthlyPrice: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  isCustom?: boolean;
}

const Pricing: React.FC = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'automation' | 'agents' | 'custom'>('automation');

  const automationPlans: Plan[] = [
    {
      name: "Starter",
      price: "$500",
      priceId: "starter",
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
      priceId: "professional",
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
      priceId: "enterprise",
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
      cta: "Contact Sales",
      isCustom: true
    }
  ];

  const agentPlans: AgentPlan[] = [
    {
      name: "Lite",
      priceId: "agent_lite",
      buildPrice: "$500",
      monthlyPrice: "$75",
      description: "Perfect for small businesses wanting 24/7 customer support",
      features: [
        "Pre-built chatbot template",
        "FAQ handling & responses",
        "1 tool integration",
        "Document & form handling",
        "Basic customization",
        "Website embed ready",
        "Email support"
      ],
      highlighted: false,
      cta: "Get Started"
    },
    {
      name: "Starter",
      priceId: "agent_starter",
      buildPrice: "$1,500",
      monthlyPrice: "$150",
      description: "Custom-built agent tailored to your business needs",
      features: [
        "Fully custom AI agent",
        "Advanced conversation flows",
        "2-3 tool integrations",
        "Document & form handling",
        "Lead capture & routing",
        "Priority support",
        "Monthly performance reports"
      ],
      highlighted: true,
      cta: "Get Started"
    },
    {
      name: "Professional",
      priceId: "agent_professional",
      buildPrice: "$3,500",
      monthlyPrice: "$300",
      description: "Enterprise-grade AI assistant with full capabilities",
      features: [
        "Complex multi-step workflows",
        "Unlimited integrations",
        "CRM & database connections",
        "Custom AI training",
        "Advanced analytics dashboard",
        "Dedicated account manager",
        "Weekly optimization calls",
        "White-label options"
      ],
      highlighted: false,
      cta: "Contact Sales",
      isCustom: true
    }
  ];

  const handleCheckout = async (plan: Plan) => {
    if (plan.isCustom) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setLoading(plan.priceId);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId: plan.priceId,
          planType: 'automation',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      } else if (data.sessionId) {
        const stripe = await stripePromise;
        if (stripe) {
          const result = await (stripe as any).redirectToCheckout({
            sessionId: data.sessionId,
          });
          if (result.error) {
            throw result.error;
          }
        }
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(null);
    }
  };

  const handleAgentCheckout = async (plan: AgentPlan) => {
    if (plan.isCustom) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setLoading(plan.priceId);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId: plan.priceId,
          planType: 'agent',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      } else if (data.sessionId) {
        const stripe = await stripePromise;
        if (stripe) {
          const result = await (stripe as any).redirectToCheckout({
            sessionId: data.sessionId,
          });
          if (result.error) {
            throw result.error;
          }
        }
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4"
          >
            Pricing
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the solution that fits your business needs. All plans include setup, training, and ongoing support.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 mb-8 flex-wrap justify-center shadow-sm">
            <motion.button
              onClick={() => setActiveTab('automation')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'automation'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🔄 Automation
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('agents')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'agents'
                  ? 'bg-white text-purple-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🤖 AI Agents
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('custom')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'custom'
                  ? 'bg-white text-emerald-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🛠️ Build Your Own
            </motion.button>
          </div>
        </motion.div>

        {error && (
          <div className="max-w-md mx-auto mb-8 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Automation Plans */}
        {activeTab === 'automation' && (
          <>
            <div className="text-center mb-8">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                Monthly Subscriptions
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
              {automationPlans.map((plan, index) => (
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
                    onClick={() => handleCheckout(plan)}
                    disabled={loading === plan.priceId}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all disabled:opacity-70 disabled:cursor-not-allowed ${
                      plan.highlighted
                        ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {loading === plan.priceId ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                            fill="none"
                          />
                          <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      plan.cta
                    )}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* AI Agent Plans */}
        {activeTab === 'agents' && (
          <>
            <div className="text-center mb-8">
              <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
                One-Time Build + Monthly Maintenance
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
              {agentPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-2xl transform scale-105 relative'
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
                    <div className="mb-3">
                      <div className="flex items-baseline mb-1">
                        <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-purple-600'}`}>
                          {plan.buildPrice}
                        </span>
                        <span className={`ml-2 ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                          one-time
                        </span>
                      </div>
                      <div className={`text-sm ${plan.highlighted ? 'text-purple-100' : 'text-gray-500'}`}>
                        + <span className="font-semibold">{plan.monthlyPrice}</span>/month maintenance
                      </div>
                    </div>
                    <p className={`text-sm ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
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
                        <span className={`text-sm ${plan.highlighted ? 'text-purple-50' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleAgentCheckout(plan)}
                    disabled={loading === plan.priceId}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all disabled:opacity-70 disabled:cursor-not-allowed ${
                      plan.highlighted
                        ? 'bg-white text-purple-700 hover:bg-purple-50 shadow-lg'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    {loading === plan.priceId ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                            fill="none"
                          />
                          <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      plan.cta
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Agent Benefits */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8 max-w-4xl mx-auto mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">What Your AI Agent Can Do</h3>
                <p className="text-purple-100">24/7 intelligent assistance for your customers</p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: "💬", text: "Answer FAQs instantly" },
                  { icon: "📄", text: "Guide to forms & docs" },
                  { icon: "📅", text: "Book appointments" },
                  { icon: "🎯", text: "Qualify & route leads" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-sm font-medium">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Build Your Own / Custom Tab */}
        {activeTab === 'custom' && (
          <>
            <div className="text-center mb-8">
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium">
                Flexible Solutions for Any Budget
              </span>
            </div>
            
            <div className="max-w-5xl mx-auto mb-12">
              {/* Main Message */}
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Let's Build Something Perfect for You
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Don't see exactly what you need? We'll create a custom package that fits your specific requirements and budget.
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Single Automation */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-emerald-200 transition-all">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Single Automation</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Need just one workflow automated? We can help with that.
                  </p>
                  <div className="text-emerald-600 font-semibold">Starting at $150</div>
                </div>

                {/* Simple Chatbot */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-emerald-200 transition-all">
                  <div className="text-3xl mb-3">💬</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Simple Chatbot</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Basic FAQ bot for your website without all the bells and whistles.
                  </p>
                  <div className="text-emerald-600 font-semibold">Starting at $250</div>
                </div>

                {/* Mix & Match */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-emerald-200 transition-all">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Mix & Match</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Combine automation + AI agents in a way that makes sense for you.
                  </p>
                  <div className="text-emerald-600 font-semibold">Custom Quote</div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Why Go Custom?</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Pay Only for What You Need</p>
                      <p className="text-sm text-gray-600">No bloated packages</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Start Small, Scale Up</p>
                      <p className="text-sm text-gray-600">Add more later as you grow</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Small Business Friendly</p>
                      <p className="text-sm text-gray-600">Solutions from $250</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Payment Plans Available</p>
                      <p className="text-sm text-gray-600">Flexible payment options</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-colors inline-flex items-center gap-3 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule a Free Consultation
                </button>
                <p className="text-gray-500 text-sm mt-3">No obligation • Takes 15 minutes • We'll send you a custom quote</p>
              </div>
            </div>
          </>
        )}

        {/* Consultation CTA */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Not sure which plan is right for you?</h3>
              <p className="text-blue-100 mb-4">
                Book a free consultation and we'll help you find the perfect solution for your business.
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

        {/* Secure Payment Badge */}
        <div className="flex items-center justify-center gap-4 mt-8 text-gray-500">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
          </svg>
          <span className="text-sm">Secure payments powered by Stripe</span>
          <svg className="h-8" viewBox="0 0 60 25" fill="currentColor">
            <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.02 1.04-.06 1.48zm-3.67-3.07c0-1.15-.55-2.88-2.14-2.88-1.57 0-2.3 1.67-2.38 2.88h4.52zM40.95 20.3c-1.44 0-2.32-.7-2.91-1.18l-.02 5.27-3.75.8V5.97h3.25l.18 1.18c.63-.9 1.82-1.45 3.36-1.45 3.02 0 5.15 2.73 5.15 7.21 0 5.04-2.36 7.39-5.26 7.39zm-.93-10.98c-.89 0-1.42.33-1.8.78l.03 5.97c.35.4.86.7 1.77.7 1.35 0 2.28-1.52 2.28-3.74 0-2.15-.96-3.71-2.28-3.71zM28.24 5.57h3.77v14.44h-3.77zM28.24 1.22l3.77-.8v3.15l-3.77.8zM22.1 7.23c.53-.76 1.47-1.66 3.12-1.66l-.03 3.63c-1.78-.11-2.7.6-3.07 1.18v9.63h-3.75V5.97h3.25l.17 1.26h.3zM12.15 3.36l-3.67.78-.01 10.51c0 1.94 1.46 3.37 3.4 3.37.96 0 1.67-.14 2.12-.36v-2.88c-.33.13-2.03.64-2.03-1v-4.18h2.03V5.97h-2.03l.2-2.61zM3.58 9.12c0-.6.5-.83 1.32-.83.99 0 2.22.3 3.21.84V5.78C6.98 5.35 5.87 5.15 4.9 5.15 1.94 5.15 0 6.77 0 9.36c0 4.07 5.57 3.42 5.57 5.17 0 .71-.62.94-1.48.94-1.28 0-2.93-.53-4.24-1.24v3.4c1.44.62 2.9.88 4.09.88 3.06 0 5.16-1.51 5.16-4.14 0-4.4-5.52-3.61-5.52-5.25z"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
