"use strict";(self.webpackChunkjc_doc=self.webpackChunkjc_doc||[]).push([[513],{7389:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"documentation/integration/service","title":"Service","description":"Cette int\xe9gration ne concerne que Android Android","source":"@site/docs/documentation/integration/service.md","sourceDirName":"documentation/integration","slug":"/documentation/integration/service","permalink":"/jc-doc/docs/documentation/integration/service","draft":false,"unlisted":false,"editUrl":"https://github.com/jeedomconnect-team/jc-doc/edit/main/docs/documentation/integration/service.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Notifications","permalink":"/jc-doc/docs/documentation/integration/notifications"},"next":{"title":"Reconnaissance vocale","permalink":"/jc-doc/docs/documentation/integration/speechRecognition"}}');var s=i(4848),t=i(8453);const r={sidebar_position:3},o="Service",d={},l=[{value:"Liste des d\xe9clencheurs disponibles",id:"liste-des-d\xe9clencheurs-disponibles",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"service",children:"Service"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Cette int\xe9gration ne concerne que ",(0,s.jsx)(n.img,{alt:"Android",src:i(7949).A+"",width:"24",height:"24"})," Android"]})}),"\n",(0,s.jsxs)(n.p,{children:["Jeedom Connect dispose d'un service qui tourne en t\xe2che de fond et permet une communication permanente entre votre appareil et le plugin, ",(0,s.jsx)(n.strong,{children:"quelque soit l'\xe9tat de l'application"})," (premier plan / arri\xe8re plan / tu\xe9e).\nLe service s'active dans les pr\xe9f\xe9rences de l'application ",(0,s.jsx)(n.code,{children:"Service et actions / Gestion du service"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Lorsque le service est activ\xe9, une ",(0,s.jsx)(n.strong,{children:"notification permanente"})," est affich\xe9e dans le volet des notifications (il s'agit en r\xe9alit\xe9 selon la terminologie Android d'un service d'avant plan - cette notification est impos\xe9e par Android et n'est donc pas masquable).\nVous pouvez personnaliser cette notification :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"en modifiant le titre"}),"\n",(0,s.jsx)(n.li,{children:"en modifiant le message"}),"\n",(0,s.jsx)(n.li,{children:"en affichant, ou pas, l'ic\xf4ne de l'application (dans le contenu de celle-ci)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Le service Jeedom Connect a principalement deux utilit\xe9s :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Remonter les ",(0,s.jsx)(n.strong,{children:"informations"})," sur l'\xe9tat de l'appareil vers Jeedom"]}),"\n",(0,s.jsxs)(n.li,{children:["Aider \xe0 l'ex\xe9cution d'",(0,s.jsx)(n.strong,{children:"actions"})," sur l'appareil"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Ces ",(0,s.jsx)(n.strong,{children:"informations"})," et ",(0,s.jsx)(n.strong,{children:"actions"})," sont d\xe9crites dans la section ",(0,s.jsx)(n.a,{href:"#eqCmd",children:"Commandes disponibles sur un \xe9quipement"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Pour remonter les informations, le service utilise des ",(0,s.jsx)(n.strong,{children:"d\xe9clencheurs"})," qui sont des \xe9v\xe9nements du syst\xe8me. Vous devez activer les d\xe9clencheurs qui vous int\xe9ressent pour que la remont\xe9e ait lieu.\nA chaque fois qu'un \xe9v\xe9nement li\xe9 \xe0 un d\xe9clencheur a lieu, ",(0,s.jsx)(n.strong,{children:"toutes"})," les informations sont remont\xe9es vers Jeedom."]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"Activer trop de d\xe9clencheurs peut nuire au niveau de votre batterie !"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Exemple"})," : Si la seule information qui vous int\xe9resse concerne l'\xe9tat du wifi (activ\xe9 / adresse IP / point d'acc\xe8s), alors vous pouvez uniquement activer le d\xe9clencheur ",(0,s.jsx)(n.code,{children:"Connectivit\xe9 chang\xe9e"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"liste-des-d\xe9clencheurs-disponibles",children:"Liste des d\xe9clencheurs disponibles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"P\xe9riodique"})," : se d\xe9clenche automatiquement toutes les X minutes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"D\xe9marrage de l'appareil"})," : se d\xe9clenche \xe0 chaque fois que l'appareil d\xe9marre (",(0,s.jsx)(n.strong,{children:"apr\xe8s"})," avoir saisi d'\xe9ventuels moyens de s\xe9curit\xe9)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Connectivit\xe9 chang\xe9e"})," : se d\xe9clenche lorsqu'un changement dans la connection au r\xe9seau a lieu (par exemple passer du r\xe9seau mobile \xe0 un r\xe9seau Wifi)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Chargeur branch\xe9"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Chargeur d\xe9branch\xe9"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Batterie faible"})," : se d\xe9clenche lorsque le niveau de batterie devient faible (g\xe9n\xe9ralement \u2264 15%)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Batterie OK"})," : se d\xe9clenche lorsque le niveau de batterie revient \xe0 un \xe9tat normal (g\xe9n\xe9ralement > 15%)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Ecran \xe9teint"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Ecran allum\xe9"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Bluetooth connect\xe9"})," : se d\xe9clenche d\xe8s que l'appareil est connect\xe9 \xe0 un p\xe9riph\xe9rique bluetooth."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Bluetooth d\xe9connect\xe9"})," : se d\xe9clenche lorsqu'il n'y a plus aucun p\xe9riph\xe9rique bluetooth connect\xe9."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Prochaine alarme chang\xe9e"})," : se d\xe9clenche lorsque la date ou l'heure de la prochaine alarme programm\xe9e sur l'appareil change"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},7949:(e,n,i)=>{i.d(n,{A:()=>c});const c="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE2LjYxIDE1LjE1QzE2LjE1IDE1LjE1IDE1Ljc3IDE0Ljc4IDE1Ljc3IDE0LjMyUzE2LjE1IDEzLjUgMTYuNjEgMTMuNUgxNi42MUMxNy4wNyAxMy41IDE3LjQ1IDEzLjg2IDE3LjQ1IDE0LjMyQzE3LjQ1IDE0Ljc4IDE3LjA3IDE1LjE1IDE2LjYxIDE1LjE1TTcuNDEgMTUuMTVDNi45NSAxNS4xNSA2LjU3IDE0Ljc4IDYuNTcgMTQuMzJDNi41NyAxMy44NiA2Ljk1IDEzLjUgNy40MSAxMy41SDcuNDFDNy44NyAxMy41IDguMjQgMTMuODYgOC4yNCAxNC4zMkM4LjI0IDE0Ljc4IDcuODcgMTUuMTUgNy40MSAxNS4xNU0xNi45MSAxMC4xNEwxOC41OCA3LjI2QzE4LjY3IDcuMDkgMTguNjEgNi44OCAxOC40NSA2Ljc5QzE4LjI4IDYuNjkgMTguMDcgNi43NSAxOCA2LjkyTDE2LjI5IDkuODNDMTQuOTUgOS4yMiAxMy41IDguOSAxMiA4LjkxQzEwLjQ3IDguOTEgOSA5LjI0IDcuNzMgOS44Mkw2LjA0IDYuOTFDNS45NSA2Ljc0IDUuNzQgNi42OCA1LjU3IDYuNzhDNS40IDYuODcgNS4zNSA3LjA4IDUuNDQgNy4yNUw3LjEgMTAuMTNDNC4yNSAxMS42OSAyLjI5IDE0LjU4IDIgMThIMjJDMjEuNzIgMTQuNTkgMTkuNzcgMTEuNyAxNi45MSAxMC4xNEgxNi45MVoiIC8+PC9zdmc+"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var c=i(6540);const s={},t=c.createContext(s);function r(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);