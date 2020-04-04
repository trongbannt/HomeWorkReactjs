import React from 'react';
import Style from './BuildControl.module.css'

const buildControl = (props) => {
    return (
        <div className={Style.BuildControl}>
            <div className={Style.Label}>{props.label}</div>
            <button
                className={Style.Less}
                disabled = {props.disabled}
                onClick={props.removeIngredient} >Less</button>
            <button
                className={Style.More}
                onClick={props.addIngredient}>More</button>
        </div>
    );
}

export default buildControl;