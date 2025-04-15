import Layout from '@theme/Layout';
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const Showcase = () => {

    React.useEffect(() => {
        import('medium-zoom').then(mediumZoom => {
            mediumZoom.default('img', { scrollOffset: 0, margin: 24 })
        })
    });

    return (
        <Layout
            title="Gallerie"
        >
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">Créations en pagaille</h1>
                    <p>
                        Voici quelques illustrations d'<b>exemples</b> provenant de différentes installations,<br />
                        où l'on peut voir que chaque utilisateur à la <b>liberté d'exprimer sa créativité</b> <br />
                        en personnalisant son interface selon ses <b>besoins et envies</b>.
                    </p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--md',
                                styles.doc,
                            )}
                            href="https://community.jeedom.com/t/montrez-vos-creations-sur-lappli/58184">
                            Voir d'autres exemples
                        </Link>
                    </div>
                </div>
            </header>

            <div style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 15, width: '70%' }} >
                <img src='img/gallery/JeedomConnect_screenshot1.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot2.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot3.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot4.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot5.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot6.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot7.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot8.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot9.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot10.jpg' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot11.jpg' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot12.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot13.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot14.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot15.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot16.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot17.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot18.png' width='200px' />
                <img src='img/gallery/JeedomConnect_screenshot19.png' width='200px' />
            </div>
        </Layout >
    )
}

export default Showcase;