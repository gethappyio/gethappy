import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Link, Redirect} from "react-router-dom";
import Page from "../Page/Page";
import Experience from "../Experience/Experience";
import ContactForm from "../ContactForm/ContatForm";
import User from "../User/User";
import About from "../About/About";
import Login from "../Login/Login";
import Nav from "../Nav/Nav";
import { AuthConsumer } from '../AuthContext/AuthContext';

class App extends Component {

    constructor() {
        super();
    
        this.state = {
          title: ""
        };
      }
    
      render() {
        return (
            <Switch>
                <Route exact path='/' render={(props) => (
                    <Page>
                        <Nav />
                        <h1>Home Page</h1>
                        <ContactForm />
                    </Page>
                )}/>
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
            </Switch>
        );
      }
}

export default App;

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
