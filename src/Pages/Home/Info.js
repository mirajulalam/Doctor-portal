import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" cardDescription="Time is very importent for a doctor" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit Our Location" bgClass="bg-[#3A4256]" cardDescription="Bangladesh,Chittagong,fatikchari" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" cardDescription="+01643760528" img={phone}></InfoCard>
        </div>
    );
};

export default Info;