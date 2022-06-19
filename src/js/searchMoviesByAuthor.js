import refs from './refs';
import gloalVar from './globalConst';
import { fetchMoviesByPersonId } from './services/movies-api';
import createFilmCardMarkup from './createFilmCardMarkup';
import { closeModal } from './modal';

export async function searchMoviesByAuthor(person_id, page = 1) {
   const { cast } = await fetchMoviesByPersonId(person_id);
   gloalVar.personId = person_id;
   gloalVar.whichTypeMovieSearch = 'author';
   gloalVar.totalPages = Math.ceil(cast.length / 20);

   const showMoviesArray = cast.slice((page - 1) * 20, page * 20);
   refs.galleryList.innerHTML = showMoviesArray
      .map(createFilmCardMarkup)
      .join('');
}

refs.cardMoveAuthors.addEventListener('click', e => {
   if (e.target.className === 'author__img') {
      const searchText = e.target.dataset.personid;
      searchMoviesByAuthor(searchText);
      closeModal();
   }
});
