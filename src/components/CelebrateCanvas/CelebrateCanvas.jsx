import React, { Component } from "react";
import "./styles/celebrate-canvas.scss";

class CelebrateCanvas extends Component {

    constructor() {
        super();
    
        this.state = {
          title: ""
        };
      }

      componentDidMount() {
        var canvas = document.getElementById('celebrate-canvas');
        var ctx = canvas.getContext('2d');
    
        var width = window.innerWidth;
        var height = window.innerHeight;
    
        canvas.height = height;
        canvas.width = width;
    
      }
    
      render() {
        return (
            <canvas id="celebrate-canvas" className="celebrate-canvas"></canvas>
        );
      }
}

export default CelebrateCanvas;