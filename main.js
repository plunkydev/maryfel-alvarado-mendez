(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>u});var a=t(601),r=t.n(a),o=t(314),i=t.n(o),s=t(417),c=t.n(s),p=new URL(t(863),t.b),l=i()(r()),d=c()(p);l.push([n.id,`/* Estilos generales */\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #F4F2EE;\n}\n\n.lineMediaLeft {\n    float: left;\n    width: 50%;\n}\n\n.lineMediaRigth {\n    float: right;\n    width: 70%;\n}\n\n/* Contenedor principal */\n.continer {\n    display: flex;\n    flex-direction: column;\n    max-width: 1200px;\n    margin: 20px auto;\n    background-color: #fff;\n    border-radius: 8px;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n}\n\n.btnSendMessageContiner button:first-child {\n    color: #fff;\n    background-color: #0a66c2;\n    border: none;\n}\n.btnSendMessageContiner > button:nth-of-type(2) {\n    background-color: #fff;\n    padding: 8px 12px;\n}\nbutton {\n    padding: clamp(6px, 10px, 12px);\n    border-radius: 50px;\n}\n\n/* Tamaño dinámico para h1 */\nh1 {\n    font-size: clamp(1rem, 2.5vw, 3rem); \n}\n\nul {\n    line-height: 2rem;\n}\n\n/* Tamaño dinámico para párrafos */\np, a {\n    margin: 0;\n    font-size: clamp(1rem, 2vw, 1.25rem);\n    line-height: clamp(1.5rem, 1.8rem, 2.75rem);\n}\n\na {\n    text-decoration: none;\n    font-style: italic;\n    font-weight: 500;\n    transition: all 500ms;\n}\n\na:hover {\n    color: #fff;\n    background-color: #0a66c2;\n    border: none;\n    border-radius: 50px;\n    padding: 1px 5px;\n    font-style: normal;\n    font-weight: 400;\n}\n\n.heroContiner {\n    height: 200px;\n}\n\n/* Encabezado con imagen de fondo */\n.bgImgHero {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 200px;\n    background: url(${d}) no-repeat center center/cover;\n    overflow: hidden;\n}\n\n.bgImgHero .logo {\n    height: 87%;\n    width: auto;\n    max-width: none;\n    margin: 6px 10px 5px 0;\n}\n\n\n\n/* Foto de perfil */\n.profile-photo {\n    position: relative;\n    top: -172px;\n    left: 30px;\n    width: 240px;\n    height: 240px;\n    border-radius: 50%;\n    border: 5px solid #fff;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    z-index: 10;\n}\n\n/* Información principal */\n.infoHeroContiner {\n    margin-top: 8%;\n    display: grid;\n    grid-template-columns: 70% 30%;\n    column-gap: 20px;\n}\n\n.infoHero, .buttonAndContactContiner, .acercaDeMiContiner, .featuredArticlesContiner, .academyFormationConatiner, .experienciaLaboral {\n    margin: 1.3rem;\n}\n\n.buttonAndContactContiner {\n    display: grid;\n    grid-template-columns: 50% 50%;\n}\n\n.btnsHeroContiner {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.fa-solid {\n    color: #fff;\n}\n\n.infoContact > * {\n    color: #0a66c2;\n    font-size: clamp(0.6rem, 1.5vw, 1.15rem);\n    margin-top: 0;\n}\n\n\n/* Acerca de mi */\n\n/* Articulos destacados */\n\n.articlesStylesContiner {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));\n    gap: 1rem;\n}\n\n.article-card {\n    background-color: white;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n    transition: transform 0.2s;\n    max-height: 519px;\n}\n\n.article-card:hover {\n    transform: scale(1.05);\n}\n\n.card-content {\n    margin: 8px;\n}\n\n.card-image {\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 8px 8px 0 0;\n    background-color: #0a66c2;\n}\n\n.card-title {\n    font-size: clamp(1.3rem, 2.5vw, 1.15rem);\n}\n\n.card-description {\n    font-size: clamp(0.3rem, 2.5vw, 1.15rem);\n}\n\n.card-link {\n    color: black;\n    font-style: normal;\n}\n.card-link:hover {\n    color: #0a66c2;\n    font-weight: 400;\n    padding: 0px;\n    border-radius: 0 0 0 8px;\n}\n\n\n/* Responsividad */\n@media (max-width: 768px) {\n    .heroContiner {\n        height: 150px;\n    }\n\n    .profile-info {\n        margin-left: 0;\n        text-align: center;\n    }\n\n    .profile-photo {\n        top: -107px;\n        width: 140px;\n        height: 140px;\n    }\n\n    \n    .bgImgHero {\n        height: 135px;\n    }\n\n    .bgImgHero .logo {\n        height: 87%;\n        width: auto;\n        max-width: none;\n        margin: 6px 10px 5px 0;\n    }\n\n    .profile-actions {\n        text-align: center;\n    }\n\n    /* Info Hero */\n\n    .infoHeroContiner {\n        margin-top: 0%;\n    }\n\n    .btnSendMessageContiner {\n        display: flex;\n        flex-direction: column;\n        margin-right: 22px;\n        gap: 10px;\n    }\n\n    .btnSendMessageContiner button:first-child {\n        padding: 10px;\n    }\n}\n\n@media (max-width: 480px) {\n    .profile-contact {\n        font-size: 14px;\n    }\n\n    .profile-photo {\n        top: -82px;\n        left: 15px;\n        width: 90px;\n        height: 90px;\n    }\n\n    .logo {\n        width: 89px;\n        margin: 14px;\n    }\n\n    .bgImgHero {\n        height: 100px;\n    }\n\n    /* Info hero */\n    .infoHeroContiner {\n        margin-top: 0%;\n    }\n\n    .heroContiner {\n        height: 100px;\n        margin-bottom: 2%;\n    }\n\n    .btnSendMessageContiner {\n        display: flex;\n        flex-direction: column;\n        margin-right: 22px;\n        gap: 10px;\n    }\n\n    .btnSendMessageContiner button:first-child {\n        padding: 5px;\n    }\n\n}`,""]);const u=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],p=a.base?c[0]+a.base:c[0],l=o[p]||0,d="".concat(p," ").concat(l);o[p]=l+1;var u=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=r(m,a);a.byIndex=s,e.splice(s,0,{identifier:d,updater:g,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=a(n,r),p=0;p<o.length;p++){var l=t(o[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},863:(n,e,t)=>{n.exports=t.p+"c5a5954b737307539f2d.jpg"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=a[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;const a=[{title:"Gestión Inteligente: 4 Herramientas para Modernizar los Procesos de tu Empresa",description:"Emplear herramientas para modernizar los procesos de tu empresa se traduce en una mayor productividad, eficiencia y rendimiento empresarial. Por sus",image:"https://www.elcontribuyente.mx/wp-content/uploads/2024/01/empresarios.jpg",url:"https://www.elcontribuyente.mx/2024/01/gestion-inteligente-4-herramientas-para-modernizar-los-procesos-de-tu-empresa/"},{title:"Club de Escritura para Niños: Fomenta su Imaginación",description:"Te contamos cómo puedes crear un club de escritura para niños que fomente su libertad creativa y autonomía: ayúdalos a pensar por sí mismos",image:"https://ejerciciosdeescrituracreativa.com/wp-content/uploads/2024/05/Club-de-escritura-para-ninos.jpg",url:"https://ejerciciosdeescrituracreativa.com/club-de-escritura-para-ninos/"},{title:"¿Cómo Fomentar la Escritura Creativa para Jóvenes?",description:"En este artículo te contamos cuáles son los beneficios de la escritura creativa en los jóvenes y qué actvidades pueden implementarse para fomentarla.",image:"https://ejerciciosdeescrituracreativa.com/wp-content/uploads/2024/03/Escritura-creativa-para-jovenes.jpg",url:"https://ejerciciosdeescrituracreativa.com/escritura-creativa-para-adolescentes/"},{title:"Eleva tu presencia online: 5 estrategias para impulsar la comunicación digital",description:"Eleva tu presencia online: 5 estrategias para impulsar la comunicación digital",image:"https://www.netelip.com/blog/wp-content/uploads/2024/02/netelip-5-estrategias-presencia-online.jpg",url:"https://www.netelip.com/blog/2024/04/eleva-tu-presencia-online-5-estrategias-para-impulsar-la-comunicacion-digital/"},{title:"Crea un Minicuento",description:"En este ejercicio de escritura creativa te invitamos a escribir un minicuento, basado en una imagen mientras el tiempo corre ¡Tic tac! ¡Tic tac!",image:"https://ejerciciosdeescrituracreativa.com/wp-content/uploads/2024/06/Crea-un-minicuento.jpg",url:"https://ejerciciosdeescrituracreativa.com/crea-un-minicuento/"},{title:"Tipos de negocios online más exitosos en 2024 - TyN Magazine",description:"Te contamos cuáles son los tipos de negocios online más exitosos para este año 2024 para que puedas escoger una opción que se adapte a tus necesidades.",image:"https://tynmagazine.com/wp-content/uploads/sites/3/2024/02/ecommerce-3415340_1280.jpg",url:"https://tynmagazine.com/tipos-de-negocios-online-mas-exitosos-en-2024/"},{title:"Optimiza tu Negocio: 6 Estrategias de Email Marketing en 2024 | Brand Bakers 📈",description:"Potencia tu empresa en 2024 con las últimas Estrategias de Email Marketing. Descubre tácticas innovadoras\n    para mejorar la comunicación, aumentar la participación y obtener conversiones impactantes. Eleva tu\n    presencia digital ahora.",image:"https://brandbackers.com.mx/assets/img/blog/como-aumentar-trafico-web/slide-blog-trafico-web.jpg",url:"https://brandbackers.com.mx/blog-de-marketing-digital/optimiza-tu-negocio-6-estrategias-de-email-marketing-en-2024"},{title:"¿Qué son las escuelas innovadoras? - Luca",description:"En este artículo se expone qué son las escuelas innovadoras y de qué manera contribuyen a la transformación de la educación en México",image:"https://www.lucaedu.com/wp-content/uploads/2023/01/Escuelas-innovadoras.jpg",url:"https://www.lucaedu.com/escuelas-innovadoras/"},{title:"9 habilidades docentes - Luca",description:"En este artículo se explicará qué son las habilidades docentes y cuáles son las indispensables que hay que aplicar en el aula",image:"https://www.lucaedu.com/wp-content/uploads/2022/12/habilidades_docentes.jpg",url:"https://www.lucaedu.com/habilidades-docentes/"}],r=t.p+"0f91294c768b7c0cc336.png";function o(n){return new Promise(((e,t)=>{const a=new Image;a.onload=()=>e(!0),a.onerror=()=>e(!1),a.src=n}))}var i=t(72),s=t.n(i),c=t(825),p=t.n(c),l=t(659),d=t.n(l),u=t(56),m=t.n(u),g=t(540),f=t.n(g),h=t(113),x=t.n(h),b=t(365),v={};v.styleTagTransform=x(),v.setAttributes=m(),v.insert=d().bind(null,"head"),v.domAPI=p(),v.insertStyleElement=f(),s()(b.A,v),b.A&&b.A.locals&&b.A.locals,document.addEventListener("DOMContentLoaded",(()=>{!async function(n){const e=document.getElementById("articlesContainer");e.innerHTML="";for(const t of n){const n=await o(t.image),a=document.createElement("div");a.classList.add("article-card"),a.innerHTML=`\n            <div class="card-content">\n                <a href="${t.url}" target="_blank" class="card-link">\n                    <img src="${n?t.image:r}" \n                        alt="${t.title}" \n                        class="card-image" />\n                    <h2 class="card-title">${t.title}</h2>\n                    <p class="card-description">${t.description}</p>\n                </a>\n            </div>\n        `,e.appendChild(a)}}(a)}))})();