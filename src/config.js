import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAATZM39wPEw8VNyqR2ngHouT7xSaJcH1k",
  authDomain: "myapp-fdffc.firebaseapp.com",
  projectId: "myapp-fdffc",
  storageBucket: "myapp-fdffc.appspot.com",
  messagingSenderId: "987586735308",
  appId: "1:987586735308:web:c385c2d223f7be0499a669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
