import React from 'react';
import '../style/navBar.css';

export default function NavBar() {
   return(
      <div className='container'>
         <h1 className='title'>Estatery</h1>
         <button className='optionButtons' id='selectedButton'>Rent</button>
         <button className='optionButtons'>Buy</button>
         <button className='optionButtons'>Sell</button>
         <button className='optionButtons'>Manage Property ▼</button>
         <button className='optionButtons'>Resources ▼</button>
         <button className='authButtons'>Login</button>
         <button className='authButtons' id='signUpButton'>Sign Up</button>
      </div>
   );
}