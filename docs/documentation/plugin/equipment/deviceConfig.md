---
sidebar_position: 3
---

# Configuration de l'appareil

La configuration du contenu de l'application se passe dans l'assistant.

Le changement de configuration a lieu à chaque click sur le bouton `Sauvegarder`. Si l'application est démarrée, elle est automatiquement transférée. Vous pouvez recharger la configuration dans l'appli en appuyant sur le logo du 'menu hamburger'.  
Si vous pensez avoir une erreur avant d'avoir sauvegardé (par exemple supprimé un élément par erreur), actualisez simplement la page.

:::danger
Le bouton `Réinitialiser` (suivi de `Sauvegarder`) remet toute la configuration à zéro, attention donc !
:::

## Menu du bas

![](/img/plugin/assistantBottom.png)

Cette partie est assez explicite, elle permet de configurer les onglets qui apparaissent en bas de l'écran. Vous avez la possibilité de choisir vos icônes parmis tout un panel : celles de Jeedom, celles proposées par Material Design, ou encore sur Font Awesome(un moteur de recherche est intégré).  
La configuration de cette partie est optionnelle, et n'est à réaliser que si vous souhaitez utiliser ces onglets.

## Menu du haut

 ![](/img/plugin/assistantTop.png)

 Cette partie est également explicite. Un menu sous forme d'onglets en haut de l'écran que vous pouvez 'slider'. Egalement facultatif.

## Pièces

 Chaque widget peut être associé à une pièce à ajouter dans cette partie.  Chaque pièce correspond à un objet Jeedom.  

## Résumés

 Vous avez la possibilité de choisir les résumés Jeedom que vous souhaitez rappatrier sur l'application JeedomConnect.  
 Depuis l'onglet 'Résumé', vous pourrez :

- Ajouter un résumé, après l'avoir sélectionné dans la liste déroulante  
- Importer l'ensemble des résumés existants (le bouton est caché si vous avez déjà tous les résumés dans l'application)

<img src="/img/JC_assistant_summary.png" width="50%" />  

Il vous est ensuite possible de cliquer sur chaque résumé pour personnaliser les icônes et leurs conditions d'affichage.  
<img src="/img/JC_summary_conditions.png" width="50%" />  

Deux variables sont disponibles : `#value#` et `#total#` :  

- `#value#` correspond à la donnée du résumé remontée par Jeedom (nombre de volets ouverts par exemple)
- `#total#` correspond au nombre total de commandes rattachées à ce résumé (nombre de volets total sur le résumé par exemple)

## Widgets / Composants

 ![](/img/plugin/assistantWidget.png)
 Définissez d'abord l'emplacement où placer le widget/composant : sur quel menu / sous-menu que vous voulez le configurer.
 Vous pouvez ensuite filtrer sur le type de widget/composant que vous allez ajouter (ne sont proposés que les types de widget déjà créés).  
 Sélectionnez le widget ou composant que vous souhaitez ajouter, puis enfin cliquez sur le **Ajouter cet élément** pour l'ajouter à votre configuration.  

- **Ajouter un groupe** : Vous pouvez ranger vos widgets dans un menu dépliable (type "acordéon").  

  <img src="/img/plugin/assistantAddGroup.png" width="25%" />  

  - **Actif** : Le groupe sera (ne sera pas) affiché dans l'application.
  - **Développé par défaut** : Le comportement par défaut (plié / déplié) du menu.  
  
 Différentes actions sur possible sur chaque élément :  
 <img src="/img/btn-action-widget.png" width="20%" />  

- les flèches bleues permettent de monter ou descendre le widget par rapport aux autre widgets sur la même page. Elles permettent aussi de faire entrer ou sortir un widget dans un groupe  
- le moins rouge permet d'enlever le widget de la page (ça ne supprime pas le widget dans Jeedom)
- la flèche verte (vers la droite) permet de déplacer le widget sur une autre page

## Fond d'écran

 ![](/img/plugin/assistantBackground.png)

 Dans cette section, vous pouvez configurer l'arrière plan général de l'application. Plus d'options sont disponibles dans [l'application](/docs/documentation/app/preferences/interface/pref-background).
