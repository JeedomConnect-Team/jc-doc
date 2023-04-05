---
sidebar_position: 4
---

# Commandes

Par défaut les commandes suivantes sont disponibles dans chaque équipement.  

## Commandes infos  

- `Batterie` : Permet de connaitre le % de batterie de votre appareil. L'information est remontée si l'application est ouverte ou si le service est activé
- `Position` : Lorsque la géolocation est activée, donne les coordonnées GPS de l'appareil sous la forme `latitude,longitude`. Il est aussi possible d'ajouter l'altitude, l'activité et la batterie en cochant la case correspondante dans les paramètres de l'équipement.
- `Activité` : Lorsque la géolocalisation est activée, donne l'activité en cours sur l'appareil. LValeurs possibles : ``still``, ``on_foot``, ``running``, ``on_bicycle`` et ``in_vehicle``.
- `Etat écran` *[Android, Service]* : Binaire qui permet de connaître l'état allumé / éteint de l'écran
- `En charge`  *[Android, Service]* : Binaire qui permet de savoir si l'appareil est en charge
- `Etat Bluetooth` *[Android, Service]* : Binaire qui permet de savoir si un périphérique bluetooth est connecté
- `Etat Wifi` *[Android, Service, Localisation autorisée & activée]* : Binaire qui permet de savoir si l'appareil est connecté à un réseau wifi
- `Adresse IP` *[Android, Service]* : Lorsque l'appareil est relié au réseau wifi, indique l'adresse IP
- `Réseau wifi (SSID)` *[Android, Service, Localisation autorisée & activée]* : Lorsque l'appareil est relié au réseau wifi, indique le nom du point d'accès
- `Visage présent` *[Android]* : indique si un visage est détecté devant l'écran de l'équipement
- `Volume actuel` *[Android, Service]* pour connaitre les 6 différents volumes de son appareil (en fonction des OS et surcouche). La commande est valorisée par défaut avec l'ensemble des volumes disponible, selon le format suivant : `Alarme;Appel;Musique;Notification;Sonnerie;Système;`
- `Prochaine alarme` *[Android, Service]* : permet de récupérer (au format timestamp) l'heure de la prochaine alarme
- `Package Prochaine Alarme`*[Android, Service]* : permet de savoir quel est le package qui déclenchera la prochaine alarme sur votre téléphone

## Commandes actions

- `Notification` : Commande de notification par défaut
- `Afficher page` : Lorsque l'application est en premier plan, permet de basculer sur une page donnée. Il s'agit d'une commande action message. Pour l'utiliser, commencer par repérer l'`id` de la page. Cell-ci est disponible en survolant votre souris sur les menus de l'assistant de configuration. Indiquez alors cet `id` dans le champs `Id page` de la commande.
- `Lancer App` *[Android]* : Lorsque l'application est en premier plan ou que le service est activé, permet de lancer sur votre appareil une application. Il s'agit d'une commande action message qui accepte dans son champs ou `Nom de l'application` le nom du package de l'application. L'autorisation système `Superposition sur d'autres applis` doit être activée (Android >= 10)
- `Détacher` : Permet de détacher l'appareil de l'équipement.
- `Notifier les appareils JC` : Permet d'envoyer un même message à plusieurs appareils. (cf la configuration plus bas !)  
- `Pop-up` : Permet d'afficher un pop-up sur votre appareil. Elle sera affichée directement dans l'application si celle-ci est ouverte, et sinon en popup système *[Android seulement]*.
- `Modifier Préférences Appli` : Permet de modifier certaines options de votre application. Faites un choix dans la liste déroulante, puis indiquez la valeur à mettre si nécessaire : `ON`, `OFF`, `MARCHE`, `ARRET`
Liste des actions (fonctionnent même appli tuée) :
  - `Schéma thème` : entrer l'id du schéma à appliquer
    <details>
    <summary>Liste des schémas</summary>
      jeedomConnect,    material,    materialHc,    blue,    indigo,  hippieBlue,
    aquaBlue,    brandBlue,    deepBlue,    sakura,    mandyRed,    red,   redWine,    purpleBrown,    green,    money,    jungle,    greyLaw,    wasabi,    gold,    mango,    amber,    vesuviusBurn,    deepPurple,ebonyClay,    barossa,    shark,    bigStone,    damask,    bahamaBlue,
    mallardGreen,    espresso,    outerSpace,    blueWhale,    sanJuanBlue,
    rosewood,    blumineBlue,    reactDash,    materialBaseline,    verdunHemlock,    dellGenoa,    customColors
    </details>
  - `Activer mode sombre` : `ON`, `OFF` ou tout autre chose pour le mode auto
  - `Activer le tracking` : `MARCHE` ou `ARRET`
  - `Recharger les données`
  - `Service JC` *[Android]* : `ON`, `OFF`, permet d'activer / désactiver le service.
  - `Envoyer un SMS` *[Android, Version APK sur git uniquement]* : Permet d'envoyer un SMS.
Champ `Titre` : numéro du destinataire.
Champ `Message` : contenu du SMS.
Cette fonction est utilisable dans n'importe quel état de l'application (premier-plan, arrière-plan, tuée)
Pour utiliser cette fonction, vous devez d'abord vous rendre dans les autorisations de l'appli puis accepter celle correspondant à l'envoie de SMS.
- `Allumer l'écran` *[Android]*
- `Eteindre l'écran` *[Android, définir JC comme appli d'administration]* : Cette action requiert que l'application Jeedom Connect soit définie en tant qu'`Appli d'administration du système` (généralement dans la section `Sécurité` des paramètres de votre appareil).
- `Jouer un son` *[Android, Service]* : Permet de lire un fichier audio sur l'appareil. Indiquez une URL complète, ou bien un chemin absolu sur votre installation Jeedom (par exemple `/var/www/html/data/bip-bip.mp3`), ou bien le chemin d'un fichier local sur votre appareil (par exemple `file:///storage/emulated/0/Music/file.ogg`)
- `TTS` : Permet d'utiliser la fonction `Text to Speach` de votre appareil pour lire un texte. Sur iOS, l'application doit être ouverte
- `Mode sonnerie` *[Android]* : Permet d'activer un mode de sonnerie `Silencieux`, `Normal` ou `Vibreur`. Dans le champs `Titre` de la commande, indiquez l'un des mots clé `silent`, `normal`, `vibrate`. Pour Android N et supérieur, l'application a besoin de l'autorisation `Accès au mode "Ne pas déranger"`.
- `Modifier Volume` : Permet de régler le volume de l'appareil (en %). Pour Android, vous pouvez spécifier en plus dans champs `Titre` de la commande le canal audio à modifier, parmi `music`, `call`, `system`, `ring`, `alarm`, `notification`.  
- `Commande shell` *[Android]*, **[Root]** : Si votre appareil possède les privilèges root, permet d'exécuter n'importe quelle commande. A la première utilisation, votre gestionnaire de `Super utilisateur` vous demandera l'autorisation.
  <details>
  <summary>Exemples de commandes</summary>
  
  - Lancer une activité : `su -c am start -n com.jeedomconnect.app/.MainActivity`  
  - Activer / désactiver le bluetooth : `su -c service call bluetooth_manager 6` (changer 6 en 8 pour désactiver)  
  - Activer / désactiver le wifi : `su -c svc wifi enable` (changer enable en disable pour désactiver)  
  - Redémarrer l'appareil : `su -c reboot`  

  </details>