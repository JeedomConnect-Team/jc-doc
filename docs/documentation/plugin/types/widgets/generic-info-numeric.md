---
title: "Générique numérique"
sidebar_label: "Générique numérique"
sidebar_position: 11
description: "Widget générique pour afficher les infos d'une commande info numérique"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/generic-numeric.webp').default} alt="Générique numérique" width="80" zoom="false" />

> Widget générique pour afficher les infos d'une commande info numérique
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Statut** | Commande info numérique | Oui | Etat de la commande |
| **Afficher la jauge** | Case à cocher |  |  |
| **Afficher historique** | Case à cocher |  | Affiche l'historique de la commande en arrière-plan du widget |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |
| **Masquer l'appareil** | Case à cocher |  | [Android 11+] Ne pas remonter ce widget dans les appareils contrôlés par Android |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#value#` | Valeur de la commande de statut |

<!-- AUTO:CONFIG:END -->
