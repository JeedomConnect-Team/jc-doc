---
title: "Générique texte"
sidebar_label: "Générique texte"
sidebar_position: 14
description: "Widget générique pour afficher les infos d'une commande info texte (sous-type string)"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/generic-text.webp').default} alt="Générique texte" width="80" zoom="false" />

> Widget générique pour afficher les infos d'une commande info texte (sous-type string)
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Statut** | Commande info texte | Oui | Etat de la commande |
| **Texte statut** | Texte |  | Change la valeur du texte affichée. Utiliser #value# pour la valeur de la commande |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |
| **Masquer l'appareil** | Case à cocher |  | [Android 11+] Ne pas remonter ce widget dans les appareils contrôlés par Android |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#value#` | Valeur de la commande de statut |

<!-- AUTO:CONFIG:END -->
