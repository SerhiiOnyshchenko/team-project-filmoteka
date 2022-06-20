import refs from './refs';
import gloalVar from './globalConst';
import { fetchMoviesByPersonId } from './services/movies-api';
import createFilmCardMarkup from './createFilmCardMarkup';
import { closeModal } from './modal';
import { renderBtn } from './pagination';

export async function searchMoviesByAuthor(person_id, page = 1) {
   window.history.replaceState(
      {},
      '',
      `author?person_id=${person_id}&page=${page}`
   );
   const { cast } = await fetchMoviesByPersonId(person_id);
   gloalVar.personId = person_id;
   gloalVar.whichTypeMovieSearch = 'author';
   gloalVar.totalPages = Math.ceil(cast.length / 20);

   const showMoviesArray = cast.slice((page - 1) * 20, page * 20);
   refs.galleryList.innerHTML = showMoviesArray
      .map(createFilmCardMarkup)
      .join('');
   renderBtn();
}

refs.cardMoveAuthors.addEventListener('click', e => {
   if (e.target.className === 'author__img') {
      const searchText = e.target.dataset.personid;
      searchMoviesByAuthor(searchText);
      closeModal();
   }
});

document.addEventListener('DOMContentLoaded', () => {
   if (
      window.location.pathname === '/author' ||
      window.location.pathname === '/team-project-filmoteka/author'
   ) {
      const searchParams = window.location.search.split('?')[1].split('&');
      const personId = searchParams[0].split('=')[1];
      const page = searchParams[1].split('=')[1];
      searchMoviesByAuthor(personId, page);
   }
});
