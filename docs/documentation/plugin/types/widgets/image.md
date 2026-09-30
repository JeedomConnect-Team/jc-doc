---
title: "Image"
sidebar_label: "Image"
sidebar_position: 28
description: "Permet d'afficher une image"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/image.webp').default} alt="Image" width="80" zoom="false" />

> Permet d'afficher une image
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Commande image** | Commande info texte |  | Commande chaîne contenant l'URL ou le chemin de l'image |
| **URL image** | Texte |  | URL ou chemin de l'image (si pas de commande) |
| **Intervalle de rafraîchissement (s)** | Texte |  | Si l'image n'est pas statique, temps entre deux chargements (laisser vide sinon) |
| **Mode de redimensionnement** | Liste de choix |  | Choix : Contenu (par défaut), Couvert, Etire, Centre |
| **Arrière plan automatique** | Case à cocher |  | Affiche un arrière plan automatique en fonction de l'image |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |

<!-- AUTO:CONFIG:END -->
