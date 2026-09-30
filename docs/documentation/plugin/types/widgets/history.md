---
title: "Historique"
sidebar_label: "Historique"
sidebar_position: 26
description: "Permet d'afficher un historique de commande"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/history.webp').default} alt="Historique" width="80" zoom="false" />

> Permet d'afficher un historique de commande
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Commandes infos** | Commande info | Oui |  |
| **Dates dans le futur** | Case à cocher |  | Les dates historisées sont dans le futur |
| **Intervalle historique** | Texte |  | Nombre de jours d'affichage de l'historique |
| **Type de graphique** | Liste de choix |  | Choix : Ligne (par défaut), Barre |
| **Onglets** | Liste de choix |  | Choix : Graphique (par défaut), Table, Graphique + table |
| **Interpolation** | Liste de choix |  | Choix : Linéaire, Pallier, Bezier cubique, Bezier horizontal |
| **Afficher sélecteur de zoom** | Case à cocher |  |  |
| **Couleur du graphe** | Couleur |  |  |
| **Afficher statistiques** | Case à cocher |  | Affiche les statistiques pour les commandes numériques |
| **Afficher les points** | Case à cocher |  | Affiche les points (mode ligne) |
| **Masquer la grille (vertical)** | Case à cocher |  |  |
| **Masquer la grille (horizontal)** | Case à cocher |  |  |
| **Valeur min (axe vertical)** | Texte |  | Laisser vide pour le mode auto |
| **Valeur max (axe vertical)** | Texte |  | Laisser vide pour le mode auto |
| **Masquer légende verticale** | Case à cocher |  |  |
| **Masquer légende horizontale** | Case à cocher |  |  |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |

<!-- AUTO:CONFIG:END -->
