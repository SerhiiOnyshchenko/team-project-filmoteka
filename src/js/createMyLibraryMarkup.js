import createFilmCardMarkup from './createFilmCardMarkup';
import refs from './refs';
import gloalVar from './globalConst';
import { renderBtn } from './pagination';

let btnWatched;
let btnQueue;

export function addBtnMyLibrary() {
   btnWatched = document.getElementById('watched');
   btnQueue = document.getElementById('queue');

   btnWatched.addEventListener('click', onBtnWatched);
   btnQueue.addEventListener('click', onBtnQueue);
   onBtnQueue();
}

function onBtnWatched() {
   btnWatched.classList.add('active-btn');
   btnQueue.classList.remove('active-btn');
   renderWatchedFilms(1);
}

export async function renderWatchedFilms(page = 1) {
   const savedWatched = await localStorage.getItem('watchedFilms');
   const parsedWatched = JSON.parse(savedWatched);
   if (!parsedWatched || parsedWatched.length === 0) {
      gloalVar.totalPages = 1;
      templateTextEmptyLibrary();
   } else {
      gloalVar.whichTypeMovieSearch = 'watched';
      gloalVar.totalPages = Math.ceil(parsedWatched.length / 20);
      const showMoviesArray = parsedWatched.slice((page - 1) * 20, page * 20);
      galleryNotEmpty();
      refs.galleryList.innerHTML = showMoviesArray
         .map(createFilmCardMarkup)
         .join('');
   }
   renderBtn(page);
}

function onBtnQueue() {
   btnWatched.classList.remove('active-btn');
   btnQueue.classList.add('active-btn');
   renderQueueFilms(1);
}
export function galleryNotEmpty() {
   if (!refs.galleryList.classList.contains('grid-container')) {
      refs.galleryList.classList.add('grid-container');
      refs.mainSection.classList.remove('camera-template');
   }
}
export async function renderQueueFilms(page = 1) {
   const savedQueue = await localStorage.getItem('queueFilms');
   const parsedQueue = JSON.parse(savedQueue);
   if (!parsedQueue || parsedQueue.length === 0) {
      gloalVar.totalPages = 1;
      templateTextEmptyLibrary();
   } else {
      gloalVar.whichTypeMovieSearch = 'queue';
      gloalVar.totalPages = Math.ceil(parsedQueue.length / 20);
      const showMoviesArray = parsedQueue.slice((page - 1) * 20, page * 20);
      if (!refs.galleryList.classList.contains('grid-container')) {
         refs.galleryList.classList.add('grid-container');
         refs.mainSection.classList.remove('camera-template');
      }
      refs.galleryList.innerHTML = showMoviesArray
         .map(createFilmCardMarkup)
         .join('');
   }
   renderBtn(page);
}

function templateTextEmptyLibrary() {
   if (localStorage.getItem('language') === 'ua') {
      refs.galleryList.innerHTML =
         '<p id="myLibraryTemplateText">У вашій бібліотеці немає фільмів</p>';
   } else {
      refs.galleryList.innerHTML =
         '<p id="myLibraryTemplateText">There are not movies in your library</p>';
   }

   refs.galleryList.classList.remove('grid-container');
   if (refs.btnMyLibrary.classList.contains('current')) {
      refs.mainSection.classList.add('camera-template');
   }
}
