import React, { Component } from 'react';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls'
import Modal from '../../components/ui/modal/Modal';
import OrderSummary from '../../components/burger/orderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((acc, el) => {
            return acc + el
        }, 0);

        this.setState({ purchasable: sum > 0 });
    }

    purchasableHandler = () => {
        this.setState({ purchasing: true });
    }
    purchasableCancelHandler = () => {
        this.setState({ purchasing: false });
    }
    purchasableContinueHandler = () => {
        alert("You Continue purchase");
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updateIngredients = { ...this.state.ingredients };

        updateIngredients[type] = newCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ ingredients: updateIngredients, totalPrice: newPrice })
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {

            return;
        }

        const newCount = oldCount - 1;
        const updateIngredients = { ...this.state.ingredients };

        updateIngredients[type] = newCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ ingredients: updateIngredients, totalPrice: newPrice })
        this.updatePurchaseState(updateIngredients);
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        // {salad: true, meat: false, ...}

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchasableCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancel={this.purchasableCancelHandler}
                        purchaseContinue={this.purchasableContinueHandler} />
                </Modal>

                <Burger ingredients={this.state.ingredients} />

                <BuildControls
                    price={this.state.totalPrice}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchasableHandler}
                    removeIngredient={this.removeIngredientHandler}
                    addIngredient={this.addIngredientHandler} />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;