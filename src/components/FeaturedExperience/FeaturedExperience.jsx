import React, { Component } from "react";
import BtnPrimary from "../BtnPrimary/BtnPrimary";
import AbstractShape from "../AbstractShape/AbstractShape";
import classNames from 'classnames/bind';
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
        let {data, index} = this.props;
        let classes = classNames({
            "featured-experience__margin-small": index == 0 ? true : false
        }, "featured-experience");

        return (
            <div className={classes}>
                {[...Array(6)].map((x, i) =>
                    <AbstractShape />
                )}
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
                        <Link to={{ pathname: data.uri, state: {animate: "app__swoop--down", timeout:200}}} className="featured-experience__link">
                            <BtnPrimary className="btn-primary--vibrant-blue-outline">Learn more</BtnPrimary>
                        </Link>
                    </div>
                </div>
            </div>
        );
  }
}

export default FeaturedExperience;