// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDQ_z7uJmZP8-L5TvR7uQaGUaKKVrfdfnY",
  authDomain: "cloudstack-edd72.firebaseapp.com",
  projectId: "cloudstack-edd72",
  storageBucket: "cloudstack-edd72.appspot.com",
  messagingSenderId: "438641659993",
  appId: "1:438641659993:web:d891b88571901714f4a148"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});