import refs from './refs';
import { onAuthStateChanged } from 'firebase/auth';
import { showFormLoginRegister } from './registerLoginForm';
import { auth } from './auth/firebaseAPP';
import { searchTrendFilms } from './searchTrendFilms';
import { addBtnMyLibrary } from './createMyLibraryMarkup';

refs.logo.addEventListener('click', openHomePage);
refs.btnHome.addEventListener('click', openHomePage);
refs.btnMyLibrary.addEventListener('click', openMyLibrary);

export function openHomePage(e) {
   e.preventDefault();
   if (window.location.search === '') {
      return;
   }
   const searchParams = window.location.search.split('?')[1].split('&');
   if (
      searchParams[0] === 'type=popular' &&
      searchParams[1].split('=')[1] === '1'
   ) {
      return;
   }
   refs.libraryBtns.classList.add('display-none');
   refs.headerInput.classList.remove('display-none');
   refs.btnMyLibrary.classList.remove('current');
   refs.btnHome.classList.add('current');
   refs.header.classList.remove('library__background');
   searchTrendFilms();
}

function openMyLibrary() {
   onAuthStateChanged(auth, user => {
      if (user) {
         window.history.replaceState({}, '', '?myLibrary');
         addBtnMyLibrary();
         refs.galleryList.innerHTML = '';
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
      refs.userMenu.classList.add('active-user-menu');
      window.addEventListener('keydown', closeMenuEscKey);
      document.querySelector('.user-menu__box').addEventListener('click', e => {
         if (e.currentTarget === e.target) {
            refs.userMenu.classList.remove('active-user-menu');
            window.removeEventListener('keydown', closeMenuEscKey);
         }
      });
   }
}

const closeMenuEscKey = e => {
   if (e.code === 'Escape') {
      refs.userMenu.classList.remove('active-user-menu');
      window.removeEventListener('keydown', closeMenuEscKey);
   }
};

document.addEventListener('DOMContentLoaded', () => {
   if (window.location.search === '') {
      return;
   }
   const searchParams = window.location.search.split('?')[1].split('&');
   if (searchParams[0] === 'myLibrary') {
      openMyLibrary();
   }
});
