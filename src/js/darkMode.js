const modeText = document.querySelector( ".change" );
modeText.addEventListener("click", function() {
    if( document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
        modeText.innerHTML = "OFF";
    } else {
      document.body.classList.add('dark');
      modeText.innerHTML = "ON";
    }
});

