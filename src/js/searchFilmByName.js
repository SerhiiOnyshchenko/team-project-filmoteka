import refs from './refs';
import createFilmCardMarkup from './createFilmCardMarkup';
import { fetchFilmsByName } from './services/movies-api';

refs.searchForm.addEventListener('submit', async e => {
   e.preventDefault();
   whichTypeMovieSearch = "search";
   searchText = refs.searchForm.search.value;
   const data = await fetchFilmsByName(searchText);
   totalPages = data.totalPages;
   refs.galleryList.innerHTML = data.results.map(createFilmCardMarkup).join("")
});
