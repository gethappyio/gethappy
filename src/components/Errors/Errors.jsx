import React, { Component } from "react";
import "./styles/errors.scss";

class Errors extends Component {

    constructor() {
        super();
    
        this.state = {
          title: ""
        };
      }
    
      render() {
          let errors = window.errors; 
        return (
            <div class="errors__msg">
                {errors ? errors : ""}
            </div> 
        );
      }
}

export default Errors;