---
sidebar_position: 8
---

# Voiture

Jeedom Connect s'affiche sur l'écran de votre voiture, pour piloter votre maison en roulant : ouvrir le portail en arrivant, lancer un scénario, vérifier que les volets sont fermés, recevoir vos notifications...

Deux cas sont possibles :

- **Android Auto** : votre téléphone Android est relié à la voiture (câble ou sans fil) et s'affiche sur son écran. C'est l'application Jeedom Connect du téléphone qui fonctionne.
- **Voitures avec Android intégré** (*Android Automotive*, « Google intégré » : Volvo, Polestar, Renault, Ford, GM...) : la voiture a son propre système Android et son propre Play Store. Elle installe sa propre application Jeedom Connect, qui fonctionne même sans téléphone.

Dans les deux cas, l'affichage et les réglages sont les mêmes.

:::info Prérequis
- Plugin et application en version **1.30.2** ou plus récente : mettez à jour les deux.
- Une **adresse externe** de Jeedom accessible depuis internet (dans la configuration du plugin) : la voiture n'est pas sur votre réseau local.
:::

:::note CarPlay
L'intégration à Apple CarPlay n'est pas encore disponible.
:::

## Ce qui s'affiche dans la voiture

Pour des raisons de sécurité, les voitures n'acceptent que des écrans simples et normalisés : des tuiles, des listes, des boutons. Jeedom Connect y affiche **les widgets que vous avez choisis comme favoris**, avec leur état en temps réel (l'état change sur l'écran de la voiture dès qu'il change dans Jeedom).

Ce que fait un appui sur une tuile dépend du type de widget :

| Widget | Tuile | Appui |
|---|---|---|
| Lumière, Prise, Générique switch, composant Switch | ON / OFF | Allume ou éteint |
| Lumière à variation / de couleurs | ON / OFF et luminosité (« ON · 60 % ») | Allume ou éteint |
| Scénario, Générique actions (une action) | – | Lance le scénario / l'action |
| Générique actions (plusieurs actions) | – | Liste des actions |
| Portail | Ouvert / Fermé | Ouvre ou ferme si l'état est connu, sinon choix Ouvrir / Partiel / Fermer |
| Volet | Position (« 45 % ») ou Ouvert / Fermé | Monter / Stop / Descendre, et 0 / 50 / 100 % si le volet a une commande de position |
| Mode, Liste de choix | Mode / choix actif | Liste des modes / choix, l'actif coché |
| Alarme | Armée / Désarmée ou mode actif | Armer / désarmer, ou liste des modes + Désarmer |
| Thermostat | Température → consigne · mode | Consigne − / + et modes |
| Climatiseur | ON / OFF · consigne · mode | Marche / Arrêt, consigne − / + et modes |
| Générique slider, composant Slider | Valeur | − / + et valeurs min / milieu / max |
| Lecteur multimédia | Titre – Artiste | Lecture / Pause, Précédent / Suivant, Volume − / +, Muet, Marche / Arrêt |
| Groupes (lumières, prises, volets, portes, fenêtres...) | Nombre allumés / ouverts (« 2/5 ») | Ouvre le groupe : Tout allumer / Tout éteindre (ou Tout monter / Tout descendre), puis chaque élément |
| Résumé, Favoris | Nombre d'éléments | Ouvre la liste de ses widgets |
| Porte, Fenêtre, PIR, Générique binaire, Température, Humidité, Luminosité, Puissance, Générique numérique / texte, Événement | Valeur / état | Affichage seul |

L'icône de la tuile est celle du widget dans l'application, y compris les images conditionnelles et vos images personnalisées.

**Non affichables en voiture** : Caméra, Caméra Frigate, Image, Web View, Historique (pas de vidéo, de page web ni de graphique en voiture), Générique message (il faudrait taper du texte), Lanceur d'application, JC, Géolocalisation, Résumé de pièce.

### Confirmation et code

- Une action qui demande une **confirmation** dans l'application la demande aussi sur l'écran de la voiture.
- Une action protégée par un **code** n'est pas disponible en voiture (pas de clavier en roulant). Si toutes les actions d'un widget sont protégées, sa tuile n'affiche que l'état.

## Configuration

La configuration est commune à toutes les voitures de l'équipement. Elle se fait au choix :

