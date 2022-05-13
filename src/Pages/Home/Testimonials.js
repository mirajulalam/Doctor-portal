import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            reviewDes: "There are many benefits to undergoing a fluoride treatment. They include: Reducing cavities by eliminating bacteria that cause decay. It strengthens the enamel of developing teeth, making them better resistant to decay for their lifespan.",
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Mary',
            reviewDes: "A great dentist understands that a patient needs to feel in control of his or her treatment. Honesty and Compassion: A good dentist is also honest and compassionate. Dental problems can affect many areas of a person's life, and dentists need to be sensitive to the problems caused by poor dental health.",
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Jennifer',
            reviewDes: "Professional teeth whiteners are safe, effective, and done under the supervision of a dental professional. In most cases, it is worth the extra cost to visit the dentist to get long-lasting, safe results. Yes, teeth whitening is very safe when done correctly.",
            location: 'California',
            img: people3
        },
    ]
    return (
        <section className='my-20 max-w-7xl mx-auto px-12'>
            <div className='flex justify-between mb-10'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-3xl pt-2'>What Our Patients Say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;