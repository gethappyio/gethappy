import React, { Component } from "react";
import "./styles/experience-layout.scss";

class Text extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        return(
            <div className="section__wrapper experience-layout__text-wrapper">
                <div className="section__col-xs-12">
                    <h2 className="experience-layout__text-header">{data.header}</h2>
                    <p className="experience-layout__text-body">{data.body}</p>
                </div>
            </div>
        );
    }
}

export { Text };

class Image extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        return(
            <div className="section__wrapper experience-layout__image-wrapper">
                <div className="section__col-xs-12">
                    <img className="experience-layout__image" src={data.image} />
                </div>
            </div>
        );
    }
}

export { Image };