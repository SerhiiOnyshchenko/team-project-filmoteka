import URL_IMG from './services/movies-api';

export default function createFilmCardMarkup(filmData) {
   const {
      poster_path,
      genre_ids,
      id,
      original_title,
      release_date,
      vote_average,
   } = filmData;

   const filmGenres = genre_ids.slice(0, 3).join(', ');
   const filmDate = release_date.slice(0, 4);
   const filmPoster = poster_path
      ? URL_IMG + poster_path
      : 'https://www.reelviews.net/resources/img/default_poster.jpg';

   return `<li data-id="${id}" class="card film-card">
        <img
            class="film-card__img"
            src=${filmPoster}
            alt=${original_title}
        />
        <h2 class="film-card__title">${original_title}</h2>
        <div class="film-card__wrap">
            <span class="film-card__info">${filmGenres} | ${filmDate}</span>
            <span data-film-rating class="film-card__rating">${vote_average}</span>
        </div>
    </li>`;
}
