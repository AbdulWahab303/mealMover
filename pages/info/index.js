import React from "react";
import Link from "next/link";
import Head from "next/head";

const InfoHome = () => {
  return (
    <>
      <Head>
        <title>Meal Mover - Info Center</title>
      </Head>
      <div className="bg-yellow-50 h-[1000px]">
        <div className="container mx-auto p-6 animate-fade-in">
          <h1 className="text-4xl font-bold text-yellow-600 mb-4">
            Meal Mover Info Center
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to MealMover's information center. Explore helpful resources
            below:
          </p>
          <ul className="list-disc ml-6 space-y-3">
            <li>
              <Link
                href="/info/faqs"
                className="text-yellow-500 hover:text-yellow-600 hover:underline transition-all duration-300"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/info/contact"
                className="text-yellow-500 hover:text-yellow-600 hover:underline transition-all duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/info/delivery-policy"
                className="text-yellow-500 hover:text-yellow-600 hover:underline transition-all duration-300"
              >
                Delivery Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfoHome;

export async function getStaticProps() {
  return {
    props: {},
  };
}
