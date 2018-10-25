import React, { Component } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

class Cart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const cart = this.props.data;
        const items = cart.lineItems;
        

        return (
            <div>
                {items ? Object.keys(items).map((key) => 
                    <CartItem data={items[key]} />
                ) : ""}
                <CartTotal data={cart}/>
            </div>
        );
    }

}

export default Cart;