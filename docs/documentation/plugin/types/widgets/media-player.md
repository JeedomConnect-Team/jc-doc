---
title: "Lecteur multimedia"
sidebar_label: "Lecteur multimedia"
sidebar_position: 30
description: "Gère un équipement multimedia"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/media.webp').default} alt="Lecteur multimedia" width="80" zoom="false" />

> Gère un équipement multimedia
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Action ON** | Commande action |  | Commande ON<br/>Type générique : `MEDIA_ON` |
| **Action OFF** | Commande action |  | Commande OFF<br/>Type générique : `MEDIA_OFF` |
| **Statut** | Commande info binaire |  | Etat du lecteur (binaire) |
| **Lecture** | Commande action |  | Type générique : `MEDIA_RESUME` |
| **Pause** | Commande action |  | Type générique : `MEDIA_PAUSE` |
| **Info lecture** | Commande info binaire |  | Etat de la lecture en cours (binaire)<br/>Type générique : `MEDIA_STATE` |
| **Suivant** | Commande action |  | Type générique : `MEDIA_NEXT` |
| **Précédent** | Commande action |  | Type générique : `MEDIA_PREVIOUS` |
| **Stop** | Commande action |  | Type générique : `MEDIA_STOP` |
| **Muet** | Commande action |  | Type générique : `MEDIA_MUTE` |
| **Non muet** | Commande action |  | Type générique : `MEDIA_UNMUTE` |
| **Etat muet** | Commande info binaire |  |  |
| **Volume** | Commande action curseur |  | Type générique : `SET_VOLUME` |
| **Etat volume** | Commande info numérique |  | Type générique : `VOLUME` |
| **Aléatoire** | Commande action |  |  |
| **Non aléatoire** | Commande action |  |  |
| **Etat aléatoire** | Commande info binaire |  |  |
| **Répéter** | Commande action |  |  |
| **Non répéter** | Commande action |  |  |
| **Etat répéter** | Commande info binaire |  |  |
| **Artiste** | Commande info texte |  | Type générique : `MEDIA_ARTIST` |
| **Album** | Commande info texte |  | Type générique : `MEDIA_ALBUM` |
| **Titre** | Commande info texte |  | Type générique : `MEDIA_TITLE` |
| **Jaquette** | Commande info texte |  |  |
| **Jaquette** | Texte |  |  |
| **Info action** | Commande info texte |  | Etat actuel de l'action en cours |
| **Actions** | Liste de commandes |  | Liste d'actions supplémentaires (playlist, synchro player...) |
| **Arrière plan automatique** | Case à cocher |  | Affiche un arrière plan automatique en fonction de l'état du lecteur |
| **Vue classique** | Case à cocher |  | Utilise la vue classique Jeedom Connect |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#statusText#` | Statut 'Eteint' ou 'Allumé' |

<!-- AUTO:CONFIG:END -->
