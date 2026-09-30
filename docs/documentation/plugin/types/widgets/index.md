---
title: Widgets
sidebar_position: 2
---

## Gestion des widgets {#gestionWidget}

Pour créer un widget, cliquez sur "Ajouter un widget", sélectionnez ensuite le type de widget que vous souhaitez créer dans la liste déroulante de gauche puis renseignez les différents champs affichés à l'écran avant de finaliser la création en appuyant sur le bouton "Sauvegarder".  

Quelques éléments sont standard et seront demandés pour l'ensemble des widgets :  

- **Actif** : Le widget sera (ou pas) affiché dans l'application. Pratique si vous voulez par exemple gérer un groupe de lumières, mais ne pas afficher certaines d'entre elles.
- **Visible sous condition** : Permet d'ajouter une condition pour afficher ou masquer cet élément (uniquement si 'actif' est coché).
- **Pièce** : Sélection de la pièce associée (identique aux objets gérés dans Jeedom)
- **Nom** : Nom du widget, affiché sur le widget
- **Nom d'affichage** : Nom affiché sur les pages de configuration. Si vide, alors le nom est utilisé.
- **Sous-titre** Information complémentaire affichée dans l'application. Le mode personalisé permet de mettre une phrase quelconque, ou un texte dynamique
- **Affichage forcé** : De façon standard, chaque widget (sauf exception) possède 3 types d'affichage : carte, vignette et détail. Les affichages carte et vignettes peuvent être choisis via l'icône en haut à droite dans l'application. L'affichage détail est une page entière affichée quand on clique sur le widget. Vous pouvez ici forcer un widget à s'afficher d'une de ces 3 façons.  
   Attention pour le mode détail, le widget doit être seul sur sa page.
- **Sécuriser les actions** : Toutes les commandes de type action peuvent être sécurisées à l'aide de ces trois boutons :  
     ![](/img/screen-secureBtn.png)
   Le premier permet de faire une simple demande de confirmation de l'action.  
   Le second demande une donnée biométrique (empreinte digitale, reconnaissance faciale) pour exécuter l'action (sur appareils disposant d'un capteur).  
   Le dernier demandera le mot de passe configuré dans les paramètres de l'équipement JC.  
- **Images** : Les images de l'application sont stockées dans le dossier `plugins/JeedomConnect/data/img/`. Si vous souhaitez ajouter des images persos, utilisez l'assistant, ou bien copiez vos images dans `plugins/JeedomConnect/data/img/user_files/`. Il est conseillé d'utiliser des images PNG en 128x128. Vous pouvez aussi mettre des GIF animés.
- **Images sous conditions** : Vous pouvez dans certains widgets définir une image en fonction des valeurs d'une commande. L'ordre de ces conditions sera pris en compte par l'appli (les plus hautes sont prioritaires).  
- **Ajouter des infos** : vous permet d'ajouter des commandes de type `info` de votre Jeedom et de vous en servir pour les autres champs du formulaire 'Images sous conditions', 'Nom', 'Sous-titre'.

### Textes dynamiques {#textes-dynamiques}

Les champs `Nom` et `Sous-titre`, ainsi que les conditions d'affichage d'images peuvent être personnalisés. Ils sont évalués dans l'application en JavaScript. Les raccourcis suivants sont aussi disponibles (liste non exhaustive mais disponible dans la configuration de chaque widget côté plugin) :

- `#room#` : Nom de la pièce associée au widget
- `#status#` ou `#value#` (selon les widgets) : donne la valeur courante de la commande info principale du widget
- `#formatedValue#` (selon les widgets) : valeur formatée en mot de la commande info principale (par exemple `Allumé`, `Eteint`)
- `#elapsedTime#` : durée depuis laquelle la commande info principale du widget a été modifiée
  Exemple :
  `La lumière de #room# est formatedValue depuis elapsedTime et consomme power W`  
   pourra donner :  
   `La lumière de jardin est allumée depuis 1h12min et consomme 15W`  

### Fonctions disponibles {#momentjs}

Les fonctions suivantes sont également disponibles, pour une commande info notée ici #cmd# :

