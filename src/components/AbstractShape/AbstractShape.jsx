import React, { Component } from "react";
import classNames from 'classnames/bind';
import randomInt from "../CelebrateCanvas/assets/random.int";
import "./styles/abstract-shape.scss";

class AbstractShape extends Component {
    constructor(props) {
        super(props);

        this.shape = Math.floor(randomInt(0,2)) == 0 ? "rect" : "circle";

        if (this.shape == "rect") {
            this.width = Math.floor(randomInt(100, 300));
            this.height = Math.floor(randomInt(100, 300));
        } else {
            this.width = Math.floor(randomInt(100, 300));
            this.height = this.width;
        }

        this.shapeDimensions = {
            width: this.width,
            height: this.height,
            transform: "translate(-" + this.width/2 + "px,-" + this.height/2 + "px)"
        };

        this.shapePosition = {
            transform: "translate(" + Math.floor(randomInt(0, 100)) + "%, " + Math.floor(randomInt(0, 100)) + "%)"
        };
    }

    render() {
        let colour = Math.floor(randomInt(0,2)) == 0 ? "grey" : "yellow";
        let shapeClasses = classNames("abstract-shape", "abstract-shape--" + colour, "abstract-shape__" + this.shape);
     
        return (
            <div className="abstract-shape__wrapper" style={this.shapePosition}>
                <div style={this.shapeDimensions} className={shapeClasses}></div>
            </div>   
        );
    }
}

export default AbstractShape;