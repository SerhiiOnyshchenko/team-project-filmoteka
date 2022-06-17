import refs from './refs';

document.body.onload = function () {
   setTimeout(function () {
      if (!refs.preloader.classList.contains('hide')) {
         refs.preloader.classList.add('hide');
      }
   }, 1000);
};

export function onShowLoader() {
   document.body.onload = function () {
      setTimeout(function () {
         if (refs.preloader.classList.contains('hide')) {
            refs.preloader.classList.remove('hide');
         }
      }, 1000);
   };
}

export function onHideLoader() {
   document.body.onload = function () {
      setTimeout(function () {
         if (!refs.preloader.classList.contains('hide')) {
            refs.preloader.classList.add('hide');
         }
      }, 1000);
   };
}
