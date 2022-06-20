import refs from './refs';
import createFilmCardMarkup from './createFilmCardMarkup';
import { fetchGenresMovies } from './services/movies-api';
import gloalVar from './globalConst';
import { renderBtn } from './pagination';

export async function searchGenresMovies(genre, page = 1) {
   const data = await fetchGenresMovies(genre, page);
   gloalVar.totalPages = data.total_pages;
   gloalVar.whichTypeMovieSearch = 'genres';
   gloalVar.genre = genre;
   refs.galleryList.innerHTML = data.results.map(createFilmCardMarkup).join('');
   renderBtn();
}

refs.genresList.addEventListener('click', e => {
   if (e.target.className === 'header__dropdown-btn') {
      const genre = e.target.dataset.genre;
      searchGenresMovies(genre);
   }
});

document.addEventListener('DOMContentLoaded', () => {
   if (window.location.pathname === '/genres') {
      const searchParams = window.location.search.split('?')[1].split('&');
      const genre = searchParams[0].split('=')[1];
      const page = searchParams[1].split('=')[1];
      searchGenresMovies(genre, page);
   }
});