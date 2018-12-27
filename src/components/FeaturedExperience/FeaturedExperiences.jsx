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
    /*
    axios.get('/experiences.json')
    .then(function (response) {
        var experiences = response.data.data;
        self.setState({experiences: experiences});
    })
    .catch(function (error) {
        console.log(error);
    });
    */

  }

  render() {
    let experiences = this.props && this.props.experiences.length > 0 ? this.props.experiences.map(experience =>
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