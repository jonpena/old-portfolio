import"./components.2c0ce147.js";const o=(t,e)=>{(async()=>{const a=await(await fetch(`./language/${t}.json`)).json();for(const n of e)n.innerHTML=a[n.dataset.section][n.dataset.value]})()};window.addEventListener("DOMContentLoaded",()=>{const t=window.localStorage.getItem("lang");let e=document.querySelectorAll("[data-section]");o(t,e)});
