---
sidebar_position: 3
---

# Service

:::info
Cette intégration ne concerne que <img alt="Android" src="/img/android.svg" /> Android
:::

Jeedom Connect dispose d'un service qui tourne en tâche de fond et permet une communication permanente entre votre appareil et le plugin, **quelque soit l'état de l'application** (premier plan / arrière plan / tuée).
Le service s'active dans les préférences de l'application `Service et actions / Gestion du service`.

Lorsque le service est activé, une **notification permanente** est affichée dans le volet des notifications (il s'agit en réalité selon la terminologie Android d'un service d'avant plan - cette notification est imposée par Android et n'est donc pas masquable).
Vous pouvez personnaliser cette notification :

- en modifiant le titre
- en modifiant le message
- en affichant, ou pas, l'icône de l'application (dans le contenu de celle-ci)

Le service Jeedom Connect a principalement deux utilités :

- Remonter les **informations** sur l'état de l'appareil vers Jeedom
- Aider à l'exécution d'**actions** sur l'appareil

Ces **informations** et **actions** sont décrites dans la section [Commandes disponibles sur un équipement](#eqCmd).

Pour remonter les informations, le service utilise des **déclencheurs** qui sont des événements du système. Vous devez activer les déclencheurs qui vous intéressent pour que la remontée ait lieu.
A chaque fois qu'un événement lié à un déclencheur a lieu, **toutes** les informations sont remontées vers Jeedom.

:::danger
Activer trop de déclencheurs peut nuire au niveau de votre batterie !
:::

*Exemple* : Si la seule information qui vous intéresse concerne l'état du wifi (activé / adresse IP / point d'accès), alors vous pouvez uniquement activer le déclencheur `Connectivité changée`.

## Liste des déclencheurs disponibles

- `Périodique` : se déclenche automatiquement toutes les X minutes
- `Démarrage de l'appareil` : se déclenche à chaque fois que l'appareil démarre (**après** avoir saisi d'éventuels moyens de sécurité)
- `Connectivité changée` : se déclenche lorsqu'un changement dans la connection au réseau a lieu (par exemple passer du réseau mobile à un réseau Wifi)
- `Chargeur branché`
- `Chargeur débranché`
- `Batterie faible` : se déclenche lorsque le niveau de batterie devient faible (généralement &le; 15%)
- `Batterie OK` : se déclenche lorsque le niveau de batterie revient à un état normal (généralement &gt; 15%)
- `Ecran éteint`
- `Ecran allumé`
- `Bluetooth connecté` : se déclenche dès que l'appareil est connecté à un périphérique bluetooth.
- `Bluetooth déconnecté` : se déclenche lorsqu'il n'y a plus aucun périphérique bluetooth connecté.
- `Prochaine alarme changée` : se déclenche lorsque la date ou l'heure de la prochaine alarme programmée sur l'appareil change
