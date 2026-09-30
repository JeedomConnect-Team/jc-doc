---
title: "Géolocalisation"
sidebar_label: "Géolocalisation"
sidebar_position: 15
description: "Permet d'afficher un point de localisation"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/geo.webp').default} alt="Géolocalisation" width="80" zoom="false" />

> Permet d'afficher un point de localisation
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Position** | Commande info texte | Oui | Commande chaîne sous la forme latitude,longitude<br/>Type générique : `GEOLOCATION` |
| **Titre** | Texte |  | A compléter si vous désirez qu'un titre soit au dessus de la pastille |
| **Repère** | Image |  | Personnalisez l'icone du repère sur la carte |
| **Couleur** | Couleur |  | Personnalisez la couleur du tracé et du marqueur |
| **Zoom** | Texte |  | Zoom initial de la carte en mètres (par défaut 4000) |
| **Animer la carte** | Case à cocher |  | Déplace la carte à chaque nouvelle position |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |

<!-- AUTO:CONFIG:END -->
