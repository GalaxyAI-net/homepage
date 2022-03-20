import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import BannerSVGAnim from './component/BannerSVGAnim';
import { GithubOutlined } from '@ant-design/icons';

interface BannerProps {
    isMobile: boolean
}

interface BannerState {

}

const Banner: React.FC<BannerProps> = (props: BannerProps, state: BannerState) => {
    return (
        <div className="banner-wrapper">
            {props.isMobile && (
                <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
                    <div className="home-banner-image">
                        <img
                            alt="banner"
                            src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
                            width="100%"
                        />
                    </div>
                </TweenOne>
            )}
            <QueueAnim className="banner-title-wrapper" type={props.isMobile ? 'bottom' : 'right'}>
                <div key="line" className="title-line-wrapper">
                    <div className="title-line" style={{ transform: 'translateX(-64px)' }} />
                </div>
                <h1 key="h1">Galaxy AI</h1>
                <p key="content">
                Out-of-the-box mid-stage front-end/design solutions
                </p>
                <div key="button" className="button-wrapper">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Button type="primary">Preview</Button>
                    </a>
                    <Button style={{ margin: '0 16px' }} type="primary" ghost>Start using</Button>
                    <GithubOutlined />
                </div>
            </QueueAnim>
            {!props.isMobile && (
                <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
                    <BannerSVGAnim />
                </TweenOne>
            )}
        </div>
    );
}

Banner.propTypes = {
    isMobile: PropTypes.bool.isRequired,
};

export default React.memo(Banner);
