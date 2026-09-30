---
title: "Prise"
sidebar_label: "Prise"
sidebar_position: 40
description: "Widget pour gérer une prise électrique"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/plug6.webp').default} alt="Prise" width="80" zoom="false" />

> Widget pour gérer une prise électrique
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Allumer** | Commande action | Oui | Type générique : `ENERGY_ON` |
| **Eteindre** | Commande action | Oui | Type générique : `ENERGY_OFF` |
| **Statut** | Commande info binaire | Oui | Etat (Allumé/Eteint) de la prise<br/>Type générique : `ENERGY_STATE` |
| **Puissance** | Commande info numérique |  | Puissance en watts<br/>Type générique : `POWER` |
| **Afficher historique** | Case à cocher |  | Affiche l'historique de la puissance en arrière-plan du widget |
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
