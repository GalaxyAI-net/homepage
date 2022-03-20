import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

function Page2() {
    return (
        <div className="home-page page2">
            <div className="home-page-wrapper">
                <div className="title-line-wrapper page2-line">
                    <div className="title-line" />
                </div>
                <h2>Let’s try</h2>
                <OverPack>
                    <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
                        <p key="p" className="page-content">
                            Run the following command from the command line to quickly start the development service：
                        </p>
                        <div key="code1" className="home-code">
                            <div>
                                $ <span>git clone</span> git@github.com:GalaxyAI-net/homepage.git
                            </div>
                            <div>$ cd homepage</div>
                            <div>$ npm install</div>
                            <div>$ npm start
                                <span className="home-code-comment">// Open browser access http://localhost:8000</span>
                            </div>
                        </div>
                    </QueueAnim>
                </OverPack>
            </div>
        </div>
    );
}

export default React.memo(Page2);
