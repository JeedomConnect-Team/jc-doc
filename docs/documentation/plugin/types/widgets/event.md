---
title: "Evénement"
sidebar_label: "Evénement"
sidebar_position: 5
description: "Permet de réaliser la mise à jour d'une commande info"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/events.webp').default} alt="Evénement" width="80" zoom="false" />

> Permet de réaliser la mise à jour d'une commande info
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Commande à metre à jour** | Commande info |  | Commande info à mettre à jour |
| **Image Envoyer** | Image |  | Choix de l'icône à utiliser pour le bouton 'envoi' |
| **Garder la dernière valeur** | Case à cocher |  | Conserver la dernière valeur pour ne pas avoir à le retaper |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#value#` | Valeur de la commande info |

<!-- AUTO:CONFIG:END -->
