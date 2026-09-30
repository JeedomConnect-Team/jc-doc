---
title: "PIR"
sidebar_label: "PIR"
sidebar_position: 37
description: "Donne l'état d'un capteur de mouvements"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/pirOff.webp').default} alt="PIR" width="80" zoom="false" />

> Donne l'état d'un capteur de mouvements
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Statut** | Commande info binaire | Oui | Etat du capteur<br/>Type générique : `PRESENCE` |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |
| **Masquer l'appareil** | Case à cocher |  | [Android 11+] Ne pas remonter ce widget dans les appareils contrôlés par Android |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#value#` | Valeur de la commande de statut |

<!-- AUTO:CONFIG:END -->
