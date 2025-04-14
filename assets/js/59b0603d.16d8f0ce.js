"use strict";(self.webpackChunkjc_doc=self.webpackChunkjc_doc||[]).push([[304],{6656:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"tutorials/recopie","title":"Copie des param\xe9trages","description":"J\'aimerais avoir le m\xeame rendu avec la m\xeame disposition sur tous mes appareils, est ce possible ?","source":"@site/docs/tutorials/recopie.md","sourceDirName":"tutorials","slug":"/tutorials/recopie","permalink":"/jc-doc/docs/tutorials/recopie","draft":false,"unlisted":false,"editUrl":"https://github.com/jeedomconnect-team/jc-doc/edit/main/docs/tutorials/recopie.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"recopie","title":"Copie des param\xe9trages","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Connexion HTTP/Websocket","permalink":"/jc-doc/docs/tutorials/connection"},"next":{"title":"M\xe9t\xe9o","permalink":"/jc-doc/docs/tutorials/weather"}}');var l=i(4848),t=i(8453);const r={id:"recopie",title:"Copie des param\xe9trages",sidebar_position:2},o=void 0,a={},c=[{value:"J&#39;aimerais avoir le m\xeame rendu avec la m\xeame disposition sur tous mes appareils, est ce possible ?",id:"jaimerais-avoir-le-m\xeame-rendu-avec-la-m\xeame-disposition-sur-tous-mes-appareils-est-ce-possible-",level:3},{value:"Recopier la configuration",id:"recopier-la-configuration",level:3},{value:"Pourquoi pas les tailles &amp; positions ?",id:"pourquoi-pas-les-tailles--positions-",level:3},{value:"Les 3 t\xe9l\xe9phones de la maison sont strictement IDENTIQUES --&gt; donc m\xeame taille d&#39;\xe9cran, comment faire dans ce cas ?",id:"les-3-t\xe9l\xe9phones-de-la-maison-sont-strictement-identiques----donc-m\xeame-taille-d\xe9cran-comment-faire-dans-ce-cas-",level:3},{value:"Quelles sont les \xe9tapes ?",id:"quelles-sont-les-\xe9tapes-",level:4},{value:"Pourquoi ne pas mettre le script en automatique sur le plugin ?",id:"pourquoi-ne-pas-mettre-le-script-en-automatique-sur-le-plugin-",level:3}];function u(e){const s={admonition:"admonition",br:"br",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h3,{id:"jaimerais-avoir-le-m\xeame-rendu-avec-la-m\xeame-disposition-sur-tous-mes-appareils-est-ce-possible-",children:"J'aimerais avoir le m\xeame rendu avec la m\xeame disposition sur tous mes appareils, est ce possible ?"}),"\n",(0,l.jsxs)(s.p,{children:["La r\xe9ponse est oui, ",(0,l.jsx)(s.strong,{children:"mais"}),"... \xe7a d\xe9pend :) :)"]}),"\n",(0,l.jsx)(s.h3,{id:"recopier-la-configuration",children:"Recopier la configuration"}),"\n",(0,l.jsxs)(s.p,{children:["Aujourd'hui vous avez la possibilit\xe9 de dupliquer la configuration d'un \xe9quipement vers plusieurs autres \xe9quipement, gr\xe2ce au bouton ",(0,l.jsx)(s.code,{children:"Copier vers"})]}),"\n",(0,l.jsx)("img",{src:"../../img/tutorials/recopie.png",width:"70%"}),"\n",(0,l.jsxs)(s.p,{children:["Mais cette action ne fait que recopier les menus, la configuration des \xe9l\xe9ments (widgets/composants), ainsi qu'en option les personnalisations r\xe9alis\xe9es sur ceux-ci.",(0,l.jsx)(s.br,{}),"\n","La taille des \xe9l\xe9ments ainsi que leurs positions (",(0,l.jsx)(s.em,{children:"si vous \xeates en grille avanc\xe9e"}),") ne sont eux pas recopier d'un \xe9quipement \xe0 l'autre."]}),"\n",(0,l.jsx)(s.h3,{id:"pourquoi-pas-les-tailles--positions-",children:"Pourquoi pas les tailles & positions ?"}),"\n",(0,l.jsxs)(s.p,{children:["Simplement parce que si la taille de l'\xe9cran de l'\xe9quipement cible est plus petite que celle de l'\xe9quipement source, alors les positions & les tailles ne peuvent pas s'appliquer !",(0,l.jsx)(s.br,{}),"\n","L'application essaiera de mettre les \xe9l\xe9ments avec la place disponible et se retrouvera coinc\xe9e \xe0 certains moments."]}),"\n",(0,l.jsx)(s.p,{children:"Cette option n'est donc pas propos\xe9e sur le plugin, pour \xe9viter d'avoir des dizaines de posts indiquant \"\xe7a ne fonctionne pas\", alors que c'est tout \xe0 fait normal puisqu'il n'y a pas la place pour :slight_smile:"}),"\n",(0,l.jsx)(s.h3,{id:"les-3-t\xe9l\xe9phones-de-la-maison-sont-strictement-identiques----donc-m\xeame-taille-d\xe9cran-comment-faire-dans-ce-cas-",children:"Les 3 t\xe9l\xe9phones de la maison sont strictement IDENTIQUES --\x3e donc m\xeame taille d'\xe9cran, comment faire dans ce cas ?"}),"\n",(0,l.jsx)(s.p,{children:"Dans le cas o\xf9 l'ensemble de vos t\xe9l\xe9phones (source/cible) aurait la m\xeame taille d'\xe9cran, il est dans ce cas en effet dommage de devoir refaire toute la configuration \xe0 la main."}),"\n",(0,l.jsx)(s.p,{children:"J'ai donc mis en place une op\xe9ration manuelle qui va permettre de gagner un peu de temps et de r\xe9cup\xe9rer la configuration des tailles et positions afin de l'appliquer \xe0 d'autres t\xe9l\xe9phones en quelques clics."}),"\n",(0,l.jsx)(s.p,{children:"Cette m\xe9thode ne fonctionne que si :"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["les t\xe9l\xe9phones ont [u]la m\xeame taille d'\xe9cran[/u] (normalement si vous avez tout lu jusqu'\xe0 l\xe0 vous devez d\xe9j\xe0 l'avoir compris ","\ud83d\ude05",")"]}),"\n",(0,l.jsxs)(s.li,{children:["uniquement si vous utilisez la fonction ",(0,l.jsx)(s.code,{children:"Copier vers"})," [u]juste avant[/u] ! (un ",(0,l.jsx)(s.code,{children:"copier vers"})," que vous avez fait il y a 5 mois ne sert plus \xe0 rien...)"]}),"\n"]}),"\n",(0,l.jsx)(s.h4,{id:"quelles-sont-les-\xe9tapes-",children:"Quelles sont les \xe9tapes ?"}),"\n",(0,l.jsx)(s.admonition,{type:"note",children:(0,l.jsx)(s.p,{children:"Disponible depuis les versions stable 1.8.0 et beta 1.7.5"})}),"\n",(0,l.jsx)(s.p,{children:"Sur l'application JC de l'\xe9quipement source (le \"mod\xe8le\")"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["Allez dans ",(0,l.jsx)(s.code,{children:"menu > pref > Sauvergarder"}),", OK"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Sur le plugin :"}),"\n",(0,l.jsxs)(s.ol,{start:"2",children:["\n",(0,l.jsx)(s.li,{children:"Ouvrez votre \xe9quipement JC source,"}),"\n",(0,l.jsxs)(s.li,{children:["faites ",(0,l.jsx)(s.code,{children:"Copier vers"}),", cochez les \xe9quipements JC cibles, la perso, puis OK"]}),"\n",(0,l.jsx)(s.li,{children:"Allez dans les sc\xe9narios, cr\xe9ez en un nouveau, donnez lui un nom, activez le"}),"\n",(0,l.jsxs)(s.li,{children:["Ajoutez un ",(0,l.jsx)(s.code,{children:"bloc code"})]}),"\n",(0,l.jsx)(s.li,{children:"Collez l'ensemble des \xe9l\xe9ments suivants :"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"require_once dirname(__FILE__) . '/../../plugins/JeedomConnect/core/class/JeedomConnect.class.php';\n\n$apiKeySource = 'azerty12345678';  // A MODIFIER\n$apiKeyCible = 'f206772ff52e6e78d0e2b23,8993poiutr091' ;   // A MODIFIER - plusieurs cl\xe9s peuvent \xeatre renseign\xe9es en les s\xe9parant par une virgule\n\nJeedomConnectUtils::copyGridLayout($apiKeySource , $apiKeyCible );\n"})}),"\n",(0,l.jsxs)(s.ol,{start:"7",children:["\n",(0,l.jsxs)(s.li,{children:["Remplacez l'info ",(0,l.jsx)(s.code,{children:"$apiKeySource"})," par la ",(0,l.jsx)(s.code,{children:"Cl\xe9 API"})," visible sur l'\xe9cran principale de l'\xe9quipement JC source"]}),"\n",(0,l.jsxs)(s.li,{children:["Remplacez l'info ",(0,l.jsx)(s.code,{children:"$apiKeyCible"})," par la  ",(0,l.jsx)(s.code,{children:"Cl\xe9 API"})," visible sur l'\xe9cran principale de l'\xe9quipement JC cible (vous pouvez indiquer l api de plusieurs \xe9quipements cible en une tois, dans ce cas separez chaque cl\xe9 par une virgule)"]}),"\n",(0,l.jsx)(s.li,{children:"Sauvegardez le sc\xe9nario"}),"\n",(0,l.jsx)(s.li,{children:"Ex\xe9cutez le sc\xe9nario  (check des logs si tout est OK)"}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Sur l'application JC de l'\xe9quipement cible :\n11. Allez dans ",(0,l.jsx)(s.code,{children:"menu > pref > Restaurer"}),"\n12. Choisissez la derni\xe8re sauvegarde nomm\xe9e ",(0,l.jsx)(s.code,{children:"GridLayout-xxxx"}),", puis OK"]}),"\n",(0,l.jsx)(s.p,{children:"--\x3e les configuration de taille et position ont \xe9t\xe9 appliqu\xe9es \xe0 ce t\xe9l\xe9phone !"}),"\n",(0,l.jsx)(s.h3,{id:"pourquoi-ne-pas-mettre-le-script-en-automatique-sur-le-plugin-",children:"Pourquoi ne pas mettre le script en automatique sur le plugin ?"}),"\n",(0,l.jsx)(s.p,{children:"Pour la m\xeame raison que pr\xe9c\xe9demment :\n\xe9viter d'avoir des utilisateurs qui clic sur un bouton sans savoir exactement ce qu'il se passe derri\xe8re, et voir des dizaines de posts sur le forum \"\xe7a ne marche pas\", simplement pcq les tailles d'\xe9cran sont diff\xe9rentes :slight_smile:"}),"\n",(0,l.jsx)(s.p,{children:"En rendant l'action manuelle, j'esp\xe8re que l'utilisateur prendra le temps de lire l'ensemble du message pr\xe9sent pour savoir s'il peut ou pas appliquer cette m\xe9thode, et donc ne pas \xeatre \xe9tonn\xe9 du r\xe9sultat"}),"\n",(0,l.jsx)(s.admonition,{type:"info",children:(0,l.jsxs)(s.p,{children:["Du coup ... puisque je sais que certains testeront quand m\xeame cette technique, alors que la cible est diff\xe9rente de la source, ",(0,l.jsx)(s.strong,{children:"aucun support"})," ne sera r\xe9alis\xe9 sur cette op\xe9ration que vous suivrez et mettez en place par vous m\xeame.  \ud83d\ude03"]})}),"\n",(0,l.jsx)(s.p,{children:"Have fun !"})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>o});var n=i(6540);const l={},t=n.createContext(l);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);