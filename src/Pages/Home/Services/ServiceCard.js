import React from 'react';
import Button from '../../Common/Button';

const ServiceCard = ({service}) => {
    const {name, picture, about} = service;
    
    return (
        <div className='bg-sky-300'>
            <img src={picture} alt="" />
            <div className='p-3'>
            <h3 className='text-2xl pb-3'>{name}</h3>
            <p className='pb-4'>{about.slice(0,100)}</p>
            <Button>Choose this</Button>
            </div>
        </div>
    );
};

export default ServiceCard;