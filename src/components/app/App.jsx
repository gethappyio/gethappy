import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Link } from "react-router-dom";
import Page from "../page/Page";
import Experience from "../experience/Experience";

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
                <Route path='/experience/:title' component={Experience}/>
            </Switch>
        );
      }
}

export default App;