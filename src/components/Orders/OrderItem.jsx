import React, { Component } from "react";
import RowButton from "../RowButton/RowButton";
import "./styles/order-item.scss";

class OrderItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {order} = this.props;
        return (
            <RowButton link={"/user/orders/view/" + order.number}>
                <div className="section__wrapper order-item">
                    <div className="section__col-xs-12 section__content">
                        <div className="order-item__date">{order.dateFormatted}</div>
                        <div className="order-item__number">Order no. {order.id}</div>
                    </div>
                    <div className="section__col-xs-12 section__content order-item__name">
                        A day with Selena Gomez
                    </div>
                    <div className="section__col-xs-12">
                        Contribution of ${order.itemTotal}
                    </div>
                </div>
            </RowButton>
        );
    }
}
export default OrderItem;
