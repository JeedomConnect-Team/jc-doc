---
title: "Groupe de fenêtres"
sidebar_label: "Groupe de fenêtres"
sidebar_position: 18
description: "Gère un groupe de plusieurs widgets fenêtres"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/groupWindows.webp').default} alt="Groupe de fenêtres" width="80" zoom="false" />

> Gère un groupe de plusieurs widgets fenêtres
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Widgets** | Liste de widgets | Oui | Liste des fenêtres à gérer<br/>Widgets acceptés : [Fenêtre](./window.md) |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#openNb#` | Nombre de fenêtres ouvertes |
| `#closedNb#` | Nombre de fenêtres fermées |
| `#total#` | Nombre de fenêtres |

<!-- AUTO:CONFIG:END -->
