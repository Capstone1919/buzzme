// import React from 'react';

// const HowItWorks = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-50 rounded-lg shadow-lg space-y-8">
//       <h1 className="text-4xl font-bold text-center text-indigo-800">How It Works</h1>
//       <p className="text-center text-lg text-gray-800">
//         Follow these simple steps to get started and receive notifications for your favorite products.
//       </p>

//       {/* Step 1: Register & Login (Left Side Text, Right Side Image) */}
//       <div className=" cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors">
//           <h2 className="text-xl font-semibold text-indigo-600">Step 1: Register & Login</h2>
//           <p className="text-gray-700 mt-2">
//             Create an account by entering your email and password. Once registered, log in to access your dashboard.
//           </p>
//         </div>
//         <div className="flex justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs hover:scale-105 transition-all">
//             <img src="https://via.placeholder.com/500x300" alt="Step 1" className="rounded-lg shadow-md" />
//           </div>
//         </div>
//       </div>

//       {/* Step 2: Dashboard Overview (Right Side Text, Left Side Image) */}
//       <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="flex justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs hover:scale-105 transition-all">
//             <img src="https://via.placeholder.com/500x300" alt="Step 2" className="rounded-lg shadow-md" />
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors">
//           <h2 className="text-xl font-semibold text-indigo-600">Step 2: Explore the Dashboard</h2>
//           <p className="text-gray-700 mt-2">
//             After logging in, you'll be taken to your dashboard where you can see a list of products with images, names, and prices.
//           </p>
//         </div>
//       </div>

//       {/* Step 3: Product Details (Left Side Text, Right Side Image) */}
//       <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors">
//           <h2 className="text-xl font-semibold text-indigo-600">Step 3: View Product Details</h2>
//           <p className="text-gray-700 mt-2">
//             Click on a product to see more details like its full description and features.
//           </p>
//         </div>
//         <div className="flex justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs hover:scale-105 transition-all">
//             <img src="https://via.placeholder.com/500x300" alt="Step 3" className="rounded-lg shadow-md" />
//           </div>
//         </div>
//       </div>

//       {/* Step 4: Toggle Notification (Right Side Text, Left Side Image) */}
//       <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="flex justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs hover:scale-105 transition-all">
//             <img src="https://via.placeholder.com/500x300" alt="Step 4" className="rounded-lg shadow-md" />
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors">
//           <h2 className="text-xl font-semibold text-indigo-600">Step 4: Enable Notifications</h2>
//           <p className="text-gray-700 mt-2">
//             On the product details page, you can toggle notifications to receive updates and alerts for that product directly in your browser.
//           </p>
//         </div>
//       </div>

//       {/* Step 5: Notifications Page (Left Side Text, Right Side Image) */}
//       <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors">
//           <h2 className="text-xl font-semibold text-indigo-600">Step 5: Check Notifications</h2>
//           <p className="text-gray-700 mt-2">
//             Visit the "Notifications" page to see a list of products you've enabled notifications for.
//           </p>
//         </div>
//         <div className="flex justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs hover:scale-105 transition-all">
//             <img src="https://via.placeholder.com/500x300" alt="Step 5" className="rounded-lg shadow-md" />
//           </div>
//         </div>
//       </div>

//       {/* Step 6: Profile Page (Right Side Text, Left Side Image) */}
//       <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="flex justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs hover:scale-105 transition-all">
//             <img src="https://via.placeholder.com/500x300" alt="Step 6" className="rounded-lg shadow-md" />
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors">
//           <h2 className="text-xl font-semibold text-indigo-600">Step 6: Update Profile</h2>
//           <p className="text-gray-700 mt-2">
//             On your profile page, you can view and update your personal information.
//           </p>
//         </div>
//       </div>

//       {/* Step 7: Logout (Left Side Text, Right Side Image) */}
//       <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors">
//           <h2 className="text-xl font-semibold text-indigo-600">Step 7: Logout</h2>
//           <p className="text-gray-700 mt-2">
//             Once you're done, simply log out to securely exit the app.
//           </p>
//         </div>
//         <div className="flex justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs hover:scale-105 transition-all">
//             <img src="https://via.placeholder.com/500x300" alt="Step 7" className="rounded-lg shadow-md" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;



















import React, { useState } from "react";
import { FaBell, FaUserCog, FaChartLine, FaCheckCircle, FaMobileAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const HowItWorks = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    {
      icon: <FaBell className="text-4xl text-blue-500" />,
      title: "Smart Notification Filter",
      description: "Notifications are filtered based on your determined interests and priorities."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-blue-500" />,
      title: "Optimized Delivery",
      description: "Receive notifications only for the most relevant and important updates."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-blue-500" />,
      title: "Continuous Learning",
      description: "The system continuously updates for your changing preferences and behaviors."
    }
  ];

  const faqs = [ 
    {
      question: "Can I customize my notification preferences manually?",
      answer: "Yes, you can manually adjust your preferences through the products page while our system continues to learn from your behavior."
    },
    {
      question: "Will I miss important notifications?",
      answer: "No, our system ensures that critical notifications are always delivered while reducing less relevant ones."
    },
    {
      question: "How long does it take to learn my preferences?",
      answer: "The system starts learning immediately and typically optimizes your notification experience within 1-2 minutes of preference change."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we use smart technology to reduce push notifications and deliver a more personalized experience.
          </p>
        </div>
      </header>

      {/* Visual Banner */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt="Analytics Dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40 flex items-center justify-center">
          <IoNotifications className="text-6xl md:text-7xl text-white" />
        </div>
      </div>

      {/* Steps Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left font-semibold flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <BsFillQuestionCircleFill className={`text-blue-500 transform transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-blue-100">Experience smarter notifications tailored just for you.</p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300">
            Get Started Now
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;