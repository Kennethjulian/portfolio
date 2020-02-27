import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
class Landingpage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://images.pexels.com/photos/1727599/pexels-photo-1727599.jpeg?cs=srgb&dl=pexels-1727599.jpg&fm=jpg"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Web Developer</h1>

                            <hr/>
                            <p>HTML/CSS | JavaScript | React | React Native | NodeJs | Elixer/Phoenix | Ruby on Rails | MongoDB</p>

                            <div className="social-links">
                                    <a href="" target_blank rel="noopener noreferrer">
                                        <i className="fa fa-linkedin-square"  a-hidden="true"/>
                                    </a>

                                    <a href="" target_blank rel="noopener noreferrer">
                                        <i className="fa fa-github-square"  a-hidden="true"/>
                                    </a>

                                    <a href="" target_blank rel="noopener noreferrer">
                                        <i className="fa fa-facebook-square"  a-hidden="true"/>
                                    </a>

                                    <a href="" target_blank rel="noopener noreferrer">
                                        <i className="fa fa-youtube-square"  a-hidden="true"/>
                                    </a>

                                    <a href="" target_blank rel="noopener noreferrer">
                                        <i className="fa fa-twitch-square"  a-hidden="true"/>
                                    </a>

                                    
                                    <a href="" target_blank rel="noopener noreferrer">
                                        <i className="fa fa-twitter-square"  a-hidden="true"/>
                                    </a>
                                    
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landingpage; 