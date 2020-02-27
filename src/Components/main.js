import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Landingpage from './landingpage';
import Aboutme from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Twitch from './twitch';
import Youtube from './youtube'



const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/twitch" component={Twitch} />
        <Route path="/youtube" component={Youtube} />
        <Route path="/contact" component={Contact}/>

    </Switch>
)

export default Main;