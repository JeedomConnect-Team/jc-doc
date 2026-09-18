---
sidebar_position: 4
---

# Reconnaissance vocale

L'application utilise le moteur principal configuré sur votre appareil pour la reconnaissance vocale. Si aucun moteur n'est installé sur votre appareil Android, vous pouvez [installer celui de Google](https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox&hl=en).
Il existe deux méthodes pour activer la reconnaissance :

- A l'aide du bouton de la barre du haut (Accessible depuis le menu Préférences/Reconnaissance vocale)
- A l'aide d'un mot clé (hotword) à prononcer

## Détection de mot clé (hotword)

:::info
La détection de mot clé fonctionne **entièrement hors-ligne, directement sur l'appareil** (moteur [openWakeWord](https://github.com/dscripka/openWakeWord)). Aucun compte, aucune clé d'accès ni aucun service en ligne n'est nécessaire.
:::

Rendez-vous dans `Préférences` puis `Reconnaissance vocale`. Dans la carte `Hotword` :

- `Activation` active ou désactive l'écoute continue du mot clé (l'autorisation d'accès au microphone vous sera demandée si besoin)
- `Configuration` permet de choisir le mot clé et de régler la sensibilité de détection

### Choisir ou personnaliser le mot clé

Sur l'écran `Configuration du mot clé` :

- Un curseur permet de régler la **sensibilité** : plus elle est élevée, plus la détection est facile à déclencher, au prix d'un risque plus élevé de faux positifs.
- Trois mots clés sont proposés par défaut : `Hey Jarvis`, `Alexa` et `Computer`.

Vous pouvez également importer votre **propre mot clé personnalisé**, à condition de disposer d'un fichier `.tflite` entraîné avec openWakeWord (via son [notebook d'entraînement](https://github.com/dscripka/openWakeWord/blob/main/notebooks/automatic_model_training.ipynb), qui prend en charge plusieurs langues dont le français). Utilisez le bouton `+` en haut de la carte `Mot clé` pour sélectionner votre fichier : il est copié sur l'appareil et apparait immédiatement dans la liste, sélectionnable comme n'importe quel mot clé natif. Un glissement (swipe) sur un mot clé personnalisé permet de le supprimer.

### Que se passe-t-il après la détection ?

Une fois le mot clé détecté, l'application se met à écouter votre phrase puis la transmet à Jeedom selon la configuration définie dans `Configuration par défaut` (carte au-dessus) :

- `Envoyer vers` : vers les Interactions, une Commande ou un Scénario
- `Réponse` (si la destination est `Interactions`) : sous forme de popup, de synthèse vocale, ou en déclenchant une commande

Cette configuration s'applique à tous les mots clés (natifs comme personnalisés) : il n'est plus possible de définir une destination différente par mot clé.

### Fonctionnement en arrière-plan

La détection fonctionne dans les cas suivants :

- Application ouverte et au premier plan
- ![Android](/img/android.svg) Android **version APK** et [service d'arrière plan](./service.md) activé

:::warning
L'écoute en arrière-plan ou application fermée n'est disponible que sur la **version APK** d'Android (voir la [différence entre les deux versions Android](../intro.md#features)) : la version du Play Store ne dispose pas des autorisations renforcées nécessaires pour maintenir l'accès au microphone une fois l'application quittée.
:::

:::note
Sur iOS, la détection de mot clé s'arrête si l'application est mise en arrière-plan ou fermée, quelle que soit la version : Apple ne permet pas à une application tierce de conserver une écoute continue du microphone une fois quittée.
:::
