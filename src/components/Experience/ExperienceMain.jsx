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
      
        setTimeout(function() {
            var scene = new ScrollMagic.Scene({triggerElement:"#experience__close-trigger", offset: -50})
              .triggerHook("onLeave")
              .setClassToggle("#closePin","experience__close-fixed")
              .addTo(self.controller);
          },200);
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

    getData() {
        let cache = JSON.parse(localStorage.getItem('appCache') || "{}");
        let data = "";
        if(cache.hasOwnProperty('cached') && cache.hasOwnProperty('experiencesDetail')) {
            data = cache.experiencesDetail[this.slug];
        } else if(this.props.data) { 
            data = this.props.data[this.slug]; 
        }

        return data;
    }
  
    render() {
      let data = this.getData();
      let layout = data && data.layout.length > 0 ? data.layout.map( block => this.buildLayoutBlock(block)) : "";
      let product = data && data.product ? data.product : "";
      let donations = data && data.tiers.length > 0 ?
      data.tiers.map(tier =>
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