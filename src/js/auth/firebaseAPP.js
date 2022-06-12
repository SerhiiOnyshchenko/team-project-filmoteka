import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
   getAuth,
   onAuthStateChanged,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   connectAuthEmulator,
   AuthErrorCodes,
   signOut,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { showLoginError, hideLoginError } from '../registerLoginForm';
import refs from '../refs';

// import * as firebase from 'firebase/app';
// var firebaseui = require('firebaseui');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: 'AIzaSyDJl3YEGzyNFJZUYRjpN5Y1fjyAFUITL0A',
   authDomain: 'team-project-filmoteka-ec82b.firebaseapp.com',
   projectId: 'team-project-filmoteka-ec82b',
   storageBucket: 'team-project-filmoteka-ec82b.appspot.com',
   messagingSenderId: '596058482639',
   appId: '1:596058482639:web:8ef528cfa5b2f0ec0f14ba',
   measurementId: 'G-QKMSTBGVP1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099/');
// const provider = new GoogleAuthProvider();

// Initialize the FirebaseUI Widget using Firebase.
// const ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
//    signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       // List of OAuth providers supported.
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//       // firebase.auth.GithubAuthProvider.PROVIDER_ID,
//    ],
// });

// Create new account using email/password
const createAccount = async () => {
   const name = refs.txtNameRegister.value;
   const email = refs.txtEmailRegister.value;
   const password = refs.txtPasswordRegister.value;

   try {
      await createUserWithEmailAndPassword(auth, email, password);
   } catch (error) {
      console.log(`There was an error: ${error}`);
      showLoginError(error);
   }
};

// Login using email/password
const loginEmailPassword = async () => {
   const loginEmail = refs.txtEmailLogin.value;
   const loginPassword = refs.txtPasswordLogin.value;
   try {
      const userCredential = await signInWithEmailAndPassword(
         auth,
         loginEmail,
         loginPassword
      );
      console.log(userCredential.user);
      hideLoginError();
      // reset form
      refs.txtEmailLogin.value = '';
      refs.txtPasswordLogin.value = '';
   } catch (error) {
      console.log(error);
      showLoginError(error);
   }
};

// Log out
const logout = async () => {
   try {
      await signOut(auth);
      console.log('Sign-out successful');
   } catch (error) {}
};

// Monitor auth state
const monitorAuthState = async () => {
   onAuthStateChanged(auth, user => {
      if (user) {
         console.log(user);
         refs.loginUser.innerHTML = `You're logged in as ${user.displayName} (email: ${user.email}) `;
      } else {
         refs.loginUser.innerHTML = `You're not logged in.`;
      }
   });
};

refs.btnLogin.addEventListener('click', loginEmailPassword);
refs.btnSignup.addEventListener('click', createAccount);
refs.btnLogout.addEventListener('click', logout);

monitorAuthState();

// const db = getFirestore(app);

// signInWithPopup(auth, provider)
//    .then(result => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       console.log(user);
//       // ...
//    })
//    .catch(error => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//    });

// signInWithRedirect(auth, provider);
