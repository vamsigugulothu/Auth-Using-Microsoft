import React, { useEffect, useState } from "react";


import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";
// import firebase from "firebase/app";
import * as firebase from 'firebase/app'
import "firebase/auth";


const config = {
  apiKey: "AIzaSyAATZM39wPEw8VNyqR2ngHouT7xSaJcH1k",
  authDomain: "myapp-fdffc.firebaseapp.com",
  projectId: "myapp-fdffc",
  storageBucket: "myapp-fdffc.appspot.com",
  messagingSenderId: "987586735308",
  appId: "1:987586735308:web:c385c2d223f7be0499a669"
};

// Initialize Firebase app
firebase.initializeApp(config);

const provider = new OAuthProvider("microsoft.com");
const auth = getAuth();


function App() {
  const [user, setUser] = useState(null);
  console.log("🚀 ~ file: App.js:25 ~ App ~ user:", user)
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  console.log("===>", token);

  // console.log("token", token);
  useEffect(() => {
    // Handle user authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const signInWithMicrosoft = () => {
    // const auth = getAuth();
    // const provider = new OAuthProvider("microsoft.com");

    // Sign in with Microsoft ADB2C provider
    signInWithPopup(auth, provider)
      .then((result) => {
        // User is signed in.
        const user = result.user;
        setUser(user);
        setToken(result._tokenResponse.oauthAccessToken)
      })
      .catch((error) => {
        setError(error);
      });
  };

  const signOut = () => {
    const auth = getAuth();

    // Sign out the user
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Hello, {user.displayName}!</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      ) : (
        <div>
          <p>You are not signed in.</p>
          <button onClick={signInWithMicrosoft}>Sign in with Microsoft</button>
        </div>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;