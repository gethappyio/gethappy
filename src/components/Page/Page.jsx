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
            "base__expand": false,
            "base__withNav": this.props.transparentNav ? false : true
        }, className);

        let nav = this.props.navigation;
        let footer = this.props.footer;
        let noNav = this.props.noNav;

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
                {noNav ? " " : nav}
                <div>
                    {this.props.children}
                    {footer}
                </div>
            </main>
        );
      }
}

export default Page;