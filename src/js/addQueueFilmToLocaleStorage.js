export default function getFilmDataForQueueLocaleStorage({
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

   let queueFilms = [];

   try {
      queueFilms = [...JSON.parse(localStorage.getItem('queueFilms'))];
   } catch (error) {
      queueFilms = [];
   }

   const btnQueue = document.querySelector('.add-to-queue');

   btnQueue.addEventListener('click', onBtnQueueClick);
   function onBtnQueueClick() {
      if (queueFilms.length > 0) {
         for (const film of queueFilms) {
            if (filmData.id === film.id) {
               const filteredFilm = queueFilms.filter(
                  film => film.id !== filmData.id
               );

               queueFilms = [...filteredFilm];
               localStorage.setItem('queueFilms', JSON.stringify(queueFilms));

               return;
            }
         }
      }

      queueFilms.push(filmData);
      localStorage.setItem('queueFilms', JSON.stringify(queueFilms));
   }
}
