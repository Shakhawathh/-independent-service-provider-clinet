import React from 'react'
import Four4 from '../../../images/elisa-ventur-bmJAXAz6ads-unsplash.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center text-danger'>404</h1>
            <img className='w-100 height-50' src={Four4} alt="" />
        </div>
    );
};

export default NotFound;