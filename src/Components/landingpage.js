import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
class Landingpage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/88092693_832394133894422_6163126938450788352_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=2EVGW--kCnQAX-fFPUX&_nc_ht=scontent-dfw5-2.xx&oh=423584f6fef0f43815eac63c8e2f0800&oe=5E972606"
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