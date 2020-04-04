import React from 'react';
import Style from './Logo.module.css';
import BurgerLogo from '../../assets/images/burger-logo.png';

const logo =(props)=>(
    <div className={Style.Logo}>
        <img src={BurgerLogo} alt='Burger'/>
    </div>
)

export default logo;