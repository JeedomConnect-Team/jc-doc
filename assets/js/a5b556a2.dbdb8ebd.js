"use strict";(self.webpackChunkjc_doc=self.webpackChunkjc_doc||[]).push([[9478],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,g=u["".concat(s,".").concat(c)]||u[c]||p[c]||r;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={title:"Widgets",sidebar_position:2},l=void 0,o={unversionedId:"plugin/types/widgets",id:"plugin/types/widgets",title:"Widgets",description:"Gestion des widgets",source:"@site/docs/plugin/types/widgets.md",sourceDirName:"plugin/types",slug:"/plugin/types/widgets",permalink:"/jc-doc/docs/plugin/types/widgets",draft:!1,editUrl:"https://github.com/jeedomconnect-team/jc-doc/edit/main/docs/plugin/types/widgets.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Widgets",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Types disponibles",permalink:"/jc-doc/docs/plugin/types/"},next:{title:"Composants",permalink:"/jc-doc/docs/plugin/types/composants"}},s={},d=[{value:'Gestion des widgets <a name="gestionWidget"></a>',id:"gestion-des-widgets-",level:2},{value:"Widgets disponibles",id:"widgets-disponibles",level:2}],m={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gestion-des-widgets-"},"Gestion des widgets ",(0,i.kt)("a",{name:"gestionWidget"})),(0,i.kt)("p",null,'Pour cr\xe9er un widget, cliquez sur "Ajouter un widget", s\xe9lectionnez ensuite le type de widget que vous souhaitez cr\xe9er dans la liste d\xe9roulante de gauche puis renseignez les diff\xe9rents champs affich\xe9s \xe0 l\'\xe9cran avant de finaliser la cr\xe9ation en appuyant sur le bouton "Sauvegarder".  '),(0,i.kt)("p",null,"Quelques \xe9l\xe9ments sont standard et seront demand\xe9s pour l'ensemble des widgets :  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Actif")," : Le widget sera (ou pas) affich\xe9 dans l'application. Pratique si vous voulez par exemple g\xe9rer un groupe de lumi\xe8res, mais ne pas afficher certaines d'entre elles."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Visible sous condition")," : Permet d'ajouter une condition pour afficher ou masquer cet \xe9l\xe9ment (uniquement si 'actif' est coch\xe9)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pi\xe8ce")," : S\xe9lection de la pi\xe8ce associ\xe9e (identique aux objets g\xe9r\xe9s dans Jeedom)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Nom")," : Nom du widget, affich\xe9 sur le widget"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Nom d'affichage")," : Nom affich\xe9 sur les pages de configuration. Si vide, alors le nom est utilis\xe9."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sous-titre")," Information compl\xe9mentaire affich\xe9e dans l'application. Le mode personalis\xe9 permet de mettre une phrase quelconque, ou un texte dynamique"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Affichage forc\xe9")," : De fa\xe7on standard, chaque widget (sauf exception) poss\xe8de 3 types d'affichage : carte, vignette et d\xe9tail. Les affichages carte et vignettes peuvent \xeatre choisis via l'ic\xf4ne en haut \xe0 droite dans l'application. L'affichage d\xe9tail est une page enti\xe8re affich\xe9e quand on click sur le widget. Vous pouvez ici forcer un widget \xe0 s'afficher d'une de ces 3 fa\xe7ons.",(0,i.kt)("br",{parentName:"li"}),"Attention pour le mode d\xe9tail, le widget doit \xeatre seul sur sa page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"S\xe9curiser les actions")," : Toutes les commandes de type action peuvent \xeatre s\xe9curis\xe9es \xe0 l'aide de ces trois boutons :",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("img",{src:n(970).Z,width:"154",height:"39"}),"\nLe premier permet de faire une simple demande de confirmation de l'action.",(0,i.kt)("br",{parentName:"li"}),"Le second demande une donn\xe9e biom\xe9trique (empreinte digitale, reconaissance faciale) pour ex\xe9cuter l'action (sur appareils disposant d'un capteur).",(0,i.kt)("br",{parentName:"li"}),"Le dernier demandera le mot de passe configur\xe9 dans les param\xe8tres de l'\xe9quipement JC.  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Images")," : Les images de l'application sont stock\xe9es dans le dossier ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins/JeedomConnect/data/img/"),". Si vous souhaitez ajouter des images persos, utilisez l'assistant, ou bien copiez vos images dans ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins/JeedomConnect/data/img/user_files/"),". Il est conseill\xe9 d'utiliser des images PNG en 128x128. Vous pouvez aussi mettre des GIF anim\xe9s."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Images sous conditions")," : Vous pouvez dans certains widgets d\xe9finir une image en fonction des valeurs d'une commande. L'ordre des ces conditions sera prise en compte par l'appli (les plus hautes sont prioritaires).  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ajouter des infos")," : vous permet d'ajouter des commandes de type ",(0,i.kt)("inlineCode",{parentName:"li"},"info")," de votre Jeedom et de vous en servir pour les autres champs du formulaire 'Images sous conditions', 'Nom', 'Sous-titre'.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Textes dynamiques")," : Les champs ",(0,i.kt)("inlineCode",{parentName:"p"},"Nom")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"Sous-titre"),", ainsi que les conditions d'affichage d'images peuvent \xeatre personnalis\xe9s. Ils sont \xe9valu\xe9s dans l'application en JavaScript. Les raccourcis suivants sont aussi disponibles (liste non exhaustive mais disponible dans la configuration de chaque widget c\xf4t\xe9 plugin) :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#room#")," : Nom de la pi\xe8ce associ\xe9e au widget"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#status#")," ou ",(0,i.kt)("inlineCode",{parentName:"li"},"#value#")," (selon les widgets) : donne la valeur courante de la commande info principale du widget"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#formatedValue#")," (selon les widgets) : valeur format\xe9e en mot de la commande info princpale (par exemple ",(0,i.kt)("inlineCode",{parentName:"li"},"Allum\xe9"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Eteint"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#elapsedTime#")," : dur\xe9e depuis laquelle la commande info principale du widget a \xe9t\xe9 modifi\xe9e\nExemple :\n",(0,i.kt)("inlineCode",{parentName:"li"},"La lumi\xe8re de #room# est formatedValue depuis elapsedTime et consomme power W"),(0,i.kt)("br",{parentName:"li"}),"pourra donner :",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("inlineCode",{parentName:"li"},"La lumi\xe8re de jardin est allum\xe9e depuis 1h12min et consomme 15W"),"  ")),(0,i.kt)("span",{id:"momentjs"}),(0,i.kt)("p",null,"Les fonctions suivantes sont \xe9galement dispobibles, pour une commande info not\xe9e ici #cmd# :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time(#cmd#)")," : dur\xe9e depuis laquelle la commande info principale du widget a \xe9t\xe9 modifi\xe9e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"date(#cmd#)"),' : date et heure de derni\xe8re modification de la valeur,, au format "DD MMM - HH:mm"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collect(#cmd#)"),' : date et heure de derni\xe8re collecte de la valeur,, au format "DD MMM - HH:mm"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"average(#cmd#)")," : moyenne des valeurs de la commande (#cmd# doit \xeatre historis\xe9e)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min(#cmd#)")," : minimum des valeurs de la commande (#cmd# doit \xeatre historis\xe9e)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max(#cmd#)")," : maximum des valeurs de la commande (#cmd# doit \xeatre historis\xe9e)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tendance(#cmd#)")," : renvoie ",(0,i.kt)("inlineCode",{parentName:"li"},"up"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"down")," ou ",(0,i.kt)("inlineCode",{parentName:"li"},"stable")," selon la tendance des valeurs (#cmd# doit \xeatre historis\xe9e)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modifiedDate(#cmd#)")," : donne le timestamp en ms de la derni\xe8re modification"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collectDate(#cmd#)")," : donne le timestamp en ms de la derni\xe8re collecte")),(0,i.kt)("p",null,"De plus, pour la manipulations des dates, vous avez acc\xe8s \xe0 la biblioth\xe8que ",(0,i.kt)("inlineCode",{parentName:"p"},"momentjs")," (",(0,i.kt)("a",{parentName:"p",href:"https://momentjs.com/docs/#/displaying/"},"documentation"),"). Exemple :"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'`La tondeuse est {#cmd# > 0 ? "en marche" : "au repos"} depuis le moment(modifiedDate(#cmd#)).format("DD MMMM \xe0 HH-mm")`'),"\npourra donner :\n",(0,i.kt)("inlineCode",{parentName:"p"},"La tondeuse est au repos depuis le 30 Septembre \xe0 13:31"),"\n(notez l'usage des backquote qui entourent le texte)"),(0,i.kt)("p",null,'La duplication d\'un widget est r\xe9alisable d\xe8s que celui-ci a \xe9t\xe9 sauvegard\xe9 une premi\xe8re fois. Cliquez simplement sur le bouton "Dupliquer", r\xe9aliser vos modifications (ou pas), et enregistrer (imp\xe9rativement) en validant avec le bouton "Sauvegarder".  '),(0,i.kt)("p",null,"La suppression est \xe9galement possible. Attention toutefois, si un widget est supprim\xe9, alors il disparaitra de l'ensemble des \xe9quipements auxquels il avait \xe9t\xe9 ajout\xe9 !  "),(0,i.kt)("h2",{id:"widgets-disponibles"},"Widgets disponibles"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Alarme"),(0,i.kt)("td",{parentName:"tr",align:null},"Cam\xe9ra"),(0,i.kt)("td",{parentName:"tr",align:null},"Climatiseur")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Favoris"),(0,i.kt)("td",{parentName:"tr",align:null},"Fen\xeatre"),(0,i.kt)("td",{parentName:"tr",align:null},"G\xe9n\xe9rique actions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"G\xe9n\xe9rique binaire"),(0,i.kt)("td",{parentName:"tr",align:null},"G\xe9n\xe9rique message"),(0,i.kt)("td",{parentName:"tr",align:null},"G\xe9n\xe9rique num\xe9rique")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"G\xe9n\xe9rique slider"),(0,i.kt)("td",{parentName:"tr",align:null},"G\xe9n\xe9rique switch"),(0,i.kt)("td",{parentName:"tr",align:null},"G\xe9n\xe9rique texte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"G\xe9olocalisation"),(0,i.kt)("td",{parentName:"tr",align:null},"Groupe d'alarmes"),(0,i.kt)("td",{parentName:"tr",align:null},"Groupe de fen\xeatres")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Groupe de g\xe9n\xe9riques binaires"),(0,i.kt)("td",{parentName:"tr",align:null},"Groupe de lumi\xe8res"),(0,i.kt)("td",{parentName:"tr",align:null},"Groupe de PIR")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Groupe de portes"),(0,i.kt)("td",{parentName:"tr",align:null},"Groupe de prises"),(0,i.kt)("td",{parentName:"tr",align:null},"Groupe de volets")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Humidit\xe9"),(0,i.kt)("td",{parentName:"tr",align:null},"Liste de choix"),(0,i.kt)("td",{parentName:"tr",align:null},"Lumi\xe8re \xe0 variation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lumi\xe8re de couleurs"),(0,i.kt)("td",{parentName:"tr",align:null},"Lumi\xe8re On/Off"),(0,i.kt)("td",{parentName:"tr",align:null},"Luminosit\xe9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mode"),(0,i.kt)("td",{parentName:"tr",align:null},"PIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Portail coulissant")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Porte"),(0,i.kt)("td",{parentName:"tr",align:null},"Prise"),(0,i.kt)("td",{parentName:"tr",align:null},"Puissance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R\xe9sum\xe9"),(0,i.kt)("td",{parentName:"tr",align:null},"R\xe9sum\xe9 de pi\xe8ce"),(0,i.kt)("td",{parentName:"tr",align:null},"Sc\xe9nario")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Temp\xe9rature"),(0,i.kt)("td",{parentName:"tr",align:null},"Thermostat"),(0,i.kt)("td",{parentName:"tr",align:null},"Volet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Web View"),(0,i.kt)("td",{parentName:"tr",align:null},"Historique"),(0,i.kt)("td",{parentName:"tr",align:null},"Image")))))}p.isMDXComponent=!0},970:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);