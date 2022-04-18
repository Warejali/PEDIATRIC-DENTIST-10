import React from 'react';
import AboutDoctor from '../AboutDoctor/AboutDoctor';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutDoctor></AboutDoctor>
        </div>
    );
};

export default Home;