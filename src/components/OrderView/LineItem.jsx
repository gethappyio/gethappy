import React, { Component } from "react";
import "./styles/line-item.scss";

class LineItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {item} = this.props;
        const product = item.product;
        const variant = item.variant;
        const lineItem = item.lineItem;
        return (
            <div className="line-item section__content">
                <div className="line-item__name">{product.title}</div>
                <div>{variant.tierEntries} entries</div>
                <div>${parseFloat(lineItem.price).toFixed(2)}</div>
            </div>
        );
    }
}
export default LineItem;
