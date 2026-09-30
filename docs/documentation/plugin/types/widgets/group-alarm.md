---
title: "Groupe d'alarmes"
sidebar_label: "Groupe d'alarmes"
sidebar_position: 16
description: "Gère un groupe d'alarmes"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/groupAlarm.webp').default} alt="Groupe d'alarmes" width="80" zoom="false" />

> Gère un groupe d'alarmes
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Widgets** | Liste de widgets | Oui | Liste des alarmes à gérer<br/>Widgets acceptés : [Alarme](./alarm.md) |
| **Sécuriser action ON** | Sécurisation |  |  |
| **Sécuriser action OFF** | Sécurisation |  |  |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#armedNb#` | Nombre d'alarmes armées' |
| `#alarmNb#` | Nombre d'alarme en alerte' |
| `#total#` | Nombre de'alarmes dans le groupe |

<!-- AUTO:CONFIG:END -->
