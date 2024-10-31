// PaymentPlansSection.jsx
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PaymentPlansSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Freelancer',
      amount: 1500,
      description: "Perfect for solo entrepreneurs or freelancers starting their journey.",
      features: [
        "1 project slot",
        "Basic analytics",
        "Email support"
      ]
    },
    {
      name: 'Startup',
      amount: 3000,
      description: "Our most popular plan for small businesses ready to scale.",
      features: [
        "5 project slots",
        "Advanced analytics",
        "Priority email support"
      ],
      popular: true // Flag to highlight this plan
    },
    {
      name: 'Enterprise',
      amount: 4800,
      description: "Designed for large teams and enterprises with extensive needs.",
      features: [
        "Unlimited project slots",
        "Complete analytics dashboard",
        "24/7 dedicated support"
      ]
    },
  ];

  const handleCheckout = async (plan) => {
    const stripe = await stripePromise; 
    if (!stripe) {
      console.error("Stripe failed to load");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/create-checkout-session', {
        planId: plan.name,
        planAmount: plan.amount,
        planCurrency: 'usd',
      });

      if (response.data && response.data.url) {
        window.location.href = response.data.url;
      } else {
        console.error("Failed to retrieve checkout URL.");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <h3 className="text-3xl font-semibold text-center mb-4">
        Pricing plans for teams of all sizes
      </h3>
      <p className="text-center text-gray-500 mb-8">
        Choose an affordable plan that’s packed with the best features for engaging your audience, 
        creating customer loyalty and driving sales.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`rounded-lg shadow-lg p-8 text-center border-2 ${plan.popular ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'}`}
          >
            {plan.popular && (
              <span className="text-sm font-semibold text-red-600 bg-red-200 rounded-full px-3 py-1 inline-block mb-3">
                Most Popular
              </span>
            )}
            <h4 className="font-bold text-lg text-gray-700 mb-2">{plan.name}</h4>
            <p className="text-grey-500 text-sm mb-4">{plan.description }</p>
            <p className="text-4xl font-bold text-gray-800 mb-6">
                ${plan.amount / 100} <span className="text-lg text-gray-500">/month</span>
            </p>

            <ul className="text-left text-gray-700 mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>

            <button
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition duration-200"
                onClick={() => handleCheckout(plan)}
            >
                {plan.name === 'Starup' ? 'Get Started' : 'Buy Now'}

            </button>

            </div>
                ))}
            </div>

        </section>
      );
};

export default PaymentPlansSection;