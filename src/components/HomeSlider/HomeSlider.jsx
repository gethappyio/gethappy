import React, { Component } from "react";
import axios from "axios";
import "./styles/home-slider.scss";

class HomeSlider extends Component {

    constructor() {
        super();
        this.state = {
            slides: ""
        };
    }

    componentDidMount() {
        let self = this;
        
        axios.get('/homeslider.json')
        .then(function (response) {
            var slides = response.data.slides;
            self.setState({slides: slides});
            
        })
        .catch(function (error) {
            console.log(error);
        });
    
    }

    render() {
        let slides = this.state && this.state.slides.length > 0 ? this.state.slides.map(slide => 
            <div className="home-slider__slide">
                <a href={slide.slideLink} className="home-slider__slide-link">
                    <img src={slide.image} className="home-slider__slide-image"/>
                    <div className="home-slider__slide-title-container">
                        <h1 className="home-slider__slide-title">Shaping culture in a cool as way</h1>
                    </div>
                </a>
            </div>
        ) : <span></span>;
 
        return (
            <div className="home-slider">
                {slides}
            </div>
        );
    }

}

export default HomeSlider;