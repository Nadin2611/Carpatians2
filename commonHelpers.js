import{S as l}from"./assets/vendor-06901ec7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();new l(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.addEventListener("DOMContentLoaded",function(){const i=document.querySelectorAll(".reviews-button"),t=document.querySelectorAll(".back-container"),s=document.querySelectorAll(".front-container");console.log(i),console.log(t),console.log(s),i.forEach((n,e)=>{n.addEventListener("click",function(){t[e].classList.contains("is-hidden")?(s[e].classList.add("is-hidden"),t[e].classList.remove("is-hidden")):(t[e].classList.add("is-hidden"),n[e].style.display="none")})}),t.forEach((n,e)=>{n.addEventListener("click",function(){t[e].classList.contains("is-hidden")||(t[e].classList.add("is-hidden"),s[e].classList.remove("is-hidden"),i[e].style.display="block")})})});
//# sourceMappingURL=commonHelpers.js.map
