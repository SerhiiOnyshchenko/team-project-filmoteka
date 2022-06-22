export default function toggleBtnTextAndStyle(btn) {
   if (btn === 'btnWatched') {
      const btnWatched = document.querySelector('.add-to-watched');

      if (btnWatched.classList.contains('btn-checked')) {
         btnWatched.classList.remove('btn-checked');
         if(localStorage.getItem('language') === 'ua'){
            btnWatched.innerHTML = 'Додати до переглянутого';
        }
        else{
         btnWatched.innerHTML = 'Add to Watched';
        }
      //    btnWatched.innerHTML = 'Add to Watched';
      } else {
         btnWatched.classList.add('btn-checked');
         if(localStorage.getItem('language') === 'ua'){
            btnWatched.innerHTML = 'Видалити з переглянутого';
        }
        else{
         btnWatched.innerHTML = 'Remove from Watched';
        }
         // btnWatched.innerHTML = 'Remove from Watched';
      }
      return;
   }

   if (btn === 'btnQueue') {
      const btnQueue = document.querySelector('.add-to-queue');

      if (btnQueue.classList.contains('btn-checked')) {
         btnQueue.classList.remove('btn-checked');

         if(localStorage.getItem('language') === 'ua'){
            btnQueue.innerHTML= 'Додати до черги';
         }
         else{ 
            btnQueue.innerHTML = 'Add to Queue';
         }
        
         // btnQueue.innerHTML = 'Add to Queue';
      } else {
         btnQueue.classList.add('btn-checked');

         if(localStorage.getItem('language') === 'ua'){
            btnQueue.innerHTML = 'Видалити з черги';
         }
         else{
            btnQueue.innerHTML =  'Remove from queue';
         }
         // btnQueue.innerHTML = 'Remove from Queue';
      }

      return;
   }
}
