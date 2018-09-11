import React, { Component } from "react";
import axios from "axios";
import qs from "qs";

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
        if(order) {
            return <div>Order #{order.id}, Date: {order.dateOrdered}</div>;
        } else {
            return "";
        }
    }

    render() {
        const order = this.getOutput();
        return (
            <div>
                {order}
            </div>
        );
    }
}

export default OrderView;