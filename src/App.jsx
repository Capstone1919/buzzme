import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import HowItWorks from './components/HowItWorks';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import { auth, messaging } from "./firebase.config";
import NotificationPage from './components/NotificationPage';
import ProductDetail from './components/ProductDetail';
import { getAuth, getIdToken } from "firebase/auth";
import { generateToken } from "./firebase.config";
import { onMessage } from 'firebase/messaging';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
      // toast(payload.notification.body);
      toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
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
                {payload.notification.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                {payload.notification.body}
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
      ))

    })
  }, []);


  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check if the user is authenticated on app load
  useEffect(() => {
    // Retrieve authentication status from localStorage
    const storedAuthStatus = localStorage.getItem('isAuthenticated');

    if (storedAuthStatus === 'true') {
      setIsAuthenticated(true); // If authenticated, set state to true
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is logged in
        localStorage.setItem('isAuthenticated', 'true'); // Store authenticated status in localStorage
      } else {
        setIsAuthenticated(false); // No user, not authenticated
        localStorage.setItem('isAuthenticated', 'false'); // Store unauthenticated status in localStorage
      }
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);

  // Handle Logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsAuthenticated(false); // Set authenticated state to false
        localStorage.setItem('isAuthenticated', 'false'); // Store unauthenticated status
        navigate('/login'); // Redirect to login after logout
      })
      .catch((error) => {
        console.error("Error during logout: ", error);
      });
  };

  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Toaster position='top-right' />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Redirect to login if user tries to access dashboard without logging in */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/product/:productId"
          element={isAuthenticated ? <ProductDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="/notifications"
          element={isAuthenticated ? <NotificationPage /> : <Navigate to="/login" />}
        />
        {/* Redirect to login if non-user tries to access profile */}
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile userData={{}} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
