import React from 'react';
import './landing-page.styles.scss';
import rainbow from '../../assets/friendsRainbow.jpg'


const LandingPage = () => (
    <div className='landing-page'>
        
        <div className="background-image"
        style={{
            backgroundImage: `url(${rainbow})`
        }}/>
        <div className='content'>
            <div className='title'>
                <h1>Welcome to MYSPACE!</h1>
            </div>
            <span className="subtitle">Who's in your Top 8?</span>
        </div>
    </div>
);

export default LandingPage;