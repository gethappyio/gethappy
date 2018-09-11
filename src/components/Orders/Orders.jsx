import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import Page from "../Page/Page";
import { Link } from "react-router-dom";

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
            return this.state.orders.map((order) => <div>Order #{order.id}, Date: {order.dateOrdered}, <Link to={"/user/orders/view/" + order.number}>view</Link></div>);
        } else {
            return "";
        }
    }

    render() {
        const orders = this.getOutput();
        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default Orders;