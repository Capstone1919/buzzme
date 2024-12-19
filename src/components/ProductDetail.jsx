
// import React, { useState, useEffect } from 'react';
// import { db, auth } from "../firebase.config"; // Firestore and Auth instance
// import { doc, getDoc, updateDoc } from 'firebase/firestore';
// import { useParams, useNavigate } from 'react-router-dom';
// import addNotification from 'react-push-notification';
// import toast, { Toaster } from 'react-hot-toast';

// const ProductDetail = () => {
//   const { productId } = useParams(); // Get productId from URL
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isPurchased, setIsPurchased] = useState(false); // Track if product is already purchased
//   const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false); // Track if notifications are enabled for the product
//   const [showModal, setShowModal] = useState(false); // Modal visibility state
//   const [isModalEnabled, setIsModalEnabled] = useState(false); // Modal toggle for enable/disable notifications

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const productRef = doc(db, 'products', productId);
//       const productSnap = await getDoc(productRef);

//       if (productSnap.exists()) {
//         setProduct(productSnap.data());
//       } else {
//         console.log("No such product!");
//       }
//       setLoading(false);
//     };

//     // Fetch product details and check if it is already purchased by the current user
//     const checkIfPurchased = async () => {
//       if (auth.currentUser) {
//         const userRef = doc(db, 'users', auth.currentUser.uid);
//         const userSnap = await getDoc(userRef);

//         if (userSnap.exists()) {
//           const userData = userSnap.data();
//           if (userData.purchasedItems && userData.purchasedItems.includes(productId)) {
//             setIsPurchased(true); // Product is already purchased by the user
//           }
//           // Check if notifications are enabled for the product
//           if (userData.notificationsEnabled && userData.notificationsEnabled.includes(productId)) {
//             setIsNotificationsEnabled(true); // Notifications are enabled for this product
//           }
//         }
//       }
//     };

//     fetchProduct();
//     checkIfPurchased();
//   }, [productId]);

//   const handlePurchase = async () => {
//     if (auth.currentUser) {
//       const userRef = doc(db, 'users', auth.currentUser.uid);
//       const userSnap = await getDoc(userRef);

//       if (userSnap.exists()) {
//         const userData = userSnap.data();
//         const purchasedItems = userData.purchasedItems || [];

//         // Check if the product is already in the purchased items
//         if (purchasedItems.includes(productId)) {
//           alert('You have already purchased this product.');
//           return; // Prevent duplicate purchase
//         }

//         // Add product to purchased items and update user document
//         purchasedItems.push(productId);
//         await updateDoc(userRef, { purchasedItems });
//         setIsPurchased(true); // Mark the product as purchased
//         alert('Product purchased successfully!');
//         navigate('/dashboard');
//       }
//     } else {
//       alert('Please log in to purchase.');
//       navigate('/login');
//     }
//   };
//   const showNotificationsNow = (isEnabled, productName) => {
//     const title = isEnabled ? 'Notifications Enabled' : 'Notifications Disabled';
//     const message = isEnabled
//       ? `You will now receive updates for ${productName}. Stay tuned for status updates on your order.`
//       : `You have unsubscribed from updates for ${productName}. We won't notify you about its status anymore.`;
//     const payload = {
//       notification: {
//         title: title,
//         body: message,
//         image: "https://cdn.icon-icons.com/icons2/3939/PNG/512/notification_bell_icon_250742.png", // You can customize the image as needed
//       }
//     };  
//     toast.custom((t) => (
//       <div
//         className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
//       >
//         <div className="flex-1 w-0 p-4">
//           <div className="flex items-start">
//             <div className="flex-shrink-0 pt-0.5">
//               <img
//                 className="h-10 w-10 rounded-full"
//                 src={payload.notification.image}
//                 alt=""
//               />
//             </div>
//             <div className="ml-3 flex-1">
//               <p className="text-sm font-medium text-gray-900">
//                 {payload.notification.title}  {/* Title: "Notification Enabled" or "Notification Disabled" */}
//               </p>
//               <p className="mt-1 text-sm text-gray-500">
//                 {payload.notification.body}  {/* Body: The message content */}
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex border-l border-gray-200">
//           <button
//             onClick={() => toast.dismiss(t.id)}
//             className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     ));
//     addNotification({
//       title: title,
//       subtitle: 'Thank You',
//       message: message,
//       theme: 'darkblue',
//       native: true, // OS will handle theming
//       duration: 5000,
//       icon: "https://cdn.icon-icons.com/icons2/3939/PNG/512/notification_bell_icon_250742.png"
//     });
//   };
  

