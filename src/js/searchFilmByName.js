import refs from './refs';
import createFilmCardMarkup from './createFilmCardMarkup';
import { fetchFilmsByName } from './services/movies-api';

export async function searchFilmByName(query, page = 1) {
   const data = await fetchFilmsByName(query, page);
   totalPages = data.totalPages;
   refs.galleryList.innerHTML = data.results.map(createFilmCardMarkup).join('');
}

refs.searchForm.addEventListener('submit', async e => {
   e.preventDefault();
   searchText = refs.searchForm.search.value;
   whichTypeMovieSearch = 'search';
   searchFilmByName(searchText);
});
