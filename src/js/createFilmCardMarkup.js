export default function createFilmCardMarkup(filmData) {
   const { poster_path, genre_ids, id, title, release_date, vote_average } =
      filmData;

   const genres = genre_ids.slice(0, 3).join(', ');

   return;
   `<li data-id="${id}" class="card film-card">
        <img
            class="film-card__img"
            src=${poster_path}
            alt=${title}
        />
        <h2 class="film-card__title">${title}</h2>
        <div class="film-card__wrap">
            <span class="film-card__info">${genres} | ${release_date}</span>
            <span data-film-rating class="film-card__rating">${vote_average}</span>
        </div>
    </li>`;
}
