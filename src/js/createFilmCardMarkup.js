import { URL_IMG } from './services/movies-api';
import genresA from './db/dbListGenres';

export default function createFilmCardMarkup(filmData) {
   const {
      poster_path,
      genre_ids,
      id,
      title,
      release_date,
      vote_average,
      genres,
   } = filmData;
   const genresArr = genres?.map(({ id }) => id) || [];
   const filmGenresId = genre_ids?.slice(0, 3) || genresArr;
   const filmGenres = [];
   for (const filmId of filmGenresId) {
      for (const genre of genresA) {
         if (filmId === genre.id) {
            filmGenres.push(genre.name);
         }
      }
   }

   if (filmGenres.length > 2) {
      filmGenres[filmGenres.length - 1] = 'Others';
   }
   const filmGenresString = filmGenres.join(', ');

   const filmDate = release_date?.slice(0, 4) || '...';
   const filmPoster = poster_path
      ? URL_IMG + poster_path
      : 'https://www.reelviews.net/resources/img/default_poster.jpg';

   return `<li data-id="${id}" class="card film-card">
        <div class="film-card__img-wrap">
            <img
                class="film-card__img"
                src=${filmPoster}
                alt=${title}
            />
        </div>
        <h2 class="film-card__title">${title}</h2>
        <div class="film-card__wrap">
            <span class="film-card__info">${filmGenresString} | ${filmDate}</span>
            <span data-film-rating class="film-card__rating">${vote_average}</span>
        </div>
    </li>`;
}
