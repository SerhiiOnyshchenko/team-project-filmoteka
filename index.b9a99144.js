function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};let n;n="ua"===localStorage.getItem("language")?[{id:28,name:"Бойовик"},{id:12,name:"Пригоди"},{id:16,name:"Мультфільм"},{id:35,name:"Комедія"},{id:80,name:"Кримінал"},{id:99,name:"Документальний"},{id:18,name:"Драма"},{id:10751,name:"Сімейний"},{id:14,name:"Фентезі"},{id:36,name:"Історичний"},{id:27,name:"Жахи"},{id:10402,name:"Музика"},{id:9648,name:"Детектив"},{id:10749,name:"Мелодрама"},{id:878,name:"Фантастика"},{id:10770,name:"Телефільм"},{id:53,name:"Трилер"},{id:10752,name:"Військовий"},{id:37,name:"Вестерн"}]:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],console.log(n);var i=n;function r(e){const{poster_path:t,genre_ids:n,id:r,title:s,release_date:a,vote_average:o,genres:c}=e,d=(null==c?void 0:c.map((({id:e})=>e)))||[],l=(null==n?void 0:n.slice(0,3))||d,u=[];for(const e of l)for(const t of i)e===t.id&&u.push(t.name);const h="ua"===localStorage.getItem("language");u.length>2&&(u[u.length-1]=h?"Інші":"Others");const p=u.join(", "),m=(null==a?void 0:a.slice(0,4))||"...";return`<li data-id="${r}" class="card film-card">\n        <div class="film-card__img-wrap">\n            <img\n                class="film-card__img"\n                src=${t?Ir+t:"https://www.reelviews.net/resources/img/default_poster.jpg"}\n                alt=${s}\n            />\n        </div>\n        <h2 class="film-card__title">${s}</h2>\n        <div class="film-card__wrap">\n            <span class="film-card__info">${p} | ${m}</span>\n            <span data-film-rating class="film-card__rating">${o}</span>\n        </div>\n    </li>`}var s={openModalBtn:document.querySelector("#footer-link"),closeModalBtn:document.querySelector("#footerModalClose"),footerModal:document.querySelector("#footerModal"),bodyScroll:document.querySelector("body"),galleryList:document.getElementById("gallery-list"),modal:document.querySelector(".modal-content"),backdrop:document.querySelector(".backdrop"),btnClose:document.querySelector(".btn-close"),cardMoveDetail:document.getElementById("cardMoveDetail"),cardMoveAuthors:document.getElementById("cardMoveAuthors"),showAuthors:document.getElementById("showAuthors"),modalMovieBackdrop:document.getElementById("modalMovieBackdrop"),signUpButton:document.getElementById("signUpBtn"),signInButton:document.getElementById("signInBtn"),container:document.getElementById("container"),registerFormSignIn:document.getElementById("registerFormSignIn"),registerFormSignUp:document.getElementById("registerFormSignUp"),btnLoginHeader:document.getElementById("btnLoginHeader"),btnLogoutHeader:document.getElementById("btnLogoutHeader"),userMenu:document.getElementById("userMenu"),firstLetter:document.getElementById("firstLetter"),userMenuName:document.getElementById("userMenuName"),socialBtnGoogleLogin:document.getElementById("socialBtnGoogleLogin"),socialBtnGoogleRegister:document.getElementById("socialBtnGoogleRegister"),formLoginRegister:document.getElementById("formLoginRegister"),loginUser:document.getElementById("loginUser"),divLoginError:document.getElementById("divLoginError"),divRegisterError:document.getElementById("divRegisterError"),lblLoginErrorMessage:document.getElementById("lblLoginErrorMessage"),registerFormCloseBtn:document.getElementById("registerFormCloseBtn"),logo:document.getElementById("logo__js"),btnHome:document.getElementById("home__js"),btnMyLibrary:document.getElementById("my-library__js"),header:document.getElementById("header"),libraryBtns:document.getElementById("header__btns"),headerInput:document.getElementById("header__form"),inputError:document.getElementById("input-error"),genresList:document.getElementById("genresList"),searchForm:document.getElementById("form"),searchBtn:document.querySelector(".form__btn"),galleryList:document.getElementById("gallery-list"),paginationList:document.querySelector("#js-pagination__list"),scrollToTopEl:document.querySelector("#scroll-to-top"),preloader:document.getElementById("preloader"),mainLoader:document.getElementById("mainPreloader"),trailer:document.getElementById("trailer-modal-wrapper"),trailerWrap:document.getElementById("trailer-modal"),mainSection:document.querySelector("main")};var a={searchText:"",whichTypeMovieSearch:"trend",totalPages:1,personId:0,genre:""};async function o(e,t=1){const n=await Nr(e,t);a.totalPages=n.total_pages,a.whichTypeMovieSearch="genres",a.genre=e,s.galleryList.innerHTML=n.results.map(r).join(""),ur(t)}function c(){const e=[...document.querySelectorAll(".header__dropdown-btn")].filter((e=>e.classList.contains("activeBtn")));1===e.length&&e[0].classList.remove("activeBtn")}async function d(e=1){const t=await Sr(e);a.whichTypeMovieSearch="trend",a.totalPages=t.total_pages,s.galleryList.innerHTML=t.results.map(r).join(""),ur(e),c()}async function l(e,t=1){const n=await Lr(e,t);n.results.length?(window.history.replaceState({},"",`?type=search&query=${e}&page=${t}`),a.totalPages=n.total_pages,a.whichTypeMovieSearch="search",a.searchText=e,s.inputError.classList.add("visually-hidden"),s.galleryList.innerHTML=n.results.map(r).join(""),ur(t),c()):(s.inputError.classList.remove("visually-hidden"),setTimeout((()=>{s.inputError.classList.add("visually-hidden")}),4e3))}function u(e){const{title:t,id:n,vote_average:i,vote_count:r,popularity:s,original_title:a,genres:o,overview:c,poster_path:d}=e,l=localStorage.getItem("watchedFilms"),u=JSON.parse(l);let h=!1;if(u)for(const e of u)e.id===n&&(h=!0);let p=h?"btn-checked":"",m="";m=h?"ua"===localStorage.getItem("language")?"Видалити з переглянутого":"Remove from watched":"ua"===localStorage.getItem("language")?"Додати до переглянутого":"Add to Watched";const g=localStorage.getItem("queueFilms"),f=JSON.parse(g);let v=!1;if(f)for(const e of f)e.id===n&&(v=!0);let _="",y=v?"btn-checked":"";_=v?"ua"===localStorage.getItem("language")?"Видалити з черги":"Remove from queue":"ua"===localStorage.getItem("language")?"Додати до черги":"Add to queue";const I="ua"===localStorage.getItem("language"),b=o.map((e=>e.name)).join(", ");return`<div class="image-container">\n   <img\n      src=${d?Ir+d:"https://www.reelviews.net/resources/img/default_poster.jpg"}\n      alt="Poster ${t}"\n   />\n<button type="button"  class="trailer__play-btn" data-id="${n}" aria-label="Trailer" id="trailerOpen"></button>\n</div>\n<div class="container-context">\n   <div class="top-content">\n      <h2 class="modal-title">${t}</h2>\n      <div class="option-film">\n       <div class="option-film-container">\n         <p class="option-film-left">${I?"Рейтинг":"Vote / Votes"}</p>\n         <p class="option-film-right">\n            <span class="vote">${i}</span><span class="slash"> /</span><span class="votes">${r}</span>\n         </p>\n      </div>\n      <div class="option-film-container">\n         <p class="option-film-left">${I?"Популярність":"Popularity"}</p>\n         <p class="option-film-right">${s}</p>\n      </div>\n      <div class="option-film-container">\n         <p class="option-film-left">${I?"Оригінальна назва":"Original Title"}</p>\n         <p class="option-film-right option-film-right-line-height">\n            ${a}\n         </p>\n      </div>\n      <div class="option-film-container">\n         <p class="option-film-left">${I?"Жанр":"Genre"}</p>  \n         <p class="option-film-right option-film-right-line-height">${b}</p>\n      </div>\n      <div class="option-film-container">\n         <p  class="option-film-left option-film-left-style">${I?"Автори":"Authors"}</p>\n         <div class="show-style">\n         <p class="option-film-right option-film-right-style" data-id=${n} id="showAuthors">${I?"ПОКАЗАТИ":"SHOW"}</p>\n         </div>\n      </div>\n      </div>\n      <h3 class="title-modal">${I?"Про фільм":"About"}</h3>\n      <p class="text-modal">\n         ${c}\n      </p>\n   </div>\n\n   <div class="btn-container" id="btn-container" >\n      <button type="button" class="${p} btn-modal add-to-watched data-btn-id=${n}">\n         ${m} \n      </button>\n      <button type="button" class="${y} btn-modal add-to-queue data-btn-id=${n}">\n         ${_} \n      </button>\n   </div>\n</div>`}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */s.genresList.addEventListener("click",(e=>{if("header__dropdown-btn"===e.target.className){c(),e.target.classList.add("activeBtn");o(e.target.dataset.genre)}})),document.addEventListener("DOMContentLoaded",(()=>{if(""===window.location.search)return;const e=window.location.search.split("?")[1].split("&");if("type=genres"===e[0]){const t=e[1].split("=")[1];o(t,e[2].split("=")[1]),document.querySelector(`[data-genre="${t}"]`).classList.add("activeBtn")}})),document.addEventListener("DOMContentLoaded",(()=>{if(""===window.location.search)return void d();const e=window.location.search.split("?")[1].split("&");if("type=popular"===e[0]){d(e[1].split("=")[1])}})),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".backdrop").forEach((e=>e.style.display="flex"))})),s.searchForm.addEventListener("submit",(async e=>{e.preventDefault();const t=s.searchForm.search.value.trim();t.length>0&&(l(t),s.searchForm.reset())})),document.addEventListener("DOMContentLoaded",(()=>{if(""===window.location.search)return;const e=window.location.search.split("?")[1].split("&");if("type=search"===e[0]){l(e[1].split("=")[1],e[2].split("=")[1])}}));const h=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,d=r>>2,l=(3&r)<<4|a>>4;let u=(15&a)<<2|c>>6,h=63&c;o||(h=64,s||(u=64)),i.push(n[d],n[l],n[u],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(h(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==a||null==o)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==a){const e=s<<4&240|a>>2;if(i.push(e),64!==o){const e=a<<6&192|o;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},m=function(e){return function(e){const t=h(e);return p.encodeByteArray(t,!0)}(e).replace(/\./g,"")},g=function(e){try{return p.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class f{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function _(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function y(){const e=v();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class I extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(E,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new I(i,a,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function T(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(S(n)&&S(s)){if(!T(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function S(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function k(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function C(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){const n=new O(e,t);return n.subscribe.bind(n)}class O{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=A),void 0===i.error&&(i.error=A),void 0===i.complete&&(i.complete=A);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function A(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(e){return e&&e._delegate?e._delegate:e}class D{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new f;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class P{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new M(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=[];var U,B;(B=U||(U={}))[B.DEBUG=0]="DEBUG",B[B.VERBOSE=1]="VERBOSE",B[B.INFO=2]="INFO",B[B.WARN=3]="WARN",B[B.ERROR=4]="ERROR",B[B.SILENT=5]="SILENT";const F={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},H=U.INFO,$={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},j=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=$[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class V{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?F[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}constructor(e){this.name=e,this._logLevel=H,this._logHandler=j,this._userLogHandler=null,x.push(this)}}let q,W;const z=new WeakMap,G=new WeakMap,K=new WeakMap,J=new WeakMap,Y=new WeakMap;let X={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return G.get(e);if("objectStoreNames"===t)return e.objectStoreNames||K.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ee(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Q(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(W||(W=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(te(this),t),ee(z.get(this))}:function(...t){return ee(e.apply(te(this),t))}:function(t,...n){const i=e.call(te(this),t,...n);return K.set(i,t.sort?t.sort():[t]),ee(i)}}function Z(e){return"function"==typeof e?Q(e):(e instanceof IDBTransaction&&function(e){if(G.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));G.set(e,t)}(e),t=e,(q||(q=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,X):e);var t}function ee(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ee(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&z.set(t,e)})).catch((()=>{})),Y.set(t,e),t}(e);if(J.has(e))return J.get(e);const t=Z(e);return t!==e&&(J.set(e,t),Y.set(t,e)),t}const te=e=>Y.get(e);function ne(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(e,t),o=ee(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(ee(a.result),e.oldVersion,e.newVersion,ee(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),o.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),o}const ie=["get","getKey","getAll","getAllKeys","count"],re=["put","add","delete","clear"],se=new Map;function ae(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(se.get(t))return se.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=re.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!ie.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let a=s.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),r&&s.done]))[0]};return se.set(t,s),s}X=(e=>({...e,get:(t,n,i)=>ae(t,n)||e.get(t,n,i),has:(t,n)=>!!ae(t,n)||e.has(t,n)}))(X);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oe{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const ce=new V("@firebase/app"),de={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},le=new Map,ue=new Map;function he(e,t){try{e.container.addComponent(t)}catch(n){ce.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pe(e){const t=e.name;if(ue.has(t))return ce.debug(`There were multiple attempts to register component ${t}.`),!1;ue.set(t,e);for(const t of le.values())he(t,e);return!0}function me(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ge=new b("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new D("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e="[DEFAULT]"){const t=le.get(e);if(!t)throw ge.create("no-app",{appName:e});return t}function _e(e,t,n){var i;let r=null!==(i=de[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ce.warn(e.join(" "))}pe(new D(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let ye=null;function Ie(){return ye||(ye=ne("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ge.create("storage-open",{originalErrorMessage:e.message})}))),ye}async function be(e,t){var n;try{const n=(await Ie()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,Ee(e)),n.done}catch(e){throw ge.create("storage-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message})}}function Ee(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Te();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Te(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Le(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Le(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=m(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Se(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Te(){return(new Date).toISOString().substring(0,10)}class Se{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await Ie()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ee(e))}catch(e){throw ge.create("storage-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return be(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return be(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Le(e){return m(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;ke="",pe(new D("platform-logger",(e=>new oe(e)),"PRIVATE")),pe(new D("heartbeat",(e=>new we(e)),"PRIVATE")),_e("@firebase/app","0.7.26",ke),_e("@firebase/app","0.7.26","esm2017"),_e("fire-js","");function Ce(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function Ne(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oe=Ne,Ae=new b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Re={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},De=new V("@firebase/auth");function Me(e,...t){De.logLevel<=U.ERROR&&De.error(`Auth (9.8.3): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e,...t){throw Be(e,...t)}function xe(e,...t){return Be(e,...t)}function Ue(e,t,n){const i=Object.assign(Object.assign({},Oe()),{[t]:n});return new b("auth","Firebase",i).create(t,{appName:e.name})}function Be(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Ae.create(e,...t)}function Fe(e,t,...n){if(!e)throw Be(t,...n)}function He(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Me(t),new Error(t)}function $e(e,t){e||He(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new Map;function Ve(e){$e(e instanceof Function,"Expected a class definition");let t=je.get(e);return t?($e(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,je.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function We(){return"http:"===ze()||"https:"===ze()}function ze(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(We()||_()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{get(){return Ge()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,$e(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e,t){$e(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void He("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void He("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void He("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Qe=new Ke(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function et(e,t,n,i,r={}){return tt(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const a=L(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),Ye.fetch()(it(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},r))}))}async function tt(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Xe),t);try{const t=new rt(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw st(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw st(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw st(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw st(e,"user-disabled",s);const o=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw Ue(e,o,a);Pe(e,o)}}catch(t){if(t instanceof I)throw t;Pe(e,"network-request-failed")}}async function nt(e,t,n,i,r={}){const s=await et(e,t,n,i,r);return"mfaPendingCredential"in s&&Pe(e,"multi-factor-auth-required",{_serverResponse:s}),s}function it(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Je(e.config,r):`${e.config.apiScheme}://${r}`}class rt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(xe(this.auth,"network-request-failed"))),Qe.get())}))}}function st(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=xe(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function at(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){return 1e3*Number(e)}function ct(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Me("JWT malformed, contained fewer than 3 sections"),null;try{const e=g(n);return e?JSON.parse(e):(Me("Failed to decode base64 JWT payload"),null)}catch(e){return Me("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof I&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class lt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{_initializeTime(){this.lastSignInTime=at(this.lastLoginAt),this.creationTime=at(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e){var t;const n=e.auth,i=await e.getIdToken(),r=await dt(e,async function(e,t){return et(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Fe(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ce(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const o=(c=e.providerData,d=a,[...c.filter((e=>!d.some((t=>t.providerId===e.providerId)))),...d]);var c,d;const l=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),h=!!l&&u,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ut(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Fe(e.idToken,"internal-error"),Fe(void 0!==e.idToken,"internal-error"),Fe(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ct(e);return Fe(t,"internal-error"),Fe(void 0!==t.exp,"internal-error"),Fe(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Fe(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await tt(e,{},(async()=>{const n=L({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=it(e,i,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ye.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new pt;return n&&(Fe("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(Fe("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(Fe("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pt,this.toJSON())}_performRefresh(){return He("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,t){Fe("string"==typeof e||void 0===e,"internal-error",{appName:t})}class gt{async getIdToken(e){const t=await dt(this,this.stsTokenManager.getToken(this.auth,e));return Fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=R(e),i=await n.getIdToken(t),r=ct(i);Fe(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:at(ot(r.auth_time)),issuedAtTime:at(ot(r.iat)),expirationTime:at(ot(r.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=R(e);await ht(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ht(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await dt(this,async function(e,t){return et(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,a,o,c,d;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,m=null!==(a=t.tenantId)&&void 0!==a?a:void 0,g=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,f=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(d=t.lastLoginAt)&&void 0!==d?d:void 0,{uid:_,emailVerified:y,isAnonymous:I,providerData:b,stsTokenManager:E}=t;Fe(_&&E,e,"internal-error");const w=pt.fromJSON(this.name,E);Fe("string"==typeof _,e,"internal-error"),mt(l,e.name),mt(u,e.name),Fe("boolean"==typeof y,e,"internal-error"),Fe("boolean"==typeof I,e,"internal-error"),mt(h,e.name),mt(p,e.name),mt(m,e.name),mt(g,e.name),mt(f,e.name),mt(v,e.name);const T=new gt({uid:_,auth:e,email:u,emailVerified:y,displayName:l,isAnonymous:I,photoURL:p,phoneNumber:h,tenantId:m,stsTokenManager:w,createdAt:f,lastLoginAt:v});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new pt;i.updateFromServerResponse(t);const r=new gt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ht(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Ce(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ut(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}ft.type="NONE";const vt=ft;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e,t,n){return`firebase:${e}:${t}:${n}`}class yt{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new yt(Ve(vt),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Ve(vt);const s=_t(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(s);if(t){const i=gt._fromJSON(e,t);n!==r&&(a=i),r=n;break}}catch(e){}const o=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&o.length?(r=o[0],a&&await r._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new yt(r,e,n)):new yt(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=_t(this.userKey,i.apiKey,r),this.fullPersistenceKey=_t("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Tt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(bt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Lt(t))return"Blackberry";if(kt(t))return"Webos";if(Et(t))return"Safari";if((t.includes("chrome/")||wt(t))&&!t.includes("edge/"))return"Chrome";if(St(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function bt(e=v()){return/firefox\//i.test(e)}function Et(e=v()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wt(e=v()){return/crios\//i.test(e)}function Tt(e=v()){return/iemobile/i.test(e)}function St(e=v()){return/android/i.test(e)}function Lt(e=v()){return/blackberry/i.test(e)}function kt(e=v()){return/webos/i.test(e)}function Ct(e=v()){return/iphone|ipad|ipod/i.test(e)}function Nt(){return y()&&10===document.documentMode}function Ot(e=v()){return Ct(e)||St(e)||kt(e)||Lt(e)||/windows phone/i.test(e)||Tt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function At(e,t=[]){let n;switch(e){case"Browser":n=It(v());break;case"Worker":n=`${It(v())}-${e}`;break;default:n=e}return`${n}/JsCore/9.8.3/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ve(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await yt.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==s||!(null==a?void 0:a.user)||(i=a.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ht(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?R(e):null;return t&&Fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ve(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new b("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ve(e)||this._popupRedirectResolver;Fe(t,this,"argument-error"),this.redirectPersistenceManager=await yt.create(this,[Ve(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Fe(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=At(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pt(this),this.idTokenSubscription=new Pt(this),this.beforeStateQueue=new Rt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ae,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Mt(e){return R(e)}class Pt{get next(){return Fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=N((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{toJSON(){return He("not implemented")}_getIdTokenResponse(e){return He("not implemented")}_linkToIdToken(e,t){return He("not implemented")}_getReauthenticationResolver(e){return He("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e,t){return et(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt extends xt{static _fromEmailAndPassword(e,t){return new Bt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Bt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return nt(e,"POST","/v1/accounts:signInWithPassword",Ze(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return nt(e,"POST","/v1/accounts:signInWithEmailLink",Ze(e,t))}(e,{email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ut(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return nt(e,"POST","/v1/accounts:signInWithEmailLink",Ze(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(e,t){return nt(e,"POST","/v1/accounts:signInWithIdp",Ze(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends xt{static _fromParams(e){const t=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Ce(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Ht(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Ft(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ft(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=L(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt extends xt{static _fromVerification(e,t){return new jt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new jt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return nt(e,"POST","/v1/accounts:signInWithPhoneNumber",Ze(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await nt(e,"POST","/v1/accounts:signInWithPhoneNumber",Ze(e,t));if(n.temporaryProof)throw st(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return nt(e,"POST","/v1/accounts:signInWithPhoneNumber",Ze(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),$t)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new jt({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{static parseLink(e){const t=function(e){const t=k(C(e)).link,n=t?k(C(t)).deep_link_id:null,i=k(C(e)).deep_link_id;return(i?k(C(i)).link:null)||i||n||t||e}(e);try{return new Vt(t)}catch(e){return null}}constructor(e){var t,n,i,r,s,a;const o=k(C(e)),c=null!==(t=o.apiKey)&&void 0!==t?t:null,d=null!==(n=o.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=o.mode)&&void 0!==i?i:null);Fe(c&&d&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=d,this.continueUrl=null!==(r=o.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{static credential(e,t){return Bt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Vt.parseLink(t);return Fe(n,"argument-error"),Bt._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=qt.PROVIDER_ID}}qt.PROVIDER_ID="password",qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Wt{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt extends zt{static credential(e){return Ht._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Gt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends zt{static credential(e,t){return Ht._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Kt.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Kt.GOOGLE_SIGN_IN_METHOD="google.com",Kt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends zt{static credential(e){return Ht._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Jt.GITHUB_SIGN_IN_METHOD="github.com",Jt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends zt{static credential(e,t){return Ht._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Yt.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xt(e,t){return nt(e,"POST","/v1/accounts:signUp",Ze(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.TWITTER_SIGN_IN_METHOD="twitter.com",Yt.PROVIDER_ID="twitter.com";class Qt{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await gt._fromIdTokenResponse(e,n,i),s=Zt(n);return new Qt({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Zt(n);return new Qt({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Zt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class en extends I{static _fromErrorAndOperation(e,t,n,i){return new en(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,en.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function tn(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw en._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,t,n=!1){const i=await dt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Qt._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rn(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await dt(e,tn(i,r,t,e),n);Fe(s.idToken,i,"internal-error");const a=ct(s.idToken);Fe(a,i,"internal-error");const{sub:o}=a;return Fe(e.uid===o,i,"user-mismatch"),Qt._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Pe(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,t,n=!1){const i="signIn",r=await tn(e,i,t),s=await Qt._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function an(e,t){return sn(Mt(e),t)}async function on(e,t,n){const i=Mt(e),r=await Xt(i,{returnSecureToken:!0,email:t,password:n}),s=await Qt._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function cn(e,t,n){return an(R(e),qt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=R(e),r={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await dt(i,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return et(e,"POST","/v1/accounts:update",t)}(i.auth,r));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const a=i.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}function ln(e,t,n,i){return R(e).onAuthStateChanged(t,n,i)}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends un{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Nt()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=v();return Et(e)||Ct(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ot(),this._shouldAllowMigration=!0}}hn.type="LOCAL";const pn=hn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends un{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}mn.type="SESSION";const gn=mn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new fn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(s).map((async e=>e(t.origin,r))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn.receivers=[];class _n{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((a,o)=>{const c=vn("",20);i.port1.start();const d=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(d),r=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),a(t.data.response);break;default:clearTimeout(d),clearTimeout(r),o(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function In(){return void 0!==yn().WorkerGlobalScope&&"function"==typeof yn().importScripts}class bn{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function En(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function wn(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new bn(e).toPromise()}(),t(await wn()))}))}))}async function Tn(e,t,n){const i=En(e,!0).put({fbase_key:t,value:n});return new bn(i).toPromise()}function Sn(e,t){const n=En(e,!0).delete(t);return new bn(n).toPromise()}class Ln{async _openDb(){return this.db||(this.db=await wn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return In()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fn._getInstance(In()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new _n(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wn();return await Tn(e,"__sak","1"),await Sn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Tn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=En(e,!1).get(t),i=await new bn(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Sn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=En(e,!1).getAll();return new bn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Ln.type="LOCAL";const kn=Ln;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=xe("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function Nn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Nn("rcb"),new Ke(3e4,6e4);async function On(e,t,n){var i;const r=await n.verify();try{let s;if(Fe("string"==typeof r,e,"argument-error"),Fe("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Fe("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return et(e,"POST","/v2/accounts/mfaEnrollment:start",Ze(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Fe("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;Fe(n,e,"missing-multi-factor-info");const a=await function(e,t){return et(e,"POST","/v2/accounts/mfaSignIn:start",Ze(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return et(e,"POST","/v1/accounts:sendVerificationCode",Ze(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An{verifyPhoneNumber(e,t){return On(this.auth,e,R(t))}static credential(e,t){return jt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return An.credentialFromTaggedObject(t)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?jt._fromTokenResponse(t,n):null}constructor(e){this.providerId=An.PROVIDER_ID,this.auth=Mt(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rn(e,t){return t?Ve(t):(Fe(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An.PROVIDER_ID="phone",An.PHONE_SIGN_IN_METHOD="phone";class Dn extends xt{_getIdTokenResponse(e){return Ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Mn(e){return sn(e.auth,new Dn(e),e.bypassAuthState)}function Pn(e){const{auth:t,user:n}=e;return Fe(n,t,"internal-error"),rn(n,new Dn(e),e.bypassAuthState)}async function xn(e){const{auth:t,user:n}=e;return Fe(n,t,"internal-error"),nn(n,new Dn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mn;case"linkViaPopup":case"linkViaRedirect":return xn;case"reauthViaPopup":case"reauthViaRedirect":return Pn;default:Pe(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Ke(2e3,1e4);class Fn extends Un{async executeNotNull(){const e=await this.execute();return Fe(e,this.auth,"internal-error"),e}async onExecution(){$e(1===this.filter.length,"Popup operations only handle one event");const e=vn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(xe(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Bn.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}}Fn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hn=new Map;class $n extends Un{async execute(){let e=Hn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=qn(t),i=Vn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Hn.set(this.auth._key(),e)}return this.bypassAuthState||Hn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function jn(e,t){Hn.set(e._key(),t)}function Vn(e){return Ve(e._redirectPersistence)}function qn(e){return _t("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(e,t,n=!1){const i=Mt(e),r=Rn(i,t),s=new $n(i,r,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}class zn{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Kn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(xe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gn(e))}saveEventToCache(e){this.cachedEventUids.add(Gn(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Gn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Kn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yn=/^https?/;async function Xn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return et(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Qn(e))return}catch(e){}Pe(e,"unauthorized-domain")}function Qn(e){const t=qe(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Yn.test(n))return!1;if(Jn.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Ke(3e4,6e4);function ei(){const e=yn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ti=null;function ni(e){return ti=ti||function(e){return new Promise(((t,n)=>{var i,r,s;function a(){ei(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ei(),n(xe(e,"network-request-failed"))},timeout:Zn.get()})}if(null===(r=null===(i=yn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=yn().gapi)||void 0===s?void 0:s.load)){const t=Nn("iframefcb");return yn()[t]=()=>{gapi.load?a():n(xe(e,"network-request-failed"))},Cn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw ti=null,e}))}(e),ti}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Ke(5e3,15e3),ri={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},si=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ai(e){const t=e.config;Fe(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Je(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.8.3"},r=si.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${L(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ci{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function di(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const c=Object.assign(Object.assign({},oi),{width:i.toString(),height:r.toString(),top:s,left:a}),d=v().toLowerCase();n&&(o=wt(d)?"_blank":n),bt(d)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=v()){var t;return Ct(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(d)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",o),new ci(null);const u=window.open(t||"",o,l);Fe(u,e,"popup-blocked");try{u.focus()}catch(e){}return new ci(u)}function li(e,t,n,i,r,s){Fe(e.config.authDomain,e,"auth-domain-config-required"),Fe(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.8.3",eventId:r};if(t instanceof Wt){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",w(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof zt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];return`${function({config:e}){return e.emulator?Je(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${L(o).slice(1)}`}const ui=class{async _openPopup(e,t,n,i){var r;$e(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return di(e,li(e,t,n,qe(),i),vn())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=li(e,t,n,qe(),i),yn().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):($e(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await ni(e),n=yn().gapi;return Fe(n,e,"internal-error"),t.open({where:document.body,url:ai(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ri,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=xe(e,"network-request-failed"),s=yn().setTimeout((()=>{i(r)}),ii.get());function a(){yn().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{i(r)}))}))))}(e),n=new zn(e);return t.register("authEvent",(t=>{Fe(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),Pe(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ot()||Et()||Ct()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gn,this._completeRedirectFn=Wn,this._overrideRedirectResult=jn}};var hi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pi{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi="Browser",pe(new D("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{Fe(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Fe(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:hi,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:At(hi)},a=new Dt(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ve);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),pe(new D("auth-internal",(e=>{const t=Mt(e.getProvider("auth").getImmediate());return new pi(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),_e("@firebase/auth","0.20.3",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(hi)),_e("@firebase/auth","0.20.3","esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_e("firebase","9.8.3","app"),s.signUpButton.addEventListener("click",(()=>{s.container.classList.add("right-panel-active")})),s.signInButton.addEventListener("click",(()=>{s.container.classList.remove("right-panel-active")})),s.registerFormCloseBtn.addEventListener("click",(()=>{vi()})),s.formLoginRegister.addEventListener("click",(e=>{e.target===e.currentTarget&&(mi(),vi())}));const mi=()=>{s.registerFormSignIn.reset(),s.registerFormSignUp.reset()},gi=()=>{s.formLoginRegister.classList.remove("is-hidden"),window.addEventListener("keydown",fi)},fi=e=>{"Escape"===e.key&&(vi(),window.removeEventListener("keydown",fi))},vi=()=>{s.formLoginRegister.classList.add("is-hidden")},_i=()=>{s.divLoginError.style.display="none",s.divLoginError.innerHTML=""},yi=e=>{s.divLoginError.style.display="block",e.code==Re.INVALID_PASSWORD?"ua"===localStorage.getItem("language")?s.divLoginError.innerHTML="Неправильний пароль. Спробуйте ще раз.":s.divLoginError.innerHTML="Wrong password. Try again.":"auth/user-not-found"===e.code?"ua"===localStorage.getItem("language")?s.divLoginError.innerHTML="Користувача не знайдено.":s.divLoginError.innerHTML="User not found.":s.divLoginError.innerHTML=`Error: ${e.message}`},Ii=()=>{s.divRegisterError.style.display="none",s.divRegisterError.innerHTML=""},bi=e=>{s.divRegisterError.style.display="block","auth/weak-password"===e.code?"ua"===localStorage.getItem("language")?s.divRegisterError.innerHTML="Пароль має містити не менше 6 символів.":s.divRegisterError.innerHTML="Password should be at least 6 characters.":"auth/email-already-in-use"===e.code?"ua"===localStorage.getItem("language")?s.divRegisterError.innerHTML="E-mail вже використовується.":s.divRegisterError.innerHTML="Email already in use.":s.divRegisterError.innerHTML=`Error: ${e.message}`};function Ei(e){if(e.preventDefault(),""===window.location.search)return;const t=window.location.search.split("?")[1].split("&");"type=popular"===t[0]&&"1"===t[1].split("=")[1]||wi()}function wi(){s.libraryBtns.classList.add("display-none"),s.headerInput.classList.remove("display-none"),s.btnMyLibrary.classList.remove("current"),s.btnHome.classList.add("current"),s.header.classList.remove("library__background"),d()}function Ti(){ln(Li,(e=>{if(e)return window.history.replaceState({},"","?myLibrary"),pr(),s.galleryList.innerHTML="",s.header.classList.add("library__background"),s.libraryBtns.classList.remove("display-none"),s.headerInput.classList.add("display-none"),s.btnMyLibrary.classList.add("current"),void s.btnHome.classList.remove("current");gi()}))}_i(),Ii(),s.logo.addEventListener("click",Ei),s.btnHome.addEventListener("click",Ei),s.btnMyLibrary.addEventListener("click",Ti),s.firstLetter.addEventListener("click",(function(e){e.target===e.currentTarget&&(s.userMenu.classList.add("active-user-menu"),window.addEventListener("keydown",Si),document.querySelector(".user-menu__box").addEventListener("click",(e=>{e.currentTarget===e.target&&(s.userMenu.classList.remove("active-user-menu"),window.removeEventListener("keydown",Si))})))}));const Si=e=>{"Escape"===e.code&&(s.userMenu.classList.remove("active-user-menu"),window.removeEventListener("keydown",Si))};document.addEventListener("DOMContentLoaded",(()=>{if(""===window.location.search)return;"myLibrary"===window.location.search.split("?")[1].split("&")[0]&&Ti()}));const Li=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=ve()){const t=me(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=me(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(T(n.getOptions(),null!=t?t:{}))return e;Pe(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:ui,persistence:[kn,pn,gn]})}(function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw ge.create("bad-app-name",{appName:String(i)});const r=le.get(i);if(r){if(T(e,r.options)&&T(n,r.config))return r;throw ge.create("duplicate-app",{appName:i})}const s=new P(i);for(const e of ue.values())s.addComponent(e);const a=new fe(e,n,s);return le.set(i,a),a}({apiKey:"AIzaSyDJl3YEGzyNFJZUYRjpN5Y1fjyAFUITL0A",authDomain:"team-project-filmoteka-ec82b.firebaseapp.com",projectId:"team-project-filmoteka-ec82b",storageBucket:"team-project-filmoteka-ec82b.appspot.com",messagingSenderId:"596058482639",appId:"1:596058482639:web:8ef528cfa5b2f0ec0f14ba",measurementId:"G-QKMSTBGVP1"})),ki=async(e,t,n)=>{try{await on(Li,t,n),await dn(Li.currentUser,{displayName:e}),Ii(),mi(),vi()}catch(e){console.dir(e),bi(e)}},Ci=async(e,t)=>{try{await cn(Li,e,t),_i(),mi(),vi()}catch(e){yi(e)}};s.registerFormSignIn.addEventListener("submit",(e=>{e.preventDefault();const t=e.target.email.value,n=e.target.password.value;Ci(t,n)})),s.registerFormSignUp.addEventListener("submit",(e=>{e.preventDefault();const t=e.target.name.value.trim(),n=e.target.email.value,i=e.target.password.value;if(Ni(n))if(t)ki(t,n,i);else{bi({message:"No validate Name"})}else{bi({message:"No validate email"})}})),s.btnLogoutHeader.addEventListener("click",(async()=>{try{await(e=Li,R(e).signOut()),gi(),wi()}catch(e){}var e})),s.btnLoginHeader.addEventListener("click",gi),(async()=>{ln(Li,(e=>{e?(s.loginUser.innerHTML="",s.btnLoginHeader.style.display="none",s.userMenu.style.display="flex",s.firstLetter.innerHTML=e.displayName.slice(0,1),s.userMenuName.innerHTML=e.displayName.toUpperCase()):("ua"===localStorage.getItem("language")?s.loginUser.innerHTML="Ви не ввійшли в систему.":s.loginUser.innerHTML="You're not logged in.",s.btnLoginHeader.style.display="block",s.userMenu.style.display="none",s.userMenu.classList.remove("active-user-menu"))}))})();const Ni=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);var Oi,Ai=/^\s+|\s+$/g,Ri=/^[-+]0x[0-9a-f]+$/i,Di=/^0b[01]+$/i,Mi=/^0o[0-7]+$/i,Pi=parseInt,xi="object"==typeof t&&t&&t.Object===Object&&t,Ui="object"==typeof self&&self&&self.Object===Object&&self,Bi=xi||Ui||Function("return this")(),Fi=Object.prototype.toString,Hi=Math.max,$i=Math.min,ji=function(){return Bi.Date.now()};function Vi(e,t,n){var i,r,s,a,o,c,d=0,l=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=i,s=r;return i=r=void 0,d=t,a=e.apply(s,n)}function m(e){return d=e,o=setTimeout(f,t),l?p(e):a}function g(e){var n=e-c;return void 0===c||n>=t||n<0||u&&e-d>=s}function f(){var e=ji();if(g(e))return v(e);o=setTimeout(f,function(e){var n=t-(e-c);return u?$i(n,s-(e-d)):n}(e))}function v(e){return o=void 0,h&&i?p(e):(i=r=void 0,a)}function _(){var e=ji(),n=g(e);if(i=arguments,r=this,c=e,n){if(void 0===o)return m(c);if(u)return o=setTimeout(f,t),p(c)}return void 0===o&&(o=setTimeout(f,t)),a}return t=Wi(t)||0,qi(n)&&(l=!!n.leading,s=(u="maxWait"in n)?Hi(Wi(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),_.cancel=function(){void 0!==o&&clearTimeout(o),d=0,i=c=r=o=void 0},_.flush=function(){return void 0===o?a:v(ji())},_}function qi(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Wi(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==Fi.call(e)}(e))return NaN;if(qi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=qi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Ai,"");var n=Di.test(e);return n||Mi.test(e)?Pi(e.slice(2),n?2:8):Ri.test(e)?NaN:+e}function zi(e){if("btnWatched"!==e)if("btnQueue"!==e);else{const e=document.querySelector(".add-to-queue");e.classList.contains("btn-checked")?(e.classList.remove("btn-checked"),"ua"===localStorage.getItem("language")?e.innerHTML="Додати до черги":e.innerHTML="Add to Queue"):(e.classList.add("btn-checked"),"ua"===localStorage.getItem("language")?e.innerHTML="Видалити з черги":e.innerHTML="Remove from queue")}else{const e=document.querySelector(".add-to-watched");e.classList.contains("btn-checked")?(e.classList.remove("btn-checked"),"ua"===localStorage.getItem("language")?e.innerHTML="Додати до переглянутого":e.innerHTML="Add to Watched"):(e.classList.add("btn-checked"),"ua"===localStorage.getItem("language")?e.innerHTML="Видалити з переглянутого":e.innerHTML="Remove from Watched")}}Oi=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return qi(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),Vi(e,t,{leading:i,maxWait:t,trailing:r})};let Gi=[];function Ki(t){document.querySelector(".add-to-queue").addEventListener("click",e(Oi)((function(e){try{Gi=[...JSON.parse(localStorage.getItem("queueFilms"))]}catch(e){Gi=[]}ln(Li,(n=>{if(n){if(e.target.classList.contains("btn-checked"))for(const e of Gi)if(t.id===e.id){const e=Gi.filter((e=>e.id!==t.id));return Gi=[...e],localStorage.setItem("queueFilms",JSON.stringify(Gi)),zi("btnQueue"),void Ji(t.id)}return Gi.push(t),localStorage.setItem("queueFilms",JSON.stringify(Gi)),zi("btnQueue"),void Ji(t.id)}gi()}))}),1e3))}function Ji(e){const t=localStorage.getItem("watchedFilms"),n=JSON.parse(t);if(n){for(const t of n)if(t.id===e){const t=n.filter((t=>t.id!==e));localStorage.setItem("watchedFilms",JSON.stringify(t)),zi("btnWatched")}document.querySelector(".library__background")&&"queue"===a.whichTypeMovieSearch&&_r(),document.querySelector(".library__background")&&"watched"===a.whichTypeMovieSearch&&gr()}}let Yi=[];function Xi(t){document.querySelector(".add-to-watched").addEventListener("click",e(Oi)((function(e){try{Yi=[...JSON.parse(localStorage.getItem("watchedFilms"))]}catch(e){Yi=[]}ln(Li,(n=>{if(n){if(e.target.classList.contains("btn-checked"))for(const e of Yi)if(t.id===e.id){const e=Yi.filter((e=>e.id!==t.id));return Yi=[...e],localStorage.setItem("watchedFilms",JSON.stringify(Yi)),zi("btnWatched"),void Qi(t.id)}return Yi.push(t),localStorage.setItem("watchedFilms",JSON.stringify(Yi)),zi("btnWatched"),void Qi(t.id)}gi()}))}),1e3))}function Qi(e){const t=localStorage.getItem("queueFilms"),n=JSON.parse(t);if(n){for(const t of n)if(t.id===e){const t=n.filter((t=>t.id!==e));localStorage.setItem("queueFilms",JSON.stringify(t)),zi("btnQueue")}document.querySelector(".library__background")&&"queue"===a.whichTypeMovieSearch&&_r(),document.querySelector(".library__background")&&"watched"===a.whichTypeMovieSearch&&gr()}}function Zi(){document.body.style.top=`-${window.scrollY}px`,document.body.style.position="fixed"}function er(){const e=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))}function tr(){s.backdrop.classList.add("is-hidden"),s.modalMovieBackdrop.style.backgroundImage='url(" ")',er(),setTimeout((()=>{rr()}),600)}function nr(e){"Escape"===e.code&&(tr(),window.removeEventListener("keydown",nr))}function ir(e){e.currentTarget===e.target&&tr()}function rr(){s.cardMoveDetail.classList.remove("hide-detale"),s.cardMoveAuthors.classList.remove("show-author")}async function sr(e,t=1){window.history.replaceState({},"",`?type=author&person_id=${e}&page=${t}`);const{cast:n}=await Cr(e);a.personId=e,a.whichTypeMovieSearch="author",a.totalPages=Math.ceil(n.length/20);const i=n.slice(20*(t-1),20*t);s.galleryList.innerHTML=i.map(r).join(""),ur(t),hr()}s.galleryList.addEventListener("click",(async function(e){if(e.target.parentNode.classList.contains("card")||e.target.parentNode.parentNode.classList.contains("card")){const t=e.target.parentNode.dataset.id||e.target.parentNode.parentNode.dataset.id;await async function(e){const t=await Tr(e),n=Ir+t.backdrop_path;s.modalMovieBackdrop.style.background=`linear-gradient(180deg, #171a24 0%, rgba(23, 26, 36, 0.2) 100%), url(${n}) center / cover`,s.cardMoveDetail.innerHTML=u(t),Xi(t),Ki(t)}(t),s.backdrop.classList.remove("is-hidden"),Zi(),window.addEventListener("keydown",nr),s.btnClose.addEventListener("click",tr),s.backdrop.addEventListener("click",ir)}})),s.cardMoveDetail.addEventListener("click",(async function(e){if("showAuthors"===e.target.id){const t=e.target.dataset.id,{cast:n}=await kr(t);s.cardMoveDetail.classList.add("hide-detale"),s.cardMoveAuthors.classList.add("show-author"),s.cardMoveAuthors.innerHTML=`<button type="button" class="author__btn-go-back" id="btnGoBack">Go back to card</button><ul class="author__grid">${n.map((e=>function({profile_path:e,name:t,id:n}){return`<li class="author__item">\n               <img data-personid="${n}" class="author__img" src="${e?Ir+e:"https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg"}" alt="${t}" width="100"/>\n               <p class="author__title">${t}</p>\n            </li>`}(e))).join("")}</ul>`}})),s.cardMoveAuthors.addEventListener("click",(e=>{"btnGoBack"===e.target.id&&rr()})),s.cardMoveAuthors.addEventListener("click",(e=>{if("author__img"===e.target.className){sr(e.target.dataset.personid),tr()}})),document.addEventListener("DOMContentLoaded",(()=>{if(""===window.location.search)return;const e=window.location.search.split("?")[1].split("&");if("type=author"===e[0]){sr(e[1].split("=")[1],e[2].split("=")[1])}}));let ar,or,cr,dr=[],lr=1;function ur(e=lr){dr=[],ar=a.totalPages,lr=Number(e),function(){if(!(ar<2)){if(lr>1&&dr.push('<li class="pagination__item--left"><button class="pagination__btn--left js-pagination__btn--left" aria-label="pagination left"></button></li>'),window.innerWidth<768)for(let e=1;e<=ar;e+=1)ar<6?e===lr?dr.push(`<li class="pagination__item"><button class="pagination__btn pagination__btn--current" data-id="${e}">${e}</button></li>`):dr.push(`<li class="pagination__item"><button class="pagination__btn" data-id="${e}">${e}</button></li>`):e===lr?dr.push(`<li class="pagination__item"><button class="pagination__btn pagination__btn--current" data-id="${e}">${e}</button></li>`):e>lr+2||e<lr-2?(e<6&&lr<3&&dr.push(`<li class="pagination__item"><button class="pagination__btn" data-id="${e}">${e}</button></li>`),ar-5<e&&lr>ar-2&&dr.push(`<li class="pagination__item"><button class="pagination__btn" data-id="${e}">${e}</button></li>`)):dr.push(`<li class="pagination__item"><button class="pagination__btn" data-id="${e}">${e}</button></li>`);else for(let e=1;e<=ar;e+=1)ar<10?e===lr?dr.push(`<li class="pagination__item"><button class="pagination__btn pagination__btn--current" data-id="${e}">${e}</button></li>`):dr.push(`<li class="pagination__item"><button class="pagination__btn" data-id="${e}">${e}</button></li>`):e===lr?dr.push(`<li class="pagination__item"><button class="pagination__btn pagination__btn--current" data-id="${e}">${e}</button></li>`):1===e?lr<=4?dr.push(`<li class="pagination__item"><button class="pagination__btn" data-id="${e}">${e}</button></li>`):(dr.push(`<li class="pagination__item"><button class="pagination__btn" data-id="${e}">${e}</button></li>`),dr.push('<li class="pagination__item--hidden"><button class="pagination__btn pagination__btn--none">...</button></li>')):e===ar?(lr>=ar-3||dr.push('<li class="pagination__item--hidden"><button class="pagination__btn pagination__btn--none">...</button></li>'),dr.push(`<li class="pagination__item"><button class="pagination__btn" data-id="${e}">${e}</button></li>`)):e>lr+2||e<lr-2?(e<8&&lr<5&&dr.push(`<li class="pagination__item"><button class="pagination__btn" data-id="${e}">${e}</button></li>`),ar-7<e&&lr>ar-4&&dr.push(`<li class="pagination__item"><button class="pagination__btn" data-id="${e}">${e}</button></li>`)):dr.push(`<li class="pagination__item"><button class="pagination__btn" data-id="${e}">${e}</button></li>`);lr<ar&&dr.push('<li class="pagination__item--right"><button class="pagination__btn--right js-pagination__btn--right" aria-label="pagination right"></button></li>')}}(),s.paginationList.innerHTML=dr.join("")}function hr(){window.scrollTo({top:300,behavior:"smooth"})}function pr(){or=document.getElementById("watched"),cr=document.getElementById("queue"),or.addEventListener("click",mr),cr.addEventListener("click",fr),fr()}function mr(){or.classList.add("active-btn"),cr.classList.remove("active-btn"),gr(1)}async function gr(e=1){const t=await localStorage.getItem("watchedFilms"),n=JSON.parse(t);if(n&&0!==n.length){a.whichTypeMovieSearch="watched",a.totalPages=Math.ceil(n.length/20);const t=n.slice(20*(e-1),20*e);vr(),s.galleryList.innerHTML=t.map(r).join("")}else a.totalPages=1,yr();ur(e)}function fr(){or.classList.remove("active-btn"),cr.classList.add("active-btn"),_r(1)}function vr(){s.galleryList.classList.contains("grid-container")||(s.galleryList.classList.add("grid-container"),s.mainSection.classList.remove("camera-template"))}async function _r(e=1){const t=await localStorage.getItem("queueFilms"),n=JSON.parse(t);if(n&&0!==n.length){a.whichTypeMovieSearch="queue",a.totalPages=Math.ceil(n.length/20);const t=n.slice(20*(e-1),20*e);s.galleryList.classList.contains("grid-container")||(s.galleryList.classList.add("grid-container"),s.mainSection.classList.remove("camera-template")),s.galleryList.innerHTML=t.map(r).join("")}else a.totalPages=1,yr();ur(e)}function yr(){"ua"===localStorage.getItem("language")?s.galleryList.innerHTML='<p id="myLibraryTemplateText">У вашій бібліотеці немає фільмів</p>':s.galleryList.innerHTML='<p id="myLibraryTemplateText">There are not movies in your library</p>',s.galleryList.classList.remove("grid-container"),s.btnMyLibrary.classList.contains("current")&&s.mainSection.classList.add("camera-template")}s.paginationList.addEventListener("click",(function(e){const t=e.target;if(t.classList.contains("pagination__btn--current")||t.classList.contains("pagination__item")||t.classList.contains("pagination__list")||t.classList.contains("pagination__btn--none"))return;"BUTTON"===t.nodeName&&t.dataset.id?(lr=Number(t.dataset.id),hr()):("BUTTON"===(n=t).nodeName&&"pagination__btn--right js-pagination__btn--right"===n.className?lr+=1:"BUTTON"===n.nodeName&&"pagination__btn--left js-pagination__btn--left"===n.className&&(lr-=1),hr());var n;"trend"===a.whichTypeMovieSearch?d(lr):"search"===a.whichTypeMovieSearch?l(a.searchText,lr):"author"===a.whichTypeMovieSearch?sr(a.personId,lr):"genres"===a.whichTypeMovieSearch?o(a.genre,lr):"queue"===a.whichTypeMovieSearch?_r(lr):"watched"===a.whichTypeMovieSearch&&gr(lr)}));const Ir="https://image.tmdb.org/t/p/w500";let br="en-US";function Er(){br="ua"===localStorage.getItem("language")?"uk":"en-US"}async function wr(e="",t={}){const n=await fetch(e,t);return vr(),n.ok?await n.json():Promise.reject(new Error("Not found"))}function Tr(e){Er();return wr(`https://api.themoviedb.org/3/movie/${e}?api_key=5cd994cc5e25e67f2597f5db7027d486&language=${br}`)}function Sr(e=1){return""===window.location.search&&1===e||window.history.replaceState({},"",`?type=popular&page=${e}`),Er(),wr(`https://api.themoviedb.org/3/trending/movie/week?api_key=5cd994cc5e25e67f2597f5db7027d486&page=${e}&language=${br}`)}function Lr(e,t=1){Er();return wr(`https://api.themoviedb.org/3/search/movie?api_key=5cd994cc5e25e67f2597f5db7027d486&language=${br}&query=${e}&page=${t}&include_adult=false`)}function kr(e){return Er(),wr(`https://api.themoviedb.org/3//movie/${e}/credits?api_key=5cd994cc5e25e67f2597f5db7027d486&language=${br}`)}function Cr(e){Er();return wr(`https://api.themoviedb.org/3/person/${e}/movie_credits?api_key=5cd994cc5e25e67f2597f5db7027d486&language=${br}`)}function Nr(e,t){window.history.replaceState({},"",`?type=genres&with_genres=${e}&page=${t}`),Er();return wr(`https://api.themoviedb.org/3/discover/movie?api_key=5cd994cc5e25e67f2597f5db7027d486&language=${br}&with_genres=${e}&page=${t}&sort_by=popularity.desc&include_adult=false&include_video=false`)}function Or(){s.footerModal.classList.add("is-hidden"),er(),document.removeEventListener("keydown",Ar)}function Ar(e){"Escape"===e.code&&Or()}function Rr(e){e.currentTarget===e.target&&Or()}function Dr(){s.trailer.classList.add("is-hidden"),s.bodyScroll.classList.remove("is-openn"),document.removeEventListener("keydown",Mr),s.trailerWrap.innerHTML="",s.cardMoveDetail.classList.remove("modal-box-detale-trailler")}function Mr(e){"Escape"===e.code&&Dr()}function Pr(e){e.currentTarget===e.target&&Dr()}s.openModalBtn.addEventListener("click",(function(){s.footerModal.classList.remove("is-hidden"),Zi(),document.addEventListener("keydown",Ar),s.closeModalBtn.addEventListener("click",Or),s.footerModal.addEventListener("click",Rr)})),s.scrollToTopEl.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",e(Oi)((function(){if(window.scrollY>100)return void s.scrollToTopEl.classList.remove("scroll-to-top--hidden");s.scrollToTopEl.classList.add("scroll-to-top--hidden")}),300)),document.body.onload=function(){setTimeout((function(){s.preloader.classList.contains("hide")||s.preloader.classList.add("hide")}),1e3)},s.cardMoveDetail.addEventListener("click",(function(e){"trailerOpen"===e.target.id&&(s.trailer.classList.remove("is-hidden"),s.bodyScroll.classList.add("is-openn"),document.addEventListener("keydown",Mr),s.cardMoveDetail.classList.add("modal-box-detale-trailler"),s.trailer.addEventListener("click",Pr),n=e.target.dataset.id,(t=n,Er(),wr(`https://api.themoviedb.org/3/movie/${t}/videos?api_key=5cd994cc5e25e67f2597f5db7027d486&language=${br}`)).then((e=>{const t=e.results[0].key,i=`<iframe style="width: 100%; height: 100%;" data-id="${n}" src="https://www.youtube.com/embed/${t}?autoplay=1" loading = "lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Your browser does not support inline frames!</iframe>`;return s.trailerWrap.innerHTML=i})).catch((e=>{s.trailerWrap.innerHTML='<iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/GY8PkikQ8ZE" loading = "lazy" title="Error 404 not found - The Requested URL was Not Found on This Server" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Your browser does not support inline frames!</iframe>'})));var t;var n}));const xr=document.querySelector(".change");xr.addEventListener("click",(function(){document.body.classList.contains("dark")?(document.body.classList.remove("dark"),localStorage.setItem("mode",!1),xr.innerHTML="OFF"):(document.body.classList.add("dark"),localStorage.setItem("mode","dark"),xr.innerHTML="ON")})),"dark"===localStorage.getItem("mode")&&(document.body.classList.add("dark"),xr.innerHTML="ON");const Ur=document.querySelector(".ua"),Br=document.querySelector(".en"),Fr=(document.querySelector(".mode"),document.querySelector(".change")),Hr=document.querySelector(".dark-mode"),$r=document.querySelector(".change-container"),jr=document.getElementById("home__js"),Vr=document.getElementById("my-library__js"),qr=(document.querySelector(".form__input"),document.querySelector(".form__label")),Wr=document.querySelector(".header__dropbtn"),zr=document.querySelector(".user-menu__title-hover"),Gr=(document.querySelector(".user-menu__list"),document.querySelector(".header__dropdown-content")),Kr=document.querySelector(".footer-text-mrbottom"),Jr=document.querySelector("#developed"),Yr=document.querySelector(".footer-link"),Xr=document.querySelector(".by"),Qr=document.querySelector(".input-error"),Zr=document.getElementById("watched"),es=document.getElementById("queue"),ts=document.getElementById("btnLoginHeader"),ns=document.getElementById("changePassword"),is=document.getElementById("setting"),rs=document.getElementById("btnLogoutHeader"),ss=document.getElementById("SignIn"),as=document.getElementById("txtEmailLogin"),os=document.getElementById("txtPasswordLogin"),cs=document.querySelector(".register-form__link"),ds=document.getElementById("btnLoginBtn"),ls=document.getElementById("HelloFriend"),us=document.getElementById("HelloFriendText"),hs=document.getElementById("signUpBtn"),ps=document.getElementById("WelcomeBack"),ms=document.getElementById("WelcomeBackText"),gs=document.getElementById("signInBtn"),fs=document.getElementById("createAccount"),vs=document.getElementById("txtNameRegister"),_s=document.getElementById("txtEmailRegister"),ys=document.getElementById("txtPasswordRegister"),Is=document.getElementById("btnSignUpBtn"),bs=document.querySelector(".comand"),Es=document.getElementById("serhiiTitle"),ws=document.getElementById("serhiiText"),Ts=document.getElementById("anastasiiaTitle"),Ss=document.getElementById("anastasiiaText"),Ls=document.getElementById("dmitriyTitle"),ks=document.getElementById("dmitriyText"),Cs=document.getElementById("illiaTitle"),Ns=document.getElementById("illiaText"),Os=document.getElementById("maksymTitle"),As=document.getElementById("maksymText"),Rs=document.getElementById("vladTitle"),Ds=document.getElementById("vladText"),Ms=document.getElementById("vladimirTitle"),Ps=document.getElementById("vladimirText"),xs=document.getElementById("nataliaTitle"),Us=document.getElementById("nataliaText"),Bs=document.getElementById("dmitriy2Title"),Fs=document.getElementById("dmitriy2Text"),Hs=document.getElementById("comand-item-card-text1"),$s=document.getElementById("comand-item-card-text2"),js=document.getElementById("comand-item-card-text3"),Vs=document.getElementById("comand-item-card-text4"),qs=document.getElementById("comand-item-card-text5"),Ws=document.getElementById("comand-item-card-text6"),zs=document.getElementById("comand-item-card-text7"),Gs=document.getElementById("comand-item-card-text8"),Ks=document.getElementById("comand-item-card-text9"),Js=document.getElementById("comand-item-card-text10"),Ys=document.getElementById("comand-item-card-text11"),Xs=document.getElementById("comand-item-card-text12"),Qs=document.getElementById("comand-item-card-text13"),Zs=document.getElementById("comand-item-card-text14"),ea=document.getElementById("comand-item-card-text15"),ta=document.getElementById("comand-item-card-text16"),na=document.getElementById("comand-item-card-text17"),ia=document.getElementById("comand-item-card-text18"),ra=document.getElementById("comand-item-card-text19"),sa=document.getElementById("comand-item-card-text20"),aa=document.getElementById("comand-item-card-text21"),oa=document.getElementById("comand-item-card-text22"),ca=document.getElementById("comand-item-card-text23"),da=document.getElementById("comand-item-card-text24"),la=document.getElementById("comand-item-card-text25"),ua=document.getElementById("comand-item-card-text26"),ha=document.getElementById("comand-item-card-text27"),pa=document.getElementById("comand-item-card-text28"),ma=document.getElementById("comand-item-card-text29");function ga(){Br.classList.remove("active-btn"),Ur.classList.add("active-btn"),Br.disabled=!1,Ur.disabled=!0,localStorage.setItem("language","ua"),jr.textContent="ДОДОМУ",Vr.textContent="БІБЛІОТЕКА",qr.innerHTML='<input\n    class="form__input"\n    type="text"\n    name="search"\n    placeholder="Пошук..."/>',Wr.classList.add("ua"),Hr.classList.add("ua"),Hr.textContent="Темна тема",zr.textContent="Портфоліо та налаштування",zr.classList.add("ua"),ns.textContent="Змінити пароль",is.textContent="Налаштування",rs.textContent="Вийти",Gr.innerHTML='<div class="header__dropdown-btn" data-genre="28">Екшен </div>\n    <div class="header__dropdown-btn" data-genre="12">Пригоди</div>\n    <div class="header__dropdown-btn" data-genre="16">Анімація</div>\n    <div class="header__dropdown-btn" data-genre="35">Комедія</div>\n    <div class="header__dropdown-btn" data-genre="80">Кримінал</div>\n    <div class="header__dropdown-btn" data-genre="99">Документальний</div>\n    <div class="header__dropdown-btn" data-genre="18">Драма</div>\n    <div class="header__dropdown-btn" data-genre="10751">Сімейний</div> \n    <div class="header__dropdown-btn" data-genre="14">Фэ́нтези</div>\n    <div class="header__dropdown-btn" data-genre="36">Історичний</div>\n    <div class="header__dropdown-btn" data-genre="27">Жахи</div>\n    <div class="header__dropdown-btn" data-genre="10402">Музичний</div>\n    <div class="header__dropdown-btn" data-genre="9648">Містика</div>\n    <div class="header__dropdown-btn" data-genre="10749">Романтика</div>\n\t <div class="header__dropdown-btn" data-genre="878">Наукова фантастика</div>\n    <div class="header__dropdown-btn" data-genre="10770">Телешоу</div>\n    <div class="header__dropdown-btn" data-genre="53">Трилер</div>\n    <div class="header__dropdown-btn" data-genre="10752">Воєнний фільм</div>\n    <div class="header__dropdown-btn" data-genre="37">Ве́стерн</div>',Kr.classList.add("footer-text-mrbottom--ua"),Kr.innerHTML="&#169; 2022 | Всі права захищені |",Jr.textContent="Розроблено з",Xr.textContent="",Yr.textContent="Студентами GoIT",Qr.textContent="Результат пошуку не вдалий. Введіть правильну назву фільму.",Zr.textContent="ПЕРЕГЛЯНУТІ",es.textContent="В ЧЕРЗІ",ts.textContent="УВІЙТИ",ss.textContent="Увійти",as.placeholder="Пошта",os.placeholder="Пароль",cs.textContent="Забули свій пароль?",ds.textContent="Увійти",ls.textContent="Привіт друже!",us.textContent="Введіть свої особисті дані та почніть подорож разом з нами",hs.textContent="Зареєструватися",ps.textContent="Ласкаво просимо!",ms.textContent="Для того, щоб приєднатися до нас, будь ласка, увійдіть, використовуючи свою особисту інформацію",gs.textContent="Увійти",fs.textContent="Створити обліковий запис",vs.placeholder="Ім'я",_s.placeholder="Пошта",ys.placeholder="Пароль",Is.textContent="Зареєструватися",bs.textContent="Наша команда",Es.textContent="Сергій",ws.textContent="Тімлід",Ts.textContent="Анастасія",Ss.textContent="Скрам ",Ls.textContent="Дмитро",ks.textContent="Розробник ",Cs.textContent="Ілля",Ns.textContent="Розробник ",Os.textContent="Максим",As.textContent="Розробник ",Rs.textContent="Влад",Ds.textContent="Розробник ",Ms.textContent="Володимир",Ps.textContent="Розробник ",xs.textContent="Наталія",Us.textContent="Розробник ",Bs.textContent="Дмитро",Fs.textContent="Розробник ",Hs.textContent="Реєстрація/автентифікація користувача через Firebase",$s.textContent="Підвантаження акторів,інформації про акторів",js.textContent="Запис параметрів пошуку в URL та зчитування при перезагрузці",Vs.textContent="Пошук за жанром",qs.textContent="Світла/темна тема",Ws.textContent="Верстка хедера для головної/my library сторінок",zs.textContent="Пошук та відображення фільмів за ключовим словом",Gs.textContent="Верстка футера",Ks.textContent="Верстка модалки футера",Js.textContent="Підвантаження трейлера",Ys.textContent="Кнопка при скролі вниз",Xs.textContent="Анімація логотипу",Qs.textContent="Підключення spinner для асинхронних запитів",Zs.textContent="Відображення головної сторінки після натискання на логотип/Home/",ea.textContent="Відображення бібліотеки користувача",ta.textContent="Додавання до черги фільму",na.textContent="Додаванняя до переглянутих фільмів",ia.textContent="Верстка контейнера головної сторінки",ra.textContent="Верстка шаблону картки одного фільму",sa.textContent="Закриття модалки за натисканням на клавішу ESC та за кліком",aa.textContent="Додавання динамічно підставленою інформацією про фільм за натисканням картки з фільму",oa.textContent="Верстка контейнера сторінки 'My Library'",ca.textContent='За натисканням на "Watched" показуються переглянуті фільми',da.textContent='За натисканням на "Queue" показуються фільми додані в чергу',la.textContent="Верстка шаблону модалки одного фільму",ua.textContent="Підвантаження популярних фільмів на головну сторінку",ha.textContent="ЗМІНА МОВИ",pa.textContent="При переході на кожну сторінку малювати відповідну частину фільмів",ma.textContent="ВЕРСТКА ПАГІНАЦІЇ","dark"===localStorage.getItem("mode")?($r.classList.add("ua"),Fr.textContent="ON"):(Fr.textContent="OFF",$r.classList.add("ua"))}function fa(){Ur.classList.remove("active-btn"),Br.classList.add("active-btn"),Br.disabled=!0,Ur.disabled=!1,localStorage.setItem("language","en"),jr.textContent="HOME",Vr.textContent="MY LIBRARY",qr.innerHTML='<input\n    class="form__input"\n    type="text"\n    name="search"\n    placeholder="Let\'s go!"\n />',Wr.classList.remove("ua"),Hr.classList.remove("ua"),Hr.textContent="Dark mode:",zr.textContent="Portfolio and setting",zr.classList.remove("ua"),ns.textContent="Change password",is.textContent="Setting",rs.textContent="Logout",Gr.innerHTML='<div class="header__dropdown-btn" data-genre="28">Action</div>\n <div class="header__dropdown-btn" data-genre="12">Adventure</div>\n <div class="header__dropdown-btn" data-genre="16">Animation</div>\n <div class="header__dropdown-btn" data-genre="35">Comedy</div>\n <div class="header__dropdown-btn" data-genre="80">Crime</div>\n <div class="header__dropdown-btn" data-genre="99">Documentary</div>\n <div class="header__dropdown-btn" data-genre="18">Drama</div>\n <div class="header__dropdown-btn" data-genre="10751">Family</div>\n <div class="header__dropdown-btn" data-genre="14">Fantasy</div>\n <div class="header__dropdown-btn" data-genre="36">History</div>\n <div class="header__dropdown-btn" data-genre="27">Horror</div>\n <div class="header__dropdown-btn" data-genre="10402">Music</div>\n <div class="header__dropdown-btn" data-genre="9648">Mystery</div>\n <div class="header__dropdown-btn" data-genre="10749">Romance</div>\n <div class="header__dropdown-btn" data-genre="878">Science Fiction</div>\n <div class="header__dropdown-btn" data-genre="10770">TV Movie</div>\n <div class="header__dropdown-btn" data-genre="53">Thriller</div>\n <div class="header__dropdown-btn" data-genre="10752">War</div>\n <div class="header__dropdown-btn" data-genre="37">Western</div>',Kr.classList.remove("footer-text-mrbottom--ua"),Kr.innerHTML="&#169; 2022 | All Rights Reserved |",Jr.textContent="Developed with",Xr.textContent="by",Yr.textContent="GoIT Students",Qr.textContent="Search result not successful. Enter the correct movie name.",Zr.textContent="watched",es.textContent="queue",ts.textContent="Login",ss.textContent="Sign in",as.placeholder="Email",os.placeholder="Password",cs.textContent="Forgot your password?",ds.textContent="Sign In",ls.textContent="Hello, Friend!",us.textContent="Enter your personal details and start journey with us",hs.textContent="Sign Up",ps.textContent="Welcome Back!",ms.textContent="To keep connected with us please login with your personal info",gs.textContent="Sign In",fs.textContent="Create Account",vs.placeholder="Name",_s.placeholder="Email",ys.placeholder="Password",Is.textContent="Sign Up",bs.textContent="Our Team",Es.textContent="Serhii",ws.textContent="Team Lead",Ts.textContent="Anastasiia",Ss.textContent="Scrum",Ls.textContent="Dmitriy",ks.textContent="Developer",Cs.textContent="Illia",Ns.textContent="Developer",Os.textContent="Maksym",As.textContent="Developer",Rs.textContent="Vlad",Ds.textContent="Developer",Ms.textContent="Vladimir",Ps.textContent="Developer",xs.textContent="Natalia",Us.textContent="Developer",Bs.textContent="Dmitriy",Fs.textContent="Developer",Hs.textContent="User registration / authentication via Firebase",$s.textContent="Loading actors, information about actors",js.textContent="Record search parameters in the URL and read on reboot",Vs.textContent="Search by genre",qs.textContent="Dark mode",Ws.textContent="Header layout for main and my library pages",zs.textContent="Search and display movies by keyword",Gs.textContent="Footer layout",Ks.textContent="Footer modal layout",Js.textContent="Loading trailer",Ys.textContent="Button when scrolling down",Xs.textContent="Logo animation",Qs.textContent="Spinner connection for asynchronous queries",Zs.textContent="Display the home page after clicking on the Home / logo",ea.textContent="Display the user library",ta.textContent="Add to queue",na.textContent="Add to watched",ia.textContent="Home page container layout",ra.textContent="One movie card template layout",sa.textContent="Close the modal by pressing the ESC key and clicking",aa.textContent="Add dynamically based movie information by tapping a movie card",oa.textContent="My Library page container layout",ca.textContent='Clicking on "Watched" shows watched movies',da.textContent='Clicking on "Queue" shows movies added to the queue.',la.textContent="Layout template of a film modal",ua.textContent="Upload popular movies to the home page",ha.textContent="Switch to English/Ukrainian",pa.textContent="When going to each page, draw the appropriate part of the movies",ma.textContent="PAGINATION LAYOUT"}Br.disabled=!0,document.addEventListener("DOMContentLoaded",(()=>{"ua"===localStorage.getItem("language")?ga():fa()})),"ua"===localStorage.getItem("language")?ga():fa(),Ur.addEventListener("click",ga),Br.addEventListener("click",fa);
//# sourceMappingURL=index.b9a99144.js.map
