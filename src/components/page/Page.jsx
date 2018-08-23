import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../header/Header";
import Bottom from "../bottom/Bottom";

class Page extends Component {

    constructor() {
        super();
    
        this.state = {
          title: ""
        };
      }
    
      render() {
        return (
            <main className="base__expand base__withNav">
                <div id="happyHeader" class="header-container"><Header /></div>
                <div class="base__expand base__scroll">
                    <p>React! Fuck off!</p>
                    <div id="happyBottom"><Bottom /></div>
                </div>
            </main>
        );
      }
}

export default Page;