import { BASE_URL, MY_KEY } from './movies-api';

export async function fetchLoadMoreFilm(movie_id) {
   const response = await fetch(
      `${BASE_URL}movie/${movie_id}?api_key=${MY_KEY}`
   );
   const data = await response.json();

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

   return console.log({
      title,
      id,
      vote_average,
      vote_count,
      popularity,
      original_title,
      genres,
      overview,
      poster_path,
   });
}
