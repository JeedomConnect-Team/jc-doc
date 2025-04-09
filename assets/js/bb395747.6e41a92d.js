"use strict";(self.webpackChunkjc_doc=self.webpackChunkjc_doc||[]).push([[2183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=a(n),m=o,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,s[1]=p;for(var a=2;a<i;a++)s[a]=n[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>a});var r=n(7462),o=(n(7294),n(3905));const i={title:"Types disponibles",sidebar_position:1},s=void 0,p={unversionedId:"plugin/types/types",id:"plugin/types/types",title:"Types disponibles",description:"Deux types d'\xe9l\xe9ments disponible",source:"@site/docs/plugin/types/types.md",sourceDirName:"plugin/types",slug:"/plugin/types/",permalink:"/jc-doc/docs/plugin/types/",draft:!1,editUrl:"https://github.com/jeedomconnect-team/jc-doc/edit/main/docs/plugin/types/types.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Types disponibles",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration du plugin",permalink:"/jc-doc/docs/plugin/plugin-config"},next:{title:"Widgets",permalink:"/jc-doc/docs/plugin/types/widgets"}},l={},a=[{value:"Deux types d&#39;\xe9l\xe9ments disponible",id:"deux-types-d\xe9l\xe9ments-disponible",level:2},{value:"Par o\xf9 commencer ?",id:"par-o\xf9-commencer-",level:2}],c={toc:a},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"deux-types-d\xe9l\xe9ments-disponible"},"Deux types d'\xe9l\xe9ments disponible"),(0,o.kt)("p",null,'Sur JeedomConnect, vous pourrez vous amuser \xe0 configurer deux types "d\'\xe9l\xe9ments" unitaires :'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'les Widgets : \xe9l\xe9ment "\xe9volu\xe9" avec un titre, sous-titre, des images, un statut, etc ...'),(0,o.kt)("li",{parentName:"ul"},"les Composants : \xe9l\xe9ment brut sans rien de plus, afin de vous permettre de l'habiller comme vous le souhaitez (gr\xe2ce \xe0 d'autres composants!)")),(0,o.kt)("p",null,"Par exemple, voici une repr\xe9senation d'un ",(0,o.kt)("strong",{parentName:"p"},"widget")," de type ",(0,o.kt)("inlineCode",{parentName:"p"},"G\xe9n\xe9rique switch"),"  "),(0,o.kt)("img",{alt:"ex_widget",src:"../../img/ex_widget.jpg",width:"20%;"}),(0,o.kt)("p",null,"alors que voici l'exemple d'un ",(0,o.kt)("strong",{parentName:"p"},"composant"),"  "),(0,o.kt)("img",{alt:"ex_composant",src:"../../img/ex_composant.jpg",width:"20%;"}),(0,o.kt)("h2",{id:"par-o\xf9-commencer-"},"Par o\xf9 commencer ?"),(0,o.kt)("p",null,"Il est n\xe9cessaire de commencer par cr\xe9er un widget ou un composant pour ensuite pouvoir le rattacher \xe0 un (ou plusieurs) \xe9quipement(s).",(0,o.kt)("br",{parentName:"p"}),"\n","Sur la page principale vous avez acc\xe8s \xe0 l'ensemble des widgets/composants que vous avez cr\xe9\xe9. Il est possible de les filtrer par type et de les classer (par Pi\xe8ces, Nom, ou Type)."))}d.isMDXComponent=!0}}]);