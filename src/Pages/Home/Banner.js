import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import './Banner.css';
import bgBanner from '../../assets/images/bg.png';
const Banner = () => {
    return (
        <div style={{
            background: `url(${bgBanner})`,
            backgroundPosition: '300px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            objectPosition: 'center'
        }} className="hero min-h-screen px-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-full lg:w-1/2' src={chair} />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;