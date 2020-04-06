import React, { Component } from 'react';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls'
import Modal from '../../components/ui/modal/Modal';
import OrderSummary from '../../components/burger/orderSummary/OrderSummary';
import axios from '../../common/axios/AxiosConfig';
import Loading from '../../components/ui/loading/Loading';
import ErrorHandler from '../../common/error/ErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        error: false,
        loading: false,
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

    /*Order continue handler */
    purchasableContinueHandler = () => {
        this.setState({ loading: true, purchasing: false });

        let data = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Name-Order-01',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '10023',
                    country: 'VietNam'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', data).then(response => {
            this.setState({ error: false, loading: false })
        }).catch(error => {
            this.setState({ error: true, loading: false, })
        })
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

    /*----------Start Component lifecycle----------*/
    componentDidMount() {
        axios.get('/ingredients.json').then(response => {
            this.setState({ ingredients: response.data });
        }).catch(error => {
            this.setState({ error: true });
        })
    }
    /*----------End Component lifecycle----------*/
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        // {salad: true, meat: false, ...}

        let burger = this.state.error ? <h1 style={{ textAlign: 'center', color: 'red' }}>Ingredients can't be loaded!</h1> : <Loading />;
        let orderSummary = null;
        if (this.state.ingredients) {
            burger = (
                <React.Fragment>
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

            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                purchaseCancel={this.purchasableCancelHandler}
                purchaseContinue={this.purchasableContinueHandler} />
        }

        let spinner = null;
        if (this.state.loading) {
            spinner = <Loading />;
        }

        return (
            <React.Fragment>
                {spinner}
                <Modal show={this.state.purchasing} modalClosed={this.purchasableCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        );
    }
}

export default ErrorHandler(BurgerBuilder, axios);