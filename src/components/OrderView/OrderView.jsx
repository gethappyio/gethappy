import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import { Interstitial } from "../Loading/Loading";
import { CSSTransition } from 'react-transition-group'
import BtnPrimary from "../BtnPrimary/BtnPrimary";
import Page from "../Page/Page";
import NavigationBar from "../NavigationBar/NavigationBar";
import LineItem from "./LineItem";
import TotalsTable from "../TotalsTable/TotalsTable";
import "./styles/order-view.scss";


class OrderView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            order: "",
            address: "",
            totals: "",
            in: true
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
           var address = response.data.address;
           var totals = response.data.totals;

           self.setState({
                order: order,
                address: address,
                totals: totals,
                in: false
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

    getPayment() {
        const totals = this.state.totals;
        const order = this.state.order;

        return (
            <div class="section__wrapper">
                <div className="section__col-xs-12 order-view__module">
                    <h2 className="order-view__header">Payment details</h2>
                    <div class="section__wrapper">
                        <div className="section__col-xs-12">
                            <TotalsTable data={totals} />
                            <h3>Payment Method</h3>
                            <div>{order.paymentMethod}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    getAddress() {
        const address = this.state.address;
        let addressLines = [];

        if(address.address1) {
            addressLines.push(
                <OrderViewAddressLine>
                    {address.address1}
                </OrderViewAddressLine>);
        }

        if(address.address2) {
            addressLines.push(
                <OrderViewAddressLine>
                    {address.address2}
                </OrderViewAddressLine>);
        }

        if(address.city) {
            addressLines.push(
                <OrderViewAddressLine>
                    {address.city}
                </OrderViewAddressLine>);
        }

        if(address.zipCode) {
            addressLines.push(
                <OrderViewAddressLine>
                    {address.zipCode}
                </OrderViewAddressLine>);
        }

        if(address.countryText) {
            addressLines.push(
                <OrderViewAddressLine>
                    {address.countryText}
                </OrderViewAddressLine>);
        }

        return (
            <div class="section__wrapper">
                <div className="section__col-xs-12 order-view__module">
                    <h2 className="order-view__header">Delivery details</h2>
                    <div class="section__wrapper">
                        <div className="section__col-xs-12">
                            {addressLines}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const items = this.getOutput();
        const order = this.state.order;
        const address = this.getAddress();
        const payment = this.getPayment();
        return (
            <div className="base__expand">
                <CSSTransition
                        in={this.state.in}
                        timeout={400}
                        classNames="loading-interstitial"
                        unmountOnExit>
                        <Interstitial loading="true" solid="true" />
                </CSSTransition>
                <Page navigation={ <NavigationBar title="Order view" to="/user/orders" /> } footer="false">
                    <div className="base__pad section__wrapper order-view">
                        <div className="section__content">
                            <div className="order-view__date">Ordered on {order.dateFormatted}</div>
                            <div className="order-view__number">Order no. {order.id}</div>
                        </div>
                        {items}
                        {address}
                        {payment}
                        
                        <a className="order-view__receipt" href={order.receipt}>
                            <BtnPrimary className="btn-primary--blue">Receipt</BtnPrimary>
                        </a>
                    </div>
                </Page>
            </div>
        );
    }
}

export default OrderView;


const OrderViewAddressLine = (props) => (
       <p className="order-view__p">{props.children}</p>
 );