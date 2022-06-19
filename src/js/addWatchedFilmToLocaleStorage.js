import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './auth/firebaseAPP';
import { showFormLoginRegister } from './registerLoginForm';
import toggleBtnTextAndStyle from './toggleBtnTextAndStyle';

export default function addWatchedFilmToLocaleStorage(filmData) {
   let watchedFilms = [];
   try {
      watchedFilms = [...JSON.parse(localStorage.getItem('watchedFilms'))];
   } catch (error) {
      watchedFilms = [];
   }

   const btnWatched = document.querySelector('.add-to-watched');

   btnWatched.addEventListener('click', onBtnWatchedClick);
   function onBtnWatchedClick(e) {
      onAuthStateChanged(auth, user => {
         if (user) {
            if (e.target.classList.contains('btn-checked')) {
               for (const film of watchedFilms) {
                  if (filmData.id === film.id) {
                     const filteredFilm = watchedFilms.filter(
                        film => film.id !== filmData.id
                     );

                     watchedFilms = [...filteredFilm];
                     localStorage.setItem(
                        'watchedFilms',
                        JSON.stringify(watchedFilms)
                     );

                     toggleBtnTextAndStyle('btnWatched');
                     deleteFilmFromQueue(filmData.id);

                     return;
                  }
               }
            }

            watchedFilms.push(filmData);
            localStorage.setItem('watchedFilms', JSON.stringify(watchedFilms));

            toggleBtnTextAndStyle('btnWatched');
            deleteFilmFromQueue(filmData.id);
            return;
         } else {
            showFormLoginRegister();
         }
      });
   }
}

function deleteFilmFromQueue(id) {
   const queueFilms = localStorage.getItem('queueFilms');
   const parsedQueueFilms = JSON.parse(queueFilms);

   if (parsedQueueFilms) {
      for (const film of parsedQueueFilms) {
         if (film.id === id) {
            const filteredFilm = parsedQueueFilms.filter(
               film => film.id !== id
            );

            localStorage.setItem('queueFilms', JSON.stringify(filteredFilm));
            toggleBtnTextAndStyle('btnQueue');
         }
      }
   }
}
