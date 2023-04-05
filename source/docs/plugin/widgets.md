---
sidebar_position: 3
---

# Widgets et composants

## Gestion des widgets <a name="gestionWidget"></a>

Il est nécessaire de commencer par créer un widget pour ensuite pouvoir le rattacher à un (ou plusieurs) équipement(s).  
Sur la page principale vous avez accès à l'ensemble des widgets que vous avez créé. Il est possible de les filtrer par type et de les classer (par Pièces, Nom, ou Type).  

Pour créer un widget, cliquez sur "Ajouter un widget", sélectionnez ensuite le type de widget que vous souhaitez créer dans la liste déroulante de gauche puis renseignez les différents champs affichés à l'écran avant de finaliser la création en appuyant sur le bouton "Sauvegarder".  

Quelques éléments sont standard et seront demandés pour l'ensemble des widgets :  

- **Actif** : Le widget sera (ou pas) affiché dans l'application. Pratique si vous voulez par exemple gérer un groupe de lumières, mais ne pas afficher certaines d'entre elles.
- **Pièce** : Sélection de la pièce associée (identique aux objets gérés dans Jeedom)
- **Nom** : Nom du widget
- **Sous-titre** Information complémentaire affichée dans l'application. Le mode personalisé permet de mettre une phrase quelconque, ou un texte dynamique
- **Affichage forcé** : De façon standard, chaque widget (sauf exception) possède 3 types d'affichage : carte, vignette et détail. Les affichages carte et vignettes peuvent être choisis via l'icône en haut à droite dans l'application. L'affichage détail est une page entière affichée quand on click sur le widget. Vous pouvez ici forcer un widget à s'afficher d'une de ces 3 façons.  
   Attention pour le mode détail, le widget doit être seul sur sa page.
- **Sécuriser les actions** : Toutes les commandes de type action peuvent être sécurisées à l'aide de ces trois boutons :  
     ![](/img/screen-secureBtn.png)
   Le premier permet de faire une simple demande de confirmation de l'action.  
   Le second demande une donnée biométrique (empreinte digitale, reconaissance faciale) pour exécuter l'action (sur appareils disposant d'un capteur).  
   Le dernier demandera le mot de passe configuré dans les paramètres de l'équipement JC.  
- **Images** : Les images de l'application sont stockées dans le dossier `plugins/JeedomConnect/data/img/`. Si vous souhaitez ajouter des images persos, utilisez l'assistant, ou bien copiez vos images dans `plugins/JeedomConnect/data/img/user_files/`. Il est conseillé d'utiliser des images PNG en 128x128. Vous pouvez aussi mettre des GIF animés.
- **Images sous conditions** : Vous pouvez dans certains widgets définir une image en fonction des valeurs d'une commande. L'ordre des ces conditions sera prise en compte par l'appli (les plus hautes sont prioritaires).  
- **Ajouter des infos** : vous permet d'ajouter des commandes de type `info` de votre Jeedom et de vous en servir pour les autres champs du formulaire 'Images sous conditions', 'Nom', 'Sous-titre'.

**Textes dynamiques** : Les champs `Nom` et `Sous-titre`, ainsi que les conditions d'affichage d'images peuvent être personnalisés. Ils sont évalués dans l'application en JavaScript. Les raccourcis suivants sont aussi disponibles (liste non exhaustive mais disponible dans la configuration de chaque widget côté plugin) :

- `#room#` : Nom de la pièce associée au widget
- `#status#` ou `#value#` (selon les widgets) : donne la valeur courante de la commande info principale du widget
- `#formatedValue#` (selon les widgets) : valeur formatée en mot de la commande info princpale (par exemple `Allumé`, `Eteint`)
- `#elapsedTime#` : durée depuis laquelle la commande info principale du widget a été modifiée
  Exemple :
  `La lumière de #room# est formatedValue depuis elapsedTime et consomme power W`  
   pourra donner :  
   `La lumière de jardin est allumée depuis 1h12min et consomme 15W`  

<span id="momentjs"></span>

Les fonctions suivantes sont également dispobibles, pour une commande info notée ici #cmd# :

- `time(#cmd#)` : durée depuis laquelle la commande info principale du widget a été modifiée
- `date(#cmd#)` : date et heure de dernière modification de la valeur,, au format "DD MMM - HH:mm"
- `collect(#cmd#)` : date et heure de dernière collecte de la valeur,, au format "DD MMM - HH:mm"
- `average(#cmd#)` : moyenne des valeurs de la commande (#cmd# doit être historisée)
- `min(#cmd#)` : minimum des valeurs de la commande (#cmd# doit être historisée)
- `max(#cmd#)` : maximum des valeurs de la commande (#cmd# doit être historisée)
- `tendance(#cmd#)` : renvoie `up`, `down` ou `stable` selon la tendance des valeurs (#cmd# doit être historisée)
- `modifiedDate(#cmd#)` : donne le timestamp en ms de la dernière modification
- `collectDate(#cmd#)` : donne le timestamp en ms de la dernière collecte

De plus, pour la manipulations des dates, vous avez accès à la bibliothèque `momentjs` ([documentation](https://momentjs.com/docs/#/displaying/)). Exemple :

`` `La tondeuse est {#cmd# > 0 ? "en marche" : "au repos"} depuis le moment(modifiedDate(#cmd#)).format("DD MMMM à HH-mm")` ``
pourra donner :
`La tondeuse est au repos depuis le 30 Septembre à 13:31`
(notez l'usage des backquote qui entourent le texte)

La duplication d'un widget est réalisable dès que celui-ci a été sauvegardé une première fois. Cliquez simplement sur le bouton "Dupliquer", réaliser vos modifications (ou pas), et enregistrer (impérativement) en validant avec le bouton "Sauvegarder".  

La suppression est également possible. Attention toutefois, si un widget est supprimé, alors il disparaitra de l'ensemble des équipements auxquels il avait été ajouté !  

## Widgets disponibles  

|  |  |  |
|------|-----|-----|
|Alarme|Caméra|Climatiseur|
|Favoris|Fenêtre|Générique actions|
|Générique binaire|Générique message|Générique numérique|
|Générique slider|Générique switch|Générique texte|
|Géolocalisation|Groupe d'alarmes|Groupe de fenêtres|
|Groupe de génériques binaires|Groupe de lumières|Groupe de PIR|
|Groupe de portes|Groupe de prises|Groupe de volets|
|Humidité|Liste de choix|Lumière à variation|
|Lumière de couleurs|Lumière On/Off|Luminosité|
|Mode|PIR|Portail coulissant|
|Porte|Prise|Puissance|
|Résumé|Résumé de pièce|Scénario|
|Température|Thermostat|Volet|
|Web View|Historique|Image|