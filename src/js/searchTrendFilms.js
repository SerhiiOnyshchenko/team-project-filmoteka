import { popularMoviesTrend } from './services/movies-api';
import createFilmCardMarkup from './createFilmCardMarkup';
import refs from './refs';
import gloalVar from './globalConst';
gloalVar;
export async function searchTrendFilms(page = 1) {
   const data = await popularMoviesTrend(page);
   gloalVar.whichTypeMovieSearch = 'trend';
   gloalVar.totalPages = data.totalPages;
   refs.galleryList.innerHTML = data.results.map(createFilmCardMarkup).join('');
}

document.addEventListener('DOMContentLoaded', () => {
   searchTrendFilms();
});
