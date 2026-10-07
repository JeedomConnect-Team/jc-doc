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

1. Renseignez l'**URL Frigate** (ex. `http://192.168.1.50:5000`) et le **nom de la caméra** tel qu'il apparaît dans la section `cameras` du `config.yml` de Frigate (respectez la casse). C'est bien le nom de la **caméra** qui est attendu, pas celui d'un flux go2rtc : voir [Flux vidéo](#flux-vidéo).
2. Si l'authentification est activée sur Frigate, cochez **Authentification Frigate activée**, renseignez l'utilisateur et le mot de passe, et utilisez le port authentifié (`8971` par défaut).
3. Recommandé : cochez **Flux vidéo optimisé (go2rtc)** pour un flux fluide et à faible latence, en LAN comme hors LAN. Il faut qu'un flux go2rtc existe pour cette caméra dans Frigate, voir [Flux vidéo](#flux-vidéo). Hors LAN, **aucun relais TURN n'est nécessaire** : il améliore seulement la latence et permet l'audio bidirectionnel, voir [Caméra hors LAN](../../../integration/cameraTurn.md).
4. Facultatif : renseignez la **Commande MQTT statut caméra Frigate** pour que l'historique se mette à jour instantanément à chaque nouvel événement, au lieu d'un rafraîchissement toutes les minutes (voir [ci-dessous](#rafraîchissement-de-lhistorique)).

## Flux vidéo

Le widget utilise deux choses distinctes côté Frigate :

| Usage | Ce qui est utilisé |
|---|---|
| Snapshot, historique des événements, clips | l'API de Frigate, avec le **nom de la caméra** |
| Flux vidéo en direct | le **restream go2rtc** intégré à Frigate (`rtsp://<hôte Frigate>:8554/<nom du flux>`) |

Le restream n'est pas automatique dans Frigate : il faut déclarer la caméra dans la section `go2rtc` de son `config.yml`. Sans elle, le snapshot et l'historique fonctionnent, mais pas le flux vidéo.

```yaml
go2rtc:
  streams:
    entree:                        # nom du flux go2rtc
      - rtsp://user:motdepasse@192.168.1.60:554/stream1
cameras:
  entree:                          # nom de la caméra, à saisir dans le widget
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/entree
          roles: [record, detect]
```

La documentation de Frigate recommande de donner au flux go2rtc **le même nom** que la caméra. Si ce n'est pas le cas (ex. caméra `reolink_avant` alimentée par les flux `rtsp_avant` et `rtsp_avant_sub`), le plugin retrouve tout seul le bon flux à l'enregistrement du widget, en lisant la configuration de Frigate, dans cet ordre :

1. le flux choisi par Frigate pour l'affichage en direct de la caméra (option `live` de la caméra) ;
2. un flux portant le nom de la caméra ;
3. le flux utilisé par les entrées de la caméra (`rtsp://127.0.0.1:8554/<flux>`), en priorité celui du rôle `record`.

Saisissez donc toujours le **nom de la caméra** dans le widget. Si vous modifiez ensuite vos flux go2rtc dans Frigate, réenregistrez le widget pour qu'il les prenne en compte.

Vous pouvez aussi renseigner une **Source directe du flux** (les snapshots et l'historique passent toujours par Frigate). Deux formes sont possibles :

- l'**URL RTSP de la caméra** (identifiants inclus) : la vidéo en direct provient alors directement de la caméra au lieu du restream de Frigate, avec **le son d'origine de la caméra**. La piste audio du restream Frigate est souvent absente, ou en AAC (le format de ses enregistrements), que WebRTC ne sait pas lire ;
- le **flux go2rtc de Frigate en WebRTC**, `webrtc:ws://<hôte Frigate>:1984/api/ws?src=<nom du flux>`, pour l'[audio bidirectionnel](#audio-bidirectionnel) quand c'est Frigate qui gère le canal audio vers la caméra. La vidéo reste celle du restream ; ce lien ne sert qu'à envoyer votre voix, et seulement pendant que le micro est actif.

**Sans** l'option Flux vidéo optimisé, l'application lit le restream directement en RTSP : cela ne fonctionne que sur le réseau local. Hors réseau local, ou si le flux vidéo ne peut pas démarrer, l'application affiche à la place le dernier snapshot de la caméra, rafraîchi toutes les 2 secondes.

:::tip Dépannage
- **Image grisée avec un chargement qui tourne, ou snapshot sans vidéo** : Frigate ne fournit pas de flux go2rtc pour cette caméra. Vérifiez la section `go2rtc` de Frigate puis réenregistrez le widget ; le log du plugin indique le flux retenu, ou l'absence de flux.
- **Écran noir, erreur 404 sur `/api/<nom>/latest.jpg` dans le log** : le nom saisi dans le widget n'est pas celui d'une caméra Frigate (souvent, le nom d'un flux go2rtc a été saisi à la place).
- **Vidéo sans son** : la piste audio du restream Frigate est absente ou illisible en WebRTC. Renseignez l'URL RTSP de la caméra comme source directe du flux, ou ajoutez dans la section `go2rtc` de Frigate une piste audio convertie en Opus (`- "ffmpeg:<nom du flux>#audio=opus"`), puis réenregistrez le widget.
:::

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

Sous la vidéo (et les éventuels widgets supplémentaires), une carte **Timeline** liste les derniers événements de la caméra, comme la vue Timeline de la carte du widget.

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
- renseignez la **Source directe du flux** (voir [Flux vidéo](#flux-vidéo)), selon votre installation (voir ci-dessous) ;
- si go2rtc était déjà installé avant la mise à jour du plugin, redémarrez-le une fois avec le bouton **Redémarrer go2rtc** (page `Gestion` du plugin, bouton **Services de streaming**) pour qu'il prenne en compte la configuration nécessaire au micro. Redémarrer le démon ou le plugin ne suffit pas.

Beaucoup de caméras, dont les interphones Dahua (VTO), n'acceptent **qu'une seule conversation à la fois**. Un seul go2rtc doit donc demander le canal audio vers la caméra, sinon le second reçoit un refus et le micro reste muet :

- **Frigate ne demande pas le canal audio** (aucune source `#backchannel=1` pour cette caméra dans sa section `go2rtc`) : renseignez l'**URL RTSP de la caméra**, identifiants inclus.  
  Exemple pour une caméra Dahua (les paramètres `unicast=true&proto=Onvif` sont nécessaires pour que la caméra annonce son canal audio) :  
  `rtsp://user:motdepasse@192.168.1.60/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif`
- **Frigate tient le canal audio** (source `#backchannel=1` dans sa section `go2rtc`, pour partager le micro avec Home Assistant ou faire des annonces) : renseignez son flux en WebRTC, par exemple `webrtc:ws://192.168.1.50:1984/api/ws?src=sonnette`. L'API go2rtc de Frigate (port `1984`) et son port WebRTC (`8555`) doivent être joignables depuis Jeedom. L'application ne demande le canal audio qu'à l'activation du micro (l'image est brièvement coupée le temps de reconnecter le flux) et le libère à l'arrêt : les annonces restent possibles pendant que la sonnette est ouverte dans l'application. Le restream RTSP de Frigate ne convient pas pour parler : il ne propose pour le retour que le premier format audio de la caméra (de l'AAC sur un VTO Dahua), qu'un téléphone ne sait pas envoyer.  
  Dans ce cas, séparez dans Frigate la source qui sert à **écouter** de celle qui sert à **parler**, et placez l'écoute en premier. go2rtc prend chaque piste dans la première source qui la fournit : la connexion qui tient le canal audio ne s'ouvre alors que pendant qu'on parle (micro, annonce), puis se referme. Sinon, elle reste ouverte en permanence pour l'écoute, et go2rtc doit la reconnecter à chaque nouvelle prise de parole, ce que l'interphone refuse souvent (« wrong response on DESCRIBE » dans le log go2rtc de Frigate). Exemple pour un interphone Dahua :

  ```yaml
  go2rtc:
    streams:
      sonnette:
        - ffmpeg:rtsp://user:motdepasse@192.168.1.60/cam/realmonitor?channel=1&subtype=0#video=copy
        # écoute seule (un fragment # désactive le canal audio vers la caméra)
        - rtsp://user:motdepasse@192.168.1.60/cam/realmonitor?channel=1&subtype=0#media=audio
        # parole seule
        - rtsp://user:motdepasse@192.168.1.60/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif#media=audio#backchannel=1
  ```

:::note
Le micro n'est disponible qu'en WebRTC. Hors LAN, si la connexion bascule en mode de repli MSE (sans relais TURN), le live fonctionne mais le bouton micro n'est pas proposé.
:::

:::tip Interphone Dahua (VTO) muet
Le VTO repasse son audio en PCM 16 kHz à chaque redémarrage, et reste alors muet même si le canal audio est ouvert. Il faut le remettre en G.711A (`Encode[0].MainFormat[0].Audio.Compression=G.711A` via son API `configManager.cgi`). Dans Frigate, le script `fix_vto_codecs.sh` placé devant les sources du VTO s'en charge automatiquement.
:::

<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->
## Configuration

Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : **Nom**, **Nom d'affichage**, **Sous-titre**, **Image**, **Images sous conditions**, **Affichage forcé**.

| Option | Type | Obligatoire | Description |
|---|---|:---:|---|
| **URL Frigate** | Texte | Oui | URL de Frigate, ex. http://192.168.1.50:5000 (port 8971 si l'authentification Frigate est activée) |
| **Nom de la caméra (Frigate)** | Texte | Oui | Nom de la caméra dans la section cameras du config.yml de Frigate (respectez la casse) |
| **Flux vidéo optimisé (go2rtc)** | Case à cocher |  | Flux fluide en LAN et hors LAN via go2rtc, au lieu du RTSP direct (LAN uniquement). Nécessite un flux go2rtc pour cette caméra dans Frigate |
| **Audio bidirectionnel (micro)** | Case à cocher |  | Bouton micro pour parler via le haut-parleur de la caméra. Nécessite le flux vidéo optimisé (go2rtc) et une caméra compatible |
| **Source directe du flux** | Texte |  | Facultatif. Remplace le restream Frigate pour le direct : URL RTSP de la caméra (identifiants inclus), ou flux go2rtc de Frigate en WebRTC (webrtc:ws://&lt;ip frigate&gt;:1984/api/ws?src=&lt;flux&gt;) pour l'audio bidirectionnel quand Frigate gère le canal retour. Voir la documentation |
| **Contrôles toujours visibles** | Case à cocher |  | Boutons de contrôle sur une ligne fixe au-dessus de la vidéo, au lieu des barres affichées au toucher (sauf en plein écran) |
| **Authentification Frigate activée** | Case à cocher |  |  |
| **Nom d'utilisateur Frigate** | Texte |  | Utilisé uniquement si l'authentification Frigate est activée |
| **Mot de passe Frigate** | Texte |  | Utilisé uniquement si l'authentification Frigate est activée |
| **Commande MQTT statut caméra Frigate** | Commande info texte |  | Facultatif : info du topic MQTT frigate/&lt;caméra&gt;/review_status, pour rafraîchir l'historique à chaque événement (sinon toutes les minutes) |
| **Écran ouvert au tap** | Liste de choix |  | Écran ouvert en tapant sur le widget. L'historique reste accessible depuis la vue détail<br/>Choix : Vue détail (live) (par défaut), Historique des événements |
| **Vue par défaut** | Liste de choix |  | Vue affichée à l'ouverture de la carte (Direct ou Timeline), modifiable ensuite via les boutons de la carte<br/>Choix : Direct (par défaut), Timeline |
| **Direction haut** | Commande action |  | Type générique : `CAMERA_UP` |
| **Direction bas** | Commande action |  | Type générique : `CAMERA_DOWN` |
| **Direction gauche** | Commande action |  | Type générique : `CAMERA_LEFT` |
| **Direction droite** | Commande action |  | Type générique : `CAMERA_RIGHT` |
| **Widgets supplémentaires** | Liste de widgets |  | Widgets supplémentaires affichés dans la vue détails |

## Variables pour textes dynamiques

Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).

| Variable | Description |
|---|---|
| `#room#` | Pièce |

<!-- AUTO:CONFIG:END -->
