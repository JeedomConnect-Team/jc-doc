---
title: "Groupe de prises"
sidebar_label: "Groupe de prises"
sidebar_position: 24
description: "Gère un groupe de plusieurs widgets prises"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/groupPlug.webp').default} alt="Groupe de prises" width="80" zoom="false" />

> Gère un groupe de plusieurs widgets prises
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Widgets** | Liste de widgets | Oui | Liste des prises à gérer<br/>Widgets acceptés : [Prise](./plug.md) |
| **Sécuriser action ON** | Sécurisation |  |  |
| **Sécuriser action OFF** | Sécurisation |  |  |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#statusText#` | Statut 'Eteint' ou 'Allumé' |
| `#onNb#` | Nombre de prises allumées |
| `#offNb#` | Nombre de prises éteintes |
| `#total#` | Nombre de prises |
| `#power#` | Puissance totale |

<!-- AUTO:CONFIG:END -->
