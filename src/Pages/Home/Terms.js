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
                    <p className='py-7'>Dentists diagnose and treat dental issues and help patients develop better oral hygiene regimens. They clean teeth, correct bite issues, perform surgeries and extractions and perform other duties to ensure that the teeth and mouth are healthy.Dental health is another way of saying oral health or the health of your mouth. The mouth is a window into the health of your body. It can show signs of nutritional deficiencies or general infection.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Terms;