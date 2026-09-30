---
title: "Générique slider"
sidebar_label: "Générique slider"
sidebar_position: 12
description: "Gère un slider"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/meter.webp').default} alt="Générique slider" width="80" zoom="false" />

> Gère un slider
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Action** | Commande action curseur | Oui |  |
| **Statut** | Commande info numérique | Oui | Etat du slider (numérique) |
| **Heure au format Jeedom** | Case à cocher |  | Sélecteur d'heure à l'aide d'un slider prenant des valeurs 0--2359 |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |
| **Masquer l'appareil** | Case à cocher |  | [Android 11+] Ne pas remonter ce widget dans les appareils contrôlés par Android |
| **Contrôle depuis l'écran de verrouillage** | Case à cocher |  | [Android 13+] Autorise le contrôle de l'appareil depuis l'écran de verrouillage |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#value#` | Valeur de la commande de statut |

<!-- AUTO:CONFIG:END -->
