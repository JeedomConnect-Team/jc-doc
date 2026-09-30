---
title: "Groupe de géolocalisation"
sidebar_label: "Groupe de géolocalisation"
sidebar_position: 20
description: "Permet d'afficher plusieurs géolocalisation sur une seule et même carte"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/groupGeo.webp').default} alt="Groupe de géolocalisation" width="80" zoom="false" />

> Permet d'afficher plusieurs géolocalisation sur une seule et même carte
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Géolocalisation** | Liste de widgets | Oui | Liste des Géoloc à gérer<br/>Widgets acceptés : [Géolocalisation](./geoloc.md) |
| **Facteur de zoom** | Texte |  | Nombre positif indiquant le zoom calculé entre les points extrêmes (par défaut 1.2) |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |

<!-- AUTO:CONFIG:END -->
