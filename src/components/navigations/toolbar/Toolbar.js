import React from 'react';
import Style from './Toolbar.module.css';
import Logo from '../../logo/Logo';
import Navigations from '../Navigations';
import DrawerToggle from '../sideDrawer/drawerToggle/DrawerToggle';

const toolbar = (props) => {
    return (
        <div className={Style.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={Style.Logo}>
                <Logo />
            </div>
            <nav className={Style.DesktopOnly}>
                <Navigations />
            </nav>
        </div>
    );
}

export default toolbar;