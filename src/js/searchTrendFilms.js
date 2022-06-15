import { popularMoviesTrend } from "./services/movies-api";
import createFilmCardMarkup from "./createFilmCardMarkup";
import refs from './refs';


export async function searchTrendFilms(page = 1){
  const data = await popularMoviesTrend(page); 
  

refs.galleryList.innerHTML = data.results.map(createFilmCardMarkup).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    searchTrendFilms();
})