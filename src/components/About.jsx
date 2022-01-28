import React from 'react';
import aboutImg from '../images/hero.png';

function About() {
  return (
      <div className='about'>
        <div className='about-model'>
            <img src={aboutImg} alt='about image'/>
        </div>
        <div className='about-text'>
            <h2>We Are Best <br/> Real Estate Company</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut dictum augue, et mattis neque. Sed vitae dolor quam. Morbi sodales sodales velit, et tempor enim rhoncus at. Integer sit amet nunc lobortis, tempor orci eu, fringilla nisl. Nullam ut nibh mattis, mattis leo sed, lacinia metus. Nunc ullamcorper ex at commodo sagittis. Fusce condimentum libero id libero dignissim interdum.</p>
            <button>View More Details</button>
        </div>
      </div>
  );
}

export default About;