---
id: webviewTunnel
title: Web View hors LAN (tunnel)
sidebar_position: 7
---

Le widget **Web View** permet d'afficher n'importe quelle page web (design, dashboard, ou interface d'un autre service comme Zigbee2MQTT, Frigate, une caméra IP...) directement dans l'application. Lorsque cette page n'est accessible que depuis votre réseau local (champ **URL locale**), JeedomConnect peut créer automatiquement un **tunnel** pour la rendre également accessible hors de votre domicile, sans aucune configuration réseau de votre part (pas de redirection de port, pas de nom de domaine personnel).

:::info
Cette fonctionnalité est **entièrement automatique et facultative**. Elle se déclenche dès qu'un widget Web View possède une **URL locale** renseignée, et que les champs **URL** et **Commande URL** sont vides. Aucun compte à créer, contrairement au relais TURN caméra.
:::

## Fonctionnement

Contrairement à l'ancien système de proxy (réécriture de page à la volée), JeedomConnect utilise ici un **vrai tunnel réseau** ([Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/)) : votre appareil communique directement avec la page cible via l'edge Cloudflare, comme s'il était sur votre réseau local. Cela permet de faire fonctionner nativement des pages plus complexes (WebSocket, Server-Sent Events, routage par chemin...) qui ne fonctionnaient pas de façon fiable avec l'ancienne méthode.

Dès l'enregistrement d'un widget concerné, un nom d'hôte public unique lui est attribué, et un petit démon (`cloudflared`) est installé puis démarré automatiquement sur votre Jeedom pour établir la liaison. Vous n'avez rien à faire de plus : le widget utilisera automatiquement la bonne adresse selon que vous êtes sur le réseau local ou non.

:::caution
Si votre widget affiche une page vide ou une erreur hors LAN alors que l'**URL locale** est bien renseignée, vérifiez que ce champ contient bien l'adresse et non le champ **URL** (celui-ci est réservé à l'ID d'un design, au mot-clé `dashboard`, ou à une URL déjà accessible depuis l'extérieur).
:::

## Quota

Comme pour le relais TURN caméra, ce service est hébergé par le développeur de JeedomConnect et donc soumis à un quota, par installation Jeedom :

| | Widgets tunnelés |
|---|---|
| **Sans abonnement** | 1 |
| **Avec abonnement TURN géré actif** (ou essai en cours) | 10 |

Si vous atteignez ce quota, l'enregistrement d'un nouveau widget hors LAN échoue (un message d'erreur l'indique dans le plugin). Pour libérer un emplacement, videz le champ **URL locale** d'un widget existant (ou supprimez-le). Pour augmenter le quota à 10, un [abonnement au service TURN géré](./cameraTurn.md) suffit - même s'il est initialement destiné aux caméras, il augmente aussi ce quota.

:::caution Quota qui diminue (fin d'essai, résiliation)
Si votre quota redescend (essai TURN terminé sans abonnement, résiliation...) et que vous avez plus de widgets tunnelés que ce nouveau quota ne le permet, les widgets **excédentaires sont automatiquement désactivés** (hostname libéré) - les plus récemment activés en premier, les plus anciens sont conservés en priorité. Ce contrôle s'effectue périodiquement en arrière-plan, pas instantanément à la minute où l'abonnement expire.
:::

### Réactiver un widget après un changement de quota

Si vous vous abonnez (ou démarrez l'essai) après avoir été bloqué par le quota, **une simple sauvegarde du widget concerné suffit** à retenter l'enregistrement automatiquement - inutile de retoucher l'**URL locale**.

En revanche, si un widget était déjà tunnelé avec succès puis a été désactivé par le mécanisme ci-dessus (quota redescendu entre-temps), le plugin ne peut pas savoir spontanément que son tunnel a été coupé côté serveur : une sauvegarde sans rien changer ne relance donc pas l'enregistrement dans ce cas précis. Il faut alors modifier légèrement puis valider à nouveau le champ **URL locale** (par exemple ajouter puis retirer un caractère) pour forcer la reprise.

## Gestion depuis le plugin

Rendez-vous sur la page `Gestion` du plugin JeedomConnect, puis cliquez sur **Services de streaming**, section **Webview - Accès hors LAN**. Vous y trouverez :

- Le statut du démon `cloudflared` et un bouton pour le redémarrer si besoin
- Votre quota actuel (nombre de widgets tunnelés / quota total)
- La liste des widgets actuellement tunnelés, avec leur nom et leur nom d'hôte public
