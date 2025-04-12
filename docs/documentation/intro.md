---
title: Introduction
sidebar_position: 1
---


Le projet **Jeedom Connect** se compose de deux parties :

- un **plugin** pour Jeedom
- une **application** pour Android / iOS.  

Vous trouverez ici une documentation pour la mise en place et l'utilisation de ces deux éléments.

## Premiers pas {#getStarted}

Pour utiliser Jeedom Connect vous aurez besoin :

- Une installation fonctionnelle de Jeedom
- Le plugin Jeedom Connect disponible sur le Market Jeedom <a href="https://market.jeedom.com/index.php?v=d&p=market_display&id=4077" target="_blank"><img src='../../img/logo-MARKET.svg' width='10%' zoom="false" /></a>
- L'application Jeedom Connect sur le Play Store <a href="https://play.google.com/store/apps/details?id=com.jeedomconnect.app" target="_blank"><img src='../../img/playstore.png' width='10%' zoom="false"/></a>  ou bien l'application JeeConnect sur l'App Store <a href="https://apps.apple.com/us/app/jeeconnect/id1566533727" target="_blank"><img src="../../img/applestore.png" width='10%' zoom="false"/></a>  

Les versions entre le plugin et l'application doivent strictement être identiques, dans le cas inverse vous obtiendrez un message d'erreur vous demandant de réaligner l'ensemble avec la mise à jour du plugin et de l'application.

De façon très simple donc :

- version du plugin en beta <===> version de l’application en beta
- version du plugin en stable <===> version de l’application en stable

<table className="core-table">
  <thead>
    <tr>
      <th>Plugin</th>
      <th>Application</th>
      <th>Résultat</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Stable</td>
      <td>Stable</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Beta</td>
      <td>Beta</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>---</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
      <td>Beta</td>
      <td>Stable</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Stable</td>
      <td>Beta</td>
      <td>❌</td>
    </tr>
    </tbody>
</table>

:::note
Le système Android dispose de deux versions différentes :

- La version du Play Store
- La version APK qui dispose de [Fonctionnalités](#features) supplémentaires

**Ces deux versions ne peuvent pas cohabiter sur un même appareil.**
:::

### Pré-requis

<table className="core-table">
  <thead>
    <tr>
      <th><strong>Installation</strong></th>
      <th>Version</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jeedom</td>
      <td>&ge; 4.2</td>
    </tr>
    <tr>
      <td><img alt="Android" src="../../img/android.svg" width="20" zoom="false" />Android</td>
      <td>&ge; 6 (Services Google requis)</td>
    </tr>
    <tr>
      <td><img alt="iOS" src="../../img/apple.svg" zoom="false" />iOS</td>
      <td>&ge; 13</td>
    </tr>
    </tbody>
</table>

## Fonctionnalités {#features}

<table className="core-table">
  <thead>
    <tr>
      <th><strong>Interface</strong></th>
      <th><img alt="Android" src="../../img/android.svg" zoom="false" />Android (Store)</th>
      <th><img alt="Android" src="../../img/android.svg" zoom="false" />Android (APK)</th>
      <th><img alt="iOS" src="../../img/apple.svg" zoom="false" />_iOS</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>Affichage et gestion des équipements domotiques et scénarios</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Affichage et gestion des caméras</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Historiques sous forme de graphique ou tableau</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Sécuriser les actions avec données biométriques</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Personalisation poussée de l'interface</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Communication en WebSocket</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th><strong>Intégration</strong></th>
      <th><img alt="Android" src="../../img/android.svg" zoom="false" />Android (Store)</th>
      <th><img alt="Android" src="../../img/android.svg" zoom="false" />Android (APK)</th>
      <th><img alt="iOS" src="../../img/apple.svg" zoom="false" />iOS</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/docs/documentation/integration/notifications">Notifications Push</a></td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td><a href="/docs/documentation/integration/geoloc">Géolocalisation</a></td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td><a href="/docs/documentation/integration/service">Service d'arrière-plan</a></td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Alertes critiques iOS</td>
      <td></td>
      <td></td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Réception/Envoie de SMS</td>
      <td></td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td><a href="/docs/documentation/integration/speechRecognition">Reconnaissance vocale</a></td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Reconnaissance faciale</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Stream vidéo de la caméra</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Ecran d'accueil (Launcher)</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Deep Links</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Raccourcis d'application</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Raccourcis de paramètre rapides</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Contrôles d'appareils par le système</td>
      <td>✅</td>
      <td>✅</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Prix

Le plugin, ainsi que l'application sont complètement **gratuits** et le resteront.  
L'équipe Jeedom Connect ne dispose d'aucun accord commercial ou financier avec qui que ce soit.  
Si l'application vous plaît et que vous souhaitez nous soutenir, c'est <a href="/docs/documentation/donate">par ici</a> !  
