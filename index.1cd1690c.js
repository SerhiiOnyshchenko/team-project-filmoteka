!function(){var e={modal:document.querySelector(".modal-content"),backdrop:document.querySelector(".backdrop"),btnClose:document.querySelector(".btn-close"),signUpButton:document.getElementById("signUp"),signInButton:document.getElementById("signIn"),container:document.getElementById("container"),logo:document.getElementById("logo__js"),btnHome:document.getElementById("home__js"),btnMyLibrary:document.getElementById("my-library__js"),header:document.getElementById("header"),libraryBtns:document.getElementById("header__btns"),headerInput:document.getElementById("header__form")};function n(){e.backdrop.classList.remove("is-hidden")}function t(e){"Escape"===e.code&&(n(),window.removeEventListener("keydown",t))}function d(e){e.currentTarget===e.target&&n()}function r(){e.libraryBtns.classList.add("display-none"),e.headerInput.classList.remove("display-none"),e.btnMyLibrary.classList.remove("current"),e.btnHome.classList.add("current"),e.header.classList.remove("library__background")}window.addEventListener("click",(function(r){if(r.preventDefault(),!r.target.classList.contains("card"))return;e.backdrop.classList.add("is-hidden"),window.addEventListener("keydown",t),e.btnClose.addEventListener("click",n),e.backdrop.addEventListener("click",d)})),e.signUpButton.addEventListener("click",(function(){e.container.classList.add("right-panel-active")})),e.signInButton.addEventListener("click",(function(){e.container.classList.remove("right-panel-active")})),e.logo.addEventListener("click",r),e.btnHome.addEventListener("click",r),e.btnMyLibrary.addEventListener("click",(function(){e.header.classList.add("library__background"),e.libraryBtns.classList.remove("display-none"),e.headerInput.classList.add("display-none"),e.btnMyLibrary.classList.add("current"),e.btnHome.classList.remove("current")}))}();
//# sourceMappingURL=index.1cd1690c.js.map
