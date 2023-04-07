importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyA4a0eZTdRiVAelywN5c6VJBDDovJTg9j4",
    authDomain: "nutriasia-5ee8f.firebaseapp.com",
    projectId: "nutriasia-5ee8f",
    storageBucket: "nutriasia-5ee8f.appspot.com",
    messagingSenderId: "804436261156",
    appId: "1:804436261156:web:e825e3981a44833190dbb1",
    measurementId: "G-6FZBCWVBM7"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload){
    console.log(payload);
    const notification = payload;
    const notificationOptions = {
        body:notification.data.text
    };
    return self.registration.showNotification(payload.data.text,notificationOptions);
})