---
title: Premiers pas
sidebar_position: 2
---

Vous découvrirez ici comment débuter avec **JeedomConnect**.

L'objectif est de vous apprendre à :

- Créer votre premier équipement
- Connecter l'application JeedomConnect (Android) ou JeeConnect (iPhone) à cet équipement
- Créer vos premiers menus (bas et haut)
- Créer vos premiers widgets et les intégrer à l’équipement
- Éditer les widgets
- Personnaliser les widgets
- Modifier la mise en page

---

## 1. Créer mon premier équipement

### Étape 1 : Vérifier les prérequis

Avant de commencer, assurez-vous de disposer des éléments suivants :

- Une installation fonctionnelle de Jeedom (version ≥ 4.2)
- Le plugin JeedomConnect installé depuis le Market Jeedom et activé

### Étape 2 : Accéder au plugin JeedomConnect

1. Connectez-vous à l'interface web de Jeedom.
2. Dans le menu principal, cliquez sur **Plugins** > **Communication** > **JeedomConnect**.

:::note
Par défaut, vous ne devriez rien avoir à modifier dans la partie **Configuration** du plugin.
:::

### Étape 3 : Ajouter un nouvel équipement

1. Cliquez sur **Ajouter un appareil** pour créer un nouvel équipement.
2. Remplissez les champs suivants :
   - **Nom de l'équipement** : un nom explicite (ex. *Tel Thierry*)
   - **Objet parent** : l’objet auquel le rattacher (ex. *Salon*)
   - **Activer** : cochez cette case
   - **Visible** : cochez cette case pour l’afficher sur le dashboard (utile pour accéder à certaines fonctions : état du téléphone, notifications, volume...)
   - **Utilisateur** : choisissez votre utilisateur admin Jeedom (admin par défaut)
   - Laissez **Connexion Websocket** et **Polling** décochés au début
3. Cliquez sur **Sauvegarder**

---

## 2. Connecter l'application à l’équipement

### Étape 1 : Installer l’application

- **Android** : [JeedomConnect sur Google Play](https://play.google.com/store/apps/details?id=com.jeedomconnect.app)
- **iOS** : [JeeConnect sur l'App Store](https://apps.apple.com/fr/app/jeeconnect/id1608704579)

:::warning
La version de l’application doit correspondre à celle du plugin (stable ou bêta).
:::

### Étape 2 : Ajouter une connexion dans l’application

1. Ouvrez l'application sur votre téléphone.
2. Appuyez sur **QR Code**.
3. Scannez le QR code depuis l’équipement JeedomConnect (préalablement créé).

:::note
Vous aurez besoin d'autoriser l’accès à l’appareil photo pour scanner le QR-Code.
:::

### Étape 3 : Vérifier la synchronisation

1. L’application récupère la configuration automatiquement.
2. Vous devriez voir apparaître votre équipement (même si vide au début).
3. Dans le menu (icône burger, tout en haut à gauche), la ligne **Connecté sur : Tel Thierry** doit s’afficher.

### En cas de problème de synchronisation

- Vérifiez que le téléphone est connecté **en Wi-Fi** sur le même réseau local que Jeedom.
- Vérifiez l’adresse IP et le port renseignés dans l’équipement (*ils doivent correspondre à vos accès Jeedom*).
- Régénérez et rescannez le QR code si nécessaire.

---

## 3. Créer vos premières pages (menus et widgets)

### Étape 1 : Ajouter des menus

1. Depuis l’équipement JeedomConnect, cliquez sur **Configurer l'appareil**.
2. Dans **Menu bas**, cliquez sur **Ajouter un menu**, donnez un nom, une icône, puis validez.
3. Recommencez pour un second menu.
4. Dans **Menu haut**, sélectionnez un menu bas, puis ajoutez un sous-menu.

:::note
Vous venez de créer deux menus bas (indispensables pour l’affichage) et un menu haut.
:::

### Étape 2 : Créer un widget

1. Depuis la page principale du plugin, cliquez sur **Ajouter un widget**.
2. Choisissez un type de widget : **Lumière ON/OFF**, **Température**, etc.
3. Donnez-lui un nom.
4. Associez les **commandes Jeedom**.
5. Cliquez sur **Sauvegarder**.

### Étape 3 : Ajouter le widget à un menu

1. Retournez dans l’onglet **Menus**.
2. Ajoutez une **entrée** vers ce widget dans un menu ou une vue.

**Exemple :** Ajoutez le widget température dans un menu "Salon" pour un accès rapide.

### Étape 4 : Ajouter le widget depuis l’appareil

1. Cliquez à nouveau sur **Configurer l'appareil**, sur votre équipement JeedomConnect depuis le plugin
2. Allez dans **Widgets / Composants**.
3. Sélectionnez un emplacement dans la liste **Emplacement des widgets**.
4. Choisissez un widget dans la liste **Élément** et cliquez sur **Ajouter cet élément**.
5. Sauvegardez.

:::note
Si le widget n’apparaît pas tout de suite dans l’application, ouvrez le menu burger et cliquez sur l’icône JeedomConnect pour forcer la synchronisation.
:::

---

## 4. Éditer les widgets

1. Sur l'application mobile, faites un **clic long** sur un widget.
2. Choisissez **Éditer ce widget**.
3. Modifiez :
   - Nom
   - Icônes
   - Autres paramètres disponibles
4. Cliquez sur **Sauvegarder**.
5. Vérifiez les changements dans le plugin Jeedom.

:::warning
Ces modifications s’appliquent **à tous les équipements utilisant ce widget**.  
Certaines options sont visibles uniquement dans l'application.
:::

---

## 5. Personnaliser les widgets

1. Dans l'application, faites un **clic long** sur un widget.
2. Sélectionnez **Personnaliser ce widget**.
3. Modifiez :
   - Nom, images, couleurs
   - Format d’affichage, disposition
4. Cliquez sur **Sauvegarder**.

:::warning
Ces personnalisations sont **spécifiques à l’équipement mobile concerné**.
:::

---

## 6. Modifier la mise en page

:::note
Par défaut, l'application place les widgets les uns après les autres de façon ordonnée.  
Si vous souhaitez modifier la taille d'un widget et le positionner à l'endroit où vous le souhaitez, il est nécessaire de passer le menu en mode `grille avancée`
:::

1. Dans un menu de l’application, faites un **clic long sur le menu** (haut/bas) où vous souhaitez placer vous-même les widgets.
2. Choisissez **Éditer ce menu**
3. En face du champ **Mode de grille**, choisissez **Avancée**
4. Sauvegarder
5. Faites maintenant un **clic long à l'intérieur de la page en dehors d’un widget**.
6. Choisissez **Éditer la grille**.
7. Vous pourrez :
   - Déplacer les widgets
   - Les redimensionner
   - Les verrouiller pour éviter qu’ils bougent

---

## Aller plus loin

*À venir : création de vues, utilisation des caméras, scénarios, notifications avancées, widgets conditionnels...*
