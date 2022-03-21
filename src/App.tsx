import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Footer from './Footer';
import './static/style.js';

interface HomeState {

}

interface HomeProps {

}

const App = (props: HomeProps, state: HomeState) => {
    const [isMobile, setIsMobile] = useState(false);
    let enquireScreen = ((b: any) => {
        setIsMobile(b);
    });


    useEffect(() => {
        enquireScreen((b: any) => {
            setIsMobile(!!b);
        });
    }, []);

    return (
        <div>
            <Header isMobile={isMobile} />
            <div className="home-wrapper">
                <Banner isMobile={isMobile} />
                <Page1 isMobile={isMobile} />
                <Page2 />
            </div>
            <Footer />
        </div>
    );
}

export default React.memo(App);
