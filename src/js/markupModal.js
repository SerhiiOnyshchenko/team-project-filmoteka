import { URL_IMG } from './services/movies-api';

export function loadMoreInfoMarkup(data) {
   const {
      title,
      id,
      vote_average,
      vote_count,
      popularity,
      original_title,
      genres,
      overview,
      poster_path,
   } = data;

   const watchedFilms = localStorage.getItem('watchedFilms');
   const parsedWatchedFilms = JSON.parse(watchedFilms);

   let isWatched = false;

   if (parsedWatchedFilms) {
      for (const film of parsedWatchedFilms) {
         if (film.id === id) {
            isWatched = true;
         }
      }
   }

   let btnWatchedText = isWatched ? 'Remove from watched' : 'Add to Watched';
   let btnWatchedStyle = isWatched ? 'btn-checked' : '';

   const queueFilms = localStorage.getItem('queueFilms');
   const parsedQueueFilms = JSON.parse(queueFilms);

   let isQueue = false;

   if (parsedQueueFilms) {
      for (const film of parsedQueueFilms) {
         if (film.id === id) {
            isQueue = true;
         }
      }
   }

   let btnQueueText = isQueue ? 'Remove from queue' : 'Add to queue';
   let btnQueueStyle = isQueue ? 'btn-checked' : '';

   const allGanres = genres.map(genre => genre.name).join(', ');
   const filmPoster = poster_path
      ? URL_IMG + poster_path
      : 'https://www.reelviews.net/resources/img/default_poster.jpg';
   return `<div class="image-container">
            <img
               src=${filmPoster}
               alt="Poster ${title}"
            />
			<button type="button"  class="trailer__play-btn" data-id="${id}" aria-label="Trailer" id="trailerOpen"></button>
         </div>
         <div class="container-context">
            <div class="top-content">
               <h2 class="modal-title">${title}</h2>
               <div class="option-film">
                  <div class="properties-film">
                     <p class="option-film-p option-film-p-margin-not">Vote / Votes</p>
                     <p class="option-film-p">Popularity</p>
                     <p class="option-film-p">Original Title</p>
                     <p class="option-film-p option-film-p-margin option-film-p-margin-not">Genre</p>
                     <p class="option-film-p option-film-p-margin-not option-film-p-margin">Authors</p>
                  </div>
                  <div class="values-film">
                  <div class="values-film-top">
                     <p class="option-film-p option-film-p-margin-not">
                        <span class="vote">${vote_average}</span><span class="slash"> /</span><span class="votes">${vote_count}</span>
                     </p>
                     <p class="option-film-p">${popularity}</p>
                     <p class="option-film-p values-film-lh values-film-size">
                        ${original_title}
                     </p>
                     <p class="option-film-p option-film-p-width  values-film-lh">${allGanres}</p>
                     </div>
                     <div class="values-film-button">
                     <p class="option-film-p option-film-p-width option-film-p-style values-film-lh" data-id=${id} id="showAuthors">Show</p>
                     </div>
                  </div>
               </div>

               <h3 class="title-modal">About</h3>
               <p class="text-modal">
                  ${overview}
               </p>
            </div>

            <div class="btn-container" id="btn-container" >
               <button type="button" class="${btnWatchedStyle} btn-modal add-to-watched data-btn-id=${id}">
                  ${btnWatchedText} 
               </button>
               <button type="button" class="${btnQueueStyle} btn-modal add-to-queue data-btn-id=${id}">
                  ${btnQueueText} 
               </button>
            </div>
         </div>`;
}
