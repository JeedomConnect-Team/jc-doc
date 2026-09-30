---
title: "Lumière à variation"
sidebar_label: "Lumière à variation"
sidebar_position: 32
description: "Gère une lumière à intensité variable"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/light80.webp').default} alt="Lumière à variation" width="80" zoom="false" />

> Gère une lumière à intensité variable
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Action ON** | Commande action | Oui | Commande ON<br/>Type générique : `LIGHT_ON` |
| **Action OFF** | Commande action | Oui | Commande OFF<br/>Type générique : `LIGHT_OFF` |
| **Statut** | Commande info binaire |  | Etat de la lumière (binaire). Si non précisé, la valeur de l'intensité sera prise en compte<br/>Type générique : `LIGHT_STATE_BOOL` |
| **Intensité** | Commande action curseur | Oui | Type générique : `LIGHT_SLIDER` |
| **Info Intensité** | Commande info numérique | Oui | Intensité de la lumière<br/>Type générique : `LIGHT_STATE` |
| **Température blanc** | Commande action curseur |  | Type générique : `LIGHT_SET_COLOR_TEMP` |
| **Info Temp. blanc** | Commande info numérique |  | Type générique : `LIGHT_COLOR_TEMP` |
| **Puissance** | Commande info numérique |  | Puissance en watts<br/>Type générique : `POWER` |
| **Arrière plan automatique** | Case à cocher |  | Affiche un arrière plan automatique en fonction de l'état de la lumière |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |
| **Masquer l'appareil** | Case à cocher |  | [Android 11+] Ne pas remonter ce widget dans les appareils contrôlés par Android |
| **Contrôle depuis l'écran de verrouillage** | Case à cocher |  | [Android 13+] Autorise le contrôle de l'appareil depuis l'écran de verrouillage |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#statusText#` | Statut 'Eteint' ou 'Allumé' |
| `#value#` | Valeur de la commande de statut |

<!-- AUTO:CONFIG:END -->
