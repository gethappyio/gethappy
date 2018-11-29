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
        const purchasable = this.props.purchasable;

        return (
            <div className="section__wrapper cart-item">
                <div className="section__col-xs-4">
                    <img className="cart-item__image" src={purchasable.experienceFeaturedImage} />
                </div>
                <div className="section__col-xs-8 cart-item__right">
                    <div className="cart-item__right-inner">
                        <h2 className="cart-item__title">{product.title}</h2>
                        <div className="cart-item__description">{variant.tierDescription}</div>
                        <div className="section__wrapper cart-item__price">
                            <div className="section__collapse">
                                <div className="section__col-xs-6 cart-item__entries">{variant.tierEntries} Entries</div>
                                <div className="section__col-xs-6 cart-item__price">${parseFloat(item.price).toFixed(0)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CartItem;