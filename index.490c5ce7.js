var e={openModalBtn:document.querySelector(".footer-link"),closeModalBtn:document.querySelector(".footerModalClose"),footerModal:document.querySelector("[data-footerModal]"),bodyScroll:document.querySelector("body"),modal:document.querySelector(".modal-content"),backdrop:document.querySelector(".backdrop"),btnClose:document.querySelector(".btn-close"),signUpButton:document.getElementById("signUp"),signInButton:document.getElementById("signIn"),container:document.getElementById("container"),logo:document.getElementById("logo__js"),btnHome:document.getElementById("home__js"),btnMyLibrary:document.getElementById("my-library__js"),header:document.getElementById("header"),libraryBtns:document.getElementById("header__btns"),headerInput:document.getElementById("header__form")};function t(){e.footerModal.classList.add("is-hidden"),e.bodyScroll.classList.remove("is-open"),e.closeModalBtn.removeEventListener("click",t),document.removeEventListener("keydown",i)}function i(e){console.log(e.code),"Escape"===e.code&&t()}e.openModalBtn.addEventListener("click",(function(){e.footerModal.classList.remove("is-hidden"),e.bodyScroll.classList.add("is-open"),document.addEventListener("keydown",i),e.closeModalBtn.addEventListener("click",t)}));const n=[{id:1,title:"Serhii",text:"Team Lead",task:"sdghg",linkGit:"https://github.com/SerhiiOnyshchenko",linkLinkdin:"https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D1%96%D0%B9-%D0%BE%D0%BD%D0%B8%D1%89%D0%B5%D0%BD%D0%BA%D0%BE-045b6a184/",img:"./images/favicon/serhiy.webp"},{id:2,title:"Anastasiia",text:"Scrum",task:"sdghg",linkGit:"https://github.com/LadyNenAdams",linkLinkdin:"https://www.linkedin.com/in/anastasiia-balhabaieva-830497194/",img:"./images/team/anastasia.webp"},{id:3,title:"Dmitriy",text:"Developer",task:"sdghg",linkGit:"https://github.com/KizievDmitriy/",linkLinkdin:"https://www.linkedin.com/in/dmytro-kiziiev-469991b9/",img:"./images/team/ya.webp"},{id:4,title:"Illia",text:"Developer",task:"sdghg",linkGit:"https://github.com/IlliaBekarevych",linkLinkdin:"https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%8F-%D0%B1%D0%B5%D0%BA%D0%B0%D1%80%D0%B5%D0%B2%D0%B8%D1%87-1203751a8/",img:"./images/team/iliya.webp"},{id:5,title:"Maksym",text:"Developer",task:"sdghg",linkGit:"https://github.com/p0shta",linkLinkdin:"#",img:"./images/team/maksim.webp"},{id:6,title:"Vlad",text:"Developer",task:"sdghg",linkGit:"https://github.com/Vlad-Petrenko",linkLinkdin:"https://www.linkedin.com/in/vlad-petrenko",img:"./images/team/vlad.webp"},{id:7,title:"Natalia",text:"Developer",task:"sdghg",linkGit:"https://github.com/NataliaMonasturska",linkLinkdin:"#",img:"./images/team/natali.webp"},{id:8,title:"Vladimir",text:"Developer",task:"sdghg",linkGit:"https://github.com/Vova-KE",linkLinkdin:"#",img:"./images/team/vladimir.webp"},{id:9,title:"Dmitriy",text:"Developer",task:"sdghg",linkGit:"https://github.com/imavin08",linkLinkdin:"http://www.linkedin.com/in/dima-mykhailov",img:"./images/team/dima.webp"}],a=e=>`<li class="comand-item">\n    <img src="${e.img}" alt="${e.text}" class="comand-item-img">\n    <div class="comand-item-wrapper">\n        <h3 class="comand-title">${e.title}</h3>\n        <p class="comand-text">${e.text}</p>\n        <ul class="comand-link-list">\n            <li class="comand-link-item">\n                <a href="${e.linkGit}" class="comand-link-item-social" target="_blank" rel="noopener noreferrer" >\n                    <svg class="comand-link-item-svg" width="20" height="20">\n                        <use href="./images/symbol-defs.svg#icon-github"></use>\n                    </svg>\n                </a>\n            </li>\n            <li class="comand-link-item">\n                <a href="https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D1%96%D0%B9-%D0%BE%D0%BD%D0%B8%D1%89%D0%B5%D0%BD%D0%BA%D0%BE-045b6a184/" class="comand-link-item-social" target="_blank" rel="noopener noreferrer">\n                    <svg class="${e.linkLinkdin}" width="20" height="20">\n                        <use href="./images/symbol-defs.svg#icon-linkedin"></use>\n                    </svg>\n                </a>\n            </li>\n        </ul>\n    </div>\n    <div class="comand-item-card-action">\n        <p class="comand-item-card-text">${e.task}</p>\n    </div>\n</li>`;function s(){e.backdrop.classList.remove("is-hidden")}function o(e){"Escape"===e.code&&(s(),window.removeEventListener("keydown",o))}function d(e){e.currentTarget===e.target&&s()}function l(){e.libraryBtns.classList.add("display-none"),e.headerInput.classList.remove("display-none"),e.btnMyLibrary.classList.remove("current"),e.btnHome.classList.add("current"),e.header.classList.remove("library__background")}!function(){const e=n.map(a).join("");document.querySelector("#footerTeam").innerHTML=e}(),window.addEventListener("click",(function(t){if(t.preventDefault(),!t.target.classList.contains("card"))return;e.backdrop.classList.add("is-hidden"),window.addEventListener("keydown",o),e.btnClose.addEventListener("click",s),e.backdrop.addEventListener("click",d)})),e.signUpButton.addEventListener("click",(()=>{e.container.classList.add("right-panel-active")})),e.signInButton.addEventListener("click",(()=>{e.container.classList.remove("right-panel-active")})),e.logo.addEventListener("click",l),e.btnHome.addEventListener("click",l),e.btnMyLibrary.addEventListener("click",(function(){e.header.classList.add("library__background"),e.libraryBtns.classList.remove("display-none"),e.headerInput.classList.add("display-none"),e.btnMyLibrary.classList.add("current"),e.btnHome.classList.remove("current")}));
//# sourceMappingURL=index.490c5ce7.js.map
