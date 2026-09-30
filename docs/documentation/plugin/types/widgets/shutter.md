---
title: "Volet"
sidebar_label: "Volet"
sidebar_position: 47
description: "Gère un volet roulant"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/shutter50.webp').default} alt="Volet" width="80" zoom="false" />

> Gère un volet roulant
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Statut** | Commande info |  | Etat du volet (numérique ou binaire)<br/>Type générique : `FLAP_STATE` |
| **Monter** | Commande action | Oui | Commande pour monter le volet<br/>Type générique : `FLAP_UP` |
| **Descendre** | Commande action | Oui | Commande pour déscendre le volet<br/>Type générique : `FLAP_DOWN` |
| **Stop** | Commande action |  | Commande pour arrêter le volet<br/>Type générique : `FLAP_STOP` |
| **Position** | Commande action curseur |  | Commande de positionnement du volet<br/>Type générique : `FLAP_SLIDER` |
| **Puissance** | Commande info numérique |  | Puissance en watts<br/>Type générique : `POWER` |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |
| **Masquer l'appareil** | Case à cocher |  | [Android 11+] Ne pas remonter ce widget dans les appareils contrôlés par Android |
| **Contrôle depuis l'écran de verrouillage** | Case à cocher |  | [Android 13+] Autorise le contrôle de l'appareil depuis l'écran de verrouillage |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#statusText#` | Statut 'Ouvert' ou 'Fermé' |
| `#value#` | Pourcentage d'ouverture |

<!-- AUTO:CONFIG:END -->
