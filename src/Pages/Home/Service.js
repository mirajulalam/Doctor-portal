import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" className="card lg:mx-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;