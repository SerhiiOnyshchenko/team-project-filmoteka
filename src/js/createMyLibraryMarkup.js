import { URL_IMG } from './services/movies-api';
import genres from './db/dbListGenres';
import { headerButton } from '../partials/header';
import { gallery } from '../partials/gallery';

const refs = {
    btnWatched: document.querySelector('.library__btn'),
    btnQueue: document.querySelector('.library__btn'),
    gallery: document.getElementById('gallery-list'),
}

refs.btnWatched.addEventListener('click', onBtnWatched)
refs.btnQueue.addEventListener('click', onBtnQueue)
console.log(refs.btnWatched);
console.log(refs.btnQueue);
console.log(refs.gallery);

function onBtnWatched() {
    const savedWatched = localStorage.getItem("watched");
    const parsedWatched = JSON.parse(savedWatched);
    console.log(parsedWatched);
    refs.btnWatched.classList.add('btn-active');
    
    const createListItem = parsedWatched.map(movie => {
            return `<li class="card-list__item">
                <div class="card-list__wrap">
                    <img
                        src = "${URL_IMG + movie.poster_path}",
                        alt = "${movie.title}",
                        class = "card-list__img",
                    >
                    <p class="card-list__name">${movie.title}</p>
                    <div class="card-list__details">
                        <span class="card-list__title">${movie.genres.name} | ${movie.release_date.substr(0, 4)}</span>
                        <span class="card-list__range">${movie.vote_average}</span>
                    </div>
                </div>
            </li>`
        }
        ).join(' ');
    
    refs.gallery.innerHTML = '';
    refs.gallery.insertAdjacentHTML('afterbegin', createListItem)
}

function onBtnQueue() {
    const savedQueue = localStorage.getItem("queue");
    const parsedQueue = JSON.parse(savedQueue);
    console.log(parsedQueue);
    refs.btnWatched.classList.remove('btn-active');
    refs.btnQueue.classList.add('btn-active');

    const createListItem = parsedQueue.map(movie => {
            return `<li class="card-list__item">
                <div class="card-list__wrap">
                    <img
                        src = "${POSTER_BASE_URL + movie.poster_path}",
                        alt = "${movie.title}",
                        class = "card-list__img",
                    >
                    <p class="card-list__name">${movie.title}</p>
                    <div class="card-list__details">
                        <span class="card-list__title">${movie.genres.name} | ${movie.release_date.substr(0, 4)}</span>
                        <span class="card-list__range">${movie.vote_average}</span>
                    </div>
                </div>
            </li>`
        }
        ).join(' ');
    
    refs.gallery.innerHTML = '';
    refs.gallery.insertAdjacentHTML('afterbegin', createListItem)
}