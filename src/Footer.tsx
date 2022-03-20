import React from 'react';
import { Row, Col, Button } from 'antd';


const Footer = () => {
    return (
        <footer id="footer" className="dark">
            <div className="footer-wrap">
                <Row>
                    <Col lg={6} sm={24} xs={24}>
                        <div className="footer-center">
                            <h2>Galaxy AI</h2>
                            <div>
                                <a target="_blank " href="https://github.com/GalaxyAI-net">
                                    Galaxy AI GitHub
                                </a>
                            </div>
                            <div>
                                <a target="_blank " href="https://galaxyai.net">
                                    Galaxy AI
                                </a>
                            </div>
                            <div>
                                <a href="https://m.galaxyai.net">Galaxy AI Mobile</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} sm={24} xs={24}>
                        <div className="footer-center">
                            <h2>Community</h2>
                            <div>
                                <a href="#">
                                    Update Record
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    Common Problem
                                </a>
                            </div>
                            <div>
                                <a target="_blank" rel="noopener" href="#">
                                    Online discussion
                                </a>
                            </div>
                            <div>
                                <a target="_blank" rel="noopener" href="#">
                                    Discussion list
                                </a>
                            </div>
                            <div>
                                <a
                                    target="_blank"
                                    rel="noopener"
                                    href="https://galaxyai.net/docs/resource/work-with-us"
                                >
                                    Join us
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} sm={24} xs={24}>
                        <div className="footer-center">
                            <h2>
                                More Products
                            </h2>
                            <div>
                                <a target="_blank" rel="noopener" href="https://galaxyai.net/">Galaxy AI</a>
                                <span> - </span>
                            </div>
                            <div>
                                <a target="_blank" rel="noopener" href="https://galaxyai.net/">Galaxy AI</a>
                                <span> - </span>
                            </div>
                            <div>
                                <a target="_blank" rel="noopener" href="https://galaxyai.net/">Galaxy AI</a>
                                <span> - </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row className="bottom-bar">
                <Col lg={6} sm={24}>
                    <div className="translate-button">
                        <Button ghost size="small" >
                            English
                        </Button>
                    </div>
                </Col>
                <Col lg={18} sm={24}>
                    <span
                        style={{
                            lineHeight: '16px',
                            paddingRight: 12,
                            marginRight: 11,
                            borderRight: '1px solid rgba(255, 255, 255, 0.55)',
                        }}
                    >
                        <a
                            href="#"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Private Policy ICP
                        </a>
                    </span>
                    <span style={{ marginRight: 24 }}>
                        <a
                            href="#"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Rights and Interests Protection Commitment
                        </a>
                    </span>
                    <span style={{ marginRight: 12 }}>Copyright © Galaxy AI</span>
                </Col>
            </Row>
        </footer>
    );
}


export default React.memo(Footer);
