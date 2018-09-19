import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import Page from "../Page/Page";
import OrderItem from "./OrderItem";

class Orders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: ""
        }
    }

    componentDidMount() {
        let self = this;
        axios.post('/',  qs.stringify({
            action: '/gethappy/orders/history',
            CRAFT_CSRF_TOKEN: window.csrfTokenValue
        }))
        .then(function (response) {
           var orders = response.data.orders;

           self.setState({
                orders: orders
           });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    getOutput() {
        if(this.state.orders) {
            return this.state.orders.map((order) => 
                <OrderItem order={order} />
            );
        } else {
            return "";
        }
    }

    render() {
        const orders = this.getOutput();
        return (
            <Page>
                <div className="base__pad">
                    {orders}
                </div>
            </Page>
        );
    }
}

export default Orders;