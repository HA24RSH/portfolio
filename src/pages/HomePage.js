import react from 'react';
import Intro from '../components/Intro';
import Career from '../components/Career';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="home-page">
            <Intro/>
            <Career/>
            <Footer/>
        </div>
    );
}

export default HomePage;