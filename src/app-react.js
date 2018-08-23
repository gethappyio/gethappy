import React, { Component } from "react";
import ReactDOM from "react-dom";
import Page from "./components/page/Page";

import "normalize.css";
import "./styles/app.scss";

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

const wrapperApp = document.getElementById("app");
wrapperApp ? ReactDOM.render(<App />, wrapperApp) : false;
