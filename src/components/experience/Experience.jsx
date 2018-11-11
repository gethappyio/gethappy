import React, { Component } from "react";
import axios from "axios";
import Page from "../Page/Page";
import DonationTierWrapper from "../DonationTier/DonationTierWrapper";
import DonationTier from "../DonationTier/DonationTier";
import HowWorks from "../HowWorks/HowWorks";
import ExperienceShare from "./ExperienceShare";
import { Text, Image } from "./ExperienceLayout";
import "./styles/experience.scss";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: "",
      product: "",
      tiers: {}
    };

    this.slug = props.match.params.slug;
  }

  componentDidMount() {
    let self = this;
    axios.get('/experience/' + this.slug + '.json')
    .then(function (response) {
        var product = response.data.product;
        var tiers = response.data.tiers;
        var layout = response.data.layout;
        self.setState({product: product});
        self.setState({tiers: tiers});
        self.setState({layout: layout});
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  buildLayoutBlock(block) {
    console.log(block);
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
        <Page>
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
            <ExperienceShare />
            {layout}
            <DonationTierWrapper>
                {donations}
            </DonationTierWrapper>
        </Page>
    );
  }
}

export default Experience;