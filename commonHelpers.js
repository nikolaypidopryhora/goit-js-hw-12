import{a as b,S as v,i as M}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function g(s,r){const o="https://pixabay.com",i="6515730-7e532fca90fe4fa55f1852c4d",t=`${o}/api?`,a={key:i,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};return(await b.get(t,{params:a})).data}function y(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:a,downloads:p})=>`
        <li class="item">
            <a class="image-link" href ="${o}">
                <img class="image" src="${r}" alt="${i}">
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
                    <p class="detail-data">${a}</p>
                </li>
                <li class="detail-item">
                    <h2 class="detail-title">Downloads </h2>
                    <p class="detail-data">${p}</p>
                </li>
            </ul>
        </li>`).join("")}function n(s){M.error({message:s,position:"topRight"})}const L=new v(".gallery a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".search"),l=document.querySelector(".gallery"),m=document.querySelector(".load-more-button"),u=document.querySelector(".loader");h.addEventListener("submit",E);m.addEventListener("click",$);let d,c=1,w;const P=15;async function E(s){if(s.preventDefault(),d=h.elements.search.value.trim(),!d){n("Empty input!");return}c=1,u.classList.remove("hidden"),f();try{const r=await g(d,c);r.totalHits?(l.innerHTML=y(r.hits),w=Math.ceil(r.totalHits/P),L.refresh()):(n("Sorry, there are no images matching your search query. Please try again!"),l.innerHTML=""),h.reset()}catch{n("Something went wrong!"),l.innerHTML=""}u.classList.add("hidden"),S()}async function $(){f(),c+=1,u.classList.remove("hidden");try{const s=await g(d,c);l.insertAdjacentHTML("beforeend",y(s.hits)),L.refresh()}catch{n("Something went wrong!")}O(),S(),u.classList.add("hidden")}function q(){m.classList.remove("hidden")}function f(){m.classList.add("hidden")}function S(){c>=w?(f(),n("We're sorry, but you've reached the end of search results.")):q()}function O(){const s=l.firstElementChild.getBoundingClientRect().height;scrollBy({top:s*2+24,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
