// import React, { useState, useEffect } from 'react';
// import { db, auth } from "../firebase.config"; // Firestore and Auth instance
// import { doc, getDoc } from 'firebase/firestore';
// import { FaBell, FaBellSlash } from 'react-icons/fa'; // Icons for notifications
// import { Link } from 'react-router-dom'; // Assuming React Router is being used for navigation

// const NotificationPage = () => {
//   const [notifications, setNotifications] = useState([]); // Store product notifications
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       if (auth.currentUser) {
//         const userRef = doc(db, 'users', auth.currentUser.uid);
//         const userSnap = await getDoc(userRef);

//         if (userSnap.exists()) {
//           const userData = userSnap.data();
//           const notificationsEnabled = userData.notificationsEnabled || [];

//           // Fetch product details for each product ID in notificationsEnabled
//           const productPromises = notificationsEnabled.map(async (productId) => {
//             const productRef = doc(db, 'products', productId);
//             const productSnap = await getDoc(productRef);
//             if (productSnap.exists()) {
//               return productSnap.data(); // Return product data
//             }
//             return null;
//           });

//           // Wait for all product data to be fetched
//           const products = await Promise.all(productPromises);
//           const productNotifications = products.filter(product => product !== null); // Filter out null results
//           const notificationsWithStatus = productNotifications.map((product, index) => ({
//             slNo: index + 1,
//             title: product.name,
//             image: product.imageUrl,
//             cost: product.cost, // Added cost
//             notificationEnabled: true, // Assuming product notifications are enabled
//           }));

//           setNotifications(notificationsWithStatus); // Set notifications with product details
//         }
//       }
//       setLoading(false);
//     };

//     fetchNotifications();
//   }, []);

//   if (loading) {
//     return <div className="text-center text-lg">Loading...</div>;
//   }

//   if (notifications.length === 0) {
//     return (
//       <div className="text-center text-lg mt-12">
//         <p className="text-xl font-bold mt-6">Oh no, no notifications yet!</p>
//         <p className="text-gray-600 mt-4">You haven't enabled notifications for any products. Maybe it's time to check out some new ones!</p>
//         <p className="text-gray-500 mt-4">
//           <Link 
//             to="/dashboard"  // Assuming '/products' is the path where users can enable notifications
//             className="text-blue-500 hover:underline font-semibold"
//           >
//             Go here to enable notifications!
//           </Link>
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 space-y-4 max-w-6xl mx-auto">
//       <header className="text-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Your Product Notifications</h1>
//         <p className="text-gray-500 text-lg">Stay updated with the products you care about the most</p>
//       </header>

//       <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
//         <thead>
//           <tr className="bg-gray-100 text-gray-600">
//             <th className="px-4 py-3 text-left">Sl. No.</th>
//             <th className="px-4 py-3 text-left">Image</th>
//             <th className="px-4 py-3 text-left">Product Name</th>
//             <th className="px-4 py-3 text-left">Product Cost</th>
//             <th className="px-4 py-3 text-left">Enabled</th>
//           </tr>
//         </thead>
//         <tbody>
//           {notifications.map((notification, index) => (
//             <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
//               <td className="px-4 py-3">{notification.slNo}</td>
//               <td className="px-4 py-3">
//                 <img src={notification.image} alt={notification.title} className="w-16 h-16 rounded-md object-cover" />
//               </td>
//               <td className="px-4 py-3">{notification.title}</td>
//               <td className="px-4 py-3">₹ {notification.cost}</td>
//               <td className="px-4 py-3 pr-4">
//                 {notification.notificationEnabled ? (
//                   <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
//                     <FaBell size={18} />
//                   </button>
//                 ) : (
//                   <button className="p-2 bg-gray-300 text-white rounded-full hover:bg-gray-400">
//                     <FaBellSlash size={18} />
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default NotificationPage;
































import React, { useState, useEffect } from 'react';
import { db, auth } from "../firebase.config"; // Firestore and Auth instance
import { doc, getDoc } from 'firebase/firestore';
import { FaBell, FaBellSlash } from 'react-icons/fa'; // Icons for notifications
import { Link } from 'react-router-dom'; // Assuming React Router is being used for navigation

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]); // Store product notifications
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      if (auth.currentUser) {
        const userRef = doc(db, 'users', auth.currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          const notificationsEnabled = userData.notificationsEnabled || [];

          // Fetch product details for each product ID in notificationsEnabled
          const productPromises = notificationsEnabled.map(async (productId) => {
            const productRef = doc(db, 'products', productId);
            const productSnap = await getDoc(productRef);
            if (productSnap.exists()) {
              return productSnap.data(); // Return product data
            }
            return null;
          });

          // Wait for all product data to be fetched
          const products = await Promise.all(productPromises);
          const productNotifications = products.filter(product => product !== null); // Filter out null results
          const notificationsWithStatus = productNotifications.map((product, index) => ({
            slNo: index + 1,
            title: product.name,
            image: product.imageUrl,
            cost: product.cost, // Added cost
            notificationEnabled: true, // Assuming product notifications are enabled
          }));

          setNotifications(notificationsWithStatus); // Set notifications with product details
        }
      }
      setLoading(false);
    };

    fetchNotifications();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (notifications.length === 0) {
    return (
      <div className="text-center text-lg mt-12">
        <p className="text-xl font-bold mt-6">Oh no, no notifications yet!</p>
        <p className="text-gray-600 mt-4">You haven't enabled notifications for any products. Maybe it's time to check out some new ones!</p>
        <p className="text-gray-500 mt-4">
          <Link 
            to="/dashboard"  // Assuming '/products' is the path where users can enable notifications
            className="text-blue-500 hover:underline font-semibold"
          >
            Go here to enable notifications!
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4 max-w-6xl mx-auto">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Your Product Notifications</h1>
        <p className="text-gray-500 text-lg">Stay updated with the products you care about the most</p>
      </header>

      {/* Table for larger screens */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="px-4 py-3 text-left">Sl. No.</th>
              <th className="px-4 py-3 text-left">Image</th>
              <th className="px-4 py-3 text-left">Product Name</th>
              <th className="px-4 py-3 text-left">Product Cost</th>
              <th className="px-4 py-3 text-left">Enabled</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3">{notification.slNo}</td>
                <td className="px-4 py-3">
                  <img src={notification.image} alt={notification.title} className="w-16 h-16 rounded-md object-cover" />
                </td>
                <td className="px-4 py-3">{notification.title}</td>
                <td className="px-4 py-3">₹ {notification.cost}</td>
                <td className="px-4 py-3 pr-4">
                  {notification.notificationEnabled ? (
                    <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                      <FaBell size={18} />
                    </button>
                  ) : (
                    <button className="p-2 bg-gray-300 text-white rounded-full hover:bg-gray-400">
                      <FaBellSlash size={18} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card-like UI for smaller screens */}
      <div className="sm:hidden grid grid-cols-1 gap-4">
        {notifications.map((notification, index) => (
          <div key={index} className="border rounded-lg shadow-md p-4 flex flex-col items-start space-y-3 bg-white">
            <div className="flex justify-between w-full">
              <h3 className="text-lg font-semibold">{notification.title}</h3>
              {notification.notificationEnabled ? (
                <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                  <FaBell size={18} />
                </button>
              ) : (
                <button className="p-2 bg-gray-300 text-white rounded-full hover:bg-gray-400">
                  <FaBellSlash size={18} />
                </button>
              )}
            </div>
            <div className="w-full">
              <img src={notification.image} alt={notification.title} className="w-full h-40 object-cover rounded-md" />
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-sm text-gray-600">₹ {notification.cost}</span>
              <span className="text-sm text-gray-500">Sl. No: {notification.slNo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
