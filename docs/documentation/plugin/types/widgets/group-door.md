---
title: "Groupe de portes"
sidebar_label: "Groupe de portes"
sidebar_position: 23
description: "Gère un groupe de plusieurs widgets portes"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/groupDoor.webp').default} alt="Groupe de portes" width="80" zoom="false" />

> Gère un groupe de plusieurs widgets portes
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Widgets** | Liste de widgets | Oui | Liste des portes à gérer<br/>Widgets acceptés : [Porte](./door.md) |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#openNb#` | Nombre de portes ouvertes |
| `#closedNb#` | Nombre de portes fermées |
| `#total#` | Nombre de portes |

<!-- AUTO:CONFIG:END -->