- `time(#cmd#)` : durée depuis laquelle la commande info principale du widget a été modifiée
- `date(#cmd#)` : date et heure de dernière modification de la valeur, au format "DD MMM - HH:mm"
- `collect(#cmd#)` : date et heure de dernière collecte de la valeur, au format "DD MMM - HH:mm"
- `average(#cmd#)` : moyenne des valeurs de la commande (#cmd# doit être historisée)
- `min(#cmd#)` : minimum des valeurs de la commande (#cmd# doit être historisée)
- `max(#cmd#)` : maximum des valeurs de la commande (#cmd# doit être historisée)
- `tendance(#cmd#)` : renvoie `up`, `down` ou `stable` selon la tendance des valeurs (#cmd# doit être historisée)
- `modifiedDate(#cmd#)` : donne le timestamp en ms de la dernière modification
- `collectDate(#cmd#)` : donne le timestamp en ms de la dernière collecte

De plus, pour la manipulation des dates, vous avez accès à la bibliothèque `momentjs` ([documentation](https://momentjs.com/docs/#/displaying/)). Exemple :

`` `La tondeuse est {#cmd# > 0 ? "en marche" : "au repos"} depuis le moment(modifiedDate(#cmd#)).format("DD MMMM à HH-mm")` ``
pourra donner :
`La tondeuse est au repos depuis le 30 Septembre à 13:31`
(notez l'usage des backquote qui entourent le texte)

La duplication d'un widget est réalisable dès que celui-ci a été sauvegardé une première fois. Cliquez simplement sur le bouton "Dupliquer", réalisez vos modifications (ou pas), et enregistrez (impérativement) en validant avec le bouton "Sauvegarder".  

La suppression est également possible. Attention toutefois, si un widget est supprimé, alors il disparaîtra de l'ensemble des équipements auxquels il avait été ajouté !  

## Widgets disponibles

Cliquez sur un widget pour accéder à sa page détaillée (options, commandes attendues, variables).

<!-- AUTO:LIST:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->

### Éclairage et prises

| | Widget | Description |
|:---:|---|---|
| <img src={require('@site/static/img/widgets/light100.webp').default} alt="Lumière On/Off" width="32" zoom="false" /> | [Lumière On/Off](./single-light-switch.md) | Gère une lumière simple à deux états allumé/éteint |
| <img src={require('@site/static/img/widgets/light80.webp').default} alt="Lumière à variation" width="32" zoom="false" /> | [Lumière à variation](./single-light-dim.md) | Gère une lumière à intensité variable |
| <img src={require('@site/static/img/widgets/icon_wheel.webp').default} alt="Lumière de couleurs" width="32" zoom="false" /> | [Lumière de couleurs](./single-light-color.md) | Gère une lumière à couleurs |
| <img src={require('@site/static/img/widgets/groupLight.webp').default} alt="Groupe de lumières" width="32" zoom="false" /> | [Groupe de lumières](./group-light.md) | Gère un groupe de plusieurs widgets lumières |
| <img src={require('@site/static/img/widgets/plug6.webp').default} alt="Prise" width="32" zoom="false" /> | [Prise](./plug.md) | Widget pour gérer une prise électrique |
| <img src={require('@site/static/img/widgets/groupPlug.webp').default} alt="Groupe de prises" width="32" zoom="false" /> | [Groupe de prises](./group-plug.md) | Gère un groupe de plusieurs widgets prises |

### Ouvrants

| | Widget | Description |
|:---:|---|---|
| <img src={require('@site/static/img/widgets/doorOn.webp').default} alt="Porte" width="32" zoom="false" /> | [Porte](./door.md) | Donne l'état ouvert/fermé d'une porte |
| <img src={require('@site/static/img/widgets/groupDoor.webp').default} alt="Groupe de portes" width="32" zoom="false" /> | [Groupe de portes](./group-door.md) | Gère un groupe de plusieurs widgets portes |
| <img src={require('@site/static/img/widgets/windowClosed.webp').default} alt="Fenêtre" width="32" zoom="false" /> | [Fenêtre](./window.md) | Donne l'état ouvert/fermé d'une fenêtre |
| <img src={require('@site/static/img/widgets/groupWindows.webp').default} alt="Groupe de fenêtres" width="32" zoom="false" /> | [Groupe de fenêtres](./group-window.md) | Gère un groupe de plusieurs widgets fenêtres |
| <img src={require('@site/static/img/widgets/shutter50.webp').default} alt="Volet" width="32" zoom="false" /> | [Volet](./shutter.md) | Gère un volet roulant |
| <img src={require('@site/static/img/widgets/groupShutter.webp').default} alt="Groupe de volets" width="32" zoom="false" /> | [Groupe de volets](./group-shutter.md) | Gère un groupe de plusieurs widgets volets |
| <img src={require('@site/static/img/widgets/gateOpen.webp').default} alt="Portail coulissant" width="32" zoom="false" /> | [Portail coulissant](./frontgate.md) | Gère un portail coulissant |

### Capteurs

| | Widget | Description |
|:---:|---|---|
| <img src={require('@site/static/img/widgets/temperature.webp').default} alt="Température" width="32" zoom="false" /> | [Température](./temperature.md) | Affiche la température en °C |
| <img src={require('@site/static/img/widgets/humidity.webp').default} alt="Humidité" width="32" zoom="false" /> | [Humidité](./humidity.md) | Donne l'humidité en % |
| <img src={require('@site/static/img/widgets/brightness.webp').default} alt="Luminosité" width="32" zoom="false" /> | [Luminosité](./brightness.md) | Donne la luminosité en Lux |
| <img src={require('@site/static/img/widgets/power.webp').default} alt="Puissance" width="32" zoom="false" /> | [Puissance](./power.md) | Donne la puissance consomée en W |
| <img src={require('@site/static/img/widgets/pirOff.webp').default} alt="PIR" width="32" zoom="false" /> | [PIR](./pir.md) | Donne l'état d'un capteur de mouvements |
| <img src={require('@site/static/img/widgets/groupPIR.webp').default} alt="Groupe de PIR" width="32" zoom="false" /> | [Groupe de PIR](./group-pir.md) | Gère un groupe de plusieurs capteurs de mouvements |

### Chauffage et climatisation

| | Widget | Description |
|:---:|---|---|
| <img src={require('@site/static/img/widgets/thermostatOff.webp').default} alt="Thermostat" width="32" zoom="false" /> | [Thermostat](./thermostat.md) | Gère un thermostat. Compatible avec le plugin officiel |
| <img src={require('@site/static/img/widgets/cold.webp').default} alt="Climatiseur" width="32" zoom="false" /> | [Climatiseur](./air-con.md) | Gère un climatiseur |

### Sécurité

| | Widget | Description |
|:---:|---|---|
| <img src={require('@site/static/img/widgets/alarm_red.webp').default} alt="Alarme" width="32" zoom="false" /> | [Alarme](./alarm.md) | Gère une alarme |
| <img src={require('@site/static/img/widgets/groupAlarm.webp').default} alt="Groupe d'alarmes" width="32" zoom="false" /> | [Groupe d'alarmes](./group-alarm.md) | Gère un groupe d'alarmes |

### Caméras et multimédia

| | Widget | Description |
|:---:|---|---|
| <img src={require('@site/static/img/widgets/camera.webp').default} alt="Caméra" width="32" zoom="false" /> | [Caméra](./camera.md) | Permet d'afficher une caméra |
| <img src={require('@site/static/img/widgets/frigate.webp').default} alt="Caméra Frigate" width="32" zoom="false" /> | [Caméra Frigate](./frigate.md) | Permet d'afficher le live et l'historique d'une caméra Frigate |
| <img src={require('@site/static/img/widgets/media.webp').default} alt="Lecteur multimedia" width="32" zoom="false" /> | [Lecteur multimedia](./media-player.md) | Gère un équipement multimedia |
| <img src={require('@site/static/img/widgets/image.webp').default} alt="Image" width="32" zoom="false" /> | [Image](./image.md) | Permet d'afficher une image |
| <img src={require('@site/static/img/widgets/web.webp').default} alt="Web View" width="32" zoom="false" /> | [Web View](./webview.md) | Permet d'afficher un design, le dashboard ou n'importe quelle page Web. Astuce : Pour un affichage direct dans un menu, configurez l'affichage forcé sur Détail (ce widget doit être unique dans le menu) |

### Génériques

| | Widget | Description |
|:---:|---|---|
| <img src={require('@site/static/img/widgets/generic-binary.webp').default} alt="Générique binaire" width="32" zoom="false" /> | [Générique binaire](./generic-info-binary.md) | Widget générique pour afficher les infos d'une commande binaire |
| <img src={require('@site/static/img/widgets/groupBinary.webp').default} alt="Groupe de génériques binaires" width="32" zoom="false" /> | [Groupe de génériques binaires](./group-generic-info-binary.md) | Gère un groupe de plusieurs widgets générique info binaire |
| <img src={require('@site/static/img/widgets/generic-numeric.webp').default} alt="Générique numérique" width="32" zoom="false" /> | [Générique numérique](./generic-info-numeric.md) | Widget générique pour afficher les infos d'une commande info numérique |
| <img src={require('@site/static/img/widgets/generic-text.webp').default} alt="Générique texte" width="32" zoom="false" /> | [Générique texte](./generic-info-string.md) | Widget générique pour afficher les infos d'une commande info texte (sous-type string) |
| <img src={require('@site/static/img/widgets/switch.webp').default} alt="Générique switch" width="32" zoom="false" /> | [Générique switch](./generic-switch.md) | Widget générique pour un switch (commande ON/OFF) |
| <img src={require('@site/static/img/widgets/meter.webp').default} alt="Générique slider" width="32" zoom="false" /> | [Générique slider](./generic-slider.md) | Gère un slider |
| <img src={require('@site/static/img/widgets/powerButton.webp').default} alt="Générique actions" width="32" zoom="false" /> | [Générique actions](./generic-action-other.md) | Permet des lancer des commandes action (de tous types) |
| <img src={require('@site/static/img/widgets/generic-message.webp').default} alt="Générique message" width="32" zoom="false" /> | [Générique message](./generic-message.md) | Permet l'utilisation d'une commande de type message |
| <img src={require('@site/static/img/widgets/choices-list.webp').default} alt="Liste de choix" width="32" zoom="false" /> | [Liste de choix](./choices-list.md) | Gère une liste |
| <img src={require('@site/static/img/widgets/mode.webp').default} alt="Mode" width="32" zoom="false" /> | [Mode](./mode.md) | Affiche une liste de modes et permet de les sélectionner |
| <img src={require('@site/static/img/widgets/events.webp').default} alt="Evénement" width="32" zoom="false" /> | [Evénement](./event.md) | Permet de réaliser la mise à jour d'une commande info |

### Historiques

| | Widget | Description |
|:---:|---|---|
| <img src={require('@site/static/img/widgets/history.webp').default} alt="Historique" width="32" zoom="false" /> | [Historique](./history.md) | Permet d'afficher un historique de commande |
| <img src={require('@site/static/img/widgets/groupHistory.webp').default} alt="Groupe d'historiques" width="32" zoom="false" /> | [Groupe d'historiques](./group-history.md) | Permet d'afficher des historiques de commandes |

### Localisation

| | Widget | Description |
|:---:|---|---|
| <img src={require('@site/static/img/widgets/geo.webp').default} alt="Géolocalisation" width="32" zoom="false" /> | [Géolocalisation](./geoloc.md) | Permet d'afficher un point de localisation |
| <img src={require('@site/static/img/widgets/groupGeo.webp').default} alt="Groupe de géolocalisation" width="32" zoom="false" /> | [Groupe de géolocalisation](./group-geoloc.md) | Permet d'afficher plusieurs géolocalisation sur une seule et même carte |

### Résumés et favoris

| | Widget | Description |
|:---:|---|---|
| <img src={require('@site/static/img/widgets/summary.webp').default} alt="Résumé" width="32" zoom="false" /> | [Résumé](./widgets-summary.md) | Affiche un résumé de plusieurs widgets |
| <img src={require('@site/static/img/widgets/room_summary.webp').default} alt="Résumé de pièce" width="32" zoom="false" /> | [Résumé de pièce](./room.md) | Affiche le résumé d'une pièce associée à un objet Jeedom |
| <img src={require('@site/static/img/widgets/favorites.webp').default} alt="Favoris" width="32" zoom="false" /> | [Favoris](./favorites.md) | Affiche des widgets favoris |

### Autres

| | Widget | Description |
|:---:|---|---|
| <img src={require('@site/static/img/widgets/scenario.webp').default} alt="Scénario" width="32" zoom="false" /> | [Scénario](./scenario.md) | Gestion d'un scénario |
| <img src={require('@site/static/img/widgets/droid.webp').default} alt="Lanceur d'application" width="32" zoom="false" /> | [Lanceur d'application](./appLauncher.md) | Permet de lancer une application. !! Uniquement compatible Android !! |

<!-- AUTO:LIST:END -->
