---
title: Introduction
sidebar_position: 1
---


Le projet **Jeedom Connect** se compose de deux parties :

- un **plugin** pour Jeedom
- une **application** pour Android / iOS.  

Vous trouverez ici une documentation pour la mise en place et l'utilisation de ces deux éléments.

## Pour bien commencer {#getStarted}

Pour utiliser Jeedom Connect vous aurez besoin :

- Une installation fonctionnelle de Jeedom
- Le plugin Jeedom Connect disponible sur le Market Jeedom <a href="https://market.jeedom.com/index.php?v=d&p=market_display&id=4077" target="_blank"><img src='../../img/logo-MARKET.svg' width='10%' zoom="false" /></a>
- L'application Jeedom Connect sur le Play Store <a href="https://play.google.com/store/apps/details?id=com.jeedomconnect.app" target="_blank"><img src="../../img/applestore.png" width="10%" zoom="false"/></a>  

#### {#version-table}

Les versions entre le plugin et l'application doivent strictement être identiques, dans le cas inverse vous obtiendrez un message d'erreur vous demandant de réaligner l'ensemble avec la mise à jour du plugin et de l'application.

De façon très simple donc :

- version du plugin en beta `<===>` version de l’application en beta
- version du plugin en stable `<===>` version de l’application en stable

| Plugin  | Application | Résultat |
|---------|-------------|----------|
| Stable  | Stable      | ✅       |
| Beta    | Beta        | ✅       |
| ---     | ---         | ---      |
| Beta    | Stable      | ❌       |
| Stable  | Beta        | ❌       |

:::note
Le système Android dispose de deux versions différentes :

- La version du Play Store
- La version APK qui dispose de [Fonctionnalités](#features) supplémentaires

**Ces deux versions ne peuvent pas cohabiter sur un même appareil.**
:::

### Pré-requis

| **Installation** | **Version**                     |
|-------------------|---------------------------------|
| Jeedom           | &ge; 4.2                        |
| ![Android](/img/android.svg) Android | &ge; 6 (Services Google requis) |
| ![iOS](/img/apple.svg) iOS         | &ge; 13                        |

## Fonctionnalités {#features}

| **Interface** | Android (Store) | Android (APK) | iOS |
|---------------|------------------|---------------|-----|
| Affichage et gestion des équipements domotiques et scénarios | ✅ | ✅ | ✅ |
| Affichage et gestion des caméras | ✅ | ✅ | ✅ |
| Historiques sous forme de graphique ou tableau | ✅ | ✅ | ✅ |
| Sécuriser les actions avec données biométriques | ✅ | ✅ | ✅ |
| Personnalisation poussée de l'interface | ✅ | ✅ | ✅ |
| Communication en WebSocket | ✅ | ✅ | ✅ |

| **Intégration** | Android (Store) | Android (APK) | iOS |
|------------------|------------------|---------------|-----|
| [Notifications Push](/docs/documentation/integration/notifications) | ✅ | ✅ | ✅ |
| [Géolocalisation](/docs/documentation/integration/geoloc) | ✅ | ✅ | ✅ |
| [Service d'arrière-plan](/docs/documentation/integration/service) | ✅ | ✅ |     |
| Alertes critiques iOS |     |     | ✅ |
| Réception/Envoi de SMS |     | ✅ |     |
| [Reconnaissance vocale](/docs/documentation/integration/speechRecognition) | ✅ | ✅ | ✅ |
| Reconnaissance faciale | ✅ | ✅ |     |
| Stream vidéo de la caméra | ✅ | ✅ |     |
| Écran d'accueil (Launcher) | ✅ | ✅ |     |
| Deep Links | ✅ | ✅ | ✅ |
| Raccourcis d'application | ✅ | ✅ | ✅ |
| Raccourcis de paramètres rapides | ✅ | ✅ |     |
| Contrôles d'appareils par le système | ✅ | ✅ |     |

## Point fort / Point faible

Le plus **gros point** fort de JeedomConnect c'est que **tout est totalement personnalisable**, rendant alors les possibilités (*presque*) infinies !  

Le point faible ... et oui il y en a un... pour laisser la possibilité à chacun de faire ce qu'il veut, comme il veut, il faut mettre un peu la main à la patte pour réaliser son besoin et avoir une interface complètement à soi !  

Le "plus long" c’est de savoir comment on souhaite organiser ses écrans : "ah mais non plutôt comme ça", "ah et ça là!", "un autre menu ? sous-menu ?", … au final il y a tellement de possibilités qu'il n'est pas surprenant de refaire quelques fois sa configuration pour finalement trouver LE truc qui nous convient ! mais généralement ... ça en vaut la peine !

## Prix

Le plugin, ainsi que l'application sont complètement **gratuits** et le resteront.  
L'équipe Jeedom Connect ne dispose d'aucun accord commercial ou financier avec qui que ce soit.  
Si l'application vous plaît et que vous souhaitez nous soutenir/offrir un café, c'est [par ici](/docs/donate) !  
