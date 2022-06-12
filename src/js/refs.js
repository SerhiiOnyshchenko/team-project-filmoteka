const refs = {
   modal: document.querySelector('.modal-content'),
   backdrop: document.querySelector('.backdrop'),
   btnClose: document.querySelector('.btn-close'),

   // register lgi form
   signUpButton: document.getElementById('signUp'),
   signInButton: document.getElementById('signIn'),
   container: document.getElementById('container'),

   btnLogin: document.getElementById('btnLogin'),
   btnSignup: document.getElementById('btnSignup'),
   btnLogout: document.getElementById('btnLogout'),

   txtEmailLogin: document.getElementById('txtEmailLogin'),
   txtPasswordLogin: document.getElementById('txtPasswordLogin'),

   txtNameRegister: document.getElementById('txtNameRegister'),
   txtEmailRegister: document.getElementById('txtEmailRegister'),
   txtPasswordRegister: document.getElementById('txtPasswordRegister'),

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
};

export default refs;
