import React, { Component } from "react";
import { Switch, Route, Link, Redirect, withRouter} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import axios from "axios";
import {siftJSON, findImages, preLoadImages} from "../../utils/preload";
import { Interstitial } from "../Loading/Loading";
import Home from "../Home/Home";
import Experience from "../Experience/Experience";
import User from "../User/User";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";
import Login from "../Login/Login";
import { AuthConsumer } from '../AuthContext/AuthContext';
import "./styles/app.scss";

class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          title: "",
          slides: "",
          experiences: "",
          in: true
        };

        this.appCache = {};
        this.slides = "";
        this.experiences = "";
      }

    componentDidMount() {
        window.onbeforeunload = function() {
            localStorage.clear();
            return undefined;
        }
        let self = this;
        let cache = JSON.parse(localStorage.getItem('appCache') || "{}");

        if(cache.hasOwnProperty('cached') && 
        cache.hasOwnProperty('slides') && 
        cache.hasOwnProperty('experiences')) {
            self.setState({experiences: cache.experiences, slides: cache.slides});
        } else {
            axios.get('/homeslider.json')
            .then(function (response) {
                self.slides = response.data.slides;
                self.appCache = {slides: self.slides};
            
                return axios.get('/experiences.json');
            }).then(function (response) {
                self.experiences = response.data.data;
                self.appCache.cache = true
                self.appCache.experiences = self.experiences;

                var testArray = [];
                siftJSON(self.appCache,testArray);
                preLoadImages(findImages(testArray), self.transitionIntro);
                localStorage.setItem('appCache', JSON.stringify(self.appCache));

            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    transitionIntro() {
        this.setState({
            experiences: self.experiences, 
            slides: self.slides,
            in: false
        });
    }
    
      render() {
          let {location} = this.props;
        return (
            <div className="base__expand">
            <CSSTransition
                in={this.state.in}
                timeout={400}
                classNames="loading-interstitial"
                unmountOnExit>
                <Interstitial loading="true" solid="true" />
            </CSSTransition>
            <TransitionGroup 
                className="base__expand"
                childFactory={child => React.cloneElement(
                    child,
                    {
                        classNames: location.state && location.state.animate ? location.state.animate : "", 
                        timeout: location.state && location.state.timeout ? location.state.timeout : 0
                    }
                  )}>
                <CSSTransition
                    key={location.key}>
                    <Switch location={location}>
                        <Route exact path='/' render={() =>
                            <Home slider={this.state.slides} experiences={this.state.experiences}/>
                        }/>
                        <Route exact path='/about' component={About} />
                        <Route path='/experience/:slug' component={Experience}/> 
                        <Route exact path='/signin' render={ ({location}) =>
                            <AuthConsumer>
                                { context =>
                                    <Login context={context} location={location} {...this.props}/>
                                }
                            </AuthConsumer>
                        }/>
                        <Route exact path='/user' component={User}/>
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/faq' component={Faq} />
                        <Route exact path='/terms' component={TermsAndConditions} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            </div>
        );
      }
}

export default withRouter(App);

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
