const BASE_URL = 'https://api.themoviedb.org/3/';
const MY_KEY = '5cd994cc5e25e67f2597f5db7027d486';

export const URL_IMG = 'https://image.tmdb.org/t/p/w500';

async function fetchWithErrorHandling(url = '', config = {}) {
   const response = await fetch(url, config);
   return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
}

export function fetchLoadMoreFilm(movie_id) {
   const url = `${BASE_URL}movie/${movie_id}?api_key=${MY_KEY}`;
   return fetchWithErrorHandling(url);
}

export function popularMoviesTrend(page = 1) {
   if (window.location.search !== '') {
      window.history.replaceState({}, '', `?type=popular&page=${page}`);
   }
   return fetchWithErrorHandling(
      `${BASE_URL}trending/movie/week?api_key=${MY_KEY}&page=${page}`
   );
}

export function fetchFilmsByName(query, page = 1) {
   const url = `${BASE_URL}search/movie?api_key=${MY_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
   return fetchWithErrorHandling(url);
}

export function fetchMovieCreditsById(id) {
   return fetchWithErrorHandling(
      `${BASE_URL}/movie/${id}/credits?api_key=${MY_KEY}&language=en-US`
   );
}

export function findTrailer(movie_id) {
   const url = `${BASE_URL}movie/${movie_id}/videos?api_key=${MY_KEY}&language=en-US`;
   return fetchWithErrorHandling(url);
}

export function fetchMoviesByPersonId(person_id) {
   const url = `${BASE_URL}person/${person_id}/movie_credits?api_key=${MY_KEY}&language=en-US`;
   return fetchWithErrorHandling(url);
}

export function fetchGenresMovies(genre, page) {
   window.history.replaceState(
      {},
      '',
      `?type=genres&with_genres=${genre}&page=${page}`
   );
   const url = `${BASE_URL}discover/movie?api_key=${MY_KEY}&with_genres=${genre}&page=${page}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;
   return fetchWithErrorHandling(url);
}
