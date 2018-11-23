import React, { Component } from "react";
import _ from 'lodash';
import { Switch, Route, Link, Redirect, withRouter} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from "axios";
import Home from "../Home/Home";
import Experience from "../Experience/Experience";
import User from "../User/User";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";
import Login from "../Login/Login";
import { Interstitial } from "../Loading/Loading";
import { AuthConsumer } from '../AuthContext/AuthContext';
import "./styles/app.scss";

class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          title: "",
          homeData: {},
          loading: true
        };
      }

      componentDidMount() {
        let self = this;
        var slides, experiences;

        axios.get('/homeslider.json')
        .then(function (response) {
            slides = response.data.slides;
            
            return axios.get('/experiences.json');
        }).then(function(response) {
            experiences = response.data.data;

            self.setState({
                homeData: { slides: slides, experiences: experiences}
            });
            

        })
        .catch(function (error) {
            console.log(error);
        });
    
      }

      siftJson(value,array) {
        let self = this;
        if(value) {
            if(Array.isArray(value)) {
                value.map(item =>
                    self.siftJson(item, array)
                );
            } else if(typeof value === "object") {
                Object.keys(value).map(key =>
                        self.siftJson(value[key], array)
                    );
            } else {
                array.push(value);
            }
        }
      }

      findImages(array) {
          let tempArray = [];
          array.map(value => {
                    if( typeof value === "string" ) {
                        if (value.indexOf('jpg') > 0) {
                            tempArray.push(value);
                        }
                    }    
                }
            );

            return tempArray;
      }

      preLoadImages(array) {
        let self = this;
        let total = array.length;
        let count = 0;
        array.map(asset => {
            let image;
            image = new Image();

            image.onload = function() {
                
                count += 1;
                if (count == total) {
                    self.setState({
                        loading: false
                    });
                }
            }

            image.src = asset;
        });
      }

    
      render() {
          let {location} = this.props;
          let homeData = this.state && this.state.homeData ? this.state.homeData : false;
          let testArray = [];

          if(homeData) {
            this.siftJson(homeData, testArray);
            this.preLoadImages(this.findImages(testArray));
          }
          
        return (
            <TransitionGroup 
                className="base__expand"
                childFactory={child => React.cloneElement(
                    child,
                    {
                        classNames: location.state && location.state.slide ? "app__slide--" + location.state.slide : "", 
                        timeout: location.state && location.state.timeout ? location.state.timeout : 0
                    }
                  )}>
                  <Interstitial loading={this.state.loading} prompt="" solid={true}/>
                <CSSTransition
                    key={location.key}>
                    <Switch location={location}>
                        <Route exact path='/' render={props => <Home data={homeData} {...props}/>}/>
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
