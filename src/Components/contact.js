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
                        src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/81214020_782766585523844_5391048524806750208_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_ohc=4qLq1DTraSAAX_i_2yj&_nc_ht=scontent-atl3-1.xx&oh=71afa86d6aca2df9660a5dd6cecacab3&oe=5E7FFCB4"
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