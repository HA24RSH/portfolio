import react from 'react';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Career from '../components/Career';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="home-page">
            <Intro/>
            <AboutMe/>
            <Career/>
            <Skills/>
            <Footer/>
        </div>
    );
}

export default HomePage;