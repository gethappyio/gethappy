import React, { Component } from "react";
import axios from "axios";
import FeaturedExperience from "./FeaturedExperience";
import "./styles/featured-experiences.scss";

class FeaturedExperiences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      experiences: ""
    };
  }

  componentDidMount() {
    let self = this;
    let cache = JSON.parse(localStorage.getItem('featuredExperiencesCache') || "{}");

    if(cache.hasOwnProperty('cached') && cache.hasOwnProperty('experiences')) {
        self.setState({experiences: cache.experiences});
        console.log("cached");
    } else {
        axios.get('/experiences.json')
        .then(function (response) {
            var experiences = response.data.data;
            self.setState({experiences: experiences});

            localStorage.setItem('featuredExperiencesCache', JSON.stringify({cached: true, experiences: experiences}));

            experiences.map( experience => {
                axios.get('/experience/' + experience.slug + '.json')
                .then(function (response) {
                    localStorage.setItem(experience.slug + 'Cache', JSON.stringify({cached: true, experience: response.data}));

                })
                .catch(function (error) {
                    console.log(error);
                });

            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    

  }

  render() {
    let experiences = this.state && this.state.experiences.length > 0 ? this.state.experiences.map(experience =>
        <FeaturedExperience data={experience}/>
    ) : <span></span>;
    return (
        <div className="featured-experiences">
            <div className="section__wrapper">
                <div className="section__col-xs-12">
                    <div className="featured-experiences__header-top">Check Out Our</div>
                    <h2 className="featured-experiences__header">
                        <span className="featured-experiences__header--word">awesome</span>
                        <span className="featured-experiences__line"></span>
                        <span className="featured-experiences__header--word">experiences</span>
                    </h2>
                </div>
            </div> 
            {experiences}
        </div>
    );
  }
}

export default FeaturedExperiences;