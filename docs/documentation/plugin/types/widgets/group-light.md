---
title: "Groupe de lumières"
sidebar_label: "Groupe de lumières"
sidebar_position: 21
description: "Gère un groupe de plusieurs widgets lumières"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/groupLight.webp').default} alt="Groupe de lumières" width="80" zoom="false" />

> Gère un groupe de plusieurs widgets lumières
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Widgets** | Liste de widgets | Oui | Liste des lumières à gérer<br/>Widgets acceptés : [Lumière On/Off](./single-light-switch.md), [Lumière à variation](./single-light-dim.md), [Lumière de couleurs](./single-light-color.md) |
| **Arrière plan automatique** | Case à cocher |  | Affiche un arrière plan automatique en fonction de l'état de la lumière |
| **Sécuriser action ON** | Sécurisation |  |  |
| **Sécuriser action OFF** | Sécurisation |  |  |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#statusText#` | Statut 'Eteint' ou 'Allumé' |
| `#onNb#` | Nombre de lumières allumées |
| `#offNb#` | Nombre de lumières éteintes |
| `#total#` | Nombre de lumières |

<!-- AUTO:CONFIG:END -->
