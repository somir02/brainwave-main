// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCDx1apFpmrt6RiGXMdLHOT-ljjrBNicXs",
    authDomain: "brainwave-d44c1.firebaseapp.com",
    projectId: "brainwave-d44c1",
    storageBucket: "brainwave-d44c1.appspot.com",
    messagingSenderId: "116064552680",
    appId: "1:116064552680:web:0513fa9458661b2b26eb5d",
    measurementId: "G-VZVTDG47TV"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });