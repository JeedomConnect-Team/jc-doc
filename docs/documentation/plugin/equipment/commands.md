---
sidebar_position: 3
---

# Commandes

Par défaut les commandes suivantes sont disponibles dans chaque équipement.  

## Commandes infos  

| **Nom**| **Description & Exemple** | **Android** | **iOS** |
|---|---|---|---|
| Activité | Lorsque la géolocalisation est activée, donne l'activité en cours sur l'appareil. Valeurs possibles : `still`, `on_foot`, `running`, `on_bicycle`, `in_vehicle`.| ✅ |✅ |
| Adresse IP | Lorsque l'appareil est relié au réseau Wi-Fi, indique l'adresse IP.| ✅ <br/>*Service activé*| ❌ |
| Batterie | Permet de connaître le pourcentage de batterie de votre appareil. L'information est remontée si l'application est ouverte ou si le service est activé. | ✅ |✅ |
| Distance | Calcule la distance en mètre qui sépare votre position actuelle et le lieu dans la Configuration du plugin partie `Localisation` |✅ |✅ |
| En charge| Binaire qui permet de savoir si l'appareil est en charge.| ✅ <br/>*Service activé*| ❌ |
| État Bluetooth | Binaire qui permet de savoir si un périphérique Bluetooth est connecté.| ✅ <br/>*Service activé*| ❌ |
| État écran | Binaire qui permet de connaître l'état allumé/éteint de l'écran.| ✅ <br/>*Service activé*| ❌|
| État Wifi| Binaire qui permet de savoir si l'appareil est connecté à un réseau Wi-Fi. | ✅ <br/>*Service activé, Localisation autorisée et activée* | ❌|
| Package Prochaine Alarme | Permet de savoir quel est le package qui déclenchera la prochaine alarme sur votre téléphone. | ✅ <br/>*Service activé*| ❌ |
| Position | Lorsque la géolocalisation est activée, donne les coordonnées GPS de l'appareil sous la forme `latitude,longitude`. Il est aussi possible d'ajouter l'altitude, l'activité et la batterie en cochant la case correspondante dans les paramètres de l'équipement. | ✅ |✅|
| Prochaine alarme | Permet de récupérer (au format timestamp) l'heure de la prochaine alarme.| ✅ <br/>*Service activé*| ❌ |
| Réseau Wi-Fi (SSID)| Lorsque l'appareil est relié au réseau Wi-Fi, indique le nom du point d'accès.| ✅ <br/>*Service activé, Localisation autorisée et activée* |❌ |
| Visage présent | Indique si un visage est détecté devant l'écran de l'équipement. | ✅| ❌ |
| Volume actuel| Permet de connaître les 6 différents volumes de son appareil (en fonction des OS et surcouches). La commande est valorisée par défaut avec l'ensemble des volumes disponibles, selon le format suivant : `Alarme;Appel;Musique;Notification;Sonnerie;Système;`. | ✅ <br/>*Service activé*| ❌ |

## Commandes actions

