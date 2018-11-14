import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import Page from "../Page/Page";
import NavigationBar from "../NavigationBar/NavigationBar";
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
            <Page navigation={
                <NavigationBar title="Orders" href="/user" />
            } footer="false">
                <div className="base__pad">
                    <div className="base__narrow base__margin-top">
                        {orders}
                    </div>
                </div>
            </Page>
        );
    }
}

export default Orders;