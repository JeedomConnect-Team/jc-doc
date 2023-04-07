import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facile à utiliser',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Obtenez rapidement vos widgets grâce à la création automatique basée sur les types génériques de vos équipement, pour utiliser l'interface intuitive de l'application.
      </>
    ),
  },
  {
    title: 'Personnalisable',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Créez vos propres designs dans l'application, choisissez votre thème de couleurs, vos pages, vos widgets où vous voulez.
        Tout est personalisable dans Jeedom Connect !
      </>
    ),
  },
  {
    title: 'Propulsé par React Native',
    Svg: require('@site/static/img/poweredbyRN.svg').default,
    description: (
      <>
        L'application est dévelopée avec le framework React Native, et utilise les dernières technologies en matière de développement mobile.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
