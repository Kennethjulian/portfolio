import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }
    
    toggleCategories(){
        if(this.state.activeTab === 0){
            return (
                <div className="projects-grid">
                    {/* react project1*/}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                        Im Working on it!
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                
                {/* react project2*/}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png) center / cover'}}>React Project #2</CardTitle>
                <CardText>
                    Im Working on it
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>

            {/*react project3*/}
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png) center / cover'}}>React Project #3</CardTitle>
                <CardText>
                    Im Working on it
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
                
            )
            </div>
            )
            
        } else if(this.state.activeTab === 1){
            return(
             <div className="projects-grid">
                 {/*react native project1*/}
                 <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://i.udemycdn.com/course/750x422/891474_a221_4.jpg) center / cover'}}>React Native Project #1</CardTitle>
                <CardText>
                    Im Working on it
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>


                {/*react project2*/}
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://i.udemycdn.com/course/750x422/891474_a221_4.jpg) center / cover'}}>React Native #2</CardTitle>
                <CardText>
                    Im Working on it
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>

                {/*react native project3*/}
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://i.udemycdn.com/course/750x422/891474_a221_4.jpg) center / cover'}}>React Native Project #3</CardTitle>
                <CardText>
                    Im Working on it
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
             </div>
            )
        } else if(this.state.activeTab === 2){
            return(
               <div className="projects-grid">
                {/*mongoDB project1*/}
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://i.udemycdn.com/course/240x135/1906852_93c6.jpg) center / cover'}}>MongoDB Project #1</CardTitle>
                <CardText>
                    Im Working on it
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>

                 {/*mongoDB project2*/}
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://i.udemycdn.com/course/240x135/1906852_93c6.jpg) center / cover'}}>MongoDB Project #2</CardTitle>
                <CardText>
                    Im Working on it
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>

                 {/*mongoDB project3*/}
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://i.udemycdn.com/course/240x135/1906852_93c6.jpg) center / cover'}}>MongoDb #3</CardTitle>
                <CardText>
                    Im Working on it
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>

               </div>
                
            )
        } else if(this.state.activeTab === 3){
            return(
               <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
               <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png) center / cover'}}>NodeJs Project #1</CardTitle>
               <CardText>
                   Im Working on it
               </CardText>
               <CardActions border>
                   <Button colored>GitHub</Button>
                   <Button colored>LiveDemo</Button>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share"/>
               </CardMenu>
           </Card>

           <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png) center / cover'}}>NodeJs Project #2</CardTitle>
                <CardText>
                    Im Working on it
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png) center / cover'}}>NodeJs Project #3</CardTitle>
                <CardText>
                    Im Working on it
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
           </div>
                
            )
        }
     
    };
    

    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>React Native</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>NodeJs</Tab>
                </Tabs>

    
                  <Grid>
                      <Cell col={12}>
                          <div className="content">{this.toggleCategories()}</div>
                      </Cell>
                  </Grid>
                
            </div>
        );
    }
}

export default Projects; 