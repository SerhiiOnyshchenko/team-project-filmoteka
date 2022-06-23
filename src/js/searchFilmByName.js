import refs from './refs';
import createFilmCardMarkup from './createFilmCardMarkup';
import { fetchFilmsByName } from './services/movies-api';
import gloalVar from './globalConst';
import { renderBtn } from './pagination';
import { deleteActiveClassByGenresBtn } from './searchGenresMovies';

export async function searchFilmByName(query, page = 1) {
   const data = await fetchFilmsByName(query, page);
   if (data.results.length) {
      window.history.replaceState(
         {},
         '',
         `?type=search&query=${query}&page=${page}`
      );
      gloalVar.totalPages = data.total_pages;
      gloalVar.whichTypeMovieSearch = 'search';
      gloalVar.searchText = query;
      refs.inputError.classList.add('visually-hidden');
      if (!refs.galleryList.classList.contains('grid-container')) {
         refs.galleryList.classList.add('grid-container');
         refs.mainSection.classList.remove('camera-template');
      }
      refs.galleryList.innerHTML = data.results
         .map(createFilmCardMarkup)
         .join('');
      renderBtn(page);
      deleteActiveClassByGenresBtn();
   } else {
      refs.inputError.classList.remove('visually-hidden');
      setTimeout(() => {
         refs.inputError.classList.add('visually-hidden');
      }, 4000);
   }
}

refs.searchForm.addEventListener('submit', async e => {
   e.preventDefault();
   const query = refs.searchForm.search.value.trim();
   if (query.length > 0) {
      searchFilmByName(query);
      refs.searchForm.reset();
   }
});

document.addEventListener('DOMContentLoaded', () => {
   if (window.location.search === '') {
      return;
   }
   const searchParams = window.location.search.split('?')[1].split('&');
   if (searchParams[0] === 'type=search') {
      const query = searchParams[1].split('=')[1];
      const page = searchParams[2].split('=')[1];
      searchFilmByName(query, page);
   }
});
