(()=>{"use strict";const e=new class{constructor({main:e,wrap:t,next:i,prev:s,infinity:o=!1,position:n=0,slidesToShow:l=3,responsive:r=[]}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(i),this.prev=document.querySelector(s),this.slidesToShow=l,this.options={position:n,infinity:o,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=r}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyle(){let e=document.querySelector("#sliderCarousel-style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n    .glo-slider{\n      overflow: hidden !important;\n    }\n    .glo-slider__wrap{\n      display: flex !important;\n      transition: transform 0.5s !important;\n      will-change: transform !important;\n    }\n    .glo-slider__item{\n      display: flex  !important;\n      align-items: center  !important;\n      justify-content: center  !important;\n      flex: 0 0 ${this.options.widthSlide}% !important;\n      margin: auto 0 !important;\n    }\n    .glo-slider__prev,\n    .glo-slider__next {\n      margin: 0 10px;\n      border: 20px solid transparent;\n      background: transparent;\n    }\n    .glo-slider__next {\n      border-left-color: #19b5fe;\n    }\n    .glo-slider__prev {\n      border-right-color: #19b5fe;\n    } \n    .glo-slider__prev:hover,\n    .glo-slider__prev:focus,\n    .glo-slider__next:hover,\n    .glo-slider__next:focus{\n      cursor: pointer;\n      outline: none;\n      background: transparent;\n    }\n    `,document.head.append(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||+this.options.position>0)&&(--this.options.position,+this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||+this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.append(this.prev),this.main.append(this.next)}responseInit(){const e=this.slidesToShow,t=this.responsive.map((e=>e.breackpoint)),i=Math.max(...t),s=()=>{const s=document.documentElement.clientWidth;if(s<i)for(let e=0;e<t.length;e++)s<t[e]&&(this.slidesToShow=this.responsive[e].slideToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()};s(),window.addEventListener("resize",s)}}({main:".services-elements",wrap:".services-carousel",prev:".arrow-left",next:".arrow-right",slidesToShow:3,infinity:!0,responsive:[{breackpoint:1024,slideToShow:3},{breackpoint:768,slideToShow:2},{breackpoint:576,slideToShow:1}]});(()=>{const e=document.querySelector(".modal-overlay"),t=document.getElementById("callback"),i=document.querySelectorAll(".callback-btn"),s=document.querySelector(".button-services"),o=document.querySelector(".modal-close"),n=document.querySelector(".services-elements");i.forEach((i=>{i.addEventListener("click",(()=>{e.style.display="block",t.style.display="block"}))})),s.addEventListener("click",(()=>{e.style.display="block",t.style.display="block"})),n.addEventListener("click",(({target:i})=>{i.closest(".absolute")&&(e.style.display="block",t.style.display="block")})),o.addEventListener("click",(()=>{e.style.display="none",t.style.display="none"})),e.addEventListener("click",(()=>{e.style.display="none",t.style.display="none"}))})(),(()=>{const e=document.querySelectorAll(".accordeon > .element");document.querySelector(".accordeon").addEventListener("click",(({target:t})=>{if(t.closest(".element")){const i=t.closest(".element");e.forEach((e=>{e.classList.remove("active")})),i.classList.add("active")}}))})(),(()=>{let e=window.innerHeight/2,t=document.querySelector(".up");window.onscroll=function(){window.scrollY>e?t.classList.add("active"):t.classList.remove("active")},t.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})}})(),(()=>{const e=document.querySelectorAll(".table"),t=document.querySelector(".top-slider");let i,s=document.querySelectorAll(".slick-dots > li"),o=0,n=document.createElement("ul");n.classList.add("slick-dots"),t.appendChild(n);const l=(e,t,i)=>{e[t].classList.remove(i)},r=(e,t,i)=>{e[t].classList.add(i)},d=()=>{l(e,o,"active"),l(s,o,"slick-active"),o++,o>=e.length&&(o=0),r(e,o,"active"),r(s,o,"slick-active")};t.addEventListener("click",(t=>{t.preventDefault(),t.target.matches(".dot")&&(l(e,o,"active"),l(s,o,"slick-active"),t.target.classList.contains("dot")&&s.forEach(((e,i)=>{t.target===e&&(o=i)})),o>=e.length&&(o=0),o<0&&(o=e.length-1),r(e,o,"active"),r(s,o,"slick-active"))})),((t=0)=>{do{let e=document.createElement("li");e.classList.add("dot"),n.appendChild(e),s=document.querySelectorAll(".slick-dots > li"),0===t&&e.classList.add("slick-active"),t++}while(t<=e.length-1)})(),((e=3e3)=>{i=setInterval(d,e)})(3e3)})(),(({formId:e})=>{const t=document.getElementById(e);let i=document.querySelector("#name"),s=document.querySelector("#num");i.addEventListener("input",(()=>{i.value=i.value.replace(/[^а-яА-ЯёЁ\ ]/g,"")})),s.addEventListener("input",(()=>{s.value=s.value.replace(/[^\d\+]/,"")})),t.addEventListener("submit",(e=>{e.preventDefault();const o=new FormData(t),n={};o.forEach(((e,t)=>{n[t]=e})),""===i.value?alert("Ошибка! Введите имя"):""===s.value?alert("Ошибка! Введите номер"):(((e={})=>{fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then((e=>e.json()))})(n),alert("идет отправка"),setTimeout((()=>{i.value="",s.value=""}),200),alert("отправлено"))}))})({formId:"form"}),document.querySelectorAll('a[href*="#"]').forEach((e=>{e.addEventListener("click",(function(t){t.preventDefault();const i=e.getAttribute("href").substr(1);document.getElementById(i).scrollIntoView({behavior:"smooth",block:"start"})}))})),e.init()})();