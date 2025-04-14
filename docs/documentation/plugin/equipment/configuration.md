---
sidebar_position: 2
draft: true
---

# Configuration

La page de configuration d'un équipement est décomposée en plusieurs parties :

![equipment](/img/eqConfig.png)

### La partie Général

Cette partie reprend les éléments standard trouvé sur n'importe quel équipement Jeedom :  

- le nom de l'équipement
- l'objet parent dans lequel l'équipement doit être placé
- la(les) catégorie(s) à rattacher
- les options de visibilité (sur le dashboard Jeedom) et d'activation

### La partie Paramètres

Cette partie est propre à JC et c'est ici que nous pouvons indiquer les premiers éléments de configurations de cette équipement.  

- Activer la connexion par Websocket : permet d'avoir une connexion bidirectionnel, mais nécessite [une configuration particulière](/docs/tutorials/connection) (*incompatible avec le polling*)
- Activer le polling : lorsque les DNS Jeedom sont utilisés comme moyen de connexion, il est préférable d'activer cette option, afin que le rafraichissement des données s'effectue correctement (*incompatible avec le websocket*)
- Utilisateur : spécifie l'utilisateur Jeedom qui sera "propriétaire" de cet équipement, et donc quels droits, niveau exécution des commandes, sont possibles. Ce sont également les informations d'authentification (user/mot de passe) de cet utilisateur qui seront demandées lors de la connexion.
- Mot de passe : définit le mot de passe à demander pour toutes les actions sur les commandes verrouillées par mot de passe
- Assistant : c'est via ce bouton que l'on configure les pages, widgets, composants, ..., à ajouter sur l'équipement
- Configuration de l'équipement : permet d'exporter importer ou recopier une configuration existante
- Appareil enregistré : indique le nom de l'appareil (mobile, tablette, ... ) lié à cet équipement
- Notification : c'est via ce bouton que l'on configure les notifications de cet équipement : les canaux, les criticités, ...
- Accès scénarios : active le menu `Scénario` sur l'application
- Accès à la time : active le menu `Timeline` sur l'application
- Accès interface we : active le menu `Interface web` sur l'application
- Masquer la batterie sur page Equipement Jeedom : désactive l'affichage du niveau de la batterie de cet équipement sur la page Jeedom dédiée à la surveillance des équipements sur batterie
- Commande info Volume : précise quelle(s) informations de volume doi(ven)t être conservée(s) dans la commande correspondante

### La partie Informations Position

Cette partie est propre à tout ce qui a trait à la géolocalisation.  

- Ajouter données à la position : permet d'ajouter les informations `altitude, activité et batterie` en plus des éléments standard `latitude,longitude` dans la commande `Position`
- Afficher la position sur la carte globale : ajoute une pastille concernant la position de cet équiepement sur la carte `Localisation` disponible sur la page principale du plugin
- Personnaliser le repère : modifie la pastille par défaut pour rendre plus visible cet équipement sur la carte
- Personnaliser les Géofencing : permet de choisir/ajouter des zones de géofence à appliquer sur cette appareil et à créer les commandes correspondantes

### La partie Informations

- Clé API : identifiant uniquement de l'équipement, utilisé dans les échanges application `<=>` plugin
- QR Code : vous permet de vous authentifier sur l'application sans avoir besoin de saisir la moindre info !

:::tips
Sauvegardez l'image sur votre téléphone, afin de pouvoir vous en servir à n'importe quel moment !
:::

### La partie Partager le fichier de configuration

- Debug configuration : génère votre fichier de configuration, qui pourrait être demandé par le développeur pour investiguer sur un problème
