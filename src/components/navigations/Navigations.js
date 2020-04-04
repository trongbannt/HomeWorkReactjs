import React from 'react';
import Style from './Navigations.module.css';
import NavigationItem from './navigationItem/NavigationItem';

const navigations = (props) => (
    <ul className={Style.Navigations}>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/' >CheckoutF</NavigationItem>
    </ul>
);

export default navigations;
