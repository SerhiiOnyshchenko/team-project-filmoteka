import { popularMoviesTrend } from './services/movies-api';
import createFilmCardMarkup from './createFilmCardMarkup';
import refs from './refs';
import gloalVar from './globalConst';
import { renderBtn } from './pagination';

export async function searchTrendFilms(page = 1) {
   const data = await popularMoviesTrend(page);
   gloalVar.whichTypeMovieSearch = 'trend';
   gloalVar.totalPages = data.total_pages;
   refs.galleryList.innerHTML = data.results.map(createFilmCardMarkup).join('');
   renderBtn();
}

document.addEventListener('DOMContentLoaded', () => {
   searchTrendFilms();
});
