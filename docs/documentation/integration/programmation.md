---
sidebar_position: 5
---

# Programmation d’actions

La programmation de JeedomConnect vous permet la **programmation d’actions** directement dans l'interface mobile JeedomConnect.

## ✔ Ce que c'est

Elle permet de :

- lancer **une action simple** ou une **série d’actions** (enchaînement de commandes),
- déclencher un **scénario existant**,

sur la base de :

- une **programmation horaire ponctuelle** (ex. demain à 10h30),
- une **programmation récurrente** (ex. tous les jours à 20h),
- ou d’un **événement provoqué** (ex. changement d'état d'une lampe, l'ouverture d'une porte/fenêtre, ...).

## ❌ Ce que ce n'est pas

Cette fonctionnalité **ne remplace pas les scénarios Jeedom**.

Pour des logiques plus élaborées (conditions, répétitions, temporisations...), il est préférable d'utiliser un **scénario Jeedom**, puis d'en programmer le déclenchement via une programmation JeedomConnect.

## ⁉ Comment ça marche

Pour commencer, il est nécessaire d'autoriser la fonctionnalité **Accès Programmations** sur votre/vos équipement(s) JC, depuis le plugin.  

Il existe **deux méthodes** pour accéder à la fonctionnalité de programmation :

1. **Via le menu principal ("burger") en haut à gauche**

   - Sélectionnez ensuite **"Programmations"**.
   - Vous pouvez alors :
     - consulter toutes les programmations **créées sur cet équipement,**
     - en ajouter de nouvelles,
     - modifier les existantes ou les supprimer (*glisser vers la droite*),
     - activer/désactiver une programmation.

:::note
📌 Les programmations sont **propres à chaque équipement** : elles ne sont pas synchronisées entre plusieurs téléphones ou tablettes.
:::

2. **Via un clic long sur un widget**

   - Puis choisir l’option **"Programmer"**.
   - Cette méthode permet de programmer très simplement une action sur une **commande action** du widget, en seulement quelques clics.
   - Permet d'accéder à une interface simplifiée pour planifier ponctuellement une action sur la commande action du widget concerné.
   - En cliquant sur **Plus**, cette programmation peut être personnalisée de la même manière que via le menu burger.

Cette double entrée permet de gérer rapidement ou de manière plus complète vos programmations selon le contexte d’usage.

## ➕ Mise en place d'une programmation (via le menu burger ou clic long sur widget)

1. **Via le menu burger**
   - Appuyez sur le bouton **+** pour ajouter une nouvelle programmation.
   - Sélectionnez le **déclencheur** parmi les 3 types disponibles :

### ⏰ Programmé (ponctuel)

- Permet de planifier une action à une **date/heure précise**.
- Par défaut, la programmation sera **supprimée après déclenchement**.
- Vous pouvez choisir de **la conserver après exécution**, pour pouvoir la modifier facilement (ex : modifier uniquement la date/heure pour la replanifier).

:::tip[Cas d'usage]
Je souhaite rallumer automatiquement le chauffage en rentrant de week-end. L’heure de retour change souvent, je programme chaque semaine une action unique que j’édite au besoin.
:::

### 🔁 Programmé (récurrent)

- Fonctionne avec un système de **planification CRON**.
- Idéal pour exécuter des actions de manière répétée (tous les jours à 7h, chaque lundi à 20h, etc.).

### ⚡ Provoqué

- Se déclenche suite à un **changement d’état d’une commande info** (binaire ou autre).
- Vous pouvez ajouter des **conditions sur la valeur** de la commande (ex. uniquement si l’état passe à 1).
- Pratique pour déclencher des actions suite à un événement extérieur (détection, ouverture, présence…).

## 🎬 Définir les actions à exécuter

Une fois le mode de déclenchement sélectionné, vous devez définir les **actions à exécuter**.

- Il est possible d’ajouter **plusieurs actions**, incluant :
  - des **commandes actions** (lumières, volets, chauffage, etc.),
  - des **scénarios Jeedom**, avec la possibilité de renseigner des **tags** à passer au scénario.

- Une action spéciale **"Me notifier"** permet de générer un **message de notification** visible dans le **centre de notification JeedomConnect** au moment du déclenchement.

:::warning
Cette notification **n’est pas personnalisable**.  
Si vous souhaitez envoyer une notification plus élaborée (texte personnalisé, icône, son, etc.), ajoutez comme action une **commande de type notification JeedomConnect**, que vous pourrez paramétrer à votre convenance.
:::

## ▶️ Accès rapide via clic long sur un widget

- Ouvre une **interface simplifiée**, permettant de créer rapidement une **programmation ponctuelle** pour une action du widget (ex. sur widget lumière, commande ON, OFF ou TOGGLE).
- Pour accéder à davantage d’options (déclencheur récurrent, actions multiples, conditions...), cliquez sur **"Plus"** pour basculer vers l’interface complète de programmation (identique à celle du menu principal).

## 📌 À noter

L’exécution des programmations créées dans JeedomConnect est **dépendante de l’équipement** (smartphone, tablette…).

:::note
Une fois la programmation enregistrée, elle est **planifiée dans Jeedom lui-même** et **s’exécutera même si l’équipement n’est pas actif ou hors ligne**.
:::
