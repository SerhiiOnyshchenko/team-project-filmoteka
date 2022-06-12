// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
   getAuth,
   onAuthStateChanged,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   connectAuthEmulator,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { firebaseui } from 'firebaseui';
// import { firebase } from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// refs
const btnLogin = document.getElementById('btnLogin');
const txtEmailLogin = document.getElementById('txtEmailLogin');
const txtPasswordLogin = document.getElementById('txtPasswordLogin');
const txtNameLogin = document.getElementById('txtNameLogin');

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
const analytics = getAnalytics(app);
const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099/');

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

const loginEmailPassword = async () => {
   const loginEmail = txtEmailLogin.value;
   const loginPassword = txtPasswordLogin.value;
   try {
      const userCredential = await signInWithEmailAndPassword(
         auth,
         loginEmail,
         loginPassword
      );
      console.log(userCredential.user);
   } catch (error) {
      console.log(error);
      function showLoginError(error) {}
   }

   // .catch(error => {
   //    const errorCode = error.code;
   //    const errorMessage = error.message;
   // });
};

btnLogin.addEventListener('click', loginEmailPassword);

// const provider = new GoogleAuthProvider();
// const db = getFirestore(app);

// {
//    // authentication state observer
//    onAuthStateChanged(auth, user => {
//       if (user !== null) {
//          console.log('Logged in!');
//          const uid = user.uid;
//       } else {
//          console.log('No user');
//       }
//    });

//    // register new user
//    createUserWithEmailAndPassword(auth, email, password)
//       .then(userCredential => {
//          // Signed in
//          const user = userCredential.user;
//          // ...
//       })
//       .catch(error => {
//          const errorCode = error.code;
//          const errorMessage = error.message;
//          // ..
//       });

//    // Sing in user
//    signInWithEmailAndPassword(auth, email, password)
//       .then(userCredential => {
//          // Signed in
//          const user = userCredential.user;
//          // ...
//       })
//       .catch(error => {
//          const errorCode = error.code;
//          const errorMessage = error.message;
//       });

//    signInWithPopup(auth, provider)
//       .then(result => {
//          // This gives you a Google Access Token. You can use it to access the Google API.
//          const credential = GoogleAuthProvider.credentialFromResult(result);
//          const token = credential.accessToken;
//          // The signed-in user info.
//          const user = result.user;
//          // ...
//       })
//       .catch(error => {
//          // Handle Errors here.
//          const errorCode = error.code;
//          const errorMessage = error.message;
//          // The email of the user's account used.
//          const email = error.customData.email;
//          // The AuthCredential type that was used.
//          const credential = GoogleAuthProvider.credentialFromError(error);
//          // ...
//       });

//    signInWithRedirect(auth, provider);
// }

// sing out
// signOut(auth)
//    .then(() => {
//       console.log('Sign-out successful');
//       // Sign-out successful.
//    })
//    .catch(error => {
//       // An error happened.
//    });
