import React, { Component } from "react";
import "./styles/cart-item.scss";

class CartItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const item = this.props.data;
        const variant = item.snapshot;
        const product = variant.product;

        return (
            <div className="section__wrapper cart-item">
                <div className="section__col-xs-4">
                    <div className="cart-item__placeholder"></div>
                </div>
                <div className="section__col-xs-8">
                    <div className="section__content"><h2 className="cart-item__title">{product.title}</h2></div>
                    <div className="section__content cart-item__description">{variant.tierDescription}</div>
                    <div className="section__wrapper">
                        <div className="section__collapse">
                            <div className="section__col-xs-6 cart-item__entries">{variant.tierEntries} Entries</div>
                            <div className="section__col-xs-6 cart-item__price">${parseFloat(item.price).toFixed(0)}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CartItem;