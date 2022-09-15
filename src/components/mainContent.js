import React from 'react';
import '../style/MainContent.css';
import data from "./properties.json";
import Property from './property';


export default function MainContent() {
   //states to track filters
   const [location, setLocation] = React.useState("Mumbai");
   const [date, setDate] = React.useState("2nd January");
   const [price, setPrice] = React.useState([1000, 1500]);
   const [propertyType, setType] = React.useState("Apartment");

   const [clickedFilter, changeFilter] = React.useState(7);

   //stores the filtered data
   const [filteredData, setData] = React.useState([]);
   const [counter, setCounter] = React.useState([]);

   function showOrNot(identifier){
      if(identifier==clickedFilter){
         return "dropDownContainer show";
      }
      else
         return "dropDownContainer";
   }

   function filterProperty(){
      setData([]);
      while(true){
         if(counter.pop() == null){
            break;
         }
      }
      for(var i=0; i<750; i++){
         if(data[i].location == location && data[i].movingDate == date && data[i].price <= price[1] && data[i].price >= price[0] && data[i].propertyType == propertyType){
            filteredData.push(data[i]);
            counter.push(i);
         }
      }
   }

   return(
      <div>
         <div className='header'>
            <h1 className='subTitle'>Search properties to rent</h1>
            <input className='searchInput' placeholder='Search with Search Bar'></input>
         </div>
         <div className='secondNavbar'>

            {/* Location Filter Section */}
            <div className='filters'>
               <h3 className='filterTitle' id='locationTitle'>Location</h3><br/>

               <input className='filterInput' value={location} id='locationInput' onClick={() => changeFilter(0)}></input>
               <span className='arrowDown' onClick={() => changeFilter(0)}>▼</span>
               <div className={showOrNot(0)} id='locationDrop'>
                  <button className='menuButton' onClick={() => {setLocation("Mumbai"); changeFilter(7);}}>
                     Mumbai
                  </button><br/>
                  <button className='menuButton' onClick={() => {setLocation("Delhi"); changeFilter(7);}}>
                     Delhi
                  </button><br/>
                  <button className='menuButton' onClick={() => {setLocation("Ahmedabad"); changeFilter(7);}}>
                     Ahmedabad
                  </button>
               </div>
            </div>

            {/* Date Filter Section */}
            <div className='filters'>
               <h3 className='filterTitle'>When</h3><br/>
               <input className='filterInput' value={date} onClick={() => changeFilter(1)}></input><span className='arrowDown' onClick={() => changeFilter(1)}>▼</span>
               <div className={showOrNot(1)} id='dateDrop'>
                  <button className='menuButton' onClick={() => {setDate("2nd January"); changeFilter(7);}}>
                     2nd January
                  </button><br/>
                  <button className='menuButton' onClick={() => {setDate("3rd January"); changeFilter(7);}}>
                     3rd January
                  </button><br/>
                  <button className='menuButton' onClick={() => {setDate("4th January"); changeFilter(7);}}>
                     4th January
                  </button>
               </div>
            </div>

            {/* Price Filter Section */}
            <div className='filters'>
               <h3 className='filterTitle'>Price</h3><br/>
               <input className='filterInput' value={"$"+price[0]+"-"+"$"+price[1]} onClick={() => changeFilter(2)}></input><span className='arrowDown' onClick={() => changeFilter(2)}>▼</span>
               <div className={showOrNot(2)} id='priceDrop'>
                  <button className='menuButton' onClick={() => {setPrice([1000, 1500]); changeFilter(7);}}>
                     $1000-$1500
                  </button><br/>
                  <button className='menuButton' onClick={() => {setPrice([1500, 2000]); changeFilter(7);}}>
                     $1500-$2000
                  </button><br/>
                  <button className='menuButton' onClick={() => {setPrice([2000, 2500]); changeFilter(7);}}>
                     $2000-$2500
                  </button>
               </div>
            </div>

            {/* Property Type Filter Section */}
            <div className='filters'>
               <h3 className='filterTitle'>Property Type</h3><br/>
               <input className='filterInput' value={propertyType} onClick={() => changeFilter(3)}></input><span className='arrowDown' onClick={() => changeFilter(3)}>▼</span>
               <div className={showOrNot(3)} id='propertyDrop'>
                  <button className='menuButton' onClick={() => {setType("Apartment"); changeFilter(7);}}>Apartment</button><br/>
                  <button className='menuButton' onClick={() => {setType("Land"); changeFilter(7);}}>Land</button><br/>
                  <button className='menuButton' onClick={() => {setType("Commercial"); changeFilter(7);}}>Commercial</button>
               </div>
            </div>
            <button className='authButtons' id='searchButton' onClick={filterProperty}>Search</button>
         </div>

         <div className='propertiesContainer'>
            { 
               counter.map(
                  (value)=><Property price={data[value].price} name={data[value].name} address={data[value].address} numOfBeds={data[value].numOfBeds} numOfBathroom={data[value].numOfBathroom} squareMeters={data[value].squareMeters}/>
               )
            }
         </div>
      </div>
   );
}