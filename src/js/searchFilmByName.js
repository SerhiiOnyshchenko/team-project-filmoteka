import refs from './refs';
import createFilmCardMarkup from './createFilmCardMarkup';
import { fetchFilmsByName } from './services/movies-api';
import gloalVar from './globalConst';

export async function searchFilmByName(query, page = 1) {
   const data = await fetchFilmsByName(query, page);
   gloalVar.totalPages = data.totalPages;
   if(data.results.length) {
      refs.inputError.classList.add('visually-hidden');
      refs.galleryList.innerHTML = data.results.map(createFilmCardMarkup).join('');
   } else {
      refs.inputError.classList.remove('visually-hidden')
   }
}

refs.searchForm.addEventListener('submit', async e => {
   e.preventDefault();
   gloalVar.searchText = refs.searchForm.search.value;
   gloalVar.whichTypeMovieSearch = 'search';
   searchFilmByName(gloalVar.searchText);
});
