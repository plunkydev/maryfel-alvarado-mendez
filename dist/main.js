(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>m});var o=t(601),a=t.n(o),i=t(314),r=t.n(i),s=t(417),c=t.n(s),l=new URL(t(863),t.b),d=r()(a()),p=c()(l);d.push([n.id,`:root {\n    --color-primary: #0a66c2;\n}\n\n\n/* Estilos generales */\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #F4F2EE;\n}\n\n.lineMediaLeft {\n    float: left;\n    width: 50%;\n}\n\n.lineMediaRigth {\n    float: right;\n    width: 70%;\n}\n\n/* NAVEGACION */\n#navMain {\n    position: fixed;\n    z-index: 1000;\n    top: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    transition: opacity 0.3s ease, transform 0.3s ease;\n}\n\n#navMain.visible {\n    opacity: 1;\n    transform: translateY(0);\n}\n\n#navMain.hidden {\n    opacity: 0;\n    transform: translateY(-100%);\n}\n\n\n/* ------------------ */\n.navPerfilContiner {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    cursor: pointer;\n}\n\n.navPerfilContiner img {\n    width: clamp(32px, 10vw, 50px); /* Mínimo 32px, máximo 42px, adaptándose al ancho de la ventana */\n    height: clamp(32px, 10vw, 50px); /* Igual que el ancho para mantener la proporción */\n    border-radius: 50%;\n    margin: auto;\n}\n\n.navPerfilText {\n    margin-left: clamp(5px, 2vw, 10px); /* Ajuste del margen según el tamaño de pantalla */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.navPerfilContiner h4 {\n    margin-left: clamp(2px, 1vw, 5px); /* Ajuste dinámico del margen */\n    font-weight: 500;\n    font-size: clamp(18px, 4vw, 24px); /* Tamaño adaptable, mínimo 18px, máximo 24px */\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: 0;\n}\n\n.navPerfilContiner p {\n    width: clamp(153px, 61vw, 701px); /* Ajusta el ancho entre 150px y 300px según el vw */\n    white-space: nowrap;              /* Evita los saltos de línea */\n    overflow: hidden;                 /* Oculta el texto que se desborda */\n    text-overflow: ellipsis;          /* Agrega los puntos suspensivos (...) */\n    font-size: clamp(12px, 2vw, 16px); /* Ajusta el tamaño de fuente dinámicamente */\n    font-weight: 400;\n    font-size: clamp(14px, 3vw, 18px); /* Tamaño adaptable, mínimo 14px, máximo 18px */\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n\n.navContainer {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: space-between;\n    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);\n    background-color: #fff;\n    padding: 0% 25px;\n    height: 70px;\n  }\n  \n  .imgMenuHamburgesa {\n    width: 32px;\n    height: 32px;\n    cursor: pointer;\n  }\n\n  .btnContainer {\n    margin-right: 36px;\n  }\n  .btn {\n    background-color: #fff;\n    border: none;\n    color: white;\n    display: flex;\n    min-width: 31px;\n    min-height: 31px;\n  }\n  \n  .menuList {\n    display: none;\n    position: absolute;\n    top: 68px;\n    right: 3.5%;\n    width: 100%;\n    background-color: #fff;\n    box-shadow: 0 13px 8px rgba(0, 0, 0, 0.1);\n    z-index: 1;\n    justify-content: end;\n    align-items: flex-start;\n    width: 164px;\n    justify-content: center;\n    border-radius: 0 0 10px 10px;\n  }\n  \n  .menuItem {\n    display: grid;\n    justify-content: center;\n    row-gap: 10px;\n    padding: 10px 0;\n    width: 100%;\n    text-align: center;\n    font-size: 16px;\n  }\n  \n  .menuItem button {\n    background-color: #fff;\n    border: none;\n    color: #333;\n    transition: background-color 0.3s ease;\n    cursor: pointer;\n  }\n  \n  .menuItem button:hover {\n    background-color: var(--color-primary);\n    color: #fff;\n    padding: 5px 10px;\n    margin: 0 5px;\n  }\n\n\n/* END NAVEGACION */\n\n/* Contenedor principal */\n\n.continerBlur {\n    display: flex;\n    flex-direction: column;\n    max-width: 1200px;\n    margin: 25px auto;\n    background-color: #fff;\n    border-radius: 8px;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n    filter: blur(5px);\n}\n\n.continer {\n    display: flex;\n    flex-direction: column;\n    max-width: 1200px;\n    margin: 25px auto;\n    background-color: #fff;\n    border-radius: 8px;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n}\n\n/* Estilo inicial del botón */\n.btnSendMessageContiner button:first-child {\n    color: #fff; /* Texto blanco inicial */\n    background-color: var(--color-primary); /* Fondo azul inicial */\n    border: 1px solid var(--color-primary);\n    transition: all 0.3s ease; /* Para animaciones suaves */\n    cursor: pointer;\n}\n\n/* Estilo inicial para los elementos internos */\n.btnSendMessageContiner button:first-child * {\n    color: #fff; /* Los elementos internos también son blancos */\n    transition: all 0.3s ease;\n}\n\n/* Hover para el botón y todos los elementos internos */\n.btnSendMessageContiner button:first-child:hover {\n    color: var(--color-primary); /* Cambia el texto del botón a azul */\n    background-color: #fff; /* Cambia el fondo a blanco */\n    border-color: var(--color-primary);\n    box-shadow: 0 13px 8px rgba(0, 0, 0, 0.1);\n}\n\n/* Hover para los elementos internos del botón */\n.btnSendMessageContiner button:first-child:hover * {\n    color: var(--color-primary); /* Cambia el color de los elementos internos a azul */\n}\n\n\n.btnSendMessageContiner>button:nth-of-type(2) {\n    background-color: #fff;\n    padding: 8px 12px;\n}\n\nbutton {\n    padding: clamp(6px, 10px, 12px);\n    border-radius: 50px;\n}\n\n/* Tamaño dinámico para h1 */\nh1 {\n    font-size: clamp(1rem, 2.5vw, 3rem);\n}\n\nh2 {\n    color: var(--color-primary);\n}\n\nul {\n    line-height: 2rem;\n}\n\n/* Tamaño dinámico para párrafos */\np,\na {\n    margin: 0;\n    font-size: clamp(1rem, 2vw, 1.25rem);\n    line-height: clamp(1.5rem, 1.8rem, 2.75rem);\n}\n\na {\n    text-decoration: none;\n    font-style: italic;\n    font-weight: 500;\n    transition: all 500ms;\n}\n\na:hover {\n    color: #fff;\n    background-color: var(--color-primary);\n    border: none;\n    border-radius: 50px;\n    padding: 1px 5px;\n    font-style: normal;\n    font-weight: 400;\n}\n\n.heroContiner {\n    height: 200px;\n}\n\n/* Encabezado con imagen de fondo */\n.bgImgHero {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 200px;\n    background: url(${p}) no-repeat center center/cover;\n    overflow: hidden;\n}\n\n.bgImgHero .logo {\n    height: 87%;\n    width: auto;\n    max-width: none;\n    margin: 6px 10px 5px 0;\n}\n\n\n\n/* Foto de perfil */\n.profile-photo {\n    position: relative;\n    top: -172px;\n    left: 30px;\n    width: 240px;\n    height: 240px;\n    border-radius: 50%;\n    border: 5px solid #fff;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    z-index: 10;\n}\n\n/* Información principal */\n.infoHeroContiner {\n    margin-top: 8%;\n    display: grid;\n    grid-template-columns: 70% 30%;\n    column-gap: 20px;\n}\n\n.infoHero,\n.buttonAndContactContiner,\n.acercaDeMiContiner,\n.featuredArticlesContiner,\n.academyFormationConatiner,\n.experienciaLaboral,\n.cursos,\n.partisipacionesEventos,\n.publicaciones,\n.idiomas,\n.paquetesInformaticos,\n.herramientasSeo,\n.reconocimientos,\n.otros {\n    margin: 1.3rem;\n}\n\n.buttonAndContactContiner {\n    display: grid;\n    grid-template-columns: 50% 50%;\n}\n\n.btnsHeroContiner {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n\n\n.fa-solid {\n    color: #fff;\n}\n\n.infoContact>* {\n    color: var(--color-primary);\n    font-size: clamp(0.6rem, 1.5vw, 1.15rem);\n    margin-top: 0;\n}\n\n\n/* Acerca de mi */\n\n/* Articulos destacados */\n\n.articlesStylesContiner {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));\n    gap: 1rem;\n}\n\n.article-card {\n    background-color: white;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n    transition: transform 0.2s;\n    max-height: 519px;\n}\n\n.article-card:hover {\n    transform: scale(1.05);\n}\n\n.card-content {\n    margin: 8px;\n}\n\n.card-image {\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 8px 8px 0 0;\n    background-color: var(--color-primary);\n}\n\n.card-title {\n    font-size: clamp(1.3rem, 2.5vw, 1.15rem);\n}\n\n.card-description {\n    font-size: clamp(0.3rem, 2.5vw, 1.15rem);\n}\n\n.card-link {\n    color: black;\n    font-style: normal;\n}\n\n.card-link:hover {\n    color: var(--color-primary);\n    font-weight: 400;\n    padding: 0px;\n    border-radius: 0 0 0 8px;\n}\n\n.hidden {\n    opacity: 0;\n    transform: translateY(20px);\n    transition: opacity 1s ease-out, transform 0.8s ease-out;\n  }\n  \n  .show {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n\n/* Formulario */\n\n.contact_main__form {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 95%; /* Ocupa el 95% del ancho disponible en pantallas pequeñas */\n    max-width: 360px; /* Máximo ancho en pantallas grandes */\n    background: #ffffff;\n    padding: 1.5rem; /* Reduce padding en proporción para pantallas pequeñas */\n    border-radius: 0.5rem;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    z-index: 1000;\n    display: none; /* Oculto por defecto */\n  }\n  \n  .contact_main__form_group {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem; /* Espaciado relativo entre los elementos */\n  }\n  \n  .contact_main__form_field {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .contact_main__form_field_label {\n    margin-bottom: 0.5rem;\n    font-weight: bold;\n    font-size: 1rem; /* Tamaño relativo para escalar en pantallas pequeñas */\n    color: #333;\n  }\n  \n  .contact_main__form_field_input,\n  .contact_main__form_field textarea {\n    width: 90%; /* Ajusta automáticamente al contenedor */\n    padding: 0.8rem; /* Espaciado interno relativo */\n    font-size: 0.9rem; /* Ligera reducción en fuentes para pantallas pequeñas */\n    border: 1px solid #ddd;\n    border-radius: 0.5rem;\n    outline: none;\n    transition: all 0.3s ease;\n  }\n  \n  .contact_main__form_field_input:focus,\n  .contact_main__form_field textarea:focus {\n    border-color: #007bff;\n  }\n  \n  .contact_main__form_field_button {\n    padding: 0.8rem 1rem; /* Botón más compacto en pantallas pequeñas */\n    font-size: 0.9rem;\n    color: #ffffff;\n    background: #007bff;\n    border: none;\n    border-radius: 0.5rem;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n    margin-top: 5px;\n  }\n  \n  .contact_main__form_field_button:hover {\n    background-color: var(--color-primary);\n  }\n  \n/* Fin de estilos Formulario */\n\n\n/* Responsividad */\n@media (max-width: 768px) {\n    .heroContiner {\n        height: 150px;\n    }\n\n    .profile-info {\n        margin-left: 0;\n        text-align: center;\n    }\n\n    .profile-photo {\n        top: -107px;\n        width: 140px;\n        height: 140px;\n    }\n\n\n    .bgImgHero {\n        height: 135px;\n    }\n\n    .bgImgHero .logo {\n        height: 87%;\n        width: auto;\n        max-width: none;\n        margin: 6px 10px 5px 0;\n    }\n\n    .profile-actions {\n        text-align: center;\n    }\n\n    /* Info Hero */\n\n    .infoHeroContiner {\n        margin-top: 0%;\n    }\n\n    .btnSendMessageContiner {\n        display: flex;\n        flex-direction: column;\n        margin-right: 22px;\n        gap: 10px;\n    }\n\n    .btnSendMessageContiner button:first-child {\n        padding: 10px;\n    }\n}\n\n\n@media (max-width: 480px) {\n    .profile-contact {\n        font-size: 14px;\n    }\n\n    .profile-photo {\n        top: -82px;\n        left: 15px;\n        width: 90px;\n        height: 90px;\n    }\n\n    .logo {\n        width: 89px;\n        margin: 14px;\n    }\n\n    .bgImgHero {\n        height: 100px;\n    }\n\n    /* Info hero */\n    .infoHeroContiner {\n        margin-top: 0%;\n    }\n\n    .heroContiner {\n        height: 100px;\n        margin-bottom: 2%;\n    }\n\n    .btnSendMessageContiner {\n        display: flex;\n        flex-direction: column;\n        margin-right: 22px;\n        gap: 10px;\n    }\n\n    .btnSendMessageContiner button:first-child {\n        padding: 5px;\n    }\n\n}`,""]);const m=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&r[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},r=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=a(u,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=o(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var s=t(i[r]);e[s].references--}for(var c=o(n,a),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},863:(n,e,t)=>{n.exports=t.p+"c5a5954b737307539f2d.jpg"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,t.d({},{HM:()=>Y,_8:()=>U,oM:()=>G});const o=[{title:"Gestión Inteligente: 4 Herramientas para Modernizar los Procesos de tu Empresa",description:"Emplear herramientas para modernizar los procesos de tu empresa se traduce en una mayor productividad, eficiencia y rendimiento empresarial. Por sus",image:"https://www.elcontribuyente.mx/wp-content/uploads/2024/01/empresarios.jpg",url:"https://www.elcontribuyente.mx/2024/01/gestion-inteligente-4-herramientas-para-modernizar-los-procesos-de-tu-empresa/"},{title:"Club de Escritura para Niños: Fomenta su Imaginación",description:"Te contamos cómo puedes crear un club de escritura para niños que fomente su libertad creativa y autonomía: ayúdalos a pensar por sí mismos",image:"https://ejerciciosdeescrituracreativa.com/wp-content/uploads/2024/05/Club-de-escritura-para-ninos.jpg",url:"https://ejerciciosdeescrituracreativa.com/club-de-escritura-para-ninos/"},{title:"¿Cómo Fomentar la Escritura Creativa para Jóvenes?",description:"En este artículo te contamos cuáles son los beneficios de la escritura creativa en los jóvenes y qué actvidades pueden implementarse para fomentarla.",image:"https://ejerciciosdeescrituracreativa.com/wp-content/uploads/2024/03/Escritura-creativa-para-jovenes.jpg",url:"https://ejerciciosdeescrituracreativa.com/escritura-creativa-para-adolescentes/"},{title:"Eleva tu presencia online: 5 estrategias para impulsar la comunicación digital",description:"Eleva tu presencia online: 5 estrategias para impulsar la comunicación digital",image:"https://www.netelip.com/blog/wp-content/uploads/2024/02/netelip-5-estrategias-presencia-online.jpg",url:"https://www.netelip.com/blog/2024/04/eleva-tu-presencia-online-5-estrategias-para-impulsar-la-comunicacion-digital/"},{title:"Crea un Minicuento",description:"En este ejercicio de escritura creativa te invitamos a escribir un minicuento, basado en una imagen mientras el tiempo corre ¡Tic tac! ¡Tic tac!",image:"https://ejerciciosdeescrituracreativa.com/wp-content/uploads/2024/06/Crea-un-minicuento.jpg",url:"https://ejerciciosdeescrituracreativa.com/crea-un-minicuento/"},{title:"Tipos de negocios online más exitosos en 2024 - TyN Magazine",description:"Te contamos cuáles son los tipos de negocios online más exitosos para este año 2024 para que puedas escoger una opción que se adapte a tus necesidades.",image:"https://tynmagazine.com/wp-content/uploads/sites/3/2024/02/ecommerce-3415340_1280.jpg",url:"https://tynmagazine.com/tipos-de-negocios-online-mas-exitosos-en-2024/"},{title:"Optimiza tu Negocio: 6 Estrategias de Email Marketing en 2024 | Brand Bakers 📈",description:"Potencia tu empresa en 2024 con las últimas Estrategias de Email Marketing. Descubre tácticas innovadoras\n    para mejorar la comunicación, aumentar la participación y obtener conversiones impactantes. Eleva tu\n    presencia digital ahora.",image:"https://brandbackers.com.mx/assets/img/blog/como-aumentar-trafico-web/slide-blog-trafico-web.jpg",url:"https://brandbackers.com.mx/blog-de-marketing-digital/optimiza-tu-negocio-6-estrategias-de-email-marketing-en-2024"},{title:"¿Qué son las escuelas innovadoras? - Luca",description:"En este artículo se expone qué son las escuelas innovadoras y de qué manera contribuyen a la transformación de la educación en México",image:"https://www.lucaedu.com/wp-content/uploads/2023/01/Escuelas-innovadoras.jpg",url:"https://www.lucaedu.com/escuelas-innovadoras/"},{title:"9 habilidades docentes - Luca",description:"En este artículo se explicará qué son las habilidades docentes y cuáles son las indispensables que hay que aplicar en el aula",image:"https://www.lucaedu.com/wp-content/uploads/2022/12/habilidades_docentes.jpg",url:"https://www.lucaedu.com/habilidades-docentes/"}],a=t.p+"0f91294c768b7c0cc336.png";function i(n){return new Promise(((e,t)=>{const o=new Image;o.onload=()=>e(!0),o.onerror=()=>e(!1),o.src=n}))}const r=t.p+"3afce85bec1721c81729.png",s=t.p+"1ca33b81d6e0565199d9.png",c=t.p+"361ad9a0e632f77b3916.png";function l(){const n=document.querySelector(".contact_main__form");"none"===n.style.display||""===n.style.display?(n.style.display="block",d(!0)):(n.style.display="none",d(!1))}function d(n){n?document.querySelectorAll(".continer").forEach((n=>{n.classList.remove("continer"),n.classList.add("continerBlur")})):document.querySelectorAll(".continerBlur").forEach((n=>{n.classList.remove("continerBlur"),n.classList.add("continer")}))}function p(){G.style.display="none",U.src=r,U.style.width="30px",U.style.height="30px",d(!1),Y.removeEventListener("click",p),Y.addEventListener("click",m)}function m(){G.style.display="flex",U.src=c,U.style.width="20px",U.style.height="20px",d(!0),Y.removeEventListener("click",m),Y.addEventListener("click",p)}const u=document.createElement("div");function f(n){if(n){const e=n.getBoundingClientRect().top+window.scrollY,t=60;window.scrollTo({top:e-t,behavior:"smooth"}),p()}else console.error(`No se encontró ningún elemento con el id: ${n}`)}u.className="navContainer",u.innerHTML=`<div id="navPerfilContiner" class="navPerfilContiner">\n                <img src="${s}" alt="Perfil de Maryfel">\n                <div class="navPerfilText">\n                <h4>Maryfel Alvarado Méndez</h4>\n                <p>Escritora venezolana | Embajadora del idioma español | Editora y redactora web Senior</p>\n                </div>\n                </div>\n                <div class="btnContainer" id="btnContiner">\n                    <button id="btn" class="btn">\n                    <img id="imgMenuHamburgesa" class="imgMenuHamburgesa" src="${r}" alt="menu hamburgesa"></button>\n                    <div class="menuList" id="menuList">\n                        <div class="menuItem">\n                            <button id="btnHome">Home</button>\n                            <button id="btnContactMenu">Contactame</button>\n                            <button id="btnacercaDeMiContiner">Acerca de Mi</button>\n                            <button id="btnArticulosDestacados">Articulos Destacados</button>\n                            <button id="btnAcademyFormation">Formación Académica</button>\n                            <button id="btnExperienciaLaboral">Experiencia Laboral</button>\n                            <button id="btnCursos">Cursos</button>\n                            <button id="btnPartisipacionesEventos">Participaciones en Eventos</button>\n                            <button id="btnPublicaciones">Publicaciones</button>\n                            <button id="btnIdiomas">Idiomas</button>\n                            <button id="btnPaquetesInformaticos">Paquetes Informáticos</button>\n                            <button id="btnHerramientasSeo">Herramientas de Redacción SEO</button>\n                            <button id="btnReconocimientos">Reconocimientos</button>\n                            <button id="btnOtros">Otras Actividades</button>\n                            </div>\n                    </div>\n                </div>`;var g=t(72),b=t.n(g),h=t(825),x=t.n(h),v=t(659),y=t.n(v),w=t(56),E=t.n(w),C=t(540),I=t.n(C),L=t(113),k=t.n(L),_=t(365),M={};M.styleTagTransform=k(),M.setAttributes=E(),M.insert=y().bind(null,"head"),M.domAPI=x(),M.insertStyleElement=I(),b()(_.A,M),_.A&&_.A.locals&&_.A.locals;const B=document.getElementById("navMain");B.appendChild(u);const j=document.getElementById("heroContiner"),A=document.getElementById("acercaDeMiContiner"),T=document.getElementById("featuredArticlesContiner"),S=document.getElementById("academyFormationConatiner"),P=document.getElementById("experienciaLaboral"),z=document.getElementById("cursos"),H=document.getElementById("partisipacionesEventos"),q=document.getElementById("publicaciones"),F=document.getElementById("idiomas"),N=document.getElementById("paquetesInformaticos"),O=document.getElementById("herramientasSeo"),R=document.getElementById("reconocimientos"),$=document.getElementById("otros"),D=document.getElementById("navPerfilContiner"),Y=document.getElementById("imgMenuHamburgesa"),U=document.getElementById("imgMenuHamburgesa"),G=document.getElementById("menuList"),J=document.getElementById("btnHome"),Q=document.getElementById("btnacercaDeMiContiner"),V=document.getElementById("btnArticulosDestacados"),K=document.getElementById("btnAcademyFormation"),W=document.getElementById("btnExperienciaLaboral"),X=document.getElementById("btnCursos"),Z=document.getElementById("btnPartisipacionesEventos"),nn=document.getElementById("btnPublicaciones"),en=document.getElementById("btnIdiomas"),tn=document.getElementById("btnPaquetesInformaticos"),on=document.getElementById("btnHerramientasSeo"),an=document.getElementById("btnReconocimientos"),rn=document.getElementById("btnOtros"),sn=document.getElementById("contact"),cn=document.getElementById("btnContactMenu"),ln=document.getElementById("closeForm");Y.addEventListener("click",m),cn.addEventListener("click",(n=>{n.stopPropagation(),p(),l()})),ln.addEventListener("click",(()=>{l()})),sn.addEventListener("click",(n=>{n.stopPropagation(),l()})),J.addEventListener("click",(()=>f(j))),D.addEventListener("click",(()=>f(j))),Q.addEventListener("click",(()=>f(A))),V.addEventListener("click",(()=>f(T))),K.addEventListener("click",(()=>f(S))),W.addEventListener("click",(()=>f(P))),X.addEventListener("click",(()=>f(z))),Z.addEventListener("click",(()=>f(H))),nn.addEventListener("click",(()=>f(q))),en.addEventListener("click",(()=>f(F))),tn.addEventListener("click",(()=>f(N))),on.addEventListener("click",(()=>f(O))),an.addEventListener("click",(()=>f(R))),rn.addEventListener("click",(()=>f($))),document.addEventListener("DOMContentLoaded",(()=>{!function(n=".hidden",e=.1){const t=document.querySelectorAll(n),o=new IntersectionObserver(((n,e)=>{n.forEach((n=>{n.isIntersecting&&(n.target.classList.add("show"),e.unobserve(n.target))}))}),{threshold:e});t.forEach((n=>o.observe(n)))}(".hidden"),async function(n){const e=document.getElementById("articlesContainer");e.innerHTML="";for(const t of n){const n=await i(t.image),o=document.createElement("div");o.classList.add("article-card"),o.innerHTML=`\n            <div class="card-content">\n                <a href="${t.url}" target="_blank" class="card-link">\n                    <img src="${n?t.image:a}" \n                        alt="${t.title}" \n                        class="card-image" />\n                    <h2 class="card-title">${t.title}</h2>\n                    <p class="card-description">${t.description}</p>\n                </a>\n            </div>\n        `,e.appendChild(o)}}(o)})),function(n){let e,t=0,o=!1;n.addEventListener("mouseenter",(()=>{o=!0,clearTimeout(e)})),n.addEventListener("mouseleave",(()=>{o=!1,e=setTimeout((()=>{n.classList.add("hidden"),n.classList.remove("visible")}),2e3)})),document.addEventListener("scroll",(()=>{const a=window.scrollY;a>200?(n.classList.add("visible"),n.classList.remove("hidden")):(n.classList.add("hidden"),n.classList.remove("visible")),o||(clearTimeout(e),e=setTimeout((()=>{n.classList.add("hidden"),n.classList.remove("visible")}),2e3)),t=a}))}(B),document.querySelectorAll(".continer").forEach((n=>n.addEventListener("click",(()=>p()))))})();