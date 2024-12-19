import { collection, addDoc } from "firebase/firestore";  // Import required methods

import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyD6jXLv5JcZve3fGTkQPHQy3ryKEfGnDNk",
  authDomain: "capstone-e9184.firebaseapp.com",
  projectId: "capstone-e9184",
  storageBucket: "capstone-e9184.firebasestorage.app",
  messagingSenderId: "315326830560",
  appId: "1:315326830560:web:1e2d22a2cb038a6b317d85"
};
 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);
  if(permission == 'granted'){
    const token = await getToken(messaging,{
      vapidKey: "BHfqRrFX7kWnkUJ0YTpBqc7KZAYuCTG5Os-gpz5191XGjhD_QmSuWOCT-TMkartRShXVP3wRGq2TGhfOekVoOI0"
    });
    console.log(token);
    if (token) {
      await addTokenToFirestore(token);
    }
  };

}

// Function to add the token to Firestore in the "devices" collection
const addTokenToFirestore = async (token) => {
  try {
    const devicesCollectionRef = collection(db, "devices");
 
    await addDoc(devicesCollectionRef, {
      token: token
    });

    console.log("Token added to Firestore successfully");
  } catch (error) {
    console.error("Error adding token to Firestore:", error);
  }
}
export {auth, db, messaging}