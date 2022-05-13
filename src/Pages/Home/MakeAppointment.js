import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center  px-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 w-6/12'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white pt-4'>Make an appointment today</h2>
                <p className='text-white py-7'>The most common function of the 's in English is to show possession, as in "the cat's bowl." There are other ways to show possession—"the bowl of the cat," for example—but 's is the way it's most often done.But that isn't all that 's does. Though we recognize that it is deeply controversial to say so, 's is sometimes a marker of the plural, as in "mind your p's and q's" and "a pattern of x's." It also functions as the contracted form of us in let's and the contracted form of is in the likes of it's, she's, and he's.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;