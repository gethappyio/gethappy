import React, { Component } from "react";
import BtnPrimary from "../BtnPrimary/BtnPrimary";
import "./styles/featured-experience.scss";
import { Link } from "react-router-dom";

class FeaturedExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
        let data = this.props.data;
        return (
            <div className="featured-experience">
                <div className="featured-experience__top">
                    <div className="featured-experience__days">
                        <div className="featured-experience__days--number">{data.days}</div>
                        <div className="featured-experience__days--left">days left!</div>
                    </div>
                    <img className="featured-experience__image" src={data.featuredImage} />
                </div>
                <div className="featured-experience__bottom section__wrapper">
                    <div className="featured-experience__bottom-inner section__col-xs-12">
                        <h2 className="featured-experience__title">
                            {data.title}
                        </h2>
                        <p className="featured-experience__description">{data.desc}</p>
                        <Link to={data.uri} className="featured-experience__link">
                            <BtnPrimary className="btn-primary--vibrant-blue-outline">Learn more</BtnPrimary>
                        </Link>
                    </div>
                </div>
            </div>
        );
  }
}

export default FeaturedExperience;