---
title: "Climatiseur"
sidebar_label: "Climatiseur"
sidebar_position: 4
description: "Gère un climatiseur"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/cold.webp').default} alt="Climatiseur" width="80" zoom="false" />

> Gère un climatiseur
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Action ON** | Commande action | Oui | Commande ON<br/>Type générique : `AC_ON` |
| **Action OFF** | Commande action | Oui | Commande OFF<br/>Type générique : `AC_OFF` |
| **Statut** | Commande info | Oui | Etat du climatiseur (binaire ou numérique).<br/>Type générique : `AC_STATE` |
| **Consigne** | Commande action curseur | Oui | Type générique : `AC_SET_TEMPERATURE` |
| **Info Consigne** | Commande info numérique | Oui | Type générique : `AC_TEMPERATURE` |
| **Température** | Commande info numérique |  | Type générique : `AC_INDOOR_TEMPERATURE` |
| **Info Mode** | Commande info texte |  | Info qui donne le mode courant (la valeur donne le nom de l'action)<br/>Type générique : `AC_MODE` |
| **Modes** | Liste de commandes |  | Liste d'actions de type autre pour le choix du mode<br/>Type générique : `AC_SET_MODE` |
| **Choix de mode** | Commande action liste |  | Action de type select pour le choix du mode<br/>Type générique : `AC_SET_MODE` |
| **Info Ventilation** | Commande info |  | Info (numérique ou texte) qui donne la vitesse de ventilation<br/>Type générique : `AC_FAN_MODE` |
| **Ventilation** | Commande action |  | Action de type slider si info numérique ou texte si info select<br/>Type générique : `AC_SET_FAN_MODE` |
| **Info Oscillation** | Commande info texte |  | Info texte qui donne l'oscillation verticale |
| **Oscillation** | Commande action liste |  | Action de type select spour l'oscillation verticale |
| **Info Oscillation horizontale** | Commande info texte |  | Info texte qui donne l'oscillation horizontale |
| **Oscillation horizontale** | Commande action liste |  | Action de type select spour l'oscillation horizontale |
| **Modes dans la carte** | Case à cocher |  | Afficher les modes dans le widget |
| **Afficher historique** | Case à cocher |  | Affiche l'historique de la température en arrière-plan du widget |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |
| **Masquer l'appareil** | Case à cocher |  | [Android 11+] Ne pas remonter ce widget dans les appareils contrôlés par Android |
| **Contrôle depuis l'écran de verrouillage** | Case à cocher |  | [Android 13+] Autorise le contrôle de l'appareil depuis l'écran de verrouillage |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#statusText#` | Statut 'Eteint' ou 'Allumé' |

<!-- AUTO:CONFIG:END -->
