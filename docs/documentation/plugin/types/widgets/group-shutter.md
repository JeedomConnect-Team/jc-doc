---
title: "Groupe de volets"
sidebar_label: "Groupe de volets"
sidebar_position: 25
description: "Gère un groupe de plusieurs widgets volets"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/groupShutter.webp').default} alt="Groupe de volets" width="80" zoom="false" />

> Gère un groupe de plusieurs widgets volets
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Widgets** | Liste de widgets | Oui | Liste des volets à gérer<br/>Widgets acceptés : [Volet](./shutter.md) |
| **Sécuriser action Ouvrir** | Sécurisation |  |  |
| **Sécuriser action Fermer** | Sécurisation |  |  |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#openNb#` | Nombre de volets ouvertes |
| `#closedNb#` | Nombre de volets fermées |
| `#total#` | Nombre de volets |

<!-- AUTO:CONFIG:END -->
