import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';


function Hello() {
    return (
        <Layout
            title="Téléchargement"
        >
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">Télécharger les applications Jeedom Connect</h1>
                    <p className="hero__subtitle">Téléchargez maintenant !</p>
                    <div className={clsx(styles.buttons, 'download-badges')} >
                        <a href='https://play.google.com/store/apps/details?id=com.jeedomconnect.app'>
                            <img width="200" alt='Télécharger sur Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
                        </a>
                        <a href="https://apps.apple.com/us/app/jeeconnect/id1566533727">
                            <img width="163" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1492214400&h=3ef4307fa479838e52fe9bd8bd17913b" alt="Télécharger sur App Store" />
                        </a>
                        <a href='https://github.com/jeedomconnect-team/JeedomConnect/releases'>
                            <img width="200" alt='Télécharger sur Github' src='img/getGithub.png' />
                        </a>
                    </div>
                    <div>
                        <p className="hero__subtitle">Vous êtes bêta-testeur ?</p>
                        <div className={clsx(styles.buttons, 'download-badges')} >
                            <a href='https://play.google.com/apps/testing/com.jeedomconnect.app'>
                                <img width="200" alt='Télécharger sur Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
                            </a>
                            <a href="https://testflight.apple.com/join/luZsKILI">
                                <img width="163" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1492214400&h=3ef4307fa479838e52fe9bd8bd17913b" alt="Télécharger sur App Store" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>


        </Layout>
    );
}
export default Hello;