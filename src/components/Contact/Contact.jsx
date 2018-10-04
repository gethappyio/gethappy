import React, { Component } from "react";
import Page from "../Page/Page";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./styles/contact.scss";

class Contact extends Component {

    constructor() {
        super();
    
        this.state = {
          title: ""
        };
      }
    
      render() {
        return (
            <Page navigation={
                <NavigationBar title="Contact Us" to="/user" />
            }>
                <div className="section__wrapper">
                    <div className="section__col-xs-12">
                        <p className="contact__body">Fusce scelerisque efficitur nulla, sit amet finibus orci scelerisque volutpat. Sed lacinia lectus a dignissim cursus. Quisque id blandit ligula. Maecenas in eleifend lorem, pretium blandit metus. Proin pellentesque nibh eleifend dapibus pellentesque. Pellentesque eleifend lacinia massa, eget commodo neque euismod non. Nullam eleifend scelerisque tortor eget tempor.</p>
                    </div>
                </div>
            </Page>
        );
      }
}

export default Contact;