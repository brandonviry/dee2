(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();let s=(t,e)=>(e=e===void 0?100:e,t=t===void 0?1:t,e+=1,Math.floor(Math.random()*(e-t))+t),c=t=>{t.forEach(e=>{document.querySelector("#case"+e.toString()+"> p").style.visibility="hidden"})},d=t=>{t.forEach(e=>{document.querySelector("#case"+e.toString()+"> p").style.visibility="visible"})},n=t=>{switch(d([1,2,3,4,5,6,7,8,9]),t){case 1:c([1,2,3,4,6,7,8,9]);break;case 2:c([2,3,4,5,6,7,8]);break;case 3:c([2,3,4,6,7,8]);break;case 4:c([2,4,5,6,8]);break;case 5:c([2,4,6,8]);break;case 6:c([2,5,8]);break;default:c([1,2,3,4,6,7,8,9]),document.querySelector("#case5 > p").textContent="ERREUR";break}},u=()=>{var t,e;n(s(1,6)),(t=document.querySelector("#dee"))==null||t.addEventListener("click",()=>{n(s(1,6))}),(e=document.querySelector("#btn-lancer"))==null||e.addEventListener("click",()=>{n(s(1,6))})};u();
