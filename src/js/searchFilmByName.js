import refs from './refs';
import createFilmCardMarkup from './createFilmCardMarkup';
import { fetchFilmsByName } from './services/movies-api';

refs.searchForm.addEventListener('submit', async e => {
   e.preventDefault();
   const queryStr = refs.searchForm.search.value;
   const { results } = await fetchFilmsByName(queryStr);
   refs.galleryList.innerHTML = results.map(createFilmCardMarkup).join("")
});
