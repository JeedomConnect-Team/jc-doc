---
title: "Portail coulissant"
sidebar_label: "Portail coulissant"
sidebar_position: 38
description: "Gère un portail coulissant"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/gateOpen.webp').default} alt="Portail coulissant" width="80" zoom="false" />

> Gère un portail coulissant
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Statut** | Commande info |  | Etat du portail (Fermé=0, Ouvert=1, Piéton=2 [optionnel])<br/>Type générique : `BARRIER_STATE` |
| **Ouvrir** | Commande action | Oui | Ouverture totale du portail<br/>Type générique : `GB_OPEN` |
| **Fermer** | Commande action | Oui | Fermeture du portail<br/>Type générique : `GB_CLOSE` |
| **Piéton** | Commande action |  | Fermeture partielle (piéton) du portail |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |
| **Masquer l'appareil** | Case à cocher |  | [Android 11+] Ne pas remonter ce widget dans les appareils contrôlés par Android |
| **Contrôle depuis l'écran de verrouillage** | Case à cocher |  | [Android 13+] Autorise le contrôle de l'appareil depuis l'écran de verrouillage |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |
| `#statusText#` | Statut 'Ouvert', 'Fermé' ou 'Piéton' |

<!-- AUTO:CONFIG:END -->
