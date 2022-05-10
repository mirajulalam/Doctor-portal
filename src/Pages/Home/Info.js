import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div className='grid grid-cols-3 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" cardDescription="Time is very valuable" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit Our Location" bgClass="bg-accent" cardDescription="Bangladesh,Chittagong,fatikchari" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" cardDescription="+01642763528" img={phone}></InfoCard>
        </div>
    );
};

export default Info;