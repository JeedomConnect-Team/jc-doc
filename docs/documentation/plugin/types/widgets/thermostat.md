---
title: "Thermostat"
sidebar_label: "Thermostat"
sidebar_position: 46
description: "Gère un thermostat. Compatible avec le plugin officiel"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/thermostatOff.webp').default} alt="Thermostat" width="80" zoom="false" />

> Gère un thermostat. Compatible avec le plugin officiel
<!-- AUTO:HEADER:END -->

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **Statut** | Commande info | Oui | Etat du thermostat (chaîne ou binaire).<br/>Type générique : `THERMOSTAT_STATE` |
| **Consigne** | Commande action curseur | Oui | Commande (slider) qui gère la consigne ('Thermostat' avec le plugin Thermostat)<br/>Type générique : `THERMOSTAT_SET_SETPOINT` |
| **Info Consigne** | Commande info numérique | Oui | Type générique : `THERMOSTAT_SETPOINT` |
| **Température intérieure** | Commande info numérique | Oui | Type générique : `THERMOSTAT_TEMPERATURE` |
| **Température extérieure** | Commande info numérique |  | Type générique : `THERMOSTAT_TEMPERATURE_OUTDOOR` |
| **Info Mode** | Commande info texte |  | Info qui donne le mode courant<br/>Type générique : `THERMOSTAT_MODE` |
| **Modes** | Liste de commandes |  | Type générique : `THERMOSTAT_SET_MODE` |
| **Puissance** | Commande info numérique |  | Info qui donne la puissance en % |
| **Info verrou** | Commande info binaire |  | Type générique : `THERMOSTAT_LOCK` |
| **Verrouillage** | Commande action |  | Type générique : `THERMOSTAT_SET_LOCK` |
| **Déverrouillage** | Commande action |  | Type générique : `THERMOSTAT_SET_UNLOCK` |
| **Modes dans la carte** | Case à cocher |  | Afficher tous les modes dans le widget |
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
| `#lockText#` | Etat 'Vérouillé' ou 'Déverrouillé' |

<!-- AUTO:CONFIG:END -->
