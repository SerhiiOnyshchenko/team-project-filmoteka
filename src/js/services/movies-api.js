import createFilmCardMarkup from '../createFilmCardMarkup'



const BASE_URL = 'https://api.themoviedb.org/3/';
const MY_KEY = '5cd994cc5e25e67f2597f5db7027d486';

export const URL_IMG = 'https://image.tmdb.org/t/p/w500';

async function fetchWithErrorHandling(url = '', config = {}) {
   const response = await fetch(url, config);
   return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
}

// async function fetchForPopularMoviesDownload(){
//    const response = await fetch(`${BASE_URL}trending/movie/week?api_key=${MY_KEY}`);
//    return response
//    ? console.log(response.json())
//    : console.log(response.message);
// } 

// fetchForPopularMoviesDownload();

function PopularMoviesDownload(){
 
   fetchWithErrorHandling(`${BASE_URL}trending/movie/week?api_key=${MY_KEY}`).then(data =>  {
      // console.log(data);
      // console.log(data.results);
      let dataArray = data.results;
   //   const arrayMarkup = 
   //   arrayMarkup.map(() => {

     }

     )

   }



PopularMoviesDownload();
createFilmCardMarkup(dataArray);