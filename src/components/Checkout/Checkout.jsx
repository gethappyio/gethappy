import React, { Component } from "react";
import { Switch, Route, Link, Redirect, withRouter} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import CheckoutMain from "../Checkout/CheckoutMain";
import CheckoutAddressFormContainer from "../Checkout/CheckoutAddressFormContainer";
import SuccessPage from "../SuccessPage/SuccessPage";

class Checkout extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          title: ""
        };
      }
    
      render() {
          let {location} = this.props;

        return (
            <TransitionGroup
                className="base__expand">
                <CSSTransition
                    key={location.key}
                    timeout={400}
                    classNames="transition-fade"
                    >
                    <Switch location={location}>
                        <Route exact path='/checkout' component={CheckoutMain} />
                        <Route exact path='/checkout/new-address' component={CheckoutAddressFormContainer} />
                        <Route exact path='/checkout/success' component={SuccessPage} />
                    </Switch>
                </CSSTransition> 
            </TransitionGroup>
        );
      }
}

export default withRouter(Checkout);