// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase.config"; // Firebase Authentication instance
// import { signOut } from "firebase/auth"; // Firebase signOut function
// import { motion } from "framer-motion";
// import { doc, getDoc } from "firebase/firestore"; // Firestore functions
// import { db } from "../firebase.config"; // Firebase Firestore instance

// const Profile = ({ onLogout }) => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedTab, setSelectedTab] = useState("details");
//   const [purchasedItems, setPurchasedItems] = useState([]);
//   const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false); // State to show confirmation popup
//   const [isLoggingOut, setIsLoggingOut] = useState(false); // State to manage "Logging you out..." button text

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const user = auth.currentUser;
//         if (user) {
//           const docRef = doc(db, "users", user.uid);
//           const docSnap = await getDoc(docRef);

//           if (docSnap.exists()) {
//             setUserData(docSnap.data());
//             if (docSnap.data().purchasedItems) {
//               fetchPurchasedItems(docSnap.data().purchasedItems);
//             }
//           } else {
//             setError("User data not found.");
//           }
//         } else {
//           setError("No user logged in.");
//         }
//       } catch (error) {
//         setError("Error fetching user data: " + error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchPurchasedItems = async (purchasedItemIds) => {
//       try {
//         const items = [];
//         for (const productId of purchasedItemIds) {
//           const productRef = doc(db, "products", productId);
//           const productSnap = await getDoc(productRef);
//           if (productSnap.exists()) {
//             items.push(productSnap.data());
//           }
//         }
//         setPurchasedItems(items);
//       } catch (error) {
//         console.error("Error fetching purchased items: ", error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleLogout = async () => {
//     setIsLoggingOut(true); // Show the "Logging you out..." text
//     try {
//       await signOut(auth);
//       onLogout();
//       navigate("/login"); // Redirect to login after logout
//     } catch (error) {
//       console.error("Error during logout:", error);
//       setIsLoggingOut(false); // Reset the text in case of error
//     }
//   };

//   const handleConfirmLogout = () => {
//     setShowLogoutConfirmation(true); // Show the confirmation popup
//   };

//   const handleCancelLogout = () => {
//     setShowLogoutConfirmation(false); // Dismiss the confirmation popup
//   };

//   const handleLogoutConfirmed = () => {
//     setShowLogoutConfirmation(false); // Close the popup
//     handleLogout(); // Proceed with logout
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-50 flex justify-center items-center"
//     >
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8">
//         <div className="flex justify-center mb-6">
//           <img
//             src={userData.photoURL || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
//             alt="Profile"
//             className="h-24 w-24 rounded-full border-4 border-indigo-500"
//           />
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-6 border-b border-gray-200">
//           <button
//             onClick={() => setSelectedTab("details")}
//             className={`px-6 py-2 ${selectedTab === "details" ? "border-b-2 border-indigo-500" : ""}`}
//           >
//             Details
//           </button>
//           <button
//             onClick={() => setSelectedTab("orders")}
//             className={`px-6 py-2 ${selectedTab === "orders" ? "border-b-2 border-indigo-500" : ""}`}
//           >
//             Orders
//           </button>
//         </div>

//         {/* Render Details Tab */}
//         {selectedTab === "details" && (
//           <div className="space-y-4">
//             <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Your Profile</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="col-span-2">
//                 <label className="block text-sm font-medium text-gray-700">Full Name</label>
//                 <input
//                   type="text"
//                   value={userData.name || "Not Provided"}
//                   readOnly
//                   className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   value={userData.email || auth.currentUser?.email || "Not Provided"}
//                   readOnly
//                   className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//                 <input
//                   type="text"
//                   value={userData.phone || "Not Provided"}
//                   readOnly
//                   className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Age</label>
//                 <input
//                   type="number"
//                   value={userData.age || "Not Provided"}
//                   readOnly
//                   className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Country</label>
//                 <input
//                   type="text"
//                   value={userData.country || "Not Provided"}
//                   readOnly
//                   className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
//                 <input
//                   type="text"
//                   value={userData.dob || "Not Provided"}
//                   readOnly
//                   className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Who Are You?</label>
//                 <input
//                   type="text"
//                   value={userData.occupation || "Not Provided"}
//                   readOnly
//                   className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Render Orders Tab */}
//         {selectedTab === "orders" && (
//           <div className="space-y-4">
//             <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Your Orders</h2>

