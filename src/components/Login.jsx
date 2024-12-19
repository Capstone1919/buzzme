// // Login.js
// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase.config"; 
// import { motion } from "framer-motion"; // Import Framer Motion for animation
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       await signInWithEmailAndPassword(auth, formData.email, formData.password);
//       navigate("/profile"); // Redirect to dashboard on success
//     } catch (err) {
//       setError("Error logging in: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div 
//       className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-indigo-600"
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       transition={{ duration: 1.2 }}
//     >
//       <div className="w-full max-w-lg bg-white p-10 rounded-lg shadow-lg">
//         <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Login to Your Account</h2>

//         {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//           </div>

//           <motion.button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-teal-600 text-white p-4 rounded-lg mt-4 hover:bg-teal-700 transition duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </motion.button>
//         </form>

//         {/* "Don't have an account? Register here" link */}
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <Link to="/register" className="text-teal-600 hover:underline">
//               Register here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Login;










































// Login.js
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config"; 
import { motion } from "framer-motion"; // Import Framer Motion for animation
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/profile"); // Redirect to dashboard on success
    } catch (err) {
      setError("Error logging in: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-indigo-600"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.2 }}
    >
      <div className="w-full max-w-lg p-6 sm:p-8 md:p-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-6">Login to Your Account</h2>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 text-white p-4 rounded-lg mt-4 hover:bg-teal-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        {/* "Don't have an account? Register here" link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-teal-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
