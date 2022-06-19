export default function toggleBtnTextAndStyle(btn) {
   if (btn === 'btnWatched') {
      const btnWatched = document.querySelector('.add-to-watched');

      if (btnWatched.classList.contains('btn-checked')) {
         btnWatched.classList.remove('btn-checked');
         btnWatched.innerHTML = 'Add to Watched';
      } else {
         btnWatched.classList.add('btn-checked');
         btnWatched.innerHTML = 'Remove from Watched';
      }

      return;
   }

   if (btn === 'btnQueue') {
      const btnQueue = document.querySelector('.add-to-queue');

      if (btnQueue.classList.contains('btn-checked')) {
         btnQueue.classList.remove('btn-checked');
         btnQueue.innerHTML = 'Add to Queue';
      } else {
         btnQueue.classList.add('btn-checked');
         btnQueue.innerHTML = 'Remove from Queue';
      }

      return;
   }
}
