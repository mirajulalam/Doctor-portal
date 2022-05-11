import React from 'react';
import thretment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Terms = () => {
    return (
        <section className='max-w-7xl mx-auto px-12'>
            <div className="flex justify-center items-center my-40 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className='flex-1 justify-center '>
                    <img className='w-8/12 rounded-lg mx-20' src={thretment} alt="" />
                </div>
                <div className='flex-1 align-middle'>
                    <h1 className='text-3xl pt-4 font-extrabold'>Exceptional Dental Care, on Your Terms</h1>
                    <p className='py-7'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Terms;