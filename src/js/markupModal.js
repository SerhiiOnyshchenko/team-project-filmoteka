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

   // let btnWatchedText = isWatched ? 'Remove from watched' : 'Add to Watched';
   let btnWatchedStyle = isWatched ? 'btn-checked' : '';

   let btnWatchedText = '';

   if (isWatched) {
      if (localStorage.getItem('language') === 'ua') {
         btnWatchedText = 'Видалити з переглянутого';
      } else {
         btnWatchedText = 'Remove from watched';
      }
   } else {
      if (localStorage.getItem('language') === 'ua') {
         btnWatchedText = 'Додати до переглянутого';
      } else {
         btnWatchedText = 'Add to Watched';
      }
   }

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

   let btnQueueText = '';

   // let btnQueueText = isQueue ? 'Remove from queue' : 'Add to queue';
   let btnQueueStyle = isQueue ? 'btn-checked' : '';
   if (isQueue) {
      if (localStorage.getItem('language') === 'ua') {
         btnQueueText = 'Видалити з черги';
      } else {
         btnQueueText = 'Remove from queue';
      }
   } else {
      if (localStorage.getItem('language') === 'ua') {
         btnQueueText = 'Додати до черги';
      } else {
         btnQueueText = 'Add to queue';
      }
   }
   const isLanguageUA = localStorage.getItem('language') === 'ua';
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
       <div class="option-film-container">
         <p class="option-film-left">${
            isLanguageUA ? 'Рейтинг' : 'Vote / Votes'
         }</p>
         <p class="option-film-right">
            <span class="vote">${vote_average}</span><span class="slash"> /</span><span class="votes">${vote_count}</span>
         </p>
      </div>
      <div class="option-film-container">
         <p class="option-film-left">${
            isLanguageUA ? 'Популярність' : 'Popularity'
         }</p>
         <p class="option-film-right">${popularity}</p>
      </div>
      <div class="option-film-container">
         <p class="option-film-left">${
            isLanguageUA ? 'Оригінальна назва' : 'Original Title'
         }</p>
         <p class="option-film-right option-film-right-line-height">
            ${original_title}
         </p>
      </div>
      <div class="option-film-container">
         <p class="option-film-left">${isLanguageUA ? 'Жанр' : 'Genre'}</p>  
         <p class="option-film-right option-film-right-line-height">${allGanres}</p>
      </div>
      <div class="option-film-container">
         <p  class="option-film-left option-film-left-style">${
            isLanguageUA ? 'Автори' : 'Authors'
         }</p>
         <div class="show-style">
         <p class="option-film-right option-film-right-style" data-id=${id} id="showAuthors">${
      isLanguageUA ? 'ПОКАЗАТИ' : 'SHOW'
   }</p>
         </div>
      </div>
      </div>
      <h3 class="title-modal">${isLanguageUA ? 'Про фільм' : 'About'}</h3>
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
