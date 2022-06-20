import refs from './refs';

export function onShowMainLoader() {
   refs.mainLoader.classList.remove('hide-mainLoader');
}

export function onHideMainLoader() {
   refs.mainLoader.classList.add('hide-mainLoader');
}
