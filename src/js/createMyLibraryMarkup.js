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
   if (savedWatched) {
      gloalVar.whichTypeMovieSearch = 'watched';
      gloalVar.totalPages = Math.ceil(parsedWatched.length / 20);
      const showMoviesArray = parsedWatched.slice((page - 1) * 20, page * 20);
      refs.galleryList.innerHTML = showMoviesArray
         .map(createFilmCardMarkup)
         .join('');
      renderBtn(page);
   } else {
      refs.paginationList.classList.add('is-hidden');
   }
}

function onBtnQueue() {
   btnWatched.classList.remove('active-btn');
   btnQueue.classList.add('active-btn');
   renderQueueFilms(1);
}

export async function renderQueueFilms(page = 1) {
   const savedQueue = await localStorage.getItem('queueFilms');
   const parsedQueue = JSON.parse(savedQueue);
   if (savedQueue) {
      gloalVar.whichTypeMovieSearch = 'queue';
      gloalVar.totalPages = Math.ceil(parsedQueue.length / 20);
      const showMoviesArray = parsedQueue.slice((page - 1) * 20, page * 20);
      refs.galleryList.innerHTML = showMoviesArray
         .map(createFilmCardMarkup)
         .join('');
      renderBtn(page);
   } else {
      refs.paginationList.classList.add('is-hidden');
   }
}
