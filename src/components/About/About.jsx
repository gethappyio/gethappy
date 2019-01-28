import React, { Component } from "react";
import Page from "../Page/Page";
import Header from "../Header/Header";
import HowWorks from "../HowWorks/HowWorks";
import classNames from 'classnames/bind';
import "./styles/about.scss";

class About extends Component {

    constructor() {
        super();
    
        this.state = {
          title: ""
        };
      }

      getLayout(content) {
        let structure = null;
        if(content) {
            structure = content.map((block,i) => {
                let classes = classNames({
                    "about__first": i == 0 ? true : false
                }, "section__wrapper");
                if(block.handle == "aboutHow") {
                    return <HowWorks />;
                } else {
                    return <div className={classes}>
                    <div className="about__section section__col-xs-12">
                        { block.aboutHeaderText ? <h2 className="about__title">{block.aboutHeaderText}</h2> : ""}
                        { block.aboutBodyText ? <p className="about__body">{block.aboutBodyText}</p> : ""}
                    </div>
                </div> ;
                }
                
            });
        }

        return structure;
      }
    
      render() {
          let content = this.getLayout(this.props.content);
        return (
            <Page className="base__abs app__slide about__wrapper" navigation={
                <Header returnType="logo-return" returnUrl="/" title="info-yellow" direction="left" />
            } footer="false" transparentNav="true">
                <div className="base__md-narrow">
                    {content}
                </div>
            </Page>
        );
      }
}

export default About;