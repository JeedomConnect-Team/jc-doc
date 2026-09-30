---
title: "Caméra"
sidebar_label: "Caméra"
sidebar_position: 2
description: "Permet d'afficher une caméra"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/camera.webp').default} alt="Caméra" width="80" zoom="false" />

> Permet d'afficher une caméra
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Nom d'utilisateur** | Texte |  | Permet d'utiliser le tag #username# dans l'url de flux et snapshot |
| **Mot de passe** | Texte |  | Permet d'utiliser le tag #password# dans l'url de flux et snapshot |
| **URL flux** | Texte |  |  |
| **Commande URL flux** | Commande info texte |  | Commande info contenant l'URL du flux<br/>Type générique : `CAMERA_URL` |
| **Flux vidéo uniquement sur le LAN** | Case à cocher |  |  |
| **Flux vidéo optimisé (go2rtc)** | Case à cocher |  | Diffusion fluide en LAN et hors LAN via le pont go2rtc du plugin, à la place du flux RTSP/Snapshot classique. |
| **Son automatique à l'ouverture** | Case à cocher |  | Démarre le son dès l'ouverture du widget, sans action de l'utilisateur. Sinon, muet par défaut (activable via le bouton son). |
| **Contrôles toujours visibles** | Case à cocher |  | Affiche les boutons de contrôle sur une ligne permanente au-dessus de la vidéo, au lieu des barres affichées au toucher sur l'image. Les barres restent utilisées en plein écran. |
| **Mise en cache réseau (ms)** | Texte |  | 300ms par défaut. Augmenter en cas de saccades sur réseau instable, réduire pour moins de latence |
| **Désactiver le décodage matériel (iOS)** | Case à cocher |  | À activer uniquement si l'image reste noire sur cette caméra. Bascule sur un décodage logiciel, plus gourmand en CPU |
| **Authentification Snapshot** | Liste de choix |  | Définit la méthode d'authentification, si nécessaire<br/>Choix : Aucune (par défaut), Basic, Digest |
| **URL SnapShot** | Texte |  |  |
| **Commande Url Snapshot** | Commande info texte |  | Commande info contenant l'URL du snapshot |
| **Rafraîchissement** | Texte |  | Durée en seconde entre deux images (3s par défaut) |
| **Qualité SnapShot (%)** | Texte |  | 70% par défaut |
| **Taille SnapShot (%)** | Texte |  | 100% par défaut (pas de redimensionnement) |
| **Ratio** | Texte |  | Forcer le ratio (largeur/longueur). Exemple: 0.75 |
| **Enregistrer** | Commande action |  | Commande action pour démarrer un enregistrement<br/>Type générique : `CAMERA_RECORD` |
| **Arrêter Enregistrement** | Commande action |  | Commande action pour arrêter un enregistrement<br/>Type générique : `CAMERA_STOP` |
| **Info Enregistrement** | Commande info binaire |  | Commande info d'enregistrement<br/>Type générique : `CAMERA_RECORD_STATE` |
| **Instantané** | Commande action |  | Commande action pour enregistrer un instantané<br/>Type générique : `CAMERA_TAKE` |
| **Dossier des enregistrements** | Texte |  | par exemple /plugins/camera/data/records/camID |
| **Direction haut** | Commande action |  | Type générique : `CAMERA_UP` |
| **Direction bas** | Commande action |  | Type générique : `CAMERA_DOWN` |
| **Direction gauche** | Commande action |  | Type générique : `CAMERA_LEFT` |
| **Direction droite** | Commande action |  | Type générique : `CAMERA_RIGHT` |
| **Afficher sur carte** | Case à cocher |  | Affichage du lecteur sur les cartes |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |
| **Masquer l'appareil** | Case à cocher |  | [Android 11+] Ne pas remonter ce widget dans les appareils contrôlés par Android |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |

<!-- AUTO:CONFIG:END -->
