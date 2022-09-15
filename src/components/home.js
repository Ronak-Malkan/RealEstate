import React from 'react';
import '../style/home.css';
import NavBar from "./navBar";
import Header from "./mainContent";

export default function Home() {
   return(
      <div>
         <NavBar/>
         <Header/>
      </div>
   );
}