import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Link } from "react-router-dom";
import Page from "../page/Page";

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
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <h1>Home Page</h1>
                    </Page>
                )}/>
                <Route exact path='/about' render={(props) => (
                    <Page>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <h1>About Page</h1>
                    </Page>
                )}/>
            </Switch>
        );
      }
}

export default App;