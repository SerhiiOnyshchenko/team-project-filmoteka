import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './auth/firebaseAPP';
import { showFormLoginRegister } from './registerLoginForm';
import toggleBtnTextAndStyle from './toggleBtnTextAndStyle';
let queueFilms = [];

export default function addQueueFilmToLocaleStorage(filmData) {
   try {
      queueFilms = [...JSON.parse(localStorage.getItem('queueFilms'))];
   } catch (error) {
      queueFilms = [];
   }

   const btnQueue = document.querySelector('.add-to-queue');

   btnQueue.addEventListener('click', onBtnQueueClick);
   function onBtnQueueClick(e) {
      onAuthStateChanged(auth, user => {
         if (user) {
            if (e.target.classList.contains('btn-checked')) {
               for (const film of queueFilms) {
                  if (filmData.id === film.id) {
                     const filteredFilm = queueFilms.filter(
                        film => film.id !== filmData.id
                     );

                     queueFilms = [...filteredFilm];
                     localStorage.setItem(
                        'queueFilms',
                        JSON.stringify(queueFilms)
                     );

                     toggleBtnTextAndStyle('btnQueue');
                     deleteFilmFromWatched(filmData.id);

                     return;
                  }
               }
            }

            queueFilms.push(filmData);
            localStorage.setItem('queueFilms', JSON.stringify(queueFilms));

            toggleBtnTextAndStyle('btnQueue');
            deleteFilmFromWatched(filmData.id);
            return;
         } else {
            showFormLoginRegister();
         }
      });
   }
}

function deleteFilmFromWatched(id) {
   const watchedFilms = localStorage.getItem('watchedFilms');
   const parsedWatchedFilms = JSON.parse(watchedFilms);

   if (parsedWatchedFilms) {
      for (const film of parsedWatchedFilms) {
         if (film.id === id) {
            const filteredFilm = parsedWatchedFilms.filter(
               film => film.id !== id
            );

            localStorage.setItem('watchedFilms', JSON.stringify(filteredFilm));
            toggleBtnTextAndStyle('btnWatched');
         }
      }
   }
}