//   const handleNotificationToggle = async () => {
//     if (auth.currentUser) {
//       const userRef = doc(db, 'users', auth.currentUser.uid);
//       const userSnap = await getDoc(userRef);
  
//       if (userSnap.exists()) {
//         const userData = userSnap.data();
//         const notificationsEnabled = userData.notificationsEnabled || [];
  
//         if (isNotificationsEnabled) {
//           // Remove the productId from notificationsEnabled
//           const updatedNotifications = notificationsEnabled.filter(id => id !== productId);
//           await updateDoc(userRef, { notificationsEnabled: updatedNotifications });
//           setIsNotificationsEnabled(false); // Set notifications disabled
//           showNotificationsNow(false, product.name); // Call with 'disabled' state and product name
//         } else {
//           // Add the productId to notificationsEnabled
//           notificationsEnabled.push(productId);
//           await updateDoc(userRef, { notificationsEnabled });
//           setIsNotificationsEnabled(true); // Set notifications enabled
//           showNotificationsNow(true, product.name); // Call with 'enabled' state and product name
//         }
//       }
//     }
//   };
  

//   if (loading) {
//     return <div className="text-center text-lg">Loading...</div>;
//   }

//   if (!product) {
//     return <div className="text-center text-lg">Product not found.</div>;
//   }

//   return (
//     <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{product.name}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="flex justify-center">
//           <img
//             src={product.imageUrl}
//             alt={product.name}
//             className="w-full h-auto max-w-md rounded-lg shadow-lg object-cover"
//           />
//         </div>
//         <div>
//           <p className="text-lg font-semibold text-gray-600 mb-2"><strong>Category:</strong> {product.category}</p>
//           <p className="text-lg font-semibold text-gray-600 mb-2"><strong>Cost:</strong> ${product.cost}</p>
//           <p className="text-lg text-gray-700 mb-4"><strong>Description:</strong> {product.description}</p>
//           <p className="text-lg text-yellow-500 mb-4">
//             <strong>Rating:</strong> {product.stars} Stars
//           </p>
//           <button
//             onClick={handlePurchase}
//             className={`w-full px-6 py-3 rounded-lg text-white font-semibold ${
//               isPurchased ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'
//             }`}
//             disabled={isPurchased} // Disable button if the product is purchased
//           >
//             {isPurchased ? 'Purchased' : 'Buy Now'}
//           </button>
//         </div>
//       </div>

//       {/* Notification Toggle Button placed below product details */}
//       <div className="mt-6">
//         <button
//           onClick={() => setShowModal(true)}
//           className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
//         >
//           {isNotificationsEnabled ? 'Disable Notifications' : 'Enable Notifications'}
//         </button>
//       </div>

//       {/* Notification Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
//             <p className="mb-4">Do you want to {isNotificationsEnabled ? 'disable' : 'enable'} notifications for this product?</p>
//             <div className="flex justify-between">
//               <button
//                 onClick={handleNotificationToggle}
//                 className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
//               >
//                 {isNotificationsEnabled ? 'Disable' : 'Enable'}
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetail;



























































import React, { useState, useEffect } from 'react';
import { db, auth } from "../firebase.config"; // Firestore and Auth instance
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import addNotification from 'react-push-notification';
import toast, { Toaster } from 'react-hot-toast';

