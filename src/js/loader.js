import refs from './refs';

document.body.onload = function () {
   setTimeout(function () {
      if (!refs.preloader.classList.contains('hide')) {
         refs.preloader.classList.add('hide');
      }
   }, 1000);
};

export function onShowLoader() {
   refs.preloader.classList.remove('hide');
}

export function onHideLoader() {
   refs.preloader.classList.add('hide');
}
