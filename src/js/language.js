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
const Setting = document.getElementById('setting');
const btnLogoutHeader = document.getElementById('btnLogoutHeader');
const SignIn = document.getElementById('SignIn');
const txtEmailLogin = document.getElementById('txtEmailLogin');
const txtPasswordLogin = document.getElementById('txtPasswordLogin');
const registerFormLink = document.querySelector('.register-form__link');
const btnLoginBtn = document.getElementById('btnLoginBtn');
const HelloFriend = document.getElementById('HelloFriend');
const HelloFriendText = document.getElementById('HelloFriendText');
const signUpBtn = document.getElementById('signUpBtn');
const WelcomeBack = document.getElementById('WelcomeBack');
const WelcomeBackText = document.getElementById('WelcomeBackText');
const signInBtn = document.getElementById('signInBtn');
const createAccount = document.getElementById('createAccount');
const txtNameRegister = document.getElementById('txtNameRegister');
const txtEmailRegister = document.getElementById('txtEmailRegister');
const txtPasswordRegister = document.getElementById('txtPasswordRegister');
const btnSignUpBtn = document.getElementById('btnSignUpBtn');

console.log(btnUa);
console.log(btnEn);
console.log(mode);
console.log(change);
console.log(darkMode);
console.log(changeContainer);

localStorage.setItem('language', 'en');
btnEn.disabled = true;

btnUa.addEventListener('click', () => {
   btnEn.disabled = false;
   btnUa.disabled = true;
   localStorage.setItem('language', 'ua');
   btnHome.textContent = 'ДОДОМУ';
   myLibrary.textContent = 'МОЯ БІБЛІОТЕКА';
   formLabel.innerHTML = `<input
    class="form__input"
    type="text"
    name="search"
    placeholder="Пошук..."
    />`;
   dropbtn.classList.add('ua');
   darkMode.classList.add('ua');
   userMenuTitleHover.textContent = 'Портфоліо та налаштування';
   userMenuTitleHover.classList.add('ua');
   changePassword.textContent = 'Змінити пароль';
   Setting.textContent = 'Налаштування';
   btnLogoutHeader.textContent = 'Вийти';
   headerDropdownContent.innerHTML = `<div class="header__dropdown-btn" data-genre="28">Екшен </div>
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
    <div class="header__dropdown-btn" data-genre="37">Ве́стерн</div>`;
   footerTextMrbottom.innerHTML = '&#169; 2022 | Всі права захищені |';
   footerTextMrleft.textContent = 'Розроблено з';
   by.textContent = 'by';
   footerLink.textContent = 'Студентами GoIT';
   inputError.textContent =
      'Результат пошуку не вдалий. Введіть правильну назву фільму.';
   watched.textContent = 'ПЕРЕГЛЯНУТІ';
   queue.textContent = 'В ЧЕРЗІ';
   btnLoginHeader.textContent = 'УВІЙТИ';
   SignIn.textContent = 'Увійти';
   txtEmailLogin.placeholder = 'Пошта';
   txtPasswordLogin.placeholder = 'Пароль';
   registerFormLink.textContent = 'Забули свій пароль?';
   btnLoginBtn.textContent = 'Увійти';
   HelloFriend.textContent = 'Привіт друже!';
   HelloFriendText.textContent =
      'Введіть свої особисті дані та почніть подорож разом з нами';
   signUpBtn.textContent = 'Зареєструватися';
   WelcomeBack.textContent = 'Ласкаво просимо!';
   WelcomeBackText.textContent =
      'Для того, щоб приєднатися до нас, будь ласка, увійдіть, використовуючи свою особисту інформацію';
   signInBtn.textContent = 'Увійти';
   createAccount.textContent = 'Створити обліковий запис';
   txtNameRegister.placeholder = "Ім'я";
   txtEmailRegister.placeholder = 'Пошта';
   txtPasswordRegister.placeholder = 'Пароль';
   btnSignUpBtn.textContent = 'Зареєструватися';
   if (localStorage.getItem('mode') === 'dark') {
      changeContainer.classList.add('ua');
      darkMode.textContent = 'ТЕМНИЙ РЕЖИМ:';
      change.textContent = 'УВІМКНЕНО';
   } else {
      darkMode.textContent = 'ТЕМНИЙ РЕЖИМ:';
      change.textContent = 'ВИМКНЕНО';
      changeContainer.classList.add('ua');
   }
});

btnEn.addEventListener('click', () => {
   btnEn.disabled = true;
   btnUa.disabled = false;
   localStorage.setItem('language', 'en');
   btnHome.textContent = 'HOME';
   myLibrary.textContent = 'MY LIBRARY';
   formLabel.innerHTML = `
    <input
    class="form__input"
    type="text"
    name="search"
    placeholder="Let's go!"
 />`;
   dropbtn.classList.remove('ua');
   darkMode.classList.remove('ua');
   userMenuTitleHover.textContent = 'Portfolio and setting';
   userMenuTitleHover.classList.remove('ua');
   changePassword.textContent = 'Change password';
   Setting.textContent = 'Setting';
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
   SignIn.textContent = 'Sign in';
   txtEmailLogin.placeholder = 'Email';
   txtPasswordLogin.placeholder = 'Password';
   registerFormLink.textContent = 'Forgot your password?';
   btnLoginBtn.textContent = 'Sign In';
   HelloFriend.textContent = 'Hello, Friend!';
   HelloFriendText.textContent =
      'Enter your personal details and start journey with us';
   signUpBtn.textContent = 'Sign Up';
   WelcomeBack.textContent = 'Welcome Back!';
   WelcomeBackText.textContent =
      'To keep connected with us please login with your personal info';
   signInBtn.textContent = 'Sign In';
   createAccount.textContent = 'Create Account';
   txtNameRegister.placeholder = 'Name';
   txtEmailRegister.placeholder = 'Email';
   txtPasswordRegister.placeholder = 'Password';
   btnSignUpBtn.textContent = 'Sign Up';
   if (localStorage.getItem('mode') === 'dark') {
      changeContainer.classList.remove('ua');
      darkMode.textContent = 'Dark mode:';
      change.textContent = 'ON';
   } else {
      changeContainer.classList.remove('ua');
      darkMode.textContent = 'Dark mode:';
      change.textContent = 'OFF';
   }
});