| **Nom** | **Description & Exemple** | **Android** | **/iOS** |
|---|---|---|---|
| Afficher page| Lorsque l'application est en premier plan, permet de basculer sur une page donnée. Il s'agit d'une commande action message. Pour l'utiliser, commencez par repérer l'`id` de la page. Celui-ci est disponible en survolant votre souris sur les menus de l'assistant de configuration. Indiquez alors cet `id` dans le champs `Id page` de la commande. |✅|❌|
| Allumer l'écran| Permet d'allumer l'écran de l'appareil.| ✅|❌|
| Commande shell | Permet d'exécuter une commande shell si l'appareil possède les privilèges root. [voir exemples](#shellexample) | ✅ <br/>**[Root]**, *nécessite l'autorisation du gestionnaire de `Super utilisateur`.*|❌ |
| Détacher | Permet de détacher l'appareil de l'équipement. |✅ |✅ |
| Envoyer un SMS | Permet d'envoyer un SMS. <br/>Champ `Titre` : numéro du destinataire. <br/>Champ `Message` : contenu du SMS. <br/>*Cette fonction est utilisable dans n'importe quel état de l'application (premier-plan, arrière-plan, tuée)* | ✅ <br/>*Version APK sur git uniquement*, nécessite l'autorisation d'envoi de SMS.|❌ |
| Éteindre l'écran | Permet d'éteindre l'écran de l'appareil. | ✅ <br/>*définir JC comme appli d'administration* |❌ |
| Jouer un son | Permet de lire un fichier audio sur l'appareil. Indiquez une URL complète, un chemin absolu sur Jeedom (ex. `/var/www/html/data/bip-bip.mp3`), ou un chemin local (ex. `file:///storage/emulated/0/Music/file.ogg`). | ✅ <br/>*Service activé* |❌ |
| Lancer App | Lorsque l'application est en premier plan ou que le service est activé, permet de lancer sur votre appareil une application. Il s'agit d'une commande action/message qui accepte dans son champs le `Nom de l'application` ou le nom du `package de l'application`.| ✅ <br/>*Nécessite l'autorisation `Superposition sur d'autres applis` (Android >= 10).*|❌ |
| Modifier Préférences Appli | Permet de modifier certaines options de l'application. <br/>- `Schéma thème` : entrer l'id du schéma à appliquer. [Voir les schéma dispo](#scheme) <br/>- `Activer mode sombre` : `ON`, `OFF` ou tout autre chose pour le mode auto <br/>- `Activer le tracking` : `MARCHE` ou `ARRET` <br/>- `Recharger les données` <br/>- `Service JC` *[Android]* : `ON`, `OFF`, permet d'activer / désactiver le service.|✅ | ✅|
| Modifier Volume| Permet de régler le volume de l'appareil (en %). Pour Android, spécifiez dans le champ `Titre` le canal audio à modifier : `music`, `call`, `system`, `ring`, `alarm`, `notification`. | ✅|✅ |
| Mode sonnerie| Permet d'activer un mode de sonnerie (`Silencieux`, `Normal`, `Vibreur`). Indiquez dans le champ `Titre` l'un des mots-clés : `silent`, `normal`, `vibrate`.|✅ <br/>*Nécessite l'autorisation `Accès au mode "Ne pas déranger"`.* |✅ |
| Notification | Commande de notification par défaut. | ✅| ✅|
| Notifier les appareils JC| Permet d'envoyer un même message à plusieurs appareils.| ✅|✅ |
| Obtenir infos | Rafraichis les informations enregistré sur l'équipement.|✅ <br/>*Service activé*|❌|
| Pop-up | Affiche un pop-up sur l'appareil. Si l'application est ouverte, il s'affiche dans l'application, sinon en pop-up système.|✅|❌|
| Supprimer la personnalisation | Retire la personnalisation faite sur un widget. L'information `widgetId`, attendue comme paramétre de la fonction, est visible dans la configuration du widget sur l'équipement | ✅| ✅|
| TTS| Utilise la fonction `Text to Speech` pour lire un texte. | ✅|✅ <br/>L'application doit être ouverte.|
| Visibilité Menu | Permet d'afficher ou de masquer un menu en indiquant son `id`. (propre à l'équipement) | ✅| ✅|
| Visibilité Widget | Permet d'afficher ou de masquer un widget en indiquant son `widgetId` (s'applique à tous les appareils) | ✅| ✅|

<details id="shellexample">
  <summary>Exemples de commandes Shell</summary>
  
- Lancer une activité : `su -c am start -n com.jeedomconnect.app/.MainActivity`  
- Activer / désactiver le bluetooth : `su -c service call bluetooth_manager 6` (changer 6 en 8 pour désactiver)  
- Activer / désactiver le wifi : `su -c svc wifi enable` (changer enable en disable pour désactiver)  
- Redémarrer l'appareil : `su -c reboot`  

</details>

<details id="scheme">
    <summary>Liste des schémas</summary>

jeedomConnect,    material,    materialHc,    blue,    indigo,  hippieBlue,
aquaBlue,    brandBlue,    deepBlue,    sakura,    mandyRed,    red,   redWine,    purpleBrown,    green,    money,    jungle,    greyLaw,    wasabi,    gold,    mango,    amber,    vesuviusBurn,    deepPurple,ebonyClay,    barossa,    shark,    bigStone,    damask,    bahamaBlue,
mallardGreen,    espresso,    outerSpace,    blueWhale,    sanJuanBlue,
rosewood,    blumineBlue,    reactDash,    materialBaseline,    verdunHemlock,    dellGenoa,    customColors
</details>
