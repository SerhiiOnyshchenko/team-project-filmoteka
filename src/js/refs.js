const refs = {
   //foter modal
   openModalBtn: document.querySelector('#footer-link'),
   closeModalBtn: document.querySelector('#footerModalClose'),
   footerModal: document.querySelector('#footerModal'),
   bodyScroll: document.querySelector('body'),

   // modal
   galleryList: document.getElementById('gallery-list'),
   modal: document.querySelector('.modal-content'),
   backdrop: document.querySelector('.backdrop'),
   btnClose: document.querySelector('.btn-close'),

   // register lgi form
   signUpButton: document.getElementById('signUpBtn'),
   signInButton: document.getElementById('signInBtn'),
   container: document.getElementById('container'),

   registerFormSignIn: document.getElementById('registerFormSignIn'),
   registerFormSignUp: document.getElementById('registerFormSignUp'),
   btnLogout: document.getElementById('btnLogout'),

   socialBtnGoogleLogin: document.getElementById('socialBtnGoogleLogin'),
   socialBtnGoogleRegister: document.getElementById('socialBtnGoogleRegister'),

   formLoginRegister: document.getElementById('formLoginRegister'),

   loginUser: document.getElementById('loginUser'),

   divLoginError: document.getElementById('divLoginError'),
   lblLoginErrorMessage: document.getElementById('lblLoginErrorMessage'),

   // header toggle
   logo: document.getElementById('logo__js'),
   btnHome: document.getElementById('home__js'),
   btnMyLibrary: document.getElementById('my-library__js'),
   header: document.getElementById('header'),
   libraryBtns: document.getElementById('header__btns'),
   headerInput: document.getElementById('header__form'),
   inputError: document.getElementById('input-error'),

   //  feature/FT-10
   searchForm: document.getElementById('form'),
   searchBtn: document.querySelector('.form__btn'),
   galleryList: document.getElementById('gallery-list'),

   // pagination
   paginationList: document.querySelector('#js-pagination__list'),
   //    paginationBtn: document.querySelector('.pagination__list'),

   //btnScrollUp
   scrollToTopEl: document.querySelector('#scroll-to-top'),
};

export default refs;
