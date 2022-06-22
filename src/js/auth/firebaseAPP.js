import { initializeApp } from 'firebase/app';
import {
   getAuth,
   onAuthStateChanged,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
} from 'firebase/auth';
import {
   showLoginError,
   hideLoginError,
   resetFform,
   hideFormLoginRegister,
   showFormLoginRegister,
   showRegisterError,
   hideRegisterError,
} from '../registerLoginForm';
import refs from '../refs';
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

// Create new account using email/password
const createAccount = async (displayName, email, password) => {
   try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
         displayName,
      });
      hideRegisterError();
      resetFform();
      hideFormLoginRegister();
   } catch (error) {
      console.dir(error);
      showRegisterError(error);
   }
};

// Login using email/password
const loginEmailPassword = async (email, password) => {
   try {
      await signInWithEmailAndPassword(auth, email, password);
      hideLoginError();
      resetFform();
      hideFormLoginRegister();
   } catch (error) {
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
         refs.loginUser.innerHTML = '';
         refs.btnLoginHeader.style.display = 'none';
         refs.userMenu.style.display = 'flex';
         refs.firstLetter.innerHTML = user.displayName.slice(0, 1);
         refs.userMenuName.innerHTML = user.displayName.toUpperCase();
      } else {
         refs.loginUser.innerHTML = `You're not logged in.`;
         refs.btnLoginHeader.style.display = 'block';
         refs.userMenu.style.display = 'none';
         refs.userMenu.classList.remove('active-user-menu');
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
   const displayName = e.target.name.value.trim();
   const email = e.target.email.value;
   const password = e.target.password.value;
   if (!validateEmail(email)) {
      const error = { message: 'No validate email' };
      showRegisterError(error);
   } else if (!displayName) {
      const error = { message: 'No validate Name' };
      showRegisterError(error);
   } else {
      createAccount(displayName, email, password);
   }
});

refs.btnLogoutHeader.addEventListener('click', logout);
refs.btnLoginHeader.addEventListener('click', showFormLoginRegister);

monitorAuthState();

const validateEmail = email => {
   return String(email)
      .toLowerCase()
      .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};
