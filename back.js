<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAqw4WVDevh3ZqQwRz_RDddtKFpUcZAVh8",
    authDomain: "portfolio-5eba2.firebaseapp.com",
    projectId: "portfolio-5eba2",
    storageBucket: "portfolio-5eba2.appspot.com",
    messagingSenderId: "154931123420",
    appId: "1:154931123420:web:57c8adaf2a0c199026d019",
    measurementId: "G-D6G77W82YV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>