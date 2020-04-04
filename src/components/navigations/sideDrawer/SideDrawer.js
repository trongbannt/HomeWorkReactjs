import React from 'react';
import Style from './SideDrawer.module.css';
import Logo from '../../logo/Logo';
import Navigations from '../Navigations';
import Backdrop from '../../ui/backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [Style.SideDrawer,Style.Close];
    if(props.open)
    {
        attachedClasses = [Style.SideDrawer,Style.Open];
    }

    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={Style.Logo}>
                    <Logo />
                </div>
                <nav>
                    <Navigations />
                </nav>
            </div>
        </React.Fragment>
    );
}

export default sideDrawer;