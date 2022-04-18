import React from 'react';
import person from '../../../images/person.png'

const About = () => {
    return (
        <div className='container'>
            <div className='shadow-lg p-3 mb-5 bg-body rounded '>
                <img src={person} alt="" />
            </div>
            <p className='mt-2 '>This is Atiqur Rahman . inspite of a non-CSE background, I am having fun of coding.AS absolute beginner , I am trying best to do something for satisfying myself by coding. Actually, coding is my patience nothing else. Although I am not a CSC background student but I could not abut to tell that my goal is , Would like to become a great developer.Keep in your prayers so that i can achieve my goal.</p>
        </div>
    );
};

export default About;