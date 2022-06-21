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
   renderBtn(page);
}

document.addEventListener('DOMContentLoaded', () => {
   if (window.location.search === '') {
      searchTrendFilms();
   }
   const searchParams = window.location.search.split('?')[1].split('&');
   if (searchParams[0] === 'type=popular') {
      const page = searchParams[1].split('=')[1];
      searchTrendFilms(page);
   }
});
