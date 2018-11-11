import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/experience-video.scss";
import play from "./assets/play-btn.svg";
import close from "./assets/close.svg";

class ExperienceVideo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    openFullScreen() {
        var video = document.getElementById('experience-video');

        if(video.requestFullscreen){
            video.requestFullscreen();
        } 
        else if (video.webkitRequestFullscreen){
            video.webkitRequestFullscreen();
        }

    }

    render() {
        const {src, poster} = this.props;

        return (
            <div className="experience-video__wrapper">
                <div className="experience-video__play-container">
                    <img className="experience-video__play" src={play} />
                </div> 
                <img className="experience-video__thumb" src={poster} onClick={this.openFullScreen}/>
                <Link to="/"><div className="experience-video__close"><img className="experience-video__close-x" src={close} /></div></Link>
            </div>
        );
    }

}

export default ExperienceVideo;