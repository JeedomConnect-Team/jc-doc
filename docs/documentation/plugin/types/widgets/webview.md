---
title: "Web View"
sidebar_label: "Web View"
sidebar_position: 48
description: "Permet d'afficher un design, le dashboard ou n'importe quelle page Web. Astuce : Pour un affichage direct dans un menu, configurez l'affichage forcé sur Détail (ce widget doit être unique dans le menu)"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/web.webp').default} alt="Web View" width="80" zoom="false" />

> Permet d'afficher un design, le dashboard ou n'importe quelle page Web. Astuce : Pour un affichage direct dans un menu, configurez l'affichage forcé sur Détail (ce widget doit être unique dans le menu)
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **URL** | Texte |  | Entrez ici l'ID d'un design (nombre entier), le mot clé 'dashboard', ou bien une URL de votre choix |
| **URL locale** | Texte |  | URL utilisée lorsque l'appareil est sur le même réseau que Jeedom |
| **Commande URL** | Commande info texte |  | Commande info contenant l'URL à afficher |
| **Afficher dans la grille** | Case à cocher |  | Affiche la page web dans la tuile |
| **Hauteur** | Texte |  | Hauteur de la vue en mode carte en grille standard (par défaut 200) |
| **Cacher la barre du haut en vue détail** | Case à cocher |  |  |
| **Injection JS** | Texte |  | Injecter du code JavaScript dans la page après son chargement |
| **Désactiver l'accélération matérielle** | Case à cocher |  | Désactivez si vous rencontrer des problèmes |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |

<!-- AUTO:CONFIG:END -->
