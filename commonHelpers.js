import{a as p,S as v,i as M}from"./assets/vendor-09d7c26e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function g(s,a){const o="https://pixabay.com",r="6515730-7e532fca90fe4fa55f1852c4d",e="/api";p.defaults.baseURL=o;const t={key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15};return(await p.get(`${e}?`,{params:t})).data}function y(s){return s.map(({webformatURL:a,largeImageURL:o,tags:r,likes:e,views:t,comments:i,downloads:S})=>`
        <li class="item">
            <a class="image-link" href ="${o}">
                <img class="image" src="${a}" alt="${r}">
            </a>
            <ul class="details">
                <li class="detail-item">
                    <h2 class="detail-title">Likes </h2>
                    <p class="detail-data">${e}</p>
                </li>
                <li class="detail-item">
                    <h2 class="detail-title"> Views</h2>
                    <p class="detail-data">${t}</p>
                </li>
                <li class="detail-item">
                    <h2 class="detail-title">Comments </h2>
                    <p class="detail-data">${i}</p>
                </li>
                <li class="detail-item">
                    <h2 class="detail-title">Downloads </h2>
                    <p class="detail-data">${S}</p>
                </li>
            </ul>
        </li>`).join("")}function n(s){M.error({message:s,position:"topRight"})}const L=new v(".gallery a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".search"),l=document.querySelector(".gallery"),m=document.querySelector(".load-more-button"),u=document.querySelector(".loader");h.addEventListener("submit",E);m.addEventListener("click",q);let d,c=1,w;const P=15;async function E(s){if(s.preventDefault(),d=h.elements.search.value.trim(),!d){n("Empty input!");return}c=1,u.classList.remove("hidden"),f();try{const a=await g(d,c);a.totalHits?(u.classList.add("hidden"),l.innerHTML=y(a.hits),w=Math.ceil(a.totalHits/P),b(),L.refresh()):(n("Sorry, there are no images matching your search query. Please try again!"),l.innerHTML=""),h.reset()}catch{n("Something went wrong!"),l.innerHTML=""}}async function q(){f(),c+=1,u.classList.remove("hidden");try{const s=await g(d,c);u.classList.add("hidden"),l.insertAdjacentHTML("beforeend",y(s.hits)),b(),L.refresh()}catch{n("Something went wrong!")}O()}function $(){m.classList.remove("hidden")}function f(){m.classList.add("hidden")}function b(){c>=w?(f(),n("We're sorry, but you've reached the end of search results.")):$()}function O(){const s=l.firstElementChild.getBoundingClientRect().height;scrollBy({top:s*2+24,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
