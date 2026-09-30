---
title: "Générique switch"
sidebar_label: "Générique switch"
sidebar_position: 13
description: "Widget générique pour un switch (commande ON/OFF)"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/switch.webp').default} alt="Générique switch" width="80" zoom="false" />

> Widget générique pour un switch (commande ON/OFF)
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Action ON** | Commande action | Oui | Commande ON |
| **Action OFF** | Commande action | Oui | Commande OFF |
| **Statut** | Commande info binaire | Oui | Etat de la commande |
| **Texte 0** | Texte |  | Texte affiché lorsque la valeur est 0 |
| **Texte 1** | Texte |  | Texte affiché lorsque la valeur est 1 |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |
| **Masquer l'appareil** | Case à cocher |  | [Android 11+] Ne pas remonter ce widget dans les appareils contrôlés par Android |
| **Contrôle depuis l'écran de verrouillage** | Case à cocher |  | [Android 13+] Autorise le contrôle de l'appareil depuis l'écran de verrouillage |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#value#` | Valeur de la commande de statut |

<!-- AUTO:CONFIG:END -->
