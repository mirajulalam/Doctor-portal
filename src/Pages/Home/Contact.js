import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="py-20 px-12">
            <div className='text-center'>
                <h3 className='text-secondary text-2xl font-semibold 		 uppercase'>Contact Us</h3>
                <h2 className='text-5xl mt-3 mb-14 text-white'>Stay Connected with us</h2>
            </div>
            <div className='text-center'>
                <input className='p-3 mb-4 rounded w-5/12	' type="email" name="email" id="" placeholder='Email Address' />
                <br />
                <input className='p-3 mb-4 rounded w-5/12' type="text" name="subject" id="" placeholder='Subject' />
                <br />
                <textarea className='p-3 mb-4 rounded w-5/12' name="message" id="" cols="50" rows="5" placeholder='Your message'></textarea>
                <br />
                <button className='btn btn-primary text-uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary'>Submit</button>
            </div>
        </section>
    );
};

export default Contact;