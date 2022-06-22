import { popularMoviesTrend } from './services/movies-api';
import createFilmCardMarkup from './createFilmCardMarkup';
import refs from './refs';
import gloalVar from './globalConst';
import { renderBtn } from './pagination';
import { deleteActiveClassByGenresBtn } from './searchGenresMovies';

export async function searchTrendFilms(page = 1) {
   const data = await popularMoviesTrend(page);
   gloalVar.whichTypeMovieSearch = 'trend';
   gloalVar.totalPages = data.total_pages;
   if (!refs.galleryList.classList.contains('grid-container')) {
      refs.galleryList.classList.add('grid-container');
   }
   refs.galleryList.innerHTML = data.results.map(createFilmCardMarkup).join('');
   renderBtn(page);
   deleteActiveClassByGenresBtn();
}

document.addEventListener('DOMContentLoaded', () => {
   if (window.location.search === '') {
      searchTrendFilms();
      return;
   }
   const searchParams = window.location.search.split('?')[1].split('&');
   if (searchParams[0] === 'type=popular') {
      const page = searchParams[1].split('=')[1];
      searchTrendFilms(page);
   }
});

document.addEventListener('DOMContentLoaded', () => {
   const arrBackdrop = document.querySelectorAll('.backdrop');
   arrBackdrop.forEach(back => (back.style.display = 'flex'));
});
