---
title: "Groupe de PIR"
sidebar_label: "Groupe de PIR"
sidebar_position: 22
description: "Gère un groupe de plusieurs capteurs de mouvements"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/groupPIR.webp').default} alt="Groupe de PIR" width="80" zoom="false" />

> Gère un groupe de plusieurs capteurs de mouvements
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Widgets** | Liste de widgets | Oui | Liste des capteurs à gérer<br/>Widgets acceptés : [PIR](./pir.md) |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#alertNb#` | Nombre de PIR en alerte |
| `#normalNb#` | Nombre de PIR au repos |
| `#total#` | Nombre de PIR |

<!-- AUTO:CONFIG:END -->
