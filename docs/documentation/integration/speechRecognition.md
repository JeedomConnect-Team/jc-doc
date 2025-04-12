---
sidebar_position: 4
---

# Reconnaissance vocale

L'application utilise le moteur principal configuré sur votre appareil pour la reconnaissance vocale. Si aucun moteur n'est installé sur votre appareil Android, vous pouvez [installer celui de Google](https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox&hl=en).
Il existe deux méthodes pour activer la reconnaissance :

- A l'aide du bouton de la barre du haut (Accessible depuis le menu Préférences/Reconnaissance vocale)
- A l'aide d'un mot clé (hotword) à prononcer

Pour activer la détection de mots clés, un assistant vous guide dans l'application.

<img src='../../../../img/voice4.png' width='200px' /><img src='/img/voice2.png' width='200px' /><img src='../../../../img/voice3.png' width='200px' /><img src='../../../../img/voice1.png' width='200px' />

Il est nécessaire de créer un compte gratuit chez [Picovoice](https://picovoice.ai/). Un compte permet :

- de créer 3 hotwords par mois (toutes plateformes confondues)
- d'utiliser la détection sur 3 appareils différents

Il est possible de créer autant de compte gratuit que vous le souhaitez.
Une fois le compte créé, vous vous rendrez sur la [console](https://console.picovoice.ai/) pour :

- Récupérer la `clé d'accès` et l'enregistrer dans l'application
- Créer vos hotwords personnalisés

Chaque mot clé est 'entraîné' par l'IA de Picovoice et est spécifique à une langue et une plateforme (Android ou iOS).
Une fois créé, vous les téléchargez directement sur votre appareil et indiquez à l'appli le fichier `.zip`.

Pour le bon fonctionnement, tous les hotwords doivent avoir la même langue (et la même plateforme de destination).

Chaque hotword peut avoir sa propre configuration, réglage de la sensibilité, destination vers Jeedom (Interaction, Commande message ou Scénario) et traitement de la réponse.

La détection fonctionne dans les cas suivants :

- Application ouverte et en premier plan
- Android et service d'arrière plan activé
