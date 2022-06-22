const BASE_URL = 'https://api.themoviedb.org/3/';
const MY_KEY = '5cd994cc5e25e67f2597f5db7027d486';

export const URL_IMG = 'https://image.tmdb.org/t/p/w500';
let language = 'en-US';

async function fetchWithErrorHandling(url = '', config = {}) {
   const response = await fetch(url, config);
   return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
}

export function fetchLoadMoreFilm(movie_id) {
   if (localStorage.getItem('language') === 'ua') {
      language = 'uk';
   } else {
      language = 'en-US';
   }
   const url = `${BASE_URL}movie/${movie_id}?api_key=${MY_KEY}&language=${language}`;
   return fetchWithErrorHandling(url);
}

export function popularMoviesTrend(page = 1) {
   if (window.location.search !== '' || page !== 1) {
      window.history.replaceState({}, '', `?type=popular&page=${page}`);
   }

   if (localStorage.getItem('language') === 'ua') {
      language = 'uk';
   } else {
      language = 'en-US';
   }
   return fetchWithErrorHandling(
      `${BASE_URL}trending/movie/week?api_key=${MY_KEY}&page=${page}&language=${language}`
   );
}

export function fetchFilmsByName(query, page = 1) {
   if (localStorage.getItem('language') === 'ua') {
      language = 'uk';
   } else {
      language = 'en-US';
   }
   const url = `${BASE_URL}search/movie?api_key=${MY_KEY}&language=${language}&query=${query}&page=${page}&include_adult=false`;
   return fetchWithErrorHandling(url);
}

export function fetchMovieCreditsById(id) {
   if (localStorage.getItem('language') === 'ua') {
      language = 'uk';
   } else {
      language = 'en-US';
   }
   return fetchWithErrorHandling(
      `${BASE_URL}/movie/${id}/credits?api_key=${MY_KEY}&language=${language}`
   );
}

export function findTrailer(movie_id) {
   if (localStorage.getItem('language') === 'ua') {
      language = 'uk';
   } else {
      language = 'en-US';
   }
   const url = `${BASE_URL}movie/${movie_id}/videos?api_key=${MY_KEY}&language=${language}`;
   return fetchWithErrorHandling(url);
}

export function fetchMoviesByPersonId(person_id) {
   if (localStorage.getItem('language') === 'ua') {
      language = 'uk';
   } else {
      language = 'en-US';
   }
   const url = `${BASE_URL}person/${person_id}/movie_credits?api_key=${MY_KEY}&language=${language}`;
   return fetchWithErrorHandling(url);
}

export function fetchGenresMovies(genre, page) {
   window.history.replaceState(
      {},
      '',
      `?type=genres&with_genres=${genre}&page=${page}`
   );
   if (localStorage.getItem('language') === 'ua') {
      language = 'uk';
   } else {
      language = 'en-US';
   }
   const url = `${BASE_URL}discover/movie?api_key=${MY_KEY}&language=${language}&with_genres=${genre}&page=${page}&sort_by=popularity.desc&include_adult=false&include_video=false`;
   return fetchWithErrorHandling(url);
}
