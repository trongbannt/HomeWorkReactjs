import React from 'react';
import Button from '../../ui/button/Button';

const orderSummary = (props) => {

    const ingredients = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        )
    });

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancel} >CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue} >CONTINUE</Button>
        </React.Fragment>
    );
}

export default orderSummary;