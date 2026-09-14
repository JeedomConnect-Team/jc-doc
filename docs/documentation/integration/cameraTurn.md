---
id: cameraTurn
title: Caméra hors LAN (relais TURN)
sidebar_position: 6
---

Les widgets caméra utilisant l'option **"Flux vidéo optimisé (go2rtc)"** peuvent afficher le flux vidéo en **WebRTC** (faible latence, quasi instantané) même lorsque vous consultez votre caméra depuis l'extérieur de votre réseau local. Pour que cela fonctionne hors LAN, un **relais TURN** est nécessaire : un service intermédiaire qui permet à votre téléphone et à votre Jeedom de se joindre malgré les box/routeurs qui bloquent les connexions entrantes directes.

Cette configuration se trouve sur la page `Configuration` du plugin JeedomConnect, section **Relais TURN pour le flux caméra WebRTC hors LAN**.

:::info
Cette configuration est **entièrement facultative**. Sans elle, vos caméras hors LAN continuent de fonctionner normalement, simplement avec un flux vidéo un peu moins réactif (mode MSE, sans relais).
:::

## Les 3 possibilités

| | Coût | Compte à créer | Volume |
|---|---|---|---|
| **Pas de TURN configuré** | Gratuit | Aucun | Illimité (mode MSE, moins réactif) |
| **Gratuit - mon propre compte Cloudflare** | Gratuit | Un compte Cloudflare (carte bancaire demandée, non débitée sous le seuil) | 1000 Go/mois |
| **Payant - abonnement géré** | 6€/an | Aucun (licence envoyée par e-mail) | Essai : 4 Go/7 jours sans CB, puis 10 Go/mois |

Le choix se fait via le menu déroulant **Mode**, en haut de la section TURN.

## Mode gratuit : votre propre compte Cloudflare

Vous créez vous-même un compte Cloudflare (gratuit jusqu'à 1000 Go de données relayées par mois, largement suffisant pour un usage personnel) et renseignez votre **Turn Key ID** et votre **API Token** dans le plugin. Cloudflare demande une carte bancaire pour activer le service, mais elle n'est débitée que si vous dépassez ce palier gratuit.

Un bouton **Tester mes identifiants** permet de vérifier que tout est correctement configuré avant de l'utiliser en conditions réelles.

👉 Le pas-à-pas complet avec captures d'écran se trouve dans le [tutoriel dédié](../../tutorials/cloudflare_turn.md).

## Mode payant : abonnement géré

Pour les utilisateurs qui ne souhaitent pas créer de compte Cloudflare, JeedomConnect propose un service tout compris : c'est le développeur qui héberge le relais TURN pour vous, moyennant un abonnement.

### Essai gratuit, sans carte bancaire

Un essai de **7 jours / 4 Go** est disponible, sans qu'aucune carte bancaire ne soit demandée. Contrairement à d'autres essais qui démarrent automatiquement dès la première utilisation, celui-ci nécessite un **clic explicite** sur le bouton **Démarrer mon essai gratuit (7 jours)** : le délai ne commence qu'à cet instant, pour être certain que vous savez quand il se termine.

:::caution
Une fois démarré, l'essai ne peut ni être mis en pause, ni être réinitialisé.
:::

### Abonnement

Passé l'essai (ou pour s'abonner directement), un abonnement à **6€/an** donne accès à **10 Go/mois**, sans limite de durée. L'abonnement se souscrit via le lien **S'abonner** de la section, qui vous redirige vers la boutique en ligne (Lemon Squeezy). Une **clé de licence** vous est envoyée par e-mail après paiement : renseignez-la dans le champ **Clé de licence**, sauvegardez la page, puis cliquez sur **Activer ma licence**.

Un bouton **Tester ma licence** (ou l'essai en cours) permet de vérifier à tout moment que tout fonctionne.

### Suivi de consommation

Une fois l'essai démarré ou la licence activée, un encart affiche en temps réel :

- le nombre de jours restants (essai) ou le mois en cours (abonnement)
- la consommation réelle en Go, par rapport au quota (4 Go pour l'essai, 10 Go/mois pour l'abonnement)

### Quota dépassé ou licence invalide

Si le quota est atteint, si l'essai est terminé, ou si la licence n'est plus valide (abonnement expiré ou résilié), l'accès au mode payant est **automatiquement bloqué** : les caméras hors LAN ne pourront plus se connecter via ce relais tant que la situation n'est pas corrigée (renouvellement, nouvelle licence, ou attente du mois suivant pour un abonnement actif).

Dans ce cas, un message apparaît dans le **centre de messages de Jeedom** (l'icône en forme de cloche dans le bandeau Jeedom) pour vous prévenir de la raison exacte. Ce message disparaît automatiquement dès que la situation est corrigée.

## Redémarrer go2rtc

go2rtc (le composant qui gère les flux vidéo) n'est pas le démon principal du plugin et n'apparaît donc pas sur la page équipement avec les contrôles habituels de démon Jeedom. Un bouton **Redémarrer go2rtc**, situé à côté du sélecteur de **Mode**, permet de le relancer manuellement - notamment nécessaire après un changement de mode TURN pour que le nouveau relais soit pris en compte.
