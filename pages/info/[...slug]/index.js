import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const InfoSlug = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Data for Meal Mover
  const faqData = [
    {
      question: "How can I place an order?",
      answer:
        "Select your favorite meals and add them to your cart, then proceed to checkout.",
    },
    {
      question: "What are the delivery charges?",
      answer: "Delivery charges vary based on location and order total.",
    },
    {
      question: "Can I cancel my order?",
      answer: "Yes, you can cancel your order within 5 minutes of placing it.",
    },
  ];

  const supportData = [
    { contactMethod: "Email", detail: "support@mealmover.com" },
    { contactMethod: "Phone", detail: "+1 (123) 456-7890" },
    {
      contactMethod: "Live Chat",
      detail: "Available 24/7 in the MealMover app",
    },
  ];

  const deliveryPolicyData = [
    {
      title: "Delivery Times",
      detail:
        "We aim to deliver all orders within 30 minutes to 1 hour, depending on your location.",
    },
    {
      title: "Delivery Areas",
      detail:
        "We currently deliver to select areas within the city. You can check if we deliver to your location on our checkout page.",
    },
    {
      title: "Late Deliveries",
      detail:
        "In case of delays, we will notify you via the app or email. If your order exceeds 1 hour, we offer a discount on your next order.",
    },
  ];

  const renderContent = () => {
    if (!slug) return null;
    if (slug.includes("faqs")) {
      return (
        <div className="animate-fade-in">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-4">
            {faqData.map((faq, index) => (
              <li key={index} className="border-b pb-2 border-yellow-300">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    if (slug.includes("contact")) {
      return (
        <div className="animate-fade-in">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Support Contact Information
          </h2>
          <ul className="space-y-4">
            {supportData.map((support, index) => (
              <li key={index} className="border-b pb-2 border-yellow-300">
                <h3 className="font-semibold">{support.contactMethod}</h3>
                <p className="text-gray-700">{support.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    if (slug.includes("delivery-policy")) {
      return (
        <div className="animate-fade-in">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Delivery Policy
          </h2>
          <ul className="space-y-4">
            {deliveryPolicyData.map((policy, index) => (
              <li key={index} className="border-b pb-2 border-yellow-300">
                <h3 className="font-semibold">{policy.title}</h3>
                <p className="text-gray-700">{policy.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <div className="text-gray-700">Section not found.</div>;
  };

  return (
    <>
      <Head>
        <title>
          Meal Mover - {slug ? slug.toString().toUpperCase() : "Info"}
        </title>
      </Head>
      <div className="bg-yellow-50">
        <div className="container mx-auto p-6 min-h-screen bg-yellow-50 flex flex-col items-center justify-top">
          <h1 className="text-3xl font-bold text-yellow-600 mb-4">
            Meal Mover Information
          </h1>
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default InfoSlug;
