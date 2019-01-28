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
          console.log(this.props.content);
        return (
            <Page navigation={
                <NavigationBar title="Faq" to="/user"/>
            } footer="false">  
                {this.props.content ? this.props.content.map((block) => 
                <div className="section__wrapper">
                    <div className="section__col-xs-12">
                        <h3 className="faq__question">{block.question}</h3>
                        <p className="faq__body">{block.answer}</p>
                    </div>
                </div>)
                 : ""}

            </Page>
        );
      }
}

export default Faq;