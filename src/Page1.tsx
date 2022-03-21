import React, { Children, useEffect, useRef, useState } from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Parallax from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';

interface Page1Props {
    isMobile: boolean
}

interface Page1State {
    hoverNum: any,
    children: any
}

const Page1: React.FC<Page1Props> = (props: Page1Props, state: Page1State) => {
   

    const [page1State, setPage1State] = useState(state);


    let onMouseOver = (i: any) => {
        setPage1State((prevState) => ({ ...prevState, hoverNum: i }));
    }

    let onMouseOut = () => {
        setPage1State((prevState) => ({ ...prevState, hoverNum: undefined }));
    }

    let getEnter = (e: any) => {
        const i = e.index;
        const r = (Math.random() * 2) - 1;
        const y = (Math.random() * 10) + 5;
        const delay = Math.round(Math.random() * (i * 50));
        return [
            {
                delay, opacity: 0.4, ...pointPos[e.index], ease: 'easeOutBack', duration: 300,
            },
            {
                y: r > 0 ? `+=${y}` : `-=${y}`,
                duration: (Math.random() * 1000) + 2000,
                yoyo: true,
                repeat: -1,
            }];
    }

    useEffect(() => {
        let test1: any = [[], [], []];

        featuresCN.forEach((item, i) => {
            const isHover = page1State.hoverNum === i;
            const pointChild = [
                'point-0 left', 'point-0 right',
                'point-ring', 'point-1', 'point-2', 'point-3',
            ].map(className => (
                <TweenOne
                    component="i"
                    className={className}
                    key={className}
                    style={{
                        background: item.color,
                        borderColor: item.color,
                    }}
                />
            ));
            const child = (
                <li key={i.toString()} >
                    <div
                        className="page1-box"
                        onMouseEnter={() => { onMouseOver(i); }}
                        onMouseLeave={onMouseOut}
                    >
                        <TweenOneGroup
                            className="page1-point-wrapper"
                            enter={getEnter}
                            leave={{
                                x: 0, y: 30, opacity: 0, duration: 300, ease: 'easeInBack',
                            }}
                        >
                            {(props.isMobile || isHover) && pointChild}
                        </TweenOneGroup>
                        <div
                            className="page1-image"
                            style={{
                                boxShadow: `${isHover ? '0 12px 24px' :
                                    '0 6px 12px'} ${item.shadowColor}`,
                            }}
                        >
                            <img src={item.src} alt="img" style={i === 4 ? { marginLeft: -15 } : {}} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                </li>
            );
            test1[Math.floor(i / 3)].push(child);
        });
    
        let t = test1.map((item: JSX.Element, i: number) => (
            <QueueAnim
                className="page1-box-wrapper"
                key={i.toString()}
                type="bottom"
                leaveReverse
                delay={[i * 100, (test1.length - 1 - i) * 100]}
                component="ul"
            >
                {item}
            </QueueAnim>
        ));
        setPage1State((prev) => ({...prev, children: t}));
    }, []);


    return (
        <div className="home-page page1" >
            <div className="home-page-wrapper" id="page1-wrapper">
                {!props.isMobile && (
                    <Parallax
                        className="page1-bg"
                        animation={{ translateY: 200, ease: 'linear', playScale: [0, 1.65] }}
                        location="page1-wrapper"
                    >
                        Feature
                    </Parallax>
                )}
                <h2>What can <span>Pro</span> do for you </h2>
                <div className="title-line-wrapper page1-line">
                    <div className="title-line" />
                </div>
                <OverPack>
                    {page1State.children}
                </OverPack>
            </div>
        </div>
    );
}

export default React.memo(Page1);

const featuresCN = [
    {
        title: 'Elegant and beautiful',
        content: 'Base on Galaxy AI, The system is carefully designed',
        src: 'https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg',
        color: '#13C2C2',
        shadowColor: 'rgba(19,194,194,.12)',
    },
    {
        title: 'Common Design Patterns',
        content: 'Extracted from typical pages and scenarios of middle and background applications',
        src: 'https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg',
        color: '#2F54EB',
        shadowColor: 'rgba(47,84,235,.12)',
    },
];

const pointPos = [
    { x: -30, y: -10 },
    { x: 20, y: -20 },
    { x: -65, y: 15 },
    { x: -45, y: 80 },
    { x: 35, y: 5 },
    { x: 50, y: 50, opacity: 0.2 },
];