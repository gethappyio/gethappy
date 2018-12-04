import React, { Component } from "react";
import "./styles/how-works.scss";

class HowWorks extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="how-works__container">
                <div className="section__wrapper">
                    <div className="section__col-xs-12">
                        <h2 className="how-works__title">How it works</h2>
                        <div className="how-works__line"></div>
                    </div>
                </div>
                <div className="section__wrapper how-works__items">
                    <div className="how-works__item section__col-xs-4">
                            <div className="how-works__item-icon">
                                <img className="how-works__item-icon--img how-works__item-icon--hand" src={window.cloudfront + "hand.svg"}/>
                            </div>
                            <h4 className="how-works__item-text">
                                Donate to win
                            </h4>
                    </div>
                    <div className="how-works__item section__col-xs-4">
                            <div className="how-works__item-icon">
                                <img className="how-works__item-icon--img" src={window.cloudfront + "face.svg"}/>
                            </div>
                            <h4 className="how-works__item-text">
                                A winner is drawn
                            </h4>
                    </div>
                    <div className="how-works__item section__col-xs-4">
                            <div className="how-works__item-icon">
                                <img className="how-works__item-icon--img" src={window.cloudfront + "heart.svg"}/>
                            </div>
                            <h4 className="how-works__item-text">
                                Help great causes!
                            </h4>
                    </div>
                    
                </div>
           </div>
        );
    }

}

export default HowWorks;