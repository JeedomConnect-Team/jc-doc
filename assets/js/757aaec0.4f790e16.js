"use strict";(self.webpackChunkjc_doc=self.webpackChunkjc_doc||[]).push([[5066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={id:"add-equipment",sidebar_position:1},a="Ajouter des \xe9quipements",u={unversionedId:"plugin/equipment/add-equipment",id:"plugin/equipment/add-equipment",title:"Ajouter des \xe9quipements",description:"Vous pouvez ajouter des \xe9quipements dans le plugin de fa\xe7on standard.",source:"@site/docs/plugin/equipment/addEquipment.md",sourceDirName:"plugin/equipment",slug:"/plugin/equipment/add-equipment",permalink:"/jc-doc/docs/plugin/equipment/add-equipment",draft:!1,editUrl:"https://github.com/jared-94/jc-doc/edit/main/docs/plugin/equipment/addEquipment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"add-equipment",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Widgets et composants",permalink:"/jc-doc/docs/plugin/widgets"},next:{title:"Configuration",permalink:"/jc-doc/docs/plugin/equipment/configuration"}},p={},c=[],l={toc:c},s="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(s,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ajouter-des-\xe9quipements"},"Ajouter des \xe9quipements"),(0,i.kt)("p",null,"Vous pouvez ajouter des \xe9quipements dans le plugin de fa\xe7on standard."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"1 \xe9quipement = 1 appareil muni de l'application")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(992).Z,width:"1727",height:"915"})),(0,i.kt)("p",null,"A la cr\xe9ation d'un \xe9quipement, une cl\xe9 API, ainsi qu'un QR Code est automatiquement g\xe9n\xe9r\xe9 avec les informations de configuration du plugin. Lors du d\xe9marrage de l'application, vous pourrez alors entrer manuellement vos identifiants jeedom, ou bien scanner le QR Code. Une fois connect\xe9, l'\xe9quipement et l'appareil sont li\xe9s. Pour vous connecter avec un autre appareil, il vous faut le ",(0,i.kt)("em",{parentName:"p"},"d\xe9tacher"),"  en cliquant sur le bouton associ\xe9."),(0,i.kt)("p",null,"La configuration d'un \xe9quipement consiste en un fichier JSON configurable avec l'assistant, et que vous pouvez exporter / importer. Si vous voulez par exemple cloner un \xe9quipement, ajoutez en un nouveau et utiliser l'exportation / importation.  "),(0,i.kt)("p",null,"Le dernier bouton permet lui de transmettre votre fichier de configuration complet, en cas de probl\xe8me, au d\xe9veloppeur. Ce fichier ne DOIT PAS \xeatre import\xe9 sur un autre \xe9quipement JeedomConnect."))}d.isMDXComponent=!0},992:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/eqConfig-241c2c3a7659ff860cfa28c122a1fc0e.png"}}]);