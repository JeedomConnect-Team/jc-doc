---
title: "Alarme"
sidebar_label: "Alarme"
sidebar_position: 1
description: "Gère une alarme"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/alarm_red.webp').default} alt="Alarme" width="80" zoom="false" />

> Gère une alarme
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Actif** | Commande info binaire | Oui | Etat de l'alarme (armée/désarmée)<br/>Type générique : `ALARM_ENABLE_STATE` |
| **Statut** | Commande info binaire |  | Statut de l'alarme (alarme en cours)<br/>Type générique : `ALARM_STATE` |
| **Action activer** | Commande action |  | Commande pour activer l'alarme<br/>Type générique : `ALARM_ARMED` |
| **Action désactiver** | Commande action |  | Commande pour désactiver l'alarme<br/>Type générique : `ALARM_RELEASED` |
| **Info mode** | Commande info texte |  | Etat actuel du mode de l'alarme<br/>Type générique : `ALARM_MODE` |
| **Modes** | Liste de commandes |  | Type générique : `ALARM_SET_MODE` |
| **Mode en ligne** | Case à cocher |  | Affiche les modes sur une seule ligne défilante |
| **Statut immédiat** | Commande info binaire |  | Commande binaire pour le pré-armement / pré-alarme |
| **Délais d'activation** | Texte |  | Durée en minutes avant activation |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |
| **Masquer l'appareil** | Case à cocher |  | [Android 11+] Ne pas remonter ce widget dans les appareils contrôlés par Android |
| **Contrôle depuis l'écran de verrouillage** | Case à cocher |  | [Android 13+] Autorise le contrôle de l'appareil depuis l'écran de verrouillage |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#statusText#` | Statut de l'alarme |

<!-- AUTO:CONFIG:END -->