//             {/* Product Table */}
//             <div className="overflow-x-auto">
//               <table className="min-w-full table-auto">
//                 <thead>
//                   <tr>
//                     <th className="px-6 py-3 text-left">Product</th>
//                     <th className="px-6 py-3 text-left">Cost</th>
//                     <th className="px-6 py-3 text-left">Image</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {purchasedItems.length > 0 ? (
//                     purchasedItems.map((item, index) => (
//                       <tr key={index} className="border-t">
//                         <td className="px-6 py-3">{item.name}</td>
//                         <td className="px-6 py-3">${item.cost}</td>
//                         <td className="px-6 py-3">
//                           <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="3" className="px-6 py-3 text-center text-gray-500">
//                         No orders yet.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {/* Logout Confirmation Popup */}
//         {showLogoutConfirmation && (
//           <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <p className="text-lg mb-4">Are you sure you want to log out?</p>
//               <div className="flex justify-between">
//                 <button
//                   onClick={handleLogoutConfirmed}
//                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={handleCancelLogout}
//                   className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-500"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Logout Button */}
//         {!showLogoutConfirmation && (
//           <div className="mt-6 text-center">
//             <button
//               onClick={handleConfirmLogout}
//               className={`w-full py-2 px-4 ${isLoggingOut ? "bg-gray-500" : "bg-red-500"} text-white rounded-lg hover:bg-red-700`}
//               disabled={isLoggingOut}
//             >
//               {isLoggingOut ? "Logging you out..." : "Logout"}
//             </button>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default Profile;




















































import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config"; // Firebase Authentication instance
import { signOut } from "firebase/auth"; // Firebase signOut function
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore"; // Firestore functions
import { db } from "../firebase.config"; // Firebase Firestore instance

const Profile = ({ onLogout }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedTab, setSelectedTab] = useState("details");
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false); // State to show confirmation popup
  const [isLoggingOut, setIsLoggingOut] = useState(false); // State to manage "Logging you out..." button text

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
            if (docSnap.data().purchasedItems) {
              fetchPurchasedItems(docSnap.data().purchasedItems);
            }
          } else {
            setError("User data not found.");
          }
        } else {
          setError("No user logged in.");
        }
      } catch (error) {
        setError("Error fetching user data: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchPurchasedItems = async (purchasedItemIds) => {
      try {
        const items = [];
        for (const productId of purchasedItemIds) {
          const productRef = doc(db, "products", productId);
          const productSnap = await getDoc(productRef);
          if (productSnap.exists()) {
            items.push(productSnap.data());
          }
        }
        setPurchasedItems(items);
      } catch (error) {
        console.error("Error fetching purchased items: ", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true); // Show the "Logging you out..." text
    try {
      await signOut(auth);
      onLogout();
      navigate("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Error during logout:", error);
      setIsLoggingOut(false); // Reset the text in case of error
    }
  };

  const handleConfirmLogout = () => {
    setShowLogoutConfirmation(true); // Show the confirmation popup
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirmation(false); // Dismiss the confirmation popup
  };

  const handleLogoutConfirmed = () => {
    setShowLogoutConfirmation(false); // Close the popup
    handleLogout(); // Proceed with logout
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 flex justify-center items-center px-4"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8">
        <div className="flex justify-center mb-6">
          <img
            src={userData.photoURL || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            alt="Profile"
            className="h-24 w-24 rounded-full border-4 border-indigo-500"
          />
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6 border-b border-gray-200">
          <button
            onClick={() => setSelectedTab("details")}
            className={`px-6 py-2 ${selectedTab === "details" ? "border-b-2 border-indigo-500" : ""}`}
          >
            Details
          </button>
          <button
            onClick={() => setSelectedTab("orders")}
            className={`px-6 py-2 ${selectedTab === "orders" ? "border-b-2 border-indigo-500" : ""}`}
          >
            Orders
          </button>
        </div>

        {/* Render Details Tab */}
        {selectedTab === "details" && (
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Your Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={userData.name || "Not Provided"}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={userData.email || auth.currentUser?.email || "Not Provided"}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  value={userData.phone || "Not Provided"}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  value={userData.age || "Not Provided"}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  value={userData.country || "Not Provided"}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="text"
                  value={userData.dob || "Not Provided"}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Who Are You?</label>
                <input
                  type="text"
                  value={userData.occupation || "Not Provided"}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>
        )}

        {/* Render Orders Tab */}
        {selectedTab === "orders" && (
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Your Orders</h2>

            {/* Product Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left">Product</th>
                    <th className="px-6 py-3 text-left">Cost</th>
                    <th className="px-6 py-3 text-left">Image</th>
                  </tr>
                </thead>
                <tbody>
                  {purchasedItems.length > 0 ? (
                    purchasedItems.map((item, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-6 py-3">{item.name}</td>
                        <td className="px-6 py-3">${item.cost}</td>
                        <td className="px-6 py-3">
                          <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="px-6 py-3 text-center text-gray-500">
                        No orders yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Logout Confirmation Popup */}
        {showLogoutConfirmation && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">Are you sure you want to log out?</p>
              <div className="flex justify-between">
                <button
                  onClick={handleLogoutConfirmed}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Yes
                </button>
                <button
                  onClick={handleCancelLogout}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-500"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Logout Button */}
        {!showLogoutConfirmation && (
          <div className="mt-6 text-center">
            <button
              onClick={handleConfirmLogout}
              className={`w-full py-2 px-4 ${isLoggingOut ? "bg-gray-500" : "bg-red-500"} text-white rounded-lg hover:bg-red-700`}
              disabled={isLoggingOut}
            >
              {isLoggingOut ? "Logging you out..." : "Logout"}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Profile;
