import React from 'react';

const Review = ({ review }) => {
    const { name, img, location } = review;
    return (
        <div className="card lg:mx-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eum vitae amet enim consequatur veniam impedit ut assumenda culpa sapiente!</p>
                <div className="flex items-center mt-5">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;