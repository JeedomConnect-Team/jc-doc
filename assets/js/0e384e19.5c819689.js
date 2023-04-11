"use strict";(self.webpackChunksource=self.webpackChunksource||[]).push([[9671],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var a=l.createContext({}),d=function(t){var e=l.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return l.createElement(a.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),c=d(n),p=r,m=c["".concat(a,".").concat(p)]||c[p]||k[p]||i;return n?l.createElement(m,o(o({ref:e},s),{},{components:n})):l.createElement(m,o({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=p;var u={};for(var a in e)hasOwnProperty.call(e,a)&&(u[a]=e[a]);u.originalType=t,u[c]="string"==typeof t?t:r,o[1]=u;for(var d=2;d<i;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var l=n(7462),r=(n(7294),n(3905));const i={title:"Introduction",sidebar_position:1},o=void 0,u={unversionedId:"intro",id:"intro",title:"Introduction",description:"Le projet Jeedom Connect se compose de deux parties :",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/jc-doc/docs/intro",draft:!1,editUrl:"https://github.com/jared-94/jc-doc/edit/main/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Configuration du plugin",permalink:"/jc-doc/docs/plugin/plugin-config"}},a={},d=[{value:"Premiers pas",id:"getStarted",level:2},{value:"Pr\xe9-requis",id:"pr\xe9-requis",level:3},{value:"Fonctionnalit\xe9s",id:"features",level:2},{value:"Prix",id:"prix",level:2}],s={toc:d},c="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Le projet ",(0,r.kt)("strong",{parentName:"p"},"Jeedom Connect")," se compose de deux parties : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"un ",(0,r.kt)("strong",{parentName:"li"},"plugin")," pour Jeedom "),(0,r.kt)("li",{parentName:"ul"},"une ",(0,r.kt)("strong",{parentName:"li"},"application")," pour Android / iOS.  ")),(0,r.kt)("p",null,"Vous trouverez ici une documentation pour la mise en place et l'utilisation de ces deux \xe9l\xe9ments."),(0,r.kt)("h2",{id:"getStarted"},"Premiers pas"),(0,r.kt)("p",null,"Pour utiliser Jeedom Connect vous aurez besoin :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Une installation fonctionnelle de Jeedom"),(0,r.kt)("li",{parentName:"ul"},"Le plugin Jeedom Connect disponible sur le Market Jeedom ",(0,r.kt)("a",{href:"https://market.jeedom.com/index.php?v=d&p=market_display&id=4077",target:"_blank"},(0,r.kt)("img",{src:"../img/logo-MARKET.svg",width:"10%"}))),(0,r.kt)("li",{parentName:"ul"},"L'application Jeedom Connect sur le Play Store ",(0,r.kt)("a",{href:"https://play.google.com/store/apps/details?id=com.jeedomconnect.app",target:"_blank"},(0,r.kt)("img",{src:"../img/playstore.png",width:"10%"})),"  ou bien l'application JeeConnect sur l'App Store ",(0,r.kt)("a",{href:"https://apps.apple.com/us/app/jeeconnect/id1566533727",target:"_blank"},(0,r.kt)("img",{src:"../img/applestore.png",width:"10%"})),"  ")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Le syst\xe8me Android dispose de deux versions diff\xe9rentes : "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"La version du Play Store"),(0,r.kt)("li",{parentName:"ul"},"La version APK qui dispose de ",(0,r.kt)("a",{parentName:"li",href:"#features"},"Fonctionnalit\xe9s")," suppl\xe9mentaires")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Ces deux versions ne peuvent pas cohabiter sur un m\xeame appareil."))),(0,r.kt)("h3",{id:"pr\xe9-requis"},"Pr\xe9-requis"),(0,r.kt)("table",{className:"core-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("strong",null,"Installation")),(0,r.kt)("th",null,"Version"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Jeedom"),(0,r.kt)("td",null,"\u2265 4.2")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("img",{alt:"Android",src:"../img/android.svg"})," Android"),(0,r.kt)("td",null,"\u2265 6 (Services Google requis)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("img",{alt:"iOS",src:"../img/apple.svg"}),"iOS"),(0,r.kt)("td",null,"\u2265 13")))),(0,r.kt)("h2",{id:"features"},"Fonctionnalit\xe9s"),(0,r.kt)("table",{className:"core-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("strong",null,"Interface")),(0,r.kt)("th",null,(0,r.kt)("img",{alt:"Android",src:"../img/android.svg"}),"Android (Store)"),(0,r.kt)("th",null,(0,r.kt)("img",{alt:"Android",src:"../img/android.svg"}),"Android (APK)"),(0,r.kt)("th",null,(0,r.kt)("img",{alt:"iOS",src:"../img/apple.svg"}),"iOS"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Affichage et gestion des \xe9quipements domotiques et sc\xe9narios"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Affichage et gestion des cam\xe9ras"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Historiques sous forme de graphique ou tableau"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"S\xe9curiser les actions avec donn\xe9es biom\xe9triques"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Personalisation pouss\xe9e de l'interface"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Communication en WebSocket"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("strong",null,"Int\xe9gration")),(0,r.kt)("th",null,(0,r.kt)("img",{alt:"Android",src:"../img/android.svg"}),"Android (Store)"),(0,r.kt)("th",null,(0,r.kt)("img",{alt:"Android",src:"../img/android.svg"}),"Android (APK)"),(0,r.kt)("th",null,(0,r.kt)("img",{alt:"iOS",src:"../img/apple.svg"}),"iOS"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/integration/notifications"},"Notifications Push")),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/integration/geoloc"},"G\xe9olocalisation")),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/integration/service"},"Service d'arri\xe8re-plan")),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Alertes critiques iOS"),(0,r.kt)("td",null),(0,r.kt)("td",null),(0,r.kt)("td",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"R\xe9ception/Envoie de SMS"),(0,r.kt)("td",null),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/integration/speechRecognition"},"Reconnaissance vocale")),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Ecran d'accueil (Launcher)"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Deep Links"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Raccourcis d'application"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Raccourcis de param\xe8tre rapides"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Contr\xf4les d'appareils par le syst\xe8me"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"prix"},"Prix"),(0,r.kt)("p",null,"Le plugin, ainsi que l'application sont compl\xe8tement ",(0,r.kt)("strong",{parentName:"p"},"gratuits")," et le resteront.\nL'\xe9quipe Jeedom Connect ne dispose d'aucun accord commercial ou financier avec qui que ce soit."))}k.isMDXComponent=!0}}]);