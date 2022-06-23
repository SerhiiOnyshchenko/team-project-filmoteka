const btnUa = document.querySelector('.ua');
const btnEn = document.querySelector('.en');
const mode = document.querySelector('.mode');
const change = document.querySelector('.change');
const darkMode = document.querySelector('.dark-mode');
const changeContainer = document.querySelector('.change-container');
const btnHome = document.getElementById('home__js');
const myLibrary = document.getElementById('my-library__js');
const formInput = document.querySelector('.form__input');
const formLabel = document.querySelector('.form__label');
const dropbtn = document.querySelector('.header__dropbtn');
const userMenuTitleHover = document.querySelector('.user-menu__title-hover');
const userMenuList = document.querySelector('.user-menu__list');
const headerDropdownContent = document.querySelector(
   '.header__dropdown-content'
);
const footerTextMrbottom = document.querySelector('.footer-text-mrbottom');
const footerTextMrleft = document.querySelector('#developed');
const footerLink = document.querySelector('.footer-link');
const by = document.querySelector('.by');
const inputError = document.querySelector('.input-error');
const watched = document.getElementById('watched');
const queue = document.getElementById('queue');
const btnLoginHeader = document.getElementById('btnLoginHeader');
const changePassword = document.getElementById('changePassword');
const setting = document.getElementById('setting');
const btnLogoutHeader = document.getElementById('btnLogoutHeader');
const signIn = document.getElementById('SignIn');
const txtEmailLogin = document.getElementById('txtEmailLogin');
const txtPasswordLogin = document.getElementById('txtPasswordLogin');
const registerFormLink = document.querySelector('.register-form__link');
const btnLoginBtn = document.getElementById('btnLoginBtn');
const helloFriend = document.getElementById('HelloFriend');
const helloFriendText = document.getElementById('HelloFriendText');
const signUpBtn = document.getElementById('signUpBtn');
const welcomeBack = document.getElementById('WelcomeBack');
const welcomeBackText = document.getElementById('WelcomeBackText');
const signInBtn = document.getElementById('signInBtn');
const createAccount = document.getElementById('createAccount');
const txtNameRegister = document.getElementById('txtNameRegister');
const txtEmailRegister = document.getElementById('txtEmailRegister');
const txtPasswordRegister = document.getElementById('txtPasswordRegister');
const btnSignUpBtn = document.getElementById('btnSignUpBtn');
const comand = document.querySelector('.comand');
const serhiiTitle = document.getElementById('serhiiTitle');
const serhiiText = document.getElementById('serhiiText');
const anastasiiaTitle = document.getElementById('anastasiiaTitle');
const anastasiiaText = document.getElementById('anastasiiaText');
const dmitriyTitle = document.getElementById('dmitriyTitle');
const dmitriyText = document.getElementById('dmitriyText');
const illiaTitle = document.getElementById('illiaTitle');
const illiaText = document.getElementById('illiaText');
const maksymTitle = document.getElementById('maksymTitle');
const maksymText = document.getElementById('maksymText');
const vladTitle = document.getElementById('vladTitle');
const vladText = document.getElementById('vladText');
const vladimirTitle = document.getElementById('vladimirTitle');
const vladimirText = document.getElementById('vladimirText');
const nataliaTitle = document.getElementById('nataliaTitle');
const nataliaText = document.getElementById('nataliaText');
const dmitriy2Title = document.getElementById('dmitriy2Title');
const dmitriy2Text = document.getElementById('dmitriy2Text');
const comandItemCardText1 = document.getElementById('comand-item-card-text1');
const comandItemCardText2 = document.getElementById('comand-item-card-text2');
const comandItemCardText3 = document.getElementById('comand-item-card-text3');
const comandItemCardText4 = document.getElementById('comand-item-card-text4');
const comandItemCardText5 = document.getElementById('comand-item-card-text5');
const comandItemCardText6 = document.getElementById('comand-item-card-text6');
const comandItemCardText7 = document.getElementById('comand-item-card-text7');
const comandItemCardText8 = document.getElementById('comand-item-card-text8');
const comandItemCardText9 = document.getElementById('comand-item-card-text9');
const comandItemCardText10 = document.getElementById('comand-item-card-text10');
const comandItemCardText11 = document.getElementById('comand-item-card-text11');
const comandItemCardText12 = document.getElementById('comand-item-card-text12');
const comandItemCardText13 = document.getElementById('comand-item-card-text13');
const comandItemCardText14 = document.getElementById('comand-item-card-text14');
const comandItemCardText15 = document.getElementById('comand-item-card-text15');
const comandItemCardText16 = document.getElementById('comand-item-card-text16');
const comandItemCardText17 = document.getElementById('comand-item-card-text17');
const comandItemCardText18 = document.getElementById('comand-item-card-text18');
const comandItemCardText19 = document.getElementById('comand-item-card-text19');
const comandItemCardText20 = document.getElementById('comand-item-card-text20');
const comandItemCardText21 = document.getElementById('comand-item-card-text21');
const comandItemCardText22 = document.getElementById('comand-item-card-text22');
const comandItemCardText23 = document.getElementById('comand-item-card-text23');
const comandItemCardText24 = document.getElementById('comand-item-card-text24');
const comandItemCardText25 = document.getElementById('comand-item-card-text25');
const comandItemCardText26 = document.getElementById('comand-item-card-text26');
const comandItemCardText27 = document.getElementById('comand-item-card-text27');
const comandItemCardText28 = document.getElementById('comand-item-card-text28');
const comandItemCardText29 = document.getElementById('comand-item-card-text29');

