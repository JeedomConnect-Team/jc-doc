---
id: add-equipment
sidebar_position: 1
---

# Ajouter des équipements

Vous pouvez ajouter des équipements dans le plugin de façon standard.

:::caution
1 équipement = 1 appareil muni de l'application
:::

![](/img/eqConfig.png)

A la création d'un équipement, une clé API, ainsi qu'un QR Code est automatiquement généré avec les informations de configuration du plugin. Lors du démarrage de l'application, vous pourrez alors entrer manuellement vos identifiants jeedom, ou bien scanner le QR Code. Une fois connecté, l'équipement et l'appareil sont liés. Pour vous connecter avec un autre appareil, il vous faut le *détacher*  en cliquant sur le bouton associé.

La configuration d'un équipement consiste en un fichier JSON configurable avec l'assistant, et que vous pouvez exporter / importer. Si vous voulez par exemple cloner un équipement, ajoutez en un nouveau et utiliser l'exportation / importation.  

Le dernier bouton permet lui de transmettre votre fichier de configuration complet, en cas de problème, au développeur. Ce fichier ne DOIT PAS être importé sur un autre équipement JeedomConnect.