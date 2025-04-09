import Layout from '@theme/Layout';
import React from 'react';

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