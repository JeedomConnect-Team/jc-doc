import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';
import mediumZoom from 'medium-zoom'

const Showcase = () => {

    setTimeout(() => {
        mediumZoom('img', {});
    }, 1000);

    return (
        <Layout
            title="Gallerie"
        >
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
            </div>
        </Layout >
    )
}

export default Showcase;