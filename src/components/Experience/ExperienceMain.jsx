import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
import axios from "axios";
import DonationTierWrapper from "../DonationTier/DonationTierWrapper";
import DonationTier from "../DonationTier/DonationTier";
import HowWorks from "../HowWorks/HowWorks";
import ExperienceShare from "./ExperienceShare";
import ExperienceVideo from "./ExperienceVideo";
import { Text, Image } from "./ExperienceLayout";
import "./styles/experience.scss";

class ExperienceMain extends Component {
    constructor(props) {
      super(props);
      this.state = {
        layout: "",
        product: "",
        tiers: {}
      };
  
      this.slug = this.props.slug;
      this.controller  = new ScrollMagic.Controller();
    }
  
    componentDidMount() {
      let self = this;
      let cache = JSON.parse(localStorage.getItem(this.slug + 'Cache') || "{}");

      if(cache.hasOwnProperty('cached') && cache.hasOwnProperty('experience')) {
          var experience = cache.experience;
          var product = experience.product;
          var tiers = experience.tiers;
          var layout = experience.layout;
          self.setState({product: product});
          self.setState({tiers: tiers});
          self.setState({layout: layout});
      } else {
        axios.get('/experience/' + this.slug + '.json')
        .then(function (response) {
            localStorage.setItem(self.slug + 'Cache', JSON.stringify({cached: true, experience: response.data}));
            var experience = response.data;
            var product = experience.product;
            console.log(product);
            var tiers = experience.tiers;
            var layout = experience.layout;
            self.setState({product: product});
            self.setState({tiers: tiers});
            self.setState({layout: layout});
        })
        .catch(function (error) {
            console.log(error);
        });
      }

      setTimeout(function() {
        var scene = new ScrollMagic.Scene({triggerElement:"#experience__close-trigger", offset: -50})
          .triggerHook("onLeave")
          .setClassToggle("#closePin","experience__close-fixed")
          .addTo(self.controller);
      },200)
      
    }
  
    buildLayoutBlock(block) {
      switch(block.handle) {
          case "Text":
              return <Text data={block.block} />;
          break;
  
          case "Image":
              return <Image data={block.block} />;
          break;
      }
  
    }
  
    render() {
      let layout = this.state && this.state.layout.length > 0 ? this.state.layout.map( block => this.buildLayoutBlock(block)) : "";
      let product = this.state.product;
      let donations = this.state && this.state.tiers.length > 0 ?
      this.state.tiers.map(tier =>
          <DonationTier tierData={tier}/>
      ) : <span></span>;
      return (
            <div>
              <div className="experience__video-wrapper">
                  {product.featuredVideo ? <ExperienceVideo src={product.featuredVideo} poster={product.featuredVideoThumbnail} /> : ""}
                  <Link to={{ pathname: "/", state: {animate: "app__swoop--up", timeout:200}}}><div id="closePin" className="experience__close"><img className="experience__close-x" src={window.cloudfront + "close.svg"} /></div></Link>
                  <div id="experience__close-trigger"></div>
              </div>
              <div className="section__wrapper">
                  <div className="section__col-xs-12">
                      <h1 className="experience__title">{product.title}</h1>
                      <div className="experience__top">
                          <div className="experience__days">
                              <div className="experience__days--number">{product.days}</div>
                              <div className="experience__days--left">days left!</div>
                          </div>
                          <img className="experience__image" src={product.featuredImage} />
                      </div>
                      <p className="experience__description">
                          {product.desc}
                      </p>
                  </div>   
              </div>
              <HowWorks />   
              <ExperienceShare quote={product.desc} url={product.url}/>
              {layout}
              <DonationTierWrapper>
                  {donations}
              </DonationTierWrapper>
            </div>
      );
    }
  }
  
  export default ExperienceMain;