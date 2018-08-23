import React, { Component } from "react";
import ReactDOM from "react-dom";
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
            <Page>
                <p>Waddup</p>
            </Page>
        );
      }
}

export default App;