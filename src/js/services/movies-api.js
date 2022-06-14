import fs from 'fs';
const BASE_URL = 'https://api.themoviedb.org/3/';
const MY_KEY = '5cd994cc5e25e67f2597f5db7027d486';

export const URL_IMG = 'https://image.tmdb.org/t/p/w500';

async function fetchWithErrorHandling(url = '', config = {}) {
   const response = await fetch(url, config);
   return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
}
