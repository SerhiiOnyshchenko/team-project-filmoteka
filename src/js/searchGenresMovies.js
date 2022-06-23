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
   renderBtn(page);
}
export function deleteActiveClassByGenresBtn() {
   const allBtnGenres = document.querySelectorAll('.header__dropdown-btn');
   const activBtn = [...allBtnGenres].filter(btn =>
      btn.classList.contains('activeBtn')
   );
   if (activBtn.length === 1) {
      activBtn[0].classList.remove('activeBtn');
   }
}
refs.genresList.addEventListener('click', e => {
   if (e.target.className === 'header__dropdown-btn') {
      deleteActiveClassByGenresBtn();
      e.target.classList.add('activeBtn');
      const genre = e.target.dataset.genre;
      searchGenresMovies(genre);
   }
});

document.addEventListener('DOMContentLoaded', () => {
   if (window.location.search === '') {
      return;
   }
   const searchParams = window.location.search.split('?')[1].split('&');
   if (searchParams[0] === 'type=genres') {
      const genre = searchParams[1].split('=')[1];
      const page = searchParams[2].split('=')[1];
      searchGenresMovies(genre, page);
      document
         .querySelector(`[data-genre="${genre}"]`)
         .classList.add('activeBtn');
   }
});
