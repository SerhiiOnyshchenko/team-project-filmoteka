import refs from './refs';

document.body.onload = function () {
   setTimeout(function () {
      if (!refs.preloader.classList.contains('done')) {
         refs.preloader.classList.add('done');
      }
   }, 1000);
};
