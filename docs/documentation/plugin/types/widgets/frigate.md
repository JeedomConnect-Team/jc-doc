---
title: "Caméra Frigate"
sidebar_label: "Caméra Frigate"
sidebar_position: 3
description: "Permet d'afficher le live et l'historique d'une caméra Frigate"
---

<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
<img src={require('@site/static/img/widgets/frigate.webp').default} alt="Caméra Frigate" width="80" zoom="false" />

> Permet d'afficher le live et l'historique d'une caméra Frigate
<!-- AUTO:HEADER:END -->

## Présentation

Le widget **Caméra Frigate** se connecte à votre serveur [Frigate](https://frigate.video) (enregistreur vidéo open source avec détection d'objets) pour afficher dans l'application :

- le flux **en direct** de la caméra ;
- l'**historique des événements** détectés par Frigate (personnes, véhicules, animaux…), avec leurs snapshots et leurs clips vidéo.

Toutes les requêtes passent par le plugin : l'application n'accède jamais directement à Frigate. Vous pouvez donc consulter le live et l'historique depuis l'extérieur de votre réseau local, sans ouvrir Frigate sur internet.

:::info Plugin et application
Ce widget nécessite des versions récentes du plugin **et** de l'application (1.29.3 beta ou supérieure).
:::

## Mise en place

1. Renseignez l'**URL Frigate** (ex. `http://192.168.1.50:5000`) et le **nom de la caméra** tel qu'il apparaît dans le `config.yml` de Frigate (respectez la casse).
2. Si l'authentification est activée sur Frigate, cochez **Authentification Frigate activée**, renseignez l'utilisateur et le mot de passe, et utilisez le port authentifié (`8971` par défaut).
3. Recommandé : cochez **Flux vidéo optimisé (go2rtc)** pour un flux fluide et à faible latence, en LAN comme hors LAN. Il faut que le restream go2rtc soit activé dans Frigate (*Settings > System > go2rtc streams*). Hors LAN, la meilleure qualité s'obtient avec un relais TURN, voir [Caméra hors LAN](../../../integration/cameraTurn.md).
4. Facultatif : renseignez la **Commande MQTT statut caméra Frigate** pour que l'historique se mette à jour instantanément à chaque nouvel événement, au lieu d'un rafraîchissement toutes les minutes (voir [ci-dessous](#rafraîchissement-de-lhistorique)).

## Dans l'application

### La carte du widget

La carte propose deux vues, que l'on bascule avec les boutons en haut de la carte :

- **Direct** : le flux live de la caméra ;
- **Timeline** : les derniers événements de la caméra, consultables directement depuis la carte.

L'option **Vue par défaut** choisit la vue affichée à l'ouverture. L'option **Écran ouvert au tap** choisit ce qu'ouvre un appui sur le widget : la vue détail (live) ou directement l'historique des événements.

### La vue détail (live)

En plus des contrôles habituels du widget caméra (son, rechargement, plein écran, zoom), la vue détail propose :

- **Instantané** : capture l'image en cours et l'ouvre dans le menu de partage du téléphone (enregistrer, envoyer…) ;
- **Télécharger une vidéo** : choisissez une heure de début et une durée (1, 5, 15 minutes ou durée personnalisée) pour récupérer l'enregistrement Frigate correspondant ;
- **Historique** : ouvre la liste complète des événements ;
- **Directions** : pilotage d'une caméra motorisée, si les commandes *Direction haut/bas/gauche/droite* sont renseignées ;
- **Micro** : si l'audio bidirectionnel est activé (voir [ci-dessous](#audio-bidirectionnel)).

Avec l'option **Contrôles toujours visibles**, ces boutons sont affichés en permanence sur une ligne au-dessus de la vidéo, au lieu d'apparaître au toucher.

### L'historique des événements

L'écran Historique liste les événements Frigate de la caméra, du plus récent au plus ancien, avec leur snapshot, leur type (label), leur zone et leur durée (un événement toujours actif est marqué *En cours*). Pour chaque événement, vous pouvez :

- **lire le clip** directement dans la liste, ou en plein écran ;
- **télécharger** le snapshot ou le clip ;
- le **conserver** (étoile) : Frigate le garde alors indéfiniment, sans l'effacer à l'expiration de la rétention ;
- le **supprimer** (après confirmation).

Le bouton **Filtres** permet de restreindre la liste par date (tout, aujourd'hui, hier, 7 jours ou une date précise), par type d'événement, par zone, par sous-étiquette, ou aux seuls événements conservés. Un glissement vers le bas rafraîchit la liste.

## Rafraîchissement de l'historique

Sans configuration particulière, l'historique (écran Historique et vue Timeline de la carte) est rafraîchi automatiquement **toutes les minutes**, ainsi qu'à l'ouverture et par glissement vers le bas.

Pour qu'il se mette à jour **instantanément** dès qu'un événement est détecté, utilisez la remontée MQTT de Frigate :

1. Dans Jeedom, créez une commande info (type *autre*) alimentée par le topic MQTT `frigate/<nom_caméra>/review_status` de votre caméra, avec jMQTT, MQTT Manager ou un autre plugin MQTT. Elle prend les valeurs `NONE`, `DETECTION` ou `ALERT`.
2. Sélectionnez cette commande dans le champ **Commande MQTT statut caméra Frigate** du widget. Le rafraîchissement toutes les minutes est alors désactivé.

## Audio bidirectionnel

Avec une caméra compatible (interphone, sonnette vidéo…), l'option **Audio bidirectionnel (micro)** ajoute un bouton micro au live : parlez dans votre téléphone et votre voix sort par le haut-parleur de la caméra.

Prérequis :

- l'option **Flux vidéo optimisé (go2rtc)** doit être activée, et la caméra doit gérer le *backchannel* audio (canal audio vers la caméra) ;
- renseignez l'**URL RTSP directe de la caméra**, identifiants inclus. Le restream de Frigate ne transmet pas encore le canal audio vers la caméra (go2rtc embarqué dans Frigate antérieur à 1.9.9), c'est donc cette URL qui est utilisée quand l'audio bidirectionnel est actif.  
  Exemple pour une caméra Dahua (les paramètres `unicast=true&proto=Onvif` sont nécessaires pour que la caméra annonce son canal audio) :  
  `rtsp://user:motdepasse@192.168.1.60/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif`
- si go2rtc était déjà installé avant la mise à jour du plugin, redémarrez-le une fois avec le bouton **Redémarrer go2rtc** (page `Gestion` du plugin, bouton **Services de streaming**) pour qu'il prenne en compte la configuration nécessaire au micro. Redémarrer le démon ou le plugin ne suffit pas.

:::note
Le micro n'est disponible qu'en WebRTC. Hors LAN, si la connexion bascule en mode de repli MSE (sans relais TURN), le live fonctionne mais le bouton micro n'est pas proposé.
:::

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **URL Frigate** | Texte | Oui | URL de base de Frigate, ex. http://192.168.1.50:5000 (ou le port 8971 si l'authentification Frigate est activée) |
| **Nom de la caméra (Frigate)** | Texte | Oui | Doit correspondre exactement au nom de la caméra configuré dans le config.yml de Frigate |
| **Flux vidéo optimisé (go2rtc)** | Case à cocher |  | Diffusion fluide en LAN et hors LAN via le pont go2rtc du plugin, à la place du flux RTSP direct. Nécessite le restream go2rtc de Frigate activé (Settings &gt; System &gt; go2rtc streams). |
| **Audio bidirectionnel (micro)** | Case à cocher |  | Ajoute un bouton micro pour parler via le haut-parleur de la caméra. Nécessite le flux vidéo optimisé (go2rtc) et une caméra compatible (backchannel audio). Indisponible en repli MSE hors LAN. |
| **URL RTSP directe de la caméra (audio bidirectionnel)** | Texte |  | Utilisée à la place du restream Frigate quand l'audio bidirectionnel est activé : le restream de Frigate ne transmet pas le canal audio vers la caméra (go2rtc &lt; 1.9.9). Identifiants inclus dans l'URL. Ex. Dahua : rtsp://user:pass@IP/cam/realmonitor?channel=1&amp;subtype=0&amp;unicast=true&amp;proto=Onvif |
| **Contrôles toujours visibles** | Case à cocher |  | Affiche les boutons de contrôle sur une ligne permanente au-dessus de la vidéo, au lieu des barres affichées au toucher sur l'image. Les barres restent utilisées en plein écran. |
| **Authentification Frigate activée** | Case à cocher |  |  |
| **Nom d'utilisateur Frigate** | Texte |  | Utilisé uniquement si l'authentification Frigate est activée |
| **Mot de passe Frigate** | Texte |  | Utilisé uniquement si l'authentification Frigate est activée |
| **Commande MQTT statut caméra Frigate** | Commande info texte |  | Optionnel : commande Jeedom alimentée (via jMQTT, MQTT Manager...) par le topic MQTT frigate/&lt;nom_caméra&gt;/review_status (spécifique à cette caméra, valeurs NONE/DETECTION/ALERT). Rafraîchit automatiquement l'historique dès qu'un nouvel événement est détecté sur cette caméra ; sans elle, l'historique est rafraîchi toutes les minutes |
| **Écran ouvert au tap** | Liste de choix |  | Écran ouvert en tapant sur le widget. Le bouton "Historique" reste de toute façon toujours accessible depuis la vue détail, quel que soit ce choix.<br/>Choix : Vue détail (live) (par défaut), Historique des événements |
| **Vue par défaut** | Liste de choix |  | Vue affichée au premier affichage de la carte du widget (Direct ou Timeline). L'utilisateur peut toujours basculer ensuite avec les boutons en haut de la carte.<br/>Choix : Direct (par défaut), Timeline |
| **Direction haut** | Commande action |  | Type générique : `CAMERA_UP` |
| **Direction bas** | Commande action |  | Type générique : `CAMERA_DOWN` |
| **Direction gauche** | Commande action |  | Type générique : `CAMERA_LEFT` |
| **Direction droite** | Commande action |  | Type générique : `CAMERA_RIGHT` |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |

<!-- AUTO:CONFIG:END -->
