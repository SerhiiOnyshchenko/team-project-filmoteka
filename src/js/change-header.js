import refs from './refs';

refs.logo.addEventListener('click', openHomePage);
refs.btnHome.addEventListener('click', openHomePage);
refs.btnMyLibrary.addEventListener('click', openMyLibrary);

function openHomePage() {
   refs.libraryBtns.classList.add('display-none');
   refs.headerInput.classList.remove('display-none');
   refs.btnMyLibrary.classList.remove('current');
   refs.btnHome.classList.add('current');
   refs.header.classList.remove('library__background');
}

function openMyLibrary() {
   refs.header.classList.add('library__background');
   refs.libraryBtns.classList.remove('display-none');
   refs.headerInput.classList.add('display-none');
   refs.btnMyLibrary.classList.add('current');
   refs.btnHome.classList.remove('current');
}

