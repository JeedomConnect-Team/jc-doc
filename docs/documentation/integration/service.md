---
sidebar_position: 3
---

# Service

:::info
Cette intégration ne concerne que ![Android](/img/android.svg) Android
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

## Nombre de pas {#steps}

:::note Bientôt disponible
Le nombre de pas n'est pas encore proposé dans la version Play Store de l'application : il arrivera dans une prochaine version.
:::

Le service peut remonter le **nombre de pas effectués depuis minuit** dans la commande `Nombre de pas` de l'équipement. Cette option s'active dans `Service et actions / Gestion du service`, ligne `Nombre de pas`.

Le nombre de pas est lu depuis **Health Connect**, l'espace de données de santé d'Android. Il faut donc :

- que Health Connect soit disponible sur l'appareil (intégré à Android 14 et plus, application *Health Connect* à installer depuis le Play Store sur Android 9 à 13) ;
- autoriser Jeedom Connect à lire les pas, **y compris en arrière-plan** (demandé à l'activation de l'option) ;
- qu'une application de santé ou de sport enregistre vos pas dans Health Connect (Samsung Health, Google Fit, Fitbit, l'application de votre montre...). Le nombre remonté est le total de toutes ces sources, sans doublons : c'est le même que celui affiché par votre application de santé.

Un appui sur la ligne `Nombre de pas` ouvre Health Connect, pour gérer les autorisations ou les sources de données.

:::info Quand le nombre de pas est-il transmis ?
Il n'existe **pas de déclencheur dédié aux pas**. Le nombre de pas est transmis avec les autres informations, à chaque déclencheur activé (sauf `SMS reçu`) et à chaque envoi `Périodique`. Pour un suivi régulier, activez le déclencheur `Périodique` (par exemple toutes les 15 minutes).

Les applications de santé n'écrivent pas dans Health Connect en temps réel mais par paquets : la valeur dans Jeedom peut rester identique un moment, puis augmenter d'un coup.
:::
