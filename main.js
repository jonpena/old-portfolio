import normalize from "./src/css/normalize.css";
import style from "./src/css/style.css";
import cssComponents from "./src/css/cssComponents.css";
import tagCloud from "./src/css/tagcloud.css";
import intlTelInput from "./src/css/intlTelInput.min.css";

import scrollAnimation from "./src/js/scrollAnimation.js";
import { createTagCloud, updateTagCloud } from "./src/js/tagCloud.js";
import changePageLanguage, { setPageLanguage } from "./src/js/multiLanguage.js";

const $hamburger = document.querySelector(".hamburger");
const $navbar = document.querySelector(".navbar");
const $menuCtn = document.querySelector(".menu-container");
const $langSelect = document.querySelector(".selected-language");
const $phoneInput = document.getElementById("phone");
const $blurContainer = document.querySelector(".blur-container");
const $body = document.getElementById("home");
let $textToChange = undefined;

// V A R I A B L E S //

const mq = matchMedia("(min-width: 48em)");

const options = {
  maxSpeed: "normal",
  initSpeed: "fast",
  direction: 30,
  keep: true,
  radius: mq.matches ? 360 : 230,
};

// /**  E  V  E  N  T  S **/

window.addEventListener("DOMContentLoaded", () => {
  scrollAnimation();
  createTagCloud(options);
  setPageLanguage();
  setLanguageJson(window.localStorage.getItem("lang"));
});

// /** Redimensionar tagcloud con respecto a la media query **/
mq.addEventListener("change", () => updateTagCloud(mq, options));

// /** Navigation Menu **/
$navbar.addEventListener("click", (e) => {
  if (e.target.matches(".navbar span a")) {
    $hamburger.classList.toggle("active");
    $navbar.classList.toggle("active");
    $blurContainer.classList.remove("active");
    $body.classList.remove("active");
  }
});

// /** BTN Mobile Burger **/
$hamburger.addEventListener("click", (e) => {
  $hamburger.classList.toggle("active");
  $navbar.classList.toggle("active");
  $blurContainer.classList.toggle("active");
  $body.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  console.log(e.target);
  if (
    !e.target.matches(".hamburger.active") &&
    !e.target.matches("nav.navbar")
  ) {
    $hamburger.classList.remove("active");
    $navbar.classList.remove("active");
    $blurContainer.classList.remove("active");
    $body.classList.remove("active");
  }
});

// /** Animacion en navbar sticky **/
document.addEventListener("scroll", () => {
  window.scrollY > 48
    ? $menuCtn.classList.add("active")
    : $menuCtn.classList.remove("active");
});

// /** Observers to indicate menu in the desktop version **/
const callback = function (items) {
  items.forEach((item) => {
    const temp = document.querySelector(
      `.navbar-item[data-id="${item.target.attributes.id.value}"]`
    );

    item.isIntersecting
      ? temp.classList.add("active")
      : temp.classList.remove("active");
  });
};

/** Observer para crear Efecto en indicador **/
const $sections = document.querySelectorAll("[data-scroll]");
const observer = new IntersectionObserver(callback, { threshold: 0.3 });
$sections.forEach((item) => observer.observe(item));

/** international telephone input **/
window.intlTelInput($phoneInput, null);

window.addEventListener("DOMContentLoaded", () => {
  const $errorMessage = document.createElement("p");
  $errorMessage.setAttribute("data-section", "contact");
  $errorMessage.setAttribute("data-value", "contact-numberError");
  $errorMessage.innerHTML =
    "Phone number must be from 7 to 12 digits and can only contain numbers";
  $phoneInput.after($errorMessage);
  $textToChange = document.querySelectorAll("[data-section]");
});

const setLanguageJson = (language) => {
  fetch(`./language/${language}.json`)
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      for (const text of $textToChange) {
        text.innerHTML = json[text.dataset.section][text.dataset.value];
      }
    })
    .catch((err) => console.log(err));
};

$langSelect.addEventListener("change", (e) => {
  changePageLanguage(e.target.value);
  setLanguageJson(e.target.value);
});
