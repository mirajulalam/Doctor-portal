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
                    <p className="py-6">Dental laboratory means any place where dental restorative, prosthetic, cosmetic and therapeutic devices or orthodontic appliances are fabricated, altered or repaired by one or more persons under the orders and authorization of a dentist.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;