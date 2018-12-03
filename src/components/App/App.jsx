import React, { Component } from "react";
import { Switch, Route, Link, Redirect, withRouter} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from "../Home/Home";
import Experience from "../Experience/Experience";
import User from "../User/User";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";
import Login from "../Login/Login";
import { AuthConsumer } from '../AuthContext/AuthContext';
import "./styles/app.scss";

class App extends Component {

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
                className="base__expand"
                childFactory={child => React.cloneElement(
                    child,
                    {
                        classNames: location.state && location.state.animate ? location.state.animate : "", 
                        timeout: location.state && location.state.timeout ? location.state.timeout : 0
                    }
                  )}>
                <CSSTransition
                    key={location.key}>
                    <Switch location={location}>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/about' component={About} />
                        <Route path='/experience/:slug' component={Experience}/> 
                        <Route exact path='/signin' render={ ({location}) =>
                            <AuthConsumer>
                                { context =>
                                    <Login context={context} location={location} {...this.props}/>
                                }
                            </AuthConsumer>
                        }/>
                        <Route exact path='/user' component={User}/>
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/faq' component={Faq} />
                        <Route exact path='/terms' component={TermsAndConditions} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        );
      }
}

export default withRouter(App);

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
