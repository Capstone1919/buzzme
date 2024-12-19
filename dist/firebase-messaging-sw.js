importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyD6jXLv5JcZve3fGTkQPHQy3ryKEfGnDNk",
    authDomain: "capstone-e9184.firebaseapp.com",
    projectId: "capstone-e9184",
    storageBucket: "capstone-e9184.firebasestorage.app",
    messagingSenderId: "315326830560",
    appId: "1:315326830560:web:1e2d22a2cb038a6b317d85"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });