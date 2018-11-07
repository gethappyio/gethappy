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
            "base__withNav": this.props.transparentNav ? false : true
        }, className);

        let nav = this.props.navigation;
        let footer = this.props.footer;

        if(!nav) {
            nav = <Header />;
        }

        if(footer === "false") {
            footer = "";
        } else {
            footer = <Footer />
        }

        return (
            <main className={classes}>
                {nav}
                <div class="base__expand base__scroll">
                    {this.props.children}
                    {footer}
                </div>
            </main>
        );
      }
}

export default Page;