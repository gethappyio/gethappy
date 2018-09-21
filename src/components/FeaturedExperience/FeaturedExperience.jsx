import React, { Component } from "react";
import "./styles/featured-experience.scss";

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
                    <div className="featured-experience__title-wrapper">
                        <h1 className="featured-experience__title">{data.title}</h1>
                    </div>
                    <img className="featured-experience__image" src={data.featuredImage} />
                </div>
                <div className="featured-experience__bottom section__wrapper">
                    <div className="featured-experience__bottom-inner section__col-xs-12">
                        <h2 className="featured-experience__description">
                            <span className="featured-experience__description-top">Support Brick Children’s School &</span>
                            <span className="featured-experience__description-bottom">Join Selena Gomez in the music room.</span>
                        </h2>
                        <div className="section__wrapper">
                            <div className="featured-experience__days section__col-xs-6">20 days left</div>
                            <div className="featured-experience__more section__col-xs-6">learn more</div>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}

export default FeaturedExperience;