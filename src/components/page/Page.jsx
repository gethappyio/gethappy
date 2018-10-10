import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classNames from 'classnames/bind';

class Page extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          title: ""
        };
      }
    
      render() {
        let {className} = this.props;
        let classes = classNames({
            "base__expand": true,
            "base__withNav": true
        }, className);

        let nav = this.props.navigation;

        if(!nav) {
            nav = <Header />;
        }

        return (
            <main className={classes}>
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