import React, { Component } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

class Cart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const cart = this.props.data.cart;
        const purchasable = this.props.data.product;
        const items = cart.lineItems;
    
        return (
            <div>
                {items ? Object.keys(items).map((key) => 
                    <CartItem data={items[key]} purchasable={purchasable} />
                ) : ""}
                <CartTotal data={cart}/>
            </div>
        );
    }

}

export default Cart;