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
        /*
        axios.get('/homeslider.json')
        .then(function (response) {
            var slides = response.data.slides;
            self.setState({slides: slides});
            
        })
        .catch(function (error) {
            console.log(error);
        });
        */
    
    }

    render() {
        let slides = this.props && this.props.slider.length > 0 ? this.props.slider.map(slide => 
            <div className="home-slider__slide">
                <a href={slide.slideLink} className="home-slider__slide-link"
                    style={{"background": "url(" + slide.image + ") no-repeat center center", "backgroundSize": "cover"}}>
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