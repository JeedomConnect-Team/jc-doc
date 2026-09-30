---
title: "Groupe d'historiques"
sidebar_label: "Groupe d'historiques"
sidebar_position: 17
description: "Permet d'afficher des historiques de commandes"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/groupHistory.webp').default} alt="Groupe d'historiques" width="80" zoom="false" />

> Permet d'afficher des historiques de commandes
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Historiques** | Liste de widgets | Oui | Liste des historiques à gérer<br/>Widgets acceptés : [Historique](./history.md) |
| **Intervalle historique** | Texte |  | Nombre de jours d'affichage de l'historique |
| **Onglets** | Liste de choix |  | Choix : Graphique (par défaut), Table, Graphique + table |
| **Afficher sélecteur de zoom** | Case à cocher |  |  |
| **Afficher statistiques** | Case à cocher |  | Affiche les statistiques pour les commandes numériques |
| **Afficher la légende** | Case à cocher |  |  |
| **Masquer la grille (vertical)** | Case à cocher |  |  |
| **Masquer la grille (horizontal)** | Case à cocher |  |  |
| **Valeur min (axe vertical gauche)** | Texte |  | Laisser vide pour le mode auto |
| **Valeur max (axe vertical gauche)** | Texte |  | Laisser vide pour le mode auto |
| **Valeur min (axe vertical droite)** | Texte |  | Laisser vide pour le mode auto |
| **Valeur max (axe vertical droite)** | Texte |  | Laisser vide pour le mode auto |
| **Masquer légende verticale** | Case à cocher |  |  |
| **Masquer légende horizontale** | Case à cocher |  |  |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |

<!-- AUTO:CONFIG:END -->
