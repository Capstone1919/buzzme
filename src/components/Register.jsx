// // Register.js
// import { auth } from "../firebase.config"; // Import Firebase auth
// import { db } from "../firebase.config"; // Import Firestore
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion"; // Import Framer Motion for animation

// const Register = () => {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         phone: "",
//         age: "",
//         country: "",
//         dob: "",
//         occupation: "",
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError("");

//         try {
//             // Step 1: Create the user with Firebase Authentication
//             const userCredential = await createUserWithEmailAndPassword(
//                 auth,
//                 formData.email,
//                 formData.password
//             );

//             const user = userCredential.user;
//             const uid = user.uid; // Get the user's UID

//             // Step 2: Create a document in Firestore under the "users" collection using the UID
//             await setDoc(doc(db, "users", uid), {
//                 name: formData.name,
//                 email: formData.email,
//                 phone: formData.phone,
//                 age: formData.age,
//                 country: formData.country,
//                 dob: formData.dob,
//                 occupation: formData.occupation,
//             });

//             // Step 3: Navigate to the dashboard or home page
//             navigate("/dashboard");
//         } catch (err) {
//             setError("Error creating user: " + err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <motion.div
//             className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >
//             <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
//                 <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>

//                 {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-2 gap-6">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 required
//                             />
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-6">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Password</label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 required
//                                 minLength={8}
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//                             <input
//                                 type="text"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             />
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-6">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Age</label>
//                             <input
//                                 type="number"
//                                 name="age"
//                                 value={formData.age}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Country</label>
//                             <select
//                                 name="country"
//                                 value={formData.country}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 required
//                             >
//                                 <option value="">Select Country</option>
//                                 <option value="USA">USA</option>
//                                 <option value="India">India</option>
//                                 <option value="Canada">Canada</option>
//                             </select>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-6">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
//                             <input
//                                 type="date"
//                                 name="dob"
//                                 value={formData.dob}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Who Are You?</label>
//                             <select
//                                 name="occupation"
//                                 value={formData.occupation}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 required
//                             >
//                                 <option value="">Select Occupation</option>
//                                 <option value="Student">Student</option>
//                                 <option value="Working Professional">Working Professional</option>
//                                 <option value="Freelancer">Freelancer</option>
//                             </select>
//                         </div>
//                     </div>

//                     <motion.button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full bg-indigo-600 text-white p-3 rounded-lg mt-4 hover:bg-indigo-700 transition duration-300"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.98 }}
//                     >
//                         {loading ? "Registering..." : "Register"}
//                     </motion.button>
//                 </form>

//                 {/* "Already have an account? Login here" link */}
//                 <div className="mt-6 text-center">
//                     <p className="text-sm text-gray-600">
//                         Already have an account?{" "}
//                         <Link to="/login" className="text-indigo-600 hover:underline">
//                             Login here
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default Register;






























// Register.js
import { auth } from "../firebase.config"; // Import Firebase auth
import { db } from "../firebase.config"; // Import Firestore
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion for animation

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        age: "",
        country: "",
        dob: "",
        occupation: "",
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
            // Step 1: Create the user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            const user = userCredential.user;
            const uid = user.uid; // Get the user's UID

            // Step 2: Create a document in Firestore under the "users" collection using the UID
            await setDoc(doc(db, "users", uid), {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                age: formData.age,
                country: formData.country,
                dob: formData.dob,
                occupation: formData.occupation,
            });

            // Step 3: Navigate to the dashboard or home page
            navigate("/dashboard");
        } catch (err) {
            setError("Error creating user: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="w-full max-w-4xl bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>

                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Grid layout for the form fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                                minLength={8}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Age</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country</label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            >
                                <option value="">Select Country</option>
                                <option value="USA">USA</option>
                                <option value="India">India</option>
                                <option value="Canada">Canada</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Who Are You?</label>
                            <select
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            >
                                <option value="">Select Occupation</option>
                                <option value="Student">Student</option>
                                <option value="Working Professional">Working Professional</option>
                                <option value="Freelancer">Freelancer</option>
                            </select>
                        </div>
                    </div>

                    <motion.button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white p-3 rounded-lg mt-4 hover:bg-indigo-700 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {loading ? "Registering..." : "Register"}
                    </motion.button>
                </form>

                {/* "Already have an account? Login here" link */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-indigo-600 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Register;
