import React from 'react';
import Me from '../../images/IMG_5512.jpg'

const About = () => {
    return (
        <div className='container'>
             <h1 className='text-center'>About Me</h1>
            <h3>Name:Shakhawath Hossain </h3>
            <h3>My Goal :<small>My goal to be became a successful full stact web developer. To achive my goal I am trying to do my best practice and best focus on the work. Continuously and if i never found any Job so started my own company.</small></h3>
            <img className='w-50 ' src={Me} alt="" />
        </div>
       
    );
};

export default About;