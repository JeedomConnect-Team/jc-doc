---
title: "Mode"
sidebar_label: "Mode"
sidebar_position: 36
description: "Affiche une liste de modes et permet de les sélectionner"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/mode.webp').default} alt="Mode" width="80" zoom="false" />

> Affiche une liste de modes et permet de les sélectionner
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Info mode** | Commande info texte | Oui | Etat actuel du mode<br/>Type générique : `MODE_STATE` |
| **Modes** | Liste de commandes | Oui | Type générique : `MODE_SET_STATE` |
| **Contenu dans la carte** | Case à cocher |  | Actions dans la carte plutôt qu'à droite |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#value#` | Valeur de la commande de statut |

<!-- AUTO:CONFIG:END -->
