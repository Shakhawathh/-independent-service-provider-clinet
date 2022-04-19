import React from 'react';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
       <footer className='text-center mt-5 bg-secondary mx-2 w-auto'>
           <p><small>copyright @    {year}</small></p>
       </footer>
    );
};

export default Footer;