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
   cardMoveDetail: document.getElementById('cardMoveDetail'),
   cardMoveAuthors: document.getElementById('cardMoveAuthors'),
   showAuthors: document.getElementById('showAuthors'),
   modalMovieBackdrop: document.getElementById('modalMovieBackdrop'),

   // register lgi form
   signUpButton: document.getElementById('signUpBtn'),
   signInButton: document.getElementById('signInBtn'),
   container: document.getElementById('container'),

   registerFormSignIn: document.getElementById('registerFormSignIn'),
   registerFormSignUp: document.getElementById('registerFormSignUp'),
   btnLoginHeader: document.getElementById('btnLoginHeader'),
   btnLogoutHeader: document.getElementById('btnLogoutHeader'),
   userMenu: document.getElementById('userMenu'),
   firstLetter: document.getElementById('firstLetter'),
   userMenuName: document.getElementById('userMenuName'),

   socialBtnGoogleLogin: document.getElementById('socialBtnGoogleLogin'),
   socialBtnGoogleRegister: document.getElementById('socialBtnGoogleRegister'),

   formLoginRegister: document.getElementById('formLoginRegister'),

   loginUser: document.getElementById('loginUser'),

   divLoginError: document.getElementById('divLoginError'),
   divRegisterError: document.getElementById('divRegisterError'),
   lblLoginErrorMessage: document.getElementById('lblLoginErrorMessage'),
   registerFormCloseBtn: document.getElementById('registerFormCloseBtn'),

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

   //loader
   preloader: document.getElementById('preloader'),

   //trailer
   trailerBtn: document.getElementById('trailer'),
   trailer: document.getElementById('trailer-modal-wrapper'),
   trailerWrap: document.getElementById('trailer-modal'),
};

export default refs;