- dans l'application : `Préférences` → `Voiture` ;
- dans le plugin : page de l'équipement → `Voiture` → `Configurer`.

Les deux modifient les mêmes réglages, et chaque changement est pris en compte dans la voiture en quelques secondes.

### Favoris

Choisissez les widgets à afficher (`+` pour en ajouter plusieurs d'un coup) et leur ordre (glisser-déposer). Chaque favori indique ce que fait un appui en voiture.

Chaque voiture limite le nombre de tuiles par écran (6 au minimum). Au-delà, la dernière tuile devient « Plus » et ouvre la suite : **placez les plus utiles en premier**.

### Navigation

Comment les favoris sont organisés dans la voiture :

- **Aucune** : tous les favoris sur la première page ;
- **Par pièce** : les pièces qui contiennent au moins un favori, puis leurs favoris ;
- **Par type** : Lumières, Switch, Volets, Ouvertures, Sécurité, Climat, Actions... puis les favoris de ce type ;
- **Selon les menus de l'appli** : vos menus bas, puis menus haut, comme dans l'application.

Les favoris qui ne sont dans aucune pièce / aucun menu sont regroupés dans « Autres ».

## Android Auto

1. Installez Jeedom Connect **depuis le Play Store** (une application installée par un autre moyen n'est pas proposée par Android Auto).
2. Connectez-vous à Jeedom dans l'application du téléphone et choisissez vos favoris.
3. Branchez le téléphone à la voiture : Jeedom Connect apparaît dans la liste des applications d'Android Auto.

Aucune connexion n'est à faire dans la voiture : elle utilise l'équipement du téléphone.

## Voitures avec Android intégré

1. Dans la voiture, installez **Jeedom Connect** depuis son Play Store et ouvrez-le.
2. Appuyez sur **Se connecter** : un QR code s'affiche.
3. Scannez-le avec le téléphone sur lequel Jeedom Connect est installé, avec l'appareil photo ou depuis l'application (`Préférences` → `Voiture` → `Associer une voiture`), puis confirmez l'association.

La voiture se connecte avec **l'équipement du téléphone** : mêmes favoris, même navigation. Les identifiants passent du téléphone à la voiture chiffrés de bout en bout, par un service de rendez-vous de Jeedom Connect qui ne peut pas les lire et ne les conserve pas.

Sans téléphone, le bouton **Connexion manuelle** (voiture à l'arrêt) permet de saisir l'adresse externe de Jeedom, votre identifiant, votre mot de passe (et le code de double authentification si besoin), puis de choisir l'équipement.

Pour déconnecter la voiture : icône de compte en haut à droite de l'écran d'accueil de Jeedom Connect.

## Notifications dans la voiture

Une notification peut aussi s'afficher dans la voiture : activez l'option **Dans la voiture** de la notification, dans l'application (`Préférences` → `Notifications`, ou `Préférences` → `Voiture` → `Notifications dans la voiture`) ou dans le plugin (configuration des notifications de l'équipement). Voir [Notifications](./notifications).

- **Android Auto** : la notification du téléphone s'affiche sur l'écran de la voiture, avec ses boutons (2 au maximum). Un appui sur la notification ouvre Jeedom Connect dans la voiture.
- **Voitures avec Android intégré** : la voiture reçoit la notification elle-même, même sans téléphone (elle demande l'autorisation d'afficher des notifications au premier lancement). Elle apparaît dans le panneau des notifications de la voiture, avec ses boutons (commandes, scénarios) et, pour un Ask, un bouton par réponse possible.

:::note
Sur les voitures avec Android intégré, le système n'affiche par-dessus l'écran en cours que les appels, la navigation et les messageries : les notifications de Jeedom Connect vont dans le panneau des notifications.
:::

## Bon à savoir

- En roulant, la voiture limite la fréquence de rafraîchissement de l'écran : un état qui change souvent (puissance, température...) peut s'afficher avec quelques secondes de retard. L'état d'un appareil que vous venez de commander, lui, s'affiche immédiatement, et un message confirme chaque commande envoyée.
- Le nombre d'écrans enchaînés est limité par la voiture : préférez une navigation peu profonde.
- **« Impossible de joindre Jeedom »** : vérifiez que le plugin est à jour et que l'adresse externe de Jeedom est accessible depuis internet.
