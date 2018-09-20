import React, { Component } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";

class PageNavigationBar extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          title: ""
        };
      }
    
      render() {
        return (
            <main className="base__expand base__withNav">
                <NavigationBar href={this.props.href} to={this.props.to} title={this.props.title}/>
                <div class="base__expand base__scroll">
                    {this.props.children}
                </div>
            </main>
        );
      }
}

export default PageNavigationBar;