// localStorage.setItem('language', 'en');
btnEn.disabled = true;
document.addEventListener('DOMContentLoaded', () => {
   if (localStorage.getItem('language') === 'ua') {
      ua();
   } else {
      en();
   }
});
if (localStorage.getItem('language') === 'ua') {
   ua();
} else {
   en();
}

btnUa.addEventListener('click', ua);

btnEn.addEventListener('click', en);

function ua() {
   btnEn.classList.remove('active-btn');
   btnUa.classList.add('active-btn');
   btnEn.disabled = false;
   btnUa.disabled = true;
   localStorage.setItem('language', 'ua');
   btnHome.textContent = 'ДОДОМУ';
   myLibrary.textContent = 'БІБЛІОТЕКА';
   formLabel.innerHTML = `<input
    class="form__input"
    type="text"
    name="search"
    placeholder="Пошук..."/>`;
   dropbtn.classList.add('ua');
   darkMode.classList.add('ua');
   darkMode.textContent = 'Темна тема';
   userMenuTitleHover.textContent = 'Портфоліо та налаштування';
   userMenuTitleHover.classList.add('ua');
   changePassword.textContent = 'Змінити пароль';
   setting.textContent = 'Налаштування';
   btnLogoutHeader.textContent = 'Вийти';
   headerDropdownContent.innerHTML = `<div class="header__dropdown-btn" data-genre="28">Екшен </div>
    <div class="header__dropdown-btn" data-genre="12">Пригоди</div>
    <div class="header__dropdown-btn" data-genre="16">Анімація</div>
    <div class="header__dropdown-btn" data-genre="35">Комедія</div>
    <div class="header__dropdown-btn" data-genre="80">Кримінал</div>
    <div class="header__dropdown-btn" data-genre="99">Документальний</div>
    <div class="header__dropdown-btn" data-genre="18">Драма</div>
    <div class="header__dropdown-btn" data-genre="10751">Сімейний</div> 
    <div class="header__dropdown-btn" data-genre="14">Фэ́нтези</div>
    <div class="header__dropdown-btn" data-genre="36">Історичний</div>
    <div class="header__dropdown-btn" data-genre="27">Жахи</div>
    <div class="header__dropdown-btn" data-genre="10402">Музичний</div>
    <div class="header__dropdown-btn" data-genre="9648">Містика</div>
    <div class="header__dropdown-btn" data-genre="10749">Романтика</div>
	 <div class="header__dropdown-btn" data-genre="878">Наукова фантастика</div>
    <div class="header__dropdown-btn" data-genre="10770">Телешоу</div>
    <div class="header__dropdown-btn" data-genre="53">Трилер</div>
    <div class="header__dropdown-btn" data-genre="10752">Воєнний фільм</div>
    <div class="header__dropdown-btn" data-genre="37">Ве́стерн</div>`;
   footerTextMrbottom.innerHTML = '&#169; 2022 | Всі права захищені |';
   footerTextMrleft.textContent = 'Розроблено з';
   by.textContent = '';
   footerLink.textContent = 'Студентами GoIT';
   inputError.textContent =
      'Результат пошуку не вдалий. Введіть правильну назву фільму.';
   watched.textContent = 'ПЕРЕГЛЯНУТІ';
   queue.textContent = 'В ЧЕРЗІ';
   btnLoginHeader.textContent = 'УВІЙТИ';
   signIn.textContent = 'Увійти';
   txtEmailLogin.placeholder = 'Пошта';
   txtPasswordLogin.placeholder = 'Пароль';
   registerFormLink.textContent = 'Забули свій пароль?';
   btnLoginBtn.textContent = 'Увійти';
   helloFriend.textContent = 'Привіт друже!';
   helloFriendText.textContent =
      'Введіть свої особисті дані та почніть подорож разом з нами';
   signUpBtn.textContent = 'Зареєструватися';
   welcomeBack.textContent = 'Ласкаво просимо!';
   welcomeBackText.textContent =
      'Для того, щоб приєднатися до нас, будь ласка, увійдіть, використовуючи свою особисту інформацію';
   signInBtn.textContent = 'Увійти';
   createAccount.textContent = 'Створити обліковий запис';
   txtNameRegister.placeholder = "Ім'я";
   txtEmailRegister.placeholder = 'Пошта';
   txtPasswordRegister.placeholder = 'Пароль';
   btnSignUpBtn.textContent = 'Зареєструватися';
   comand.textContent = 'Наша команда';
   serhiiTitle.textContent = 'Сергій';
   serhiiText.textContent = 'Тімлід';

   anastasiiaTitle.textContent = 'Анастасія';
   anastasiiaText.textContent = 'Скрам ';

   dmitriyTitle.textContent = 'Дмитро';
   dmitriyText.textContent = 'Розробник ';

   illiaTitle.textContent = 'Ілля';
   illiaText.textContent = 'Розробник ';

   maksymTitle.textContent = 'Максим';
   maksymText.textContent = 'Розробник ';

   vladTitle.textContent = 'Влад';
   vladText.textContent = 'Розробник ';

   vladimirTitle.textContent = 'Володимир';
   vladimirText.textContent = 'Розробник ';

   nataliaTitle.textContent = 'Наталія';
   nataliaText.textContent = 'Розробник ';

   dmitriy2Title.textContent = 'Дмитро';
   dmitriy2Text.textContent = 'Розробник ';

   comandItemCardText1.textContent =
      'Реєстрація/автентифікація користувача через Firebase';
   comandItemCardText2.textContent =
      'Підвантаження акторів,інформації про акторів';
   comandItemCardText3.textContent =
      'Запис параметрів пошуку в URL та зчитування при перезагрузці';
   comandItemCardText4.textContent = 'Пошук за жанром';
   comandItemCardText5.textContent = 'Світла/темна тема';
   comandItemCardText6.textContent =
      'Верстка хедера для головної/my library сторінок';
   comandItemCardText7.textContent =
      'Пошук та відображення фільмів за ключовим словом';
   comandItemCardText8.textContent = 'Верстка футера';
   comandItemCardText9.textContent = 'Верстка модалки футера';
   comandItemCardText10.textContent = 'Підвантаження трейлера';
   comandItemCardText11.textContent = 'Кнопка при скролі вниз';
   comandItemCardText12.textContent = 'Анімація логотипу';
   comandItemCardText13.textContent =
      'Підключення spinner для асинхронних запитів';
   comandItemCardText14.textContent =
      'Відображення головної сторінки після натискання на логотип/Home/';
   comandItemCardText15.textContent = 'Відображення бібліотеки користувача';
   comandItemCardText16.textContent = 'Додавання до черги фільму';
   comandItemCardText17.textContent = 'Додаванняя до переглянутих фільмів';
   comandItemCardText18.textContent = 'Верстка контейнера головної сторінки';
   comandItemCardText19.textContent = 'Верстка шаблону картки одного фільму';
   comandItemCardText20.textContent =
      'Закриття модалки за натисканням на клавішу ESC та за кліком';
   comandItemCardText21.textContent =
      'Додавання динамічно підставленою інформацією про фільм за натисканням картки з фільму';
   comandItemCardText22.textContent =
      "Верстка контейнера сторінки 'My Library'";
   comandItemCardText23.textContent =
      'За натисканням на "Watched" показуються переглянуті фільми';
   comandItemCardText24.textContent =
      'За натисканням на "Queue" показуються фільми додані в чергу';
   comandItemCardText25.textContent = 'Верстка шаблону модалки одного фільму';
   comandItemCardText26.textContent =
      'Підвантаження популярних фільмів на головну сторінку';
   comandItemCardText27.textContent = 'ЗМІНА МОВИ';
   comandItemCardText28.textContent =
      'При переході на кожну сторінку малювати відповідну частину фільмів';
   comandItemCardText29.textContent = 'ВЕРСТКА ПАГІНАЦІЇ';

   if (localStorage.getItem('mode') === 'dark') {
      changeContainer.classList.add('ua');
      change.textContent = 'ON';
   } else {
      change.textContent = 'OFF';
      changeContainer.classList.add('ua');
   }
}

