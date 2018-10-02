import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Page extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          title: ""
        };
      }
    
      render() {

        let nav = this.props.navigation;

        if(!nav) {
            nav = <Header />;
        }

        return (
            <main className="base__expand base__withNav">
                {nav}
                <div class="base__expand base__scroll">
                    {this.props.children}
                    <Footer />
                </div>
            </main>
        );
      }
}

export default Page;