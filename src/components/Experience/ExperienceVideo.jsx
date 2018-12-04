import React, { Component } from "react";
import "./styles/experience-video.scss";

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
                    <img className="experience-video__play" src={window.cloudfront + "play-btn.svg"} />
                </div> 
                <img className="experience-video__thumb" src={poster} onClick={this.openFullScreen}/>
            </div>
        );
    }

}

export default ExperienceVideo;