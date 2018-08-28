import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Link } from "react-router-dom";
import Page from "../Page/Page";
import Experience from "../Experience/Experience";

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
                        <Link to='/experience/selena-gomez'>Experience</Link>
                        <h1>Home Page</h1>
                    </Page>
                )}/>
                <Route path='/experience/:slug' component={Experience}/>
            </Switch>
        );
      }
}

export default App;