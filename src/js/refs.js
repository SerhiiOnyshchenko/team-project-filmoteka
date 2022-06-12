const refs = {

    //foter modal
    openModalBtn: document.querySelector('.footer-link'),
    closeModalBtn: document.querySelector('.footerModalClose'),
    footerModal: document.querySelector('[data-footerModal]'),
    bodyScroll: document.querySelector('body'),
  
   // modal
   modal: document.querySelector('.modal-content'),
   backdrop: document.querySelector('.backdrop'),
   btnClose: document.querySelector('.btn-close'),

   // register lgi form
   signUpButton: document.getElementById('signUp'),
   signInButton: document.getElementById('signIn'),
   container: document.getElementById('container'),

  // header toggle
   logo: document.getElementById('logo__js'),
   btnHome: document.getElementById('home__js'),
   btnMyLibrary: document.getElementById('my-library__js'),
   header: document.getElementById('header'),
   libraryBtns: document.getElementById('header__btns'),
   headerInput: document.getElementById('header__form'),

};

export default refs;
