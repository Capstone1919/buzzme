// import React, { useState, useEffect } from 'react';
// import { db } from "../firebase.config";  
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [notificationEnabled, setNotificationEnabled] = useState(false);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsRef = collection(db, 'products');
//       const q = query(productsRef);
//       const querySnapshot = await getDocs(q);
//       const productsList = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productsList);
//       setFilteredProducts(productsList); // Initially show all products
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const results = products.filter(product =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedCategory ? product.category === selectedCategory : true)
//     );
//     setFilteredProducts(results);
//   }, [searchTerm, selectedCategory, products]);

//   const handleViewProduct = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   const handleCategoryFilterChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className="p-6">
//       {/* Search and Filter Section */}
//       <div className="flex justify-between items-center mb-4">
//         <input
//           type="text"
//           placeholder="Search products"
//           className="p-2 border border-gray-300 rounded"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <select
//           className="p-2 border border-gray-300 rounded"
//           value={selectedCategory}
//           onChange={handleCategoryFilterChange}
//         >
//           <option value="">All Categories</option>
//           <option value="home-appliances">Home Appliances</option>
//           <option value="electronics">Electronics</option>
//           {/* Add more categories if necessary */}
//         </select>
//       </div>

//       {/* Product Table */}
//       <table className="table-auto w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 text-left">Image</th>
//             <th className="px-4 py-2 text-left">Name</th>
//             <th className="px-4 py-2 text-left">Category</th>
//             <th className="px-4 py-2 text-left">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProducts.map((product) => (
//             <tr key={product.id}>
//               <td className="px-4 py-2">
//                 <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover" />
//               </td>
//               <td className="px-4 py-2">{product.name}</td>
//               <td className="px-4 py-2">{product.category}</td>
//               <td className="px-4 py-2">
//                 <button
//                   onClick={() => handleViewProduct(product.id)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//                 >
//                   View Product
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;










































import React, { useState, useEffect } from 'react';
import { db } from "../firebase.config";  
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsRef = collection(db, 'products');
      const q = query(productsRef);
      const querySnapshot = await getDocs(q);
      const productsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
      setFilteredProducts(productsList); // Initially show all products
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? product.category === selectedCategory : true)
    );
    setFilteredProducts(results);
  }, [searchTerm, selectedCategory, products]);

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleCategoryFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="p-6">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search products"
          className="p-2 border border-gray-300 rounded w-full md:w-auto"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          className="p-2 border border-gray-300 rounded w-full md:w-auto"
          value={selectedCategory}
          onChange={handleCategoryFilterChange}
        >
          <option value="">All Categories</option>
          <option value="home-appliances">Home Appliances</option>
          <option value="electronics">Electronics</option>
          {/* Add more categories if necessary */}
        </select>
      </div>

      {/* Product Display for Large Screens (Table) */}
      <div className="hidden md:block">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="px-4 py-2">
                  <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover" />
                </td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleViewProduct(product.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                  >
                    View Product
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Product Display for Small Screens (Cards) */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
            <button
              onClick={() => handleViewProduct(product.id)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
