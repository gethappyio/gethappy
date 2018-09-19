import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import Page from "../Page/Page";
import LineItem from "./LineItem";
import "./styles/order-view.scss";

class OrderView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            order: ""
        }

        this.number = props.match.params.number;
    }

    componentDidMount() {
        let self = this;
        axios.post('/',  qs.stringify({
            action: '/gethappy/orders/get-order',
            CRAFT_CSRF_TOKEN: window.csrfTokenValue,
            number: this.number
        }))
        .then(function (response) {
           var order = response.data.order;

           self.setState({
                order: order
           });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    getOutput() {
        let order = this.state.order;
        let items = order.lineItems;
        if(items) {
            return items.map((item) => 
                <LineItem item={item} />
            );
        } else {
            return "";
        }
    }

    render() {
        const items = this.getOutput();
        const order = this.state.order;
        return (
            <Page>
                <div className="base__pad section__wrapper order-view">
                    <div className="section__content">
                        <div className="order-view__date">Ordered on {order.dateFormatted}</div>
                        <div className="order-view__number">Order no. {order.id}</div>
                    </div>
                    {items}
                </div>
            </Page>
        );
    }
}

export default OrderView;