import refs from './refs';
import { AuthErrorCodes } from 'firebase/auth';

refs.signUpButton.addEventListener('click', () => {
   refs.container.classList.add('right-panel-active');
});

refs.signInButton.addEventListener('click', () => {
   refs.container.classList.remove('right-panel-active');
});

refs.formLoginRegister.addEventListener('click', e => {
   if (e.target === e.currentTarget) {
      resetFform();
      hideFormLoginRegister();
   }
});
// refs.btnMyLibrary.addEventListener('click', e => {
//    showFormLoginRegister();
// });

export const resetFform = () => {
   refs.registerFormSignIn.reset();
   refs.registerFormSignUp.reset();
};

export const showFormLoginRegister = () => {
   refs.formLoginRegister.style.display = 'flex';
   window.addEventListener('keydown', hideFormLoginRegisterByKey);
};
const hideFormLoginRegisterByKey = e => {
   if (e.key === 'Escape') {
      hideFormLoginRegister();
      window.removeEventListener('keydown', hideFormLoginRegisterByKey);
   }
};
export const hideFormLoginRegister = () => {
   refs.formLoginRegister.style.display = 'none';
};

export const showApp = () => {
   refs.login.style.display = 'none';
   refs.app.style.display = 'block';
};

export const hideLoginError = () => {
   refs.divLoginError.style.display = 'none';
   refs.divLoginError.innerHTML = '';
};

export const showLoginError = error => {
   refs.divLoginError.style.display = 'block';
   if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      refs.divLoginError.innerHTML = `Wrong password. Try again.`;
   } else {
      refs.divLoginError.innerHTML = `Error: ${error.message}`;
   }
};

export const showLoginState = user => {
   refs.lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `;
};

hideLoginError();
