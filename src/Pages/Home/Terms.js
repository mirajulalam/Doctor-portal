import React from 'react';
import thretment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Terms = () => {
    return (
        <section className=''>
            <div className=" my-40 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className='flex-1 justify-center '>
                    <img className='w-8/12 rounded-lg mx-20' src={thretment} alt="" />
                </div>
                <div className='flex-1'>
                    <h1 className='text-3xl pt-4 font-extrabold'>Exceptional Dental Care, on Your Terms</h1>
                    <p className='py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod ipsa voluptatem eum, exercitationem consectetur impedit eligendi pariatur qui? Obcaecati minima alias necessitatibus debitis quam doloremque consequuntur voluptas, tenetur nostrum repellat voluptatum totam voluptatem impedit adipisci atque iste distinctio consectetur officiis blanditiis! Doloremque, quis eos velit facere expedita quasi!</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Terms;