import{S as c}from"./assets/vendor-5954de68.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const o=new c(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),r=document.querySelector(".swiper-button-next"),n=document.querySelector(".swiper-button-prev");r.addEventListener("click",()=>{o.slideNext()}),n.addEventListener("click",()=>{o.slidePrev()})});
//# sourceMappingURL=commonHelpers.js.map
