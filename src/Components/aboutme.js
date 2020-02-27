import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class Aboutme extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="about-grid">
                    <Cell col={12}>
                        <img 
                        className="my-img"
                        src="https://cdn.pixabay.com/photo/2017/09/16/12/35/anonymous-2755365_960_720.jpg"
                        alt="myPicture"
                        />

                    <p> 
                        Hello, friend.
                        "Hello, friend?" That's lame.
                        I would be more than happy to learn your name and more about you.
                        But thats right your here to learn about me. I formerly worked in the construction industry building scaffolding and welding. 
                        I did this for 8 years, and I felt like I was a trapped robot. I always loved technology, computers, and video games; but, 
                        I thought I would need to go to college to enter that field. After my wrist injury, I quit construction. 
                        My mother suggested I try a coding boot camp and that’s when I discoverd my passion for code. 
                        I love problem solving and expressing creativity. I now consider myself a Web Designer proficient in HTML, CSS, and JavaScript. Over the last 2 years, 
                        I have focused on web development. 
                        I hope to one day change the world. 
                        

                    </p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Aboutme; 