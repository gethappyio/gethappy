import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import { Interstitial } from "../Loading/Loading";
import { CSSTransition } from 'react-transition-group';
import Page from "../Page/Page";
import NavigationBar from "../NavigationBar/NavigationBar";
import OrderItem from "./OrderItem";
import HeaderIcon from "../HeaderIcon/HeaderIcon";
import iconTime from "./assets/icon-time.svg";

class Orders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: "",
            in: true
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
                orders: orders,
                in: false
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
            <div className="base__expand">
                <CSSTransition
                    in={this.state.in}
                    timeout={400}
                    classNames="loading-interstitial"
                    unmountOnExit>
                    <Interstitial loading="true" solid="true" logo="true" />
                </CSSTransition>
                <Page navigation={
                    <NavigationBar title="Orders" href="/user" />
                } footer="false">
                    <div className="base__pad">
                        <HeaderIcon icon={iconTime} /> 
                        <div className="base__narrow base__margin-top">
                            {orders}
                        </div>
                    </div>
                </Page>
            </div>
            
        );
    }
}

export default Orders;