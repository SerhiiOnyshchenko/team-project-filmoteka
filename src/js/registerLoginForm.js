import refs from './refs';
import { AuthErrorCodes } from 'firebase/auth';

refs.signUpButton.addEventListener('click', () => {
   refs.container.classList.add('right-panel-active');
});

refs.signInButton.addEventListener('click', () => {
   refs.container.classList.remove('right-panel-active');
});

export const showLoginForm = () => {
   refs.login.style.display = 'block';
   refs.app.style.display = 'none';
};

export const showApp = () => {
   refs.login.style.display = 'none';
   refs.app.style.display = 'block';
};

export const hideLoginError = () => {
   refs.divLoginError.style.display = 'none';
   refs.lblLoginErrorMessage.innerHTML = '';
};

export const showLoginError = error => {
   refs.divLoginError.style.display = 'block';
   if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      refs.lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`;
   } else {
      refs.lblLoginErrorMessage.innerHTML = `Error: ${error.message}`;
   }
};

export const showLoginState = user => {
   refs.lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `;
};

hideLoginError();
