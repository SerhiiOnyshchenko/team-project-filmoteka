const btnUa = document.querySelector(".ua");
const btnEn = document.querySelector(".en");
const mode = document.querySelector(".mode");
const change = document.querySelector(".change");
const darkMode = document.querySelector(".dark-mode");
const changeContainer = document.querySelector(".change-container");
const btnHome = document.getElementById('home__js');
const myLibrary = document.getElementById('my-library__js');
const formInput = document.querySelector('.form__input');
const formLabel = document.querySelector('.form__label');
const dropbtn = document.querySelector('.header__dropbtn');
const userMenuTitleHover = document.querySelector('.user-menu__title-hover');
const userMenuList = document.querySelector('.user-menu__list');
const headerDropdownContent = document.querySelector('.header__dropdown-content');
// const footerText = document.querySelector('.footer-wraper')
const footerTextMrbottom = document.querySelector('.footer-text-mrbottom');
const footerTextMrleft = document.querySelector('.footer-text-mrleft');
const footerLink = document.querySelector('.footer-link');
const by = document.querySelector('.by');

console.log(btnUa);
console.log(btnEn);
console.log(mode);
console.log(change);
console.log(darkMode);
console.log(changeContainer);


localStorage.setItem('language', 'en');
btnEn.disabled = true;


btnUa.addEventListener('click',() =>{
    btnEn.disabled = false;
    btnUa.disabled =true;
    localStorage.setItem('language', 'ua');
    btnHome.textContent = "ДОДОМУ";
    myLibrary.textContent = "МОЯ БІБЛІОТЕКА"
    formLabel.innerHTML = 
    `<input
    class="form__input"
    type="text"
    name="search"
    placeholder="Поїхали!"
    />`
    dropbtn.classList.add('ua');
    darkMode.classList.add('ua');
    userMenuTitleHover.textContent = 'Портфоліо та налаштування'
    userMenuTitleHover.classList.add('ua');
    userMenuList.innerHTML =
    `<li class="user-menu__item" id="userMenuName"></li>
    <li class="user-menu__item">Змінити пароль</li>
    <li class="user-menu__item">Налаштування</li>
    <li class="user-menu__item user-menu__item--btn">
       <button
          id="btnLogoutHeader"
          class="user-menu__btn-logout"
          type="button"
       >
       Вийти
       </button>
    </li>`
    headerDropdownContent.innerHTML = 
    `<div class="header__dropdown-btn" data-genre="28">Екшен </div>
    <div class="header__dropdown-btn" data-genre="12">Пригоди</div>
    <div class="header__dropdown-btn" data-genre="16">Анімація</div>
    <div class="header__dropdown-btn" data-genre="35">Комедія</div>
    <div class="header__dropdown-btn" data-genre="80">Кримінал</div>
    <div class="header__dropdown-btn" data-genre="99">Документальний</div>
    <div class="header__dropdown-btn" data-genre="18">драма</div>
    <div class="header__dropdown-btn" data-genre="10751">Сімейний</div> 
    <div class="header__dropdown-btn" data-genre="14">Фэ́нтези</div>
    <div class="header__dropdown-btn" data-genre="36">Історичний</div>
    <div class="header__dropdown-btn" data-genre="27">Жахи</div>
    <div class="header__dropdown-btn" data-genre="10402">Музичний</div>
    <div class="header__dropdown-btn" data-genre="9648">містика</div>
    <div class="header__dropdown-btn" data-genre="10749">Романтика</div>
    <div class="header__dropdown-btn" data-genre="53">Трилер</div>
    <div class="header__dropdown-btn" data-genre="10752">Воєнний фільм</div>
    <div class="header__dropdown-btn" data-genre="37">Ве́стерн</div>`
    footerTextMrbottom.innerHTML = '&#169; 2022 | Всі права захищені |'
    footerTextMrleft.textContent = 'Розроблено з';
    by.textContent = '';
    footerLink.textContent = 'Студентами GoIT';
 if (localStorage.getItem('mode') === 'dark'){
changeContainer.classList.add('ua');
darkMode.textContent = "ТЕМНИЙ РЕЖИМ:";
change.textContent = "УВІМКНЕНО";
}
else{
    darkMode.textContent = "ТЕМНИЙ РЕЖИМ:";
    change.textContent = "ВИМКНЕНО";
    changeContainer.classList.add('ua');
}
})
 

btnEn.addEventListener('click',() =>{
    btnEn.disabled = true;
    btnUa.disabled = false;
    localStorage.setItem('language', 'en');
    btnHome.textContent = "HOME";
    myLibrary.textContent = "MY LIBRARY"
    formLabel.innerHTML = `
    <input
    class="form__input"
    type="text"
    name="search"
    placeholder="Let's go!"
 />`
 dropbtn.classList.remove('ua')
 darkMode.classList.remove('ua');
 userMenuTitleHover.textContent = 'Portfolio and setting'
 userMenuTitleHover.classList.remove('ua');
 userMenuList.innerHTML =
 `<li class="user-menu__item" id="userMenuName"></li>
 <li class="user-menu__item">Change password</li>
 <li class="user-menu__item">Setting</li>
 <li class="user-menu__item user-menu__item--btn">
    <button
       id="btnLogoutHeader"
       class="user-menu__btn-logout"
       type="button"
    >
       Logout
    </button>
 </li>`
 headerDropdownContent.innerHTML = 
 `<div class="header__dropdown-btn" data-genre="28">Action</div>
 <div class="header__dropdown-btn" data-genre="12">Adventure</div>
 <div class="header__dropdown-btn" data-genre="16">Animation</div>
 <div class="header__dropdown-btn" data-genre="35">Comedy</div>
 <div class="header__dropdown-btn" data-genre="80">Crime</div>
 <div class="header__dropdown-btn" data-genre="99">Documentary</div>
 <div class="header__dropdown-btn" data-genre="18">Drama</div>
 <div class="header__dropdown-btn" data-genre="10751">Family</div>
 <div class="header__dropdown-btn" data-genre="14">Fantasy</div>
 <div class="header__dropdown-btn" data-genre="36">History</div>
 <div class="header__dropdown-btn" data-genre="27">Horror</div>
 <div class="header__dropdown-btn" data-genre="10402">Music</div>
 <div class="header__dropdown-btn" data-genre="9648">Mystery</div>
 <div class="header__dropdown-btn" data-genre="10749">Romance</div>
 <div class="header__dropdown-btn" data-genre="53">Thriller</div>
 <div class="header__dropdown-btn" data-genre="10752">War</div>
 <div class="header__dropdown-btn" data-genre="37">Western</div>`
 footerTextMrbottom.innerHTML = '&#169; 2022 |>&#169; 2022 | All Rights Reserved |';
 footerTextMrleft.textContent = 'Developed with';
 by.textContent = `by`;
 footerLink.textContent = 'GoIT Students';
    if (localStorage.getItem('mode') === 'dark'){
        changeContainer.classList.remove('ua');
        darkMode.textContent = "Dark mode:";
        change.textContent = "ON";
        }
        else{
        changeContainer.classList.remove('ua');
        darkMode.textContent = "Dark mode:";
        change.textContent = "OFF";
        }
})
