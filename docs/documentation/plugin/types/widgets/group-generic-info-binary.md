---
title: "Groupe de génériques binaires"
sidebar_label: "Groupe de génériques binaires"
sidebar_position: 19
description: "Gère un groupe de plusieurs widgets générique info binaire"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/groupBinary.webp').default} alt="Groupe de génériques binaires" width="80" zoom="false" />

> Gère un groupe de plusieurs widgets générique info binaire
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Widgets** | Liste de widgets | Oui | Liste des génériques binaires à gérer<br/>Widgets acceptés : [Générique binaire](./generic-info-binary.md) |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#nb0#` | Nombre de binaires valant 0 |
| `#nb1#` | Nombre de binaires valant 1 |
| `#total#` | Nombre de binaires |

<!-- AUTO:CONFIG:END -->
