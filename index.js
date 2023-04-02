import normalize from './src/css/normalize.css';
import style from './src/css/style.css';
import cssComponents from './src/css/components.css';
import tagCloud from './src/css/tagcloud.css';
import intlTelInput from './src/css/intlTelInput.min.css';

import scrollAnimation from './src/js/scrollAnimation.js';
import { createTagCloud, updateTagCloud } from './src/js/tagCloud.js';
import { setPageLanguage } from './src/js/multiLanguage.js';
import { setLanguageJson } from './src/js/utils.js';

const $hamburger = document.querySelector('.hamburger');
const $navbar = document.querySelector('.navbar');
const $menuCtn = document.querySelector('.menu-container');
const $langSelect = document.querySelector('.selected-language');
const $phoneInput = document.getElementById('phone');
const $blurContainer = document.querySelector('.blur-container');
const $body = document.getElementById('home');
const $formSubmit = document.getElementById('formulario');
const $sendBtn = document.querySelector('.send-btn');

let $textToChange = document.querySelectorAll('[data-section]');

const mq = matchMedia('(min-width: 48em)');

const options = {
  maxSpeed: 'normal',
  initSpeed: 'fast',
  direction: 30,
  keep: true,
  radius: mq.matches ? 360 : 230,
};

const setOptionSelect = (langSelect) => {
  switch (window.localStorage.getItem('lang')) {
    case 'en':
      langSelect.children[0].setAttribute('selected', '');
      break;
    case 'es':
      langSelect.children[1].setAttribute('selected', '');
      break;
  }
};

// /**  E  V  E  N  T  S **/

window.addEventListener('DOMContentLoaded', () => {
  scrollAnimation();
  createTagCloud(options);
  setPageLanguage();
  setOptionSelect($langSelect);
});

window.addEventListener('DOMContentLoaded', () => {
  const $errorMessage = document.createElement('p');
  $errorMessage.setAttribute('data-section', 'contact');
  $errorMessage.setAttribute('data-value', 'contact-numberError');
  $errorMessage.innerHTML =
    'Phone number must be from 7 to 12 digits and can only contain numbers';

  const $numberLabel = document.createElement('label');
  $numberLabel.setAttribute('for', 'phone');
  $numberLabel.setAttribute('data-section', 'contact');
  $numberLabel.setAttribute('data-value', 'contact-number');
  $numberLabel.innerHTML = 'Phone Number';
  $phoneInput.after($errorMessage, $numberLabel);
  $textToChange = document.querySelectorAll('[data-section]');
  const lang = window.localStorage.getItem('lang');
  setLanguageJson(lang, $textToChange);
});

// /** Redimensionar Tagcloud con Respecto a la Media Query **/
mq.addEventListener('change', () => updateTagCloud(mq, options));

// /** NAVIGATION MENU **/
$navbar.addEventListener('click', (e) => {
  if (e.target.matches('.navbar span a')) {
    $hamburger.classList.toggle('active');
    $navbar.classList.toggle('active');
    $blurContainer.classList.remove('active');
    $body.classList.remove('active');
  }
});

//** BTN MOBILE BURGER **//
$hamburger.addEventListener('click', () => {
  $hamburger.classList.toggle('active');
  $navbar.classList.toggle('active');
  $blurContainer.classList.toggle('active');
  $body.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (
    !e.target.matches('.hamburger.active') &&
    !e.target.matches('nav.navbar')
  ) {
    $hamburger.classList.remove('active');
    $navbar.classList.remove('active');
    $blurContainer.classList.remove('active');
    $body.classList.remove('active');
  }
});

/** Animacion en navbar sticky **/
document.addEventListener('scroll', () => {
  window.scrollY > 48
    ? $menuCtn.classList.add('active')
    : $menuCtn.classList.remove('active');
});

/** Observers to indicate menu in the desktop version **/
const callback = function (items) {
  items.forEach((item) => {
    const temp = document.querySelector(
      `.navbar-item[data-id="${item.target.attributes.id.value}"]`
    );

    item.isIntersecting
      ? temp.classList.add('active')
      : temp.classList.remove('active');
  });
};

/** Observer para crear Efecto en indicador **/
const $sections = document.querySelectorAll('[data-scroll]');
const observer = new IntersectionObserver(callback, { threshold: 0.3 });
$sections.forEach((item) => observer.observe(item));

/** international telephone input **/
window.intlTelInput($phoneInput, null);

$langSelect.addEventListener('change', (e) => {
  window.localStorage.setItem('lang', e.target.value);
  setLanguageJson(e.target.value, $textToChange);
});

document.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch('https://formsubmit.co/ajax/15859187a6f1f1f878e69999069e6362', {
    method: 'POST',
    body: new FormData(e.target),
  }).then((res) => {
    if (res.ok) {
      $sendBtn.classList.add('send');
      window.setTimeout(() => $sendBtn.classList.remove('send'), 2500);
      $formSubmit.reset();
    }
  });
});
