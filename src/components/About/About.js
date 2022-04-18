import React from 'react';
import waraj from '../../images/Warej-02.jpg';
import './About.css'

const About = () => {
    return (
        <div className='about-section container py-4'>
            <h2 className='about-title text-center py-3 fw-bold'>ABOUT</h2>
            <div className="row row-cols-1 row-cols-md-6">
                <div className="text-part col-6 d-flex justify-content-center align-items-center">
                    <div>
                        <p className='px-3'>Just now my main aim to, Learning new skills is as a software developer’s role due to the frequent changes and advancements in technology and frameworks.
                        <h6>I focus 5 goals now:</h6>
                        <li>Technical goals</li>
                        <li>Job goals</li>
                        <li>Entrepreneurship goals</li>
                        <li>Leadership goals</li>
                        <li>Community goals</li>
                        #Become an expert in a domain, technology, or language such as Performance, web development with Javascript. <br/>

                        #work on a system that has X scale or complexity, such as 3 millions of requests per second <br/>
                        #get to a specific job title, such as Wev developer, Full full stack web developer, front end and back end, developer evangelist.<br/>
                        #start a side hustle, such as freelancing
                        </p>
                    </div>
                </div>
                <div className="col-6 p-3">
                    <div className='img-part'>
                        <img className='about-image w-100 p-3' src={waraj} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;