export default function getFilmDataForWatchedLocaleStorage({
   title,
   id,
   vote_average,
   vote_count,
   popularity,
   original_title,
   genres,
   overview,
   poster_path,
}) {
   const filmData = {
      title,
      id,
      vote_average,
      vote_count,
      popularity,
      original_title,
      genres,
      overview,
      poster_path,
   };

   let watchedFilms = [];

   try {
      watchedFilms = [...JSON.parse(localStorage.getItem('watchedFilms'))];
   } catch (error) {
      watchedFilms = [];
   }

   const btnWatched = document.querySelector('.add-to-watched');

   btnWatched.addEventListener('click', onBtnWatchedClick);
   function onBtnWatchedClick() {
      if (watchedFilms.length > 0) {
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

               return;
            }
         }
      }

      watchedFilms.push(filmData);
      localStorage.setItem('watchedFilms', JSON.stringify(watchedFilms));
   }
}
