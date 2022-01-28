import React from 'react';
import Propertybox from './Propertybox';
import ImgP1 from '../images/p2.png';
import ImgP2 from '../images/p1.png';
import ImgP3 from '../images/p3.png';

const Properties = () => {
  return (
      <div className='product'>
        <div className='p-heading'>
            <h3>Properties</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?.</p>
        </div>
        <div className='product-container'>
            <Propertybox image={ImgP1} name='All-Musalla' price='$240,999'/>
            <Propertybox image={ImgP2} name='All-Haf2' price='$540,999'/>
            <Propertybox image={ImgP3} name='All-Bahara' price='$948,999'/>
        </div>
      </div>
  );
};

export default Properties;
