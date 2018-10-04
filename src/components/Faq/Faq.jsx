import React, { Component } from "react";
import Page from "../Page/Page";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./styles/faq.scss";

class Faq extends Component {

    constructor() {
        super();
    
        this.state = {
          title: ""
        };
      }
    
      render() {
        return (
            <Page navigation={
                <NavigationBar title="Faq" to="/user" />
            }>
                <div className="section__wrapper">
                    <div className="section__col-xs-12">
                        <p className="faq__body">Fusce scelerisque efficitur nulla, sit amet finibus orci scelerisque volutpat. Sed lacinia lectus a dignissim cursus. Quisque id blandit ligula. Maecenas in eleifend lorem, pretium blandit metus. Proin pellentesque nibh eleifend dapibus pellentesque. Pellentesque eleifend lacinia massa, eget commodo neque euismod non. Nullam eleifend scelerisque tortor eget tempor.</p>
                    </div>
                </div>
            </Page>
        );
      }
}

export default Faq;