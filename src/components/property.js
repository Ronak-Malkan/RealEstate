import React from 'react';
import '../style/MainContent.css';

export default function Property(props) {
   return(
      <div className='properties'>
         <h3 className='price'><span className='priceDigit'>${props.price} </span>/month</h3>
         <button className='like'>❤️</button><br/>
         <h4 className='propertyName'>{props.name}</h4><br/>
         <h5 className='address'>{props.address}</h5>
         <h5 className='address' id='specifications'>
            {props.numOfBeds} Beds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.numOfBathroom} Bathrooms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.squareMeters} m<sup>2</sup>
         </h5>
      </div>
   );
}