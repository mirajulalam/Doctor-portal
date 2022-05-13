import React from 'react';
import treatment from '../../assets/images/fluoride.png';
import filling from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: "It's been an essential oral health treatment for decades.",
            img: treatment
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: "The dentist applies a numbing gel to the gums.",
            img: filling
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: "Professional whitening can be done in a dentist's office in about an hour.",
            img: whitening
        }
    ];
    return (
        <div className='my-28 max-w-7xl mx-auto px-12'>
            <div className='text-center'>
                <h3 className='text-secondary text-2xl font-semibold 		 uppercase'>Our Services</h3>
                <h2 className='text-5xl mt-3 mb-14'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;