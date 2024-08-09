// components/Pricing.js
import React from 'react';

const pricingPlans = [
  {
    title: 'Basic Plan',
    price: '$19/month',
    features: [
      'Access to Crop Management Tools',
      'Market Insights & Trends',
      'Weekly Weather Updates',
      'Email Support',
    ],
    buttonText: 'Get Started',
    buttonColor: 'bg-green-600 hover:bg-green-700',
  },
  {
    title: 'Pro Plan',
    price: '$39/month',
    features: [
      'All Basic Plan Features',
      'Advanced Crop Analytics',
      'Daily Market Insights',
      'Priority Email & Chat Support',
      'Expert Consultation Sessions',
    ],
    buttonText: 'Upgrade Now',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    title: 'Enterprise Plan',
    price: 'Contact Us',
    features: [
      'All Pro Plan Features',
      'Custom Solutions & Integrations',
      'Dedicated Account Manager',
      '24/7 Support',
      'On-site Consultations',
    ],
    buttonText: 'Contact Us',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
  },
];

export default function Pricing() {
  return (
    <section className="pricing py-12 px-6 md:py-24 md:px-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="pricing-card bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
              style={{ minHeight: '400px' }} // Ensuring a consistent height for all cards
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                <p className="text-3xl font-bold mb-4 text-gray-900">{plan.price}</p>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center mt-auto"> {/* Aligning the button at the bottom */}
                <button className={`w-full py-3 px-6 rounded-lg text-white ${plan.buttonColor} transform hover:scale-105 transition-transform duration-300`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
