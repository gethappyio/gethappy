import React, { Component } from "react";
import axios from "axios";
import FeaturedExperience from "./FeaturedExperience";

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
    axios.get('/experiences.json')
    .then(function (response) {
        var experiences = response.data.data;
        self.setState({experiences: experiences});
    })
    .catch(function (error) {
        console.log(error);
    });

  }

  render() {
    let experiences = this.state && this.state.experiences.length > 0 ? this.state.experiences.map(experience =>
        <FeaturedExperience data={experience}/>
    ) : <span></span>;
    return (
        <div className="featured-experiences">
            {experiences}
        </div>
    );
  }
}

export default FeaturedExperiences;