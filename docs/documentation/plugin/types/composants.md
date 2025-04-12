---
title: Composants
sidebar_position: 3
---

## Gestion des composants

Les « Composants » sont les cousins germain du « Widget ».

Il s'agit d'élément « brut » unitaire très simple permettant (ou non) de réaliser une action, sans intelligence ni artifice (pas d'images sous conditions, de vue détaillée, d'habillage, …).

Aujourd'hui 7 types de composants existent : Séparateur, Texte, Bouton, Switch, Slider, Jauge et Image. Ils peuvent être ajoutés dans chaque page, en plus des widgets et des groupes, ainsi qu'à l'intérieur d'un groupe.

<img alt="componant" src="../../../../../../img/composants.jpeg" width="20%" />

Le « composant bouton » vous permet d'exécuter un ensemble de commande et/ou de scénario à la chaine en cliquant simplement sur le bouton !

Il devient par exemple très facile de créer une télécommande, ou de mettre une image (d'un module par exemple) sur laquelle on peut placer n'importe quelle(s) information(s) à différents endroits, …

Les possibilités de personnalisation deviennent immense ! Vous pouvez dorénavant faire exactement ce que vous désirez, comme vous le désirez sans qu'on vous impose un style, une mise en page, un emplacement, une marge trop grande/petite, …

Voici un exemple de ce que vous pourriez faire pour avoir votre propre style de thermomètre :
<img alt="componant" src="../../../../../../img/ex_composant_temp.jpg" width="20%" />

et voici comment l'obtenir avec la superposition de 5 composants :
<img alt="componant" src="../../../../../../img/ex_composant_config.jpg" width="20%" />

## Options du composant

Tout comme le widget, quelques éléments de configuration sont demandés en standard sur l'ensemble des composants

- **Actif** : Le widget sera (ou pas) affiché dans l'application. Pratique si vous voulez par exemple gérer un groupe de lumières, mais ne pas afficher certaines d'entre elles.
- **Visible sous condition** : Permet d'ajouter une condition pour afficher ou masquer cet élément (uniquement si 'actif' est coché).
- **Pièce** : Sélection de la pièce associée (identique aux objets gérés dans Jeedom)
- **Nom** : Nom du widget, affiché sur le widget
- **Nom d'affichage** : Nom affiché sur les pages de configuration. Si vide, alors le nom est utilisé.
