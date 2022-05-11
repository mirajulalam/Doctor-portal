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
                <p className='text-white py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod ipsa voluptatem eum, exercitationem consectetur impedit eligendi pariatur qui? Obcaecati minima alias necessitatibus debitis quam doloremque consequuntur voluptas, tenetur nostrum repellat voluptatum totam voluptatem impedit adipisci atque iste distinctio consectetur officiis blanditiis! Doloremque, quis eos velit facere expedita quasi!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;