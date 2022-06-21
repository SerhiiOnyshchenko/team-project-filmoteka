import refs from './refs';
import createFilmCardMarkup from './createFilmCardMarkup';
import { fetchFilmsByName } from './services/movies-api';
import gloalVar from './globalConst';
import { renderBtn } from './pagination';

export async function searchFilmByName(query, page = 1) {
   const data = await fetchFilmsByName(query, page);
   gloalVar.totalPages = data.total_pages;
   gloalVar.whichTypeMovieSearch = 'search';
   gloalVar.searchText = query;
   if (data.results.length) {
      refs.inputError.classList.add('visually-hidden');
      refs.galleryList.innerHTML = data.results
         .map(createFilmCardMarkup)
         .join('');
   } else {
      refs.inputError.classList.remove('visually-hidden');
   }
   renderBtn(page);
}

refs.searchForm.addEventListener('submit', async e => {
   e.preventDefault();
   const query = refs.searchForm.search.value;
   searchFilmByName(query);
});

document.addEventListener('DOMContentLoaded', () => {
   const searchParams = window.location.search.split('?')[1].split('&');
   if (searchParams[0] === 'type=search') {
      const query = searchParams[1].split('=')[1];
      const page = searchParams[2].split('=')[1];
      refs.searchForm.search.value = query;
      searchFilmByName(query, page);
   }
});
