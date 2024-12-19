

// import React from 'react';
// import { Link } from 'react-router-dom';
// import addNotification from 'react-push-notification';

// const HomePage = () => {
//   const handleShowMessage = () => {
//     addNotification({
//       title: 'We Promise',
//       subtitle: 'Not like this',
//       message: "We don't send you annoying notifications like these pop-ups! every time",
//       theme: 'darkblue',
//       native: true,
//       duration:5000,
//       icon: "https://www.pushengage.com/wp-content/uploads/2022/10/How-to-Add-a-Push-Notification-Icon.png" // when using native, your OS will handle theming
//     });
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative bg-blue-600 text-white h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('your-background-image.jpg')" }}>
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 text-center px-6 md:px-8">
//           {/* Hero Text */}
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
//             Push Notification Made Easy
//           </h1>
//           <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
//             Stay connected and never miss important updates. Get personalized notifications for each product you love.
//           </p>
//           <Link
//             to="/login"
//             className="bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-all ease-in-out duration-300 transform hover:scale-105 shadow-lg"
//           >
//             Get Started
//           </Link>
//           <button
//             onClick={handleShowMessage}
//             className="ml-2 bg-transparent text-yellow-500 px-6 py-2 border-2 border-yellow-500 rounded-full text-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all ease-in-out duration-300 transform hover:scale-105 shadow-lg"
//           >
//             Show Me How
//           </button>

//           {/* Additional Text */}
//           <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
//             Join us today and experience seamless notifications with a simple toggle. Don't miss a single update!
//           </p>
//         </div>
//       </section>

//       {/* Feature Section */}
//       <section className="py-16 bg-gray-100">
//         <div className="max-w-7xl mx-auto text-center px-6 md:px-8">
//           <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Why Choose Our Service?</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">Real-Time Notifications</h3>
//               <p className="text-gray-700">Get real-time updates directly in your browser without missing any important details.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">Easy Setup</h3>
//               <p className="text-gray-700">No complicated installation or setup. Just toggle the notification and you’re good to go.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">Stay Engaged</h3>
//               <p className="text-gray-700">Stay connected with the products you care about with personalized push notifications.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto text-center px-6 md:px-8">
//           <h2 className="text-3xl sm:text-4xl font-semibold mb-8">About Us</h2>
//           <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
//             We are a dedicated team focused on simplifying push notifications for users. Our goal is to create a service where you
//             can stay updated on the products you love without being overwhelmed. Our platform is user-friendly, reliable, and efficient.
//           </p>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-blue-600 text-white py-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <p>&copy; 2024 BuzzMe. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;



























import React, { useState } from "react";
import { FiShoppingCart, FiBell, FiSmartphone } from "react-icons/fi";
import { Link } from 'react-router-dom';
import addNotification from 'react-push-notification';
const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      icon: <FiShoppingCart className="w-8 h-8" />,
      title: "Smart Shopping",
      description: "Personalized recommendations without the spam"
    },
    {
      icon: <FiBell className="w-8 h-8" />,
      title: "Minimal Notifications",
      description: "Only get alerts for what truly matters"
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Mobile First",
      description: "Seamless experience across all devices"
    }
  ];
  const handleShowMessage = () => {
    addNotification({
      title: 'We Promise',
      subtitle: 'Not like this',
      message: "We don't send you annoying notifications like these pop-ups! every time",
      theme: 'darkblue',
      native: true,
      duration: 5000,
      icon: "https://www.pushengage.com/wp-content/uploads/2022/10/How-to-Add-a-Push-Notification-Icon.png" // when using native, your OS will handle theming
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Shop Smarter,<br />
              Not Harder
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Experience hassle-free shopping with minimal notifications.
              We prioritize your peace of mind while keeping you informed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/login"
                className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started
              </Link>

              <button
                onClick={handleShowMessage}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full text-lg font-semibold hover:bg-blue-50 transition duration-300">
                Show me How
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
              alt="Shopping Experience"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1472851294608-062f824d29cc";
              }}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
            Trusted by Thousands of Happy Shoppers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h4 className="text-2xl font-bold text-blue-600 mb-2">
                  {(index + 1) * 1000}+
                </h4>
                <p className="text-gray-600">
                  {index === 0 ? "Active Users" :
                    index === 1 ? "Daily Orders" :
                      index === 2 ? "Products" :
                        "Reviews"}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Feature Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center px-6 md:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">Why Choose Our Service?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Real-Time Notifications</h3>
                <p className="text-gray-700">Get real-time updates directly in your browser without missing any important details.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Easy Setup</h3>
                <p className="text-gray-700">No complicated installation or setup. Just toggle the notification and you're good to go.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Stay Engaged</h3>
                <p className="text-gray-700">Stay connected with the products you care about with personalized push notifications.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomePage;