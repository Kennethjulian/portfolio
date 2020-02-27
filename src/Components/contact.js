import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Kenneth Julian</h2>
                        <img 
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{height: '250px'}}
                        />

                        <p style={{width: '75%', margin:'auto', paddingTop:'1em'}}>
                            Stuff to talk to me about!
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                   (225) 810-1055
                                    </ListItemContent>
                            </ListItem>
                               

                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                   kennethjulian026@gmail.com
                                    </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                   MySkypeId
                                    </ListItemContent>
                            </ListItem>                            
                         </List>
                        </div>
                    </Cell>
                </Grid>
                
            </div>
        );
    }
}

export default Contact; 