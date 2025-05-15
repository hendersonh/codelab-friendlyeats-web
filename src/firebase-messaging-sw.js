// src/firebase-messaging-sw.js
// Scripts for Firebase products
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker
// "Default" Firebase app (initialized in the main app) is used.
firebase.initializeApp({
  apiKey: "AIzaSyArH242KXibjWarhrkgw9XQZyeuWupCEHY",
  authDomain: "friendlychat-bba62.firebaseapp.com",
  projectId: "friendlychat-bba62",
  storageBucket: "friendlychat-bba62.firebasestorage.app",
  messagingSenderId: "92416365237",
  appId: "1:92416365237:web:56fdc8307712936424a4fc"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

// Optional: Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Customize notification here
  // Check if payload and payload.notification exist
  if (payload && payload.notification) {
    const notificationTitle = payload.notification.title || 'New Message'; // Default title
    const notificationOptions = {
      body: payload.notification.body || 'You have a new message.', // Default body
      icon: '/assets/FriendlyChatLogo.png' // Optional: path to an icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  } else {
    console.log('[firebase-messaging-sw.js] Received background message without notification payload: ', payload);
    // Optionally, handle messages without a notification payload,
    // or show a default notification.
    const notificationTitle = 'New Message';
    const notificationOptions = {
      body: 'You have a new message.',
      icon: '/assets/FriendlyChatLogo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
  }
});