import React from 'react';
import Agentbox from './Agentbox';
import ImageAgent1 from '../images/s1.png';
import ImageAgent2 from '../images/s2.png';
import ImageAgent3 from '../images/s3.png';

const Agent = () => {
  return (
      <div className='agent'>
        <div className='a-heading'>
            <h1>Agents</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?.</p>
        </div>
        <div className='b-container'>
             <Agentbox image={ImageAgent1} name='Ali'/>
             <Agentbox image={ImageAgent2} name='Develops'/>
             <Agentbox image={ImageAgent3} name='WebSites '/>
        </div>
      </div>
  );
};

export default Agent;
