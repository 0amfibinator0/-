(()=>{"use strict";(()=>{const e=document.querySelector(".modal-overlay"),t=document.getElementById("callback"),l=document.querySelectorAll(".callback-btn"),c=document.querySelector(".button-services"),o=document.querySelector(".modal-close");l.forEach((l=>{l.addEventListener("click",(()=>{e.style.display="block",t.style.display="block"}))})),c.addEventListener("click",(()=>{e.style.display="block",t.style.display="block"})),o.addEventListener("click",(()=>{e.style.display="none",t.style.display="none"})),e.addEventListener("click",(()=>{e.style.display="none",t.style.display="none"}))})(),(()=>{const e=document.querySelectorAll(".accordeon > .element");document.querySelector(".accordeon").addEventListener("click",(({target:t})=>{if(t.closest(".element")){const l=t.closest(".element");e.forEach((e=>{e.classList.remove("active")})),l.classList.add("active")}}))})(),(()=>{let e=window.innerHeight/2,t=document.querySelector(".up");window.onscroll=function(){window.scrollY>e?t.classList.add("active"):t.classList.remove("active")},t.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})}})(),(()=>{const e=document.querySelectorAll(".table");let t,l=0;const c=()=>{e[l].classList.remove("active"),l++,l>=e.length&&(l=0),e[l].classList.add("active")};((e=3e3)=>{t=setInterval(c,e)})(3e3)})()})();