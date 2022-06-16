import refs from './refs';
import { onAuthStateChanged } from 'firebase/auth';
import { showFormLoginRegister } from './registerLoginForm';
import { auth } from './auth/firebaseAPP';

refs.logo.addEventListener('click', openHomePage);
refs.btnHome.addEventListener('click', openHomePage);
refs.btnMyLibrary.addEventListener('click', openMyLibrary);

export function openHomePage() {
   refs.libraryBtns.classList.add('display-none');
   refs.headerInput.classList.remove('display-none');
   refs.btnMyLibrary.classList.remove('current');
   refs.btnHome.classList.add('current');
   refs.header.classList.remove('library__background');
}

function openMyLibrary() {
   onAuthStateChanged(auth, user => {
      if (user) {
         refs.header.classList.add('library__background');
         refs.libraryBtns.classList.remove('display-none');
         refs.headerInput.classList.add('display-none');
         refs.btnMyLibrary.classList.add('current');
         refs.btnHome.classList.remove('current');
         return;
      } else {
         showFormLoginRegister();
      }
   });
}