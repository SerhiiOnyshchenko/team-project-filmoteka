import { initializeApp } from 'firebase/app';
import {
   getAuth,
   onAuthStateChanged,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   signOut,
   updateProfile,
   signInWithRedirect,
} from 'firebase/auth';
import {
   showLoginError,
   hideLoginError,
   resetFform,
   hideFormLoginRegister,
   showFormLoginRegister,
} from '../registerLoginForm';
import refs from '../refs';
import { getDatabase, ref, set } from 'firebase/database';
import { openHomePage } from './../change-header';

// standart config
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
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const loginWithGoogle = async () => {
   try {
      await signInWithRedirect(auth, provider);
   } catch (error) {
      console.log(`There was an error: ${error}`);
   }
};

// Create new account using email/password
const createAccount = async (displayName, email, password) => {
   try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
         displayName,
      });
      resetFform();
      hideFormLoginRegister();
   } catch (error) {
      console.log(`There was an error: ${error}`);
      showLoginError(error);
   }
};

// Login using email/password
const loginEmailPassword = async (email, password) => {
   try {
      const userCredential = await signInWithEmailAndPassword(
         auth,
         email,
         password
      );
      hideLoginError();
      resetFform();
      hideFormLoginRegister();
   } catch (error) {
      console.log(error);
      showLoginError(error);
   }
};

// Log out
const logout = async () => {
   try {
      await signOut(auth);
      showFormLoginRegister();
      openHomePage();
   } catch (error) {}
};

// Monitor auth state
const monitorAuthState = async () => {
   onAuthStateChanged(auth, user => {
      if (user) {
         console.log(user);
         refs.loginUser.innerHTML = `(email: ${user.email}) `;
         refs.btnLogout.removeEventListener('click', showFormLoginRegister);
         refs.btnLogout.addEventListener('click', logout);
         refs.btnLogout.innerHTML = 'Logout';
      } else {
         // showFormLoginRegister();
         refs.loginUser.innerHTML = `You're not logged in.`;
         refs.btnLogout.removeEventListener('click', logout);
         refs.btnLogout.addEventListener('click', showFormLoginRegister);
         refs.btnLogout.innerHTML = 'Login';
      }
   });
};

refs.registerFormSignIn.addEventListener('submit', e => {
   e.preventDefault();
   const email = e.target.email.value;
   const password = e.target.password.value;
   loginEmailPassword(email, password);
});
refs.registerFormSignUp.addEventListener('submit', e => {
   e.preventDefault();
   const displayName = e.target.name.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
   createAccount(displayName, email, password);
});
refs.btnLogout.addEventListener('click', logout);
// refs.socialBtnGoogleLogin.addEventListener('click', loginWithGoogle);
// refs.socialBtnGoogleRegister.addEventListener('click', loginWithGoogle);

monitorAuthState();

// test db

refs.btnMyLibrary.addEventListener('click', () => {
   onAuthStateChanged(auth, user => {
      if (user) {
         console.log('open my labary');
         return;
      } else {
         showFormLoginRegister();
      }
   });
});
