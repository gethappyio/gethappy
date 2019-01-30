import React, { Component } from "react";
import "./styles/experience-video.scss";
import { throws } from "assert";
import { timingSafeEqual } from "crypto";

class ExperienceVideo extends Component {

    constructor() {
        super();
        this.state = {
            pause: true
        };

        this.video = null;
    }

    componentWillUnmount() {
        if(this.video) {
            this.video.pause();
            this.video.removeAttribute("src");
            this.video.load();
        }
        
    }

    openFullScreen() {
        let video = this.video;

        if(video.requestFullscreen){
            video.requestFullscreen();
        } 
        else if (video.webkitRequestFullscreen){
            video.webkitRequestFullscreen();
        }
        else if (video.webkitEnterFullScreen) {
            // Toggle fullscreen in Safari for iPad
            video.webkitEnterFullScreen();
        }

    }

    togglePlay() {
        if(this.video) {
            if(this.video.paused) {
                this.video.play();
                this.setState({
                    pause: false
                });
            } else {
                this.video.pause();
                this.setState({
                    pause: true
                });
            }
        }   
    }

    render() {
        const {src, poster} = this.props;

        return (
            <div className="experience-video__wrapper">
                <div className="experience-video__play-container">
                {this.state.pause ? <img className="experience-video__play" src={window.cloudfront + "play-btn.svg"} /> : ""}
                </div>
                <video ref={video => this.video = video} width="100%" poster={poster} onClick={this.togglePlay.bind(this)}>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                { /*<img className="experience-video__thumb" src={poster} onClick={this.openFullScreen}/> */}
            </div>
        );
    }

}

export default ExperienceVideo;