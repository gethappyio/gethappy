import React, { Component } from "react";
import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import TweenMax from 'gsap/src/minified/TweenMax.min.js';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
import classNames from 'classnames/bind';
import randomInt from "../CelebrateCanvas/assets/random.int";
import "./styles/abstract-shape.scss";
var uniqid = require('uniqid');

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
            left: "-" + this.width/2 + "px",
            top: "-" + this.height/2 + "px"
        };

        this.shapePosition = {
            left: Math.floor(randomInt(0, 100)) + "%",
            top: Math.floor(randomInt(0, 60)) + "%"
        };

        this.controller  = new ScrollMagic.Controller();

        this.myElement = null;
        this.targetY = Math.floor(randomInt(0,2)) == 0 ? Math.floor(randomInt(-100, -50)) : Math.floor(randomInt(50,100));
    }
    componentWillMount() {
        this.uniqid = uniqid();
    }
    componentDidMount() {
        var scene = new ScrollMagic.Scene({triggerElement:"#abstract-shape__id-" + this.uniqid, duration: 600, triggerHook: 0.8})
              .addTo(this.controller);

        scene.on("progress", this.executeTween.bind(this));
    }

    executeTween(event) {
        let progress = event.progress;
        let curY = this.targetY * progress;

        TweenLite.to(this.myElement, 1, {y:curY, x:0});
    }

    render() {
        let colour = Math.floor(randomInt(0,2)) == 0 ? "grey" : "yellow";
        let shapeClasses = classNames("abstract-shape", "abstract-shape--" + colour, "abstract-shape__" + this.shape);
        
        return (
            <div id={"abstract-shape__id-" + this.uniqid} style={this.shapePosition} className="abstract-shape__wrapper">
                <div ref={div => this.myElement = div} style={this.shapeDimensions} className={shapeClasses}></div>
            </div>   
        );
    }
}

export default AbstractShape;