function en() {
   btnUa.classList.remove('active-btn');
   btnEn.classList.add('active-btn');
   btnEn.disabled = true;
   btnUa.disabled = false;
   localStorage.setItem('language', 'en');
   btnHome.textContent = 'HOME';
   myLibrary.textContent = 'MY LIBRARY';
   formLabel.innerHTML = `<input
    class="form__input"
    type="text"
    name="search"
    placeholder="Let's go!"
 />`;
   dropbtn.classList.remove('ua');
   darkMode.classList.remove('ua');
   darkMode.textContent = 'Dark mode:';
   userMenuTitleHover.textContent = 'Portfolio and setting';
   userMenuTitleHover.classList.remove('ua');
   changePassword.textContent = 'Change password';
   setting.textContent = 'Setting';
   btnLogoutHeader.textContent = 'Logout';
   headerDropdownContent.innerHTML = `<div class="header__dropdown-btn" data-genre="28">Action</div>
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
 <div class="header__dropdown-btn" data-genre="878">Science Fiction</div>
 <div class="header__dropdown-btn" data-genre="10770">TV Movie</div>
 <div class="header__dropdown-btn" data-genre="53">Thriller</div>
 <div class="header__dropdown-btn" data-genre="10752">War</div>
 <div class="header__dropdown-btn" data-genre="37">Western</div>`;
   footerTextMrbottom.innerHTML =
      '&#169; 2022 | &#169; 2022 | All Rights Reserved |';
   footerTextMrleft.textContent = 'Developed with';
   by.textContent = `by`;
   footerLink.textContent = 'GoIT Students';
   inputError.textContent =
      'Search result not successful. Enter the correct movie name.';
   watched.textContent = 'watched';
   queue.textContent = 'queue';
   btnLoginHeader.textContent = 'Login';
   signIn.textContent = 'Sign in';
   txtEmailLogin.placeholder = 'Email';
   txtPasswordLogin.placeholder = 'Password';
   registerFormLink.textContent = 'Forgot your password?';
   btnLoginBtn.textContent = 'Sign In';
   helloFriend.textContent = 'Hello, Friend!';
   helloFriendText.textContent =
      'Enter your personal details and start journey with us';
   signUpBtn.textContent = 'Sign Up';
   welcomeBack.textContent = 'Welcome Back!';
   welcomeBackText.textContent =
      'To keep connected with us please login with your personal info';
   signInBtn.textContent = 'Sign In';
   createAccount.textContent = 'Create Account';
   txtNameRegister.placeholder = 'Name';
   txtEmailRegister.placeholder = 'Email';
   txtPasswordRegister.placeholder = 'Password';
   btnSignUpBtn.textContent = 'Sign Up';
   comand.textContent = 'Our Team';
   serhiiTitle.textContent = 'Serhii';
   serhiiText.textContent = 'Team Lead';

   anastasiiaTitle.textContent = 'Anastasiia';
   anastasiiaText.textContent = 'Scrum';

   dmitriyTitle.textContent = 'Dmitriy';
   dmitriyText.textContent = 'Developer';

   illiaTitle.textContent = 'Illia';
   illiaText.textContent = 'Developer';

   maksymTitle.textContent = 'Maksym';
   maksymText.textContent = 'Developer';

   vladTitle.textContent = 'Vlad';
   vladText.textContent = 'Developer';

   vladimirTitle.textContent = 'Vladimir';
   vladimirText.textContent = 'Developer';

   nataliaTitle.textContent = 'Natalia';
   nataliaText.textContent = 'Developer';

   dmitriy2Title.textContent = 'Dmitriy';
   dmitriy2Text.textContent = 'Developer';
   comandItemCardText1.textContent =
      'User registration / authentication via Firebase';
   comandItemCardText2.textContent = 'Loading actors, information about actors';
   comandItemCardText3.textContent =
      'Record search parameters in the URL and read on reboot';
   comandItemCardText4.textContent = 'Search by genre';
   comandItemCardText5.textContent = 'Dark mode';
   comandItemCardText6.textContent =
      'Header layout for main and my library pages';
   comandItemCardText7.textContent = 'Search and display movies by keyword';
   comandItemCardText8.textContent = 'Footer layout';
   comandItemCardText9.textContent = 'Footer modal layout';
   comandItemCardText10.textContent = 'Loading trailer';
   comandItemCardText11.textContent = 'Button when scrolling down';
   comandItemCardText12.textContent = 'Logo animation';
   comandItemCardText13.textContent =
      'Spinner connection for asynchronous queries';
   comandItemCardText14.textContent =
      'Display the home page after clicking on the Home / logo';
   comandItemCardText15.textContent = 'Display the user library';
   comandItemCardText16.textContent = 'Add to queue';
   comandItemCardText17.textContent = 'Add to watched';
   comandItemCardText18.textContent = 'Home page container layout';
   comandItemCardText19.textContent = 'One movie card template layout';
   comandItemCardText20.textContent =
      'Close the modal by pressing the ESC key and clicking';
   comandItemCardText21.textContent =
      'Add dynamically based movie information by tapping a movie card';
   comandItemCardText22.textContent = 'My Library page container layout';
   comandItemCardText23.textContent =
      'Clicking on "Watched" shows watched movies';
   comandItemCardText24.textContent =
      'Clicking on "Queue" shows movies added to the queue.';
   comandItemCardText25.textContent = 'Layout template of a film modal';
   comandItemCardText26.textContent = 'Upload popular movies to the home page';
   comandItemCardText27.textContent = 'Switch to English/Ukrainian';
   comandItemCardText28.textContent =
      'When going to each page, draw the appropriate part of the movies';
   comandItemCardText29.textContent = 'PAGINATION LAYOUT';
}
