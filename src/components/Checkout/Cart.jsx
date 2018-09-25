import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const items = this.props.data;

        return (
            <div>
                {Object.keys(items).map((key) => 
                    <CartItem data={items[key]} />
                )}
            </div>
        );
    }

}

export default Cart;