import refs from './refs';

refs.logo.addEventListener('click', openHomePage);
refs.btnHome.addEventListener('click', openHomePage);

function openHomePage() {
   refs.libraryBtns.classList.add('display-none');
   refs.headerInput.classList.remove('display-none');
   refs.btnMyLibrary.classList.remove('current');
   refs.btnHome.classList.add('current');
   refs.header.classList.remove('library__background');
}
