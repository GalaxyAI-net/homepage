import React, { useEffect, useState } from 'react';
import { Button, Col, Menu, Popover, Row } from 'antd';
import Icon, { EyeOutlined } from '@ant-design/icons';
import { MenuMode } from 'rc-menu/lib/interface'

const LOGO_URL = './GalaxyAI@0.1x.png';

interface HeaderProps {
    isMobile: boolean
}

interface HeaderState {
    menuVisible: boolean,
    menuMode: MenuMode | undefined
}

const Header: React.FC<HeaderProps> = (props: HeaderProps, state: HeaderState) => {
    const [menuData, setMenuData] = useState(state);

    useEffect(() => {
        setMenuData(prevState => ({
            ...prevState, 
            menuVisible: false,
            menuMode: 'horizontal'
        }));
    }, []);

    let enquireScreen = ((b: string) => {
        setMenuData(prevState => ({
            ...prevState,
            menuVisible: false,
            menuMode: b ? 'inline' : 'horizontal'
        }));
    });

    

    const menu = (
        <Menu mode={menuData.menuMode} id="nav" key="nav">
            <Menu.Item key="home"><a>Homepage</a></Menu.Item>
            <Menu.Item key="docs"><a><span>Document</span></a></Menu.Item>
            <Menu.Item key="components"><a>Component</a></Menu.Item>
            {
                menuData.menuMode === ('inline' as 'inline') && (
                    <Menu.Item key="preview">
                        <a target="_blank" href="#" rel="noopener noreferrer">
                            Preview
                        </a>
                    </Menu.Item>
                )
            }
        </Menu>
    );

    const onMenuVisibleChange = () => {};
    const handleShowMenu = () => {};
    return (
        <div id="header" className="header">
            {menuData.menuMode === 'inline' ? (
                <Popover
                    overlayClassName="popover-menu"
                    placement="bottomRight"
                    content={menu}
                    trigger="click"
                    visible={menuData.menuVisible}
                    arrowPointAtCenter
                    onVisibleChange={onMenuVisibleChange}
                >
                    <Icon
                        className="nav-phone-icon"
                        type="menu"
                        onClick={handleShowMenu}
                    />
                </Popover>
            ) : null}
            <Row>
                <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
                    <div id="logo" data-to="/">
                        <img src={LOGO_URL} alt="logo" />
                        <span>Galaxy AI</span>
                    </div>
                </Col>
                <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
                    <div className="header-meta">
                        <div id="preview">
                            <a
                                id="preview-button"
                                target="_blank"
                                href="#"
                                rel="noopener noreferrer"
                            >
                                <Button ><EyeOutlined />Preview</Button>
                            </a>
                        </div>
                        {menuData.menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default React.memo(Header);
