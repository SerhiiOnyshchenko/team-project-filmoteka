import refs from './refs';
import { onAuthStateChanged } from 'firebase/auth';
import { showFormLoginRegister } from './registerLoginForm';
import { auth } from './auth/firebaseAPP';
import { searchTrendFilms } from './searchTrendFilms';

refs.logo.addEventListener('click', openHomePage);
refs.btnHome.addEventListener('click', openHomePage);
refs.btnMyLibrary.addEventListener('click', openMyLibrary);

export function openHomePage() {
   refs.libraryBtns.classList.add('display-none');
   refs.headerInput.classList.remove('display-none');
   refs.btnMyLibrary.classList.remove('current');
   refs.btnHome.classList.add('current');
   refs.header.classList.remove('library__background');

   searchTrendFilms();
}

function openMyLibrary() {
   refs.galleryList.innerHTML = '';
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
refs.firstLetter.addEventListener('click', toggleMenu);
function toggleMenu(e) {
   if (e.target === e.currentTarget) {
      refs.userMenu.classList.toggle('active-user-menu');
   }
}
