import React, { Component } from 'react';
import{Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/88962738_832394157227753_3425782802824560640_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_ohc=K6XNGL4MgD8AX-AX2ne&_nc_ht=scontent-dfw5-1.xx&oh=d674c60322a7c093ed557e2520e11537&oe=5E93632A"
                            alt="avatar"
                            style={{height:'200px'}}
                            />

                        </div>
                        <h2 style={{paddingTop:'2em'}}>Kenneth Julian</h2>
                        <h4 style={{color:'gray'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                        <p>I cant wait to work together!</p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                        <h5>Address</h5>
                        <p>404 Hacker st. New Orleans, LA</p>
                        <h5>Phone</h5>
                        <p>(225) 810-1055</p>
                        <h5>Email</h5>
                        <p>kennethjulian026@gmail.com</p>
                        <h5>Web</h5>
                        <p>kennethjuliandev.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                        
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                        startYear={2018}
                        endYear={2019}
                        schoolName="Operation Spark"
                        schoolDescription="Coding Bootcamp"
                        />

                        <Education
                        startYear={2019}
                        endYear={2020}
                        schoolName="Tech Talent South"
                        schoolDescription="Coding Bootcamp"
                        />

                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience 
                        startYear={2020}
                        endYear='present'
                        jobName='Testronic Labs'
                        jobDescription='QA Analyst'
                        />

                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Skills</h2>


                        <Skills 
                            skill='HTML/CSS'
                            progress={75}
                        />
                        
                        <Skills 
                            skill='Javascript'
                            progress={95}
                        />
                         
                         <Skills 
                            skill='React'
                            progress={35}
                        />

                         <Skills 
                            skill='React Native'
                            progress={25}
                        />

                        <Skills 
                            skill='MongoDB'
                            progress={15}
                        />

                        <Skills 
                            skill='Nodejs'
                            progress={20}
                        />


                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume; 