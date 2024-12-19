
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { auth } from "../firebase.config";
// import iconlogo from '../assets/iconlogo.png';

// const Navbar = ({ isAuthenticated, onLogout }) => {
//   const [userProfileImage, setUserProfileImage] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the hamburger menu visibility
//   const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false); // State for the logout confirmation popup
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated && auth.currentUser) {
//       setUserProfileImage(auth.currentUser.photoURL || 'default-avatar-url'); // Default image if no photo URL
//     }
//   }, [isAuthenticated]);

//   const handleProfileClick = () => {
//     navigate('/profile');
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
//   };

//   const handleLogout = () => {
//     setShowLogoutConfirmation(true); // Show the confirmation popup
//   };

//   const confirmLogout = () => {
//     onLogout(); // Execute the logout action
//     setShowLogoutConfirmation(false); // Close the popup after confirmation
//     navigate('/login'); // Redirect to login page after logout
//   };

//   const cancelLogout = () => {
//     setShowLogoutConfirmation(false); // Close the popup without logging out
//   };

//   return (
//     <nav className="bg-blue-600 p-4">
//       <div className="flex justify-between items-center">
//         {/* Leftmost section - Logo */}
//         <div className="flex items-center">
//           <Link to="/">
//             <img
//               src={iconlogo}
//               alt="Logo"
//               className="h-8 w-16"
//             />
//           </Link>
//         </div>

//         {/* Hamburger Menu for Small Screens */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>

//         {/* Center section - Navigation Links */}
//         <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} flex-col md:flex-row space-x-4 md:space-x-6`}>
//           <Link to="/" className="text-white hover:text-gray-300 py-2 px-4">Home</Link>
//           <Link to="/dashboard" className="text-white hover:text-gray-300 py-2 px-4">Dashboard</Link>
//           <Link to="/notifications" className="text-white hover:text-gray-300 py-2 px-4">Notifications</Link>
//           <Link to="/howitworks" className="text-white hover:text-gray-300 py-2 px-4">How It Works</Link>
//         </div>

//         {/* Rightmost section - Profile or Get Started / Logout */}
//         <div className="flex items-center">
//           {isAuthenticated ? (
//             <div className="relative flex items-center">
//               <button onClick={handleProfileClick}>
//                 <img
//                   // src={userProfileImage || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
//                   src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
//                   alt="Profile"
//                   className="h-10 w-10 rounded-full object-cover"
//                 />
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className="ml-4 text-white bg-red-500 px-4 py-2 rounded hover:bg-red-700"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <Link
//               to="/register"
//               className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-700"
//             >
//               Get Started
//             </Link>
//           )}
//         </div>
//       </div>

//       {/* Logout Confirmation Modal */}
//       {showLogoutConfirmation && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <h2 className="text-xl font-semibold text-center mb-4">Are you sure you want to log out?</h2>
//             <div className="flex justify-between">
//               <button
//                 onClick={confirmLogout}
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//               >
//                 Yes, Log me out
//               </button>
//               <button
//                 onClick={cancelLogout}
//                 className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
































































import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import iconlogo from "../assets/iconlogo.png";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const [userProfileImage, setUserProfileImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && auth.currentUser) {
      setUserProfileImage(auth.currentUser.photoURL || "default-avatar-url");
    }
  }, [isAuthenticated]);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex justify-between items-center">
        {/* Left Section - Logo */}
        <div>
          <Link to="/">
            <img src={iconlogo} alt="Logo" className="h-8 w-16" />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:space-x-6 mt-4 md:mt-0`}
        >
          <Link
            to="/"
            className="block md:inline-block text-white hover:text-gray-300 py-2 px-4"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="block md:inline-block text-white hover:text-gray-300 py-2 px-4"
          >
            Dashboard
          </Link>
          <Link
            to="/notifications"
            className="block md:inline-block text-white hover:text-gray-300 py-2 px-4"
          >
            Notifications
          </Link>
          <Link
            to="/howitworks"
            className="block md:inline-block text-white hover:text-gray-300 py-2 px-4"
          >
            How It Works
          </Link>
        </div>

        {/* Profile or Login Button */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center">
              <button onClick={handleProfileClick}>
                <img
                  src={
                    userProfileImage ||
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  alt="Profile"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </button>
              <button
                onClick={handleLogout}
                className="ml-4 text-white bg-red-500 px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/register"
              className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-700"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
