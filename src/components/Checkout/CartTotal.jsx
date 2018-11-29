import React, { Component } from "react";
import "./styles/cart-total.scss";

class CartTotal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const cart = this.props.data;
        return (
            <div className="section__wrapper cart-total__container">
                <div className="section__col-xs-12">
                    <h2 className="cart-total__title">Order summary</h2>
                    {cart ? 
                        <div className="cart-total__items">
                            <div className="section__wrapper cart-total__item">
                                <div className="section__collapse">
                                    <div className="section__col-xs-6">Subtotal</div> 
                                    <div className="section__col-xs-6 cart-total__item-value">${cart.itemSubtotal}</div>
                                </div>
                            </div>
                            <div className="cart-total__divider"></div>
                            <div className="section__wrapper cart-total__item cart-total__item--total">
                                <div className="section__collapse">
                                    <div className="section__col-xs-6">Total</div> 
                                    <div className="section__col-xs-6 cart-total__item-value">${cart.itemTotal}</div>
                                </div>
                            </div>
                        </div>
                    : ""}
                </div>
            </div>
        );
    }

}

export default CartTotal;