const ProductDetail = () => {
  const { productId } = useParams(); // Get productId from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPurchased, setIsPurchased] = useState(false); // Track if product is already purchased
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false); // Track if notifications are enabled for the product
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [isModalEnabled, setIsModalEnabled] = useState(false); // Modal toggle for enable/disable notifications

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, 'products', productId);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        setProduct(productSnap.data());
      } else {
        console.log("No such product!");
      }
      setLoading(false);
    };

    // Fetch product details and check if it is already purchased by the current user
    const checkIfPurchased = async () => {
      if (auth.currentUser) {
        const userRef = doc(db, 'users', auth.currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          if (userData.purchasedItems && userData.purchasedItems.includes(productId)) {
            setIsPurchased(true); // Product is already purchased by the user
          }
          // Check if notifications are enabled for the product
          if (userData.notificationsEnabled && userData.notificationsEnabled.includes(productId)) {
            setIsNotificationsEnabled(true); // Notifications are enabled for this product
          }
        }
      }
    };

    fetchProduct();
    checkIfPurchased();
  }, [productId]);

  const handlePurchase = async () => {
    if (auth.currentUser) {
      const userRef = doc(db, 'users', auth.currentUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const purchasedItems = userData.purchasedItems || [];

        // Check if the product is already in the purchased items
        if (purchasedItems.includes(productId)) {
          alert('You have already purchased this product.');
          return; // Prevent duplicate purchase
        }

        // Add product to purchased items and update user document
        purchasedItems.push(productId);
        await updateDoc(userRef, { purchasedItems });
        setIsPurchased(true); // Mark the product as purchased
        alert('Product purchased successfully!');
        navigate('/dashboard');
      }
    } else {
      alert('Please log in to purchase.');
      navigate('/login');
    }
  };
  const showNotificationsNow = (isEnabled, productName) => {
    const title = isEnabled ? 'Notifications Enabled' : 'Notifications Disabled';
    const message = isEnabled
      ? `You will now receive updates for ${productName}. Stay tuned for status updates on your order.`
      : `You have unsubscribed from updates for ${productName}. We won't notify you about its status anymore.`;
    const payload = {
      notification: {
        title: title,
        body: message,
        image: "https://cdn.icon-icons.com/icons2/3939/PNG/512/notification_bell_icon_250742.png", // Customize the image as needed
      }
    };  
    toast.custom((t) => (
      <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src={payload.notification.image}
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {payload.notification.title}  {/* Title: "Notification Enabled" or "Notification Disabled" */}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {payload.notification.body}  {/* Body: The message content */}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
    addNotification({
      title: title,
      subtitle: 'Thank You',
      message: message,
      theme: 'darkblue',
      native: true, // OS will handle theming
      duration: 5000,
      icon: "https://cdn.icon-icons.com/icons2/3939/PNG/512/notification_bell_icon_250742.png"
    });
  };
  

  const handleNotificationToggle = async () => {
    if (auth.currentUser) {
      const userRef = doc(db, 'users', auth.currentUser.uid);
      const userSnap = await getDoc(userRef);
  
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const notificationsEnabled = userData.notificationsEnabled || [];
  
        if (isNotificationsEnabled) {
          // Remove the productId from notificationsEnabled
          const updatedNotifications = notificationsEnabled.filter(id => id !== productId);
          await updateDoc(userRef, { notificationsEnabled: updatedNotifications });
          setIsNotificationsEnabled(false); // Set notifications disabled
          showNotificationsNow(false, product.name); // Call with 'disabled' state and product name
        } else {
          // Add the productId to notificationsEnabled
          notificationsEnabled.push(productId);
          await updateDoc(userRef, { notificationsEnabled });
          setIsNotificationsEnabled(true); // Set notifications enabled
          showNotificationsNow(true, product.name); // Call with 'enabled' state and product name
        }
      }
    }
  };
  

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center text-lg">Product not found.</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center mb-4 md:mb-0">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-600 mb-2"><strong>Category:</strong> {product.category}</p>
          <p className="text-lg font-semibold text-gray-600 mb-2"><strong>Cost:</strong> ${product.cost}</p>
          <p className="text-lg text-gray-700 mb-4"><strong>Description:</strong> {product.description}</p>
          <p className="text-lg text-yellow-500 mb-4">
            <strong>Rating:</strong> {product.stars} Stars
          </p>
          <button
            onClick={handlePurchase}
            className={`w-full px-6 py-3 rounded-lg text-white font-semibold ${isPurchased ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'}`}
            disabled={isPurchased} // Disable button if the product is purchased
          >
            {isPurchased ? 'Purchased' : 'Buy Now'}
          </button>
        </div>
      </div>

      {/* Notification Toggle Button placed below product details */}
      <div className="mt-6">
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          {isNotificationsEnabled ? 'Disable Notifications' : 'Enable Notifications'}
        </button>
      </div>

      {/* Notification Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
            <p className="mb-4">Do you want to {isNotificationsEnabled ? 'disable' : 'enable'} notifications for this product?</p>
            <div className="flex justify-between">
              <button
                onClick={handleNotificationToggle}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              >
                {isNotificationsEnabled ? 'Disable' : 'Enable'}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
