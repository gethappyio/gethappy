import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Link, Redirect} from "react-router-dom";
import Page from "../Page/Page";
import Experience from "../Experience/Experience";
import ContactForm from "../ContactForm/ContatForm";
import User from "../User/User";
import Login from "../Login/Login";
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
                        <Link to='/user'>User</Link>
                        <Link to='/'>Home</Link>
                        <Link to='/experience/selena-gomez'>Experience</Link>
                        <h1>Home Page</h1>
                        <ContactForm />
                    </Page>
                )}/>
                <Route path='/experience/:slug' component={Experience}/>
                <Route exact path='/signin'>
                    <AuthConsumer>
                        {context => 
                            <Login context={context} />
                        }
                    </AuthConsumer>
                </Route>
                <PrivateRoute path='/user' component={User}/>
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
