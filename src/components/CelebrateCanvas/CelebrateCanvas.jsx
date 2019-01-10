import React, { Component } from "react";
import randomInt from "./assets/random.int";
import pointEmitter from "./assets/point.emitter";
import particle1 from "./assets/particle-1.png";
import particle2 from "./assets/particle-2.png";
import particle3 from "./assets/particle-3.png";
import particle4 from "./assets/particle-4.png";
import particle5 from "./assets/particle-5.png";

import "./styles/celebrate-canvas.scss";

class CelebrateCanvas extends Component {

    constructor() {
        super();
    
        this.state = {
          title: ""
        };

        this.emitters = [];
        this.emitterAmt = 6;
        this.counter = this.emitterAmt;
        this.canvas;
        this.ctx;
        this.ch;
        this.cw;
        this.width;
        this.height;
        this.interval;
      }

    update() {
        var self = this;
        setTimeout(function(){
            requestAnimationFrame(self.update.bind(self));
            self.ctx.clearRect(0,0,self.cw,self.ch);

            if(self.emitters.length > 0) {
                self.emitters.map( emitter => {
                    emitter.update();
                });
            }

        }, 1/20);        
    }

    createEmitter(pos,w,h){

		var offset = pos; 
		var width = w;
        var height = h;
        
        var particleImages = [ 
            particle1,
            particle2,
            particle3,
            particle4,
            particle5
        ];

		return new pointEmitter(
            {
                x:offset.x, 
                y:offset.y,
                width: width,
                height: height,
                num:14,
                array: this.emitters,
                gravity: 1,
                context: this.ctx,
                particles: particleImages
            });
    }

    mouseClick(event) {
        var emitter = this.createEmitter({x: event.clientX, y: event.clientY}, 50, 50);
        this.emitters.push(emitter);
    }

    setCelebration() {
        var self = this;
        this.interval = setInterval(function(){ 
            var emitter = self.createEmitter({x: randomInt(0,self.width), y: randomInt(0,self.height/2)}, 50, 50);
            self.emitters.push(emitter);

            self.counter -= 1;
            if(self.counter == 0) {
                clearInterval(self.interval);
                self.counter = self.emitterAmt;
            }
        }, 500);
    }

    componentDidMount() {
        document.addEventListener("click", this.mouseClick.bind(this));

        this.canvas = document.getElementById('celebrate-canvas');
        this.ctx = this.canvas.getContext('2d');

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.ch = this.canvas.height = this.height;
        this.cw = this.canvas.width = this.width;

        this.update();

        this.setCelebration();
    }
    
    render() {
        return (
            <canvas id="celebrate-canvas" className="celebrate-canvas"></canvas>
        );
    }
}

export default CelebrateCanvas;