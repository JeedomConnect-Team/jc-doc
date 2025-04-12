---
id: plugin-config
title: Configuration du plugin
sidebar_position: 1
---

La configuration du **Plugin** s'effectue depuis Jeedom : `Plugins` / `Communication` / `Jeedom Connect` / `Gestion` / `Configuration`.

## Logs et surveillance

![Logs](/img/plugin/plugin-logs.png)

En cas de problèmes, vous trouverez ici les logs du plugin. Activez le mode **Debug** pour plus d'informations.  
En usage normal, il est fortement conseillé de rester sur le niveau **Defaut**.

## Démon

![Démon](/img/plugin/plugin-daemon.png)

Jeedom Connect est équipé d'un démon qui permet d'établir la connexion en **Websocket** avec l'application.
:::note 
Le démon est automatiquement désactivé si aucun de vos équipement n'utilise le protocole **Websocket**.
:::

## Configurer l'accès à votre jeedom

![Configuration](/img/plugin/plugin-config.png)

Il y a plusieurs champs  pré-remplis que vous pouvez modifier. Des placeholder sont indiqués sur chacun d'entre eux. S'ils vous semblent corrects, inutile de les modifier.

- **Adresse http externe** : Indiquez ici votre adresse d'accès à Jeedom depuis l'extérieur de votre domicile.
- **Adresse http interne** : Adresse de Jeedom sur votre réseau local.
- **Activer la connexion par Websocket** : Indiquera à l'application si vous préférez utiliser le protocole Websocket pour la communication avec vos appareils. Notez tout de même que l'adresse HTTP est nécessaire au bon fonctionement de certains services (images persos, géolocalisation, actions sur notifications)
- **Port d'écoute du websocket** : Sauf si vous avez une application qui utilise ce port, vous n'avez pas besoin de le modifier. En cas de modification, n'oubliez pas de redémarrer le démon.
- **Adresse externe websocket** : Adresse websocket accessible depuis l'extérieur (nécessite une configuration de votre réseau)
- **Adresse interne websocket** : Adresse websocket sur votre réseau local

Si vous modifiez un de ces champs, il faudra bien sûr sauvegarder, puis re-générer les QR Code des équipements. En cas d'utilisation du HTTP, il faudra aussi redémarrer l'appli.

:::warning Attention
Pour le bon fonctionnement de l'application, il est essentiel que les adresses **http** soient correctement renseignées.
:::

## Personnaliser le plugin

![Personnalisation](/img/plugin/plugin-custom.png)

### Chemin pour les images perso

Vous avez la possibilité de personnaliser le chemin d'accès à vos images/icônes.  
Par défaut, les images personnalisées du plugin sont stockées sous `plugins/JeedomConnect/data/img/user_files/`.  
  
Vous pouvez choisir d'utiliser un autre emplacement en renseignant le champ `Chemin pour les images perso` le chemin d'accès au répertoire qui contient vos images et icônes personnels. 
:::caution

Le chemin ne dois PAS contenir la racine

> par exemple, si vous souhaitez utiliser le répertoire `/var/www/html/data/img/` alors indiquez : `data/img/` dans le champ  (attention au dernier `/`!)
:::

### Tri des widgets
Tri par défaut sur la page principale du plugin et dans l'assistant de configuration.

### Qr Code
#### Logo JC
Insère le logo JC à l'intérieur du qr code de chaque équipement.

#### Afficher sur page
Au survol d'un équipement, son QR Code est affiché en haut de la page principale du plugin.

### Création de widget

#### Mode strict
Impose que tous les types génériques nécessaires soient correctement configurés pour la création de widget en masse mais réduit le nombre d'erreur de l'assistant.

#### Mode expert
Permet de laisser l'utilisateur modifier les commandes manuellement.

### Logs

#### Plugin verbose
Affiche plus de logs que DEBUG
:::danger Attention
A n'utiliser qu'en cas de demande par un développeur
:::

#### Démon
Vous pouvez choisir un autre niveau de log pour le démon.

### Sauvegardes
Nombre de copies de sauvegarde de vos préférences applicatives que vous souhaitez conserver.



## Localisation

![Localisation](/img/plugin/plugin-localization.png)
## la Zone des Dangers

![Danger](/img/plugin/plugin-danger.png)

Les actions disponibles dans cette partie sont à utiliser avec précaution. Vous pouvez en effet perdre l'intégalité de vos configurations si vous ne faites pas attention à ce que vous faites.  

- **Réinitialiser** : efface les configurations de l'ensemble de vos équipements. Vous devrez donc redéfinir quels sont les widgets que vous souhaitez avoir sur chacun de vos équipements  
- **Supprimer** : remet à 0 l'intégralité du plugin. Vous perdrez TOUTES vos configurations et l'ensemble de vos widgets seront supprimés. (comme si vous installiez le plugin pour la première fois)  
- **Lister** : permet d'obtenir la liste des widgets (id) :
  - non-utilisés : existant mais rattaché à aucun équipement
  - non-existants : présent dans le fichier de configuration d'un équipement, mais non créé sur le plugin (mauvaise migration par exemple)
  - tous : liste le nombre de fois où un wigdet est utilisé (format => "widget ID" : "nombre d'utilisation")  
- **Exporter**/**Importer** : permet d'extraire l'ensemble de la configuration des widgets, et les réimporter sur une autre instance jeedom  
- **Migrer** : transforme les fichiers de configuration dans le nouveau format attendu du plugin  
