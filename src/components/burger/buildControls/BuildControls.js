import React from 'react';
import BuildControl from './buildControl/BuildControl';
import Style from './BuildControls.module.css'

const buildControls = (props) => {

    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
    ]

    return (
        <div className={Style.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        disabled={props.disabled[ctrl.type]}
                        removeIngredient={() => props.removeIngredient(ctrl.type)}
                        addIngredient={() => props.addIngredient(ctrl.type)} />
                )
            })}
            <button
                className={Style.OrderButton}
                disabled = {!props.purchasable}
                onClick={props.ordered}
            >ORDER NOW</button>
        </div>

    );
}
export default buildControls