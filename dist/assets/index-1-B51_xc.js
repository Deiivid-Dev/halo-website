(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const u=document.querySelector("#bmenu"),a=document.querySelector("#bmore"),m=document.querySelector(".links"),f=document.querySelector(".menu");u.addEventListener("click",function(i){i.preventDefault(),m.classList.toggle("show")});a.addEventListener("click",function(i){i.preventDefault(),f.classList.toggle("show")});const n=[{id:"PyMlV5_HRWk"},{id:"XCbMVbeKlCg"},{id:"Fmdb-KmlzD8"},{id:"lOthvD1rMbQ"},{id:"nXDk86lQhto"}];document.querySelector("#slider");const p=document.querySelector("#current"),y=document.querySelector("#video-list"),g=document.querySelector(".next"),h=document.querySelector(".prev");let e=0;g.addEventListener("click",i=>{let r=e;e=e+1<n.length?e+1:e,e!==r&&s(n[e].id)});h.addEventListener("click",i=>{let r=e;e=e-1>=0?e-1:e,e!==r&&s(n[e].id)});s(n[e].id);v();function s(i){p.innerHTML=`<iframe width="100%" height="720" src="https://www.youtube.com/embed/${i}" title="🔥  Sitio Web con HTML y CSS de Halo usando Flex, dark mode y responsive design" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}function v(){const i=n.map((r,c)=>`
        <div class="item">
            <a href="#" data-id="${c}">
                <img src="http://i3.ytimg.com/vi/${r.id}/mqdefault.jpg">    
                </a>
                </div>`);y.innerHTML=i.join(""),document.querySelectorAll(".item a").forEach(r=>{r.addEventListener("click",c=>{c.preventDefault(),e=r.getAttribute("data-id"),s(n[e].id)})})}