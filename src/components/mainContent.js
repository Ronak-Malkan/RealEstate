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
   // eslint-disable-next-line
   const [counter, setCounter] = React.useState([]);

   //storing preFetched filters options;
   // eslint-disable-next-line
   const [allLocation, setAllLocation] = React.useState([]);
   // eslint-disable-next-line
   const [allDate, setAllDate] = React.useState([]);
   // eslint-disable-next-line
   const [allPropertyType, setAllType] = React.useState([]);


   //run useEffect once to prefetch all the options from json file and store them
   React.useEffect(() => {
      const tempLocation = new Set();
      const tempDate = new Set();
      const tempType = new Set();
      for(var i=0; i<750; i++){
         tempLocation.add(data[i].location);
         tempDate.add(data[i].movingDate);
         tempType.add(data[i].propertyType);
      }
      console.log("use-effect");
      tempLocation.forEach((value) => {allLocation.push(value)})
      tempDate.forEach((value) => {allDate.push(value)});
      tempType.forEach((value) => {allPropertyType.push(value)});
      console.log(allLocation);
      setLocation(allLocation[0]);
      setDate(allDate[0]);
      setType(allPropertyType[0]);
   }, [])


   function showOrNot(identifier){
      if(identifier===clickedFilter){
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
         if(data[i].location === location && data[i].movingDate === date && data[i].price <= price[1] && data[i].price >= price[0] && data[i].propertyType === propertyType){
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
               {
                  allLocation.map(
                     (value)=>
                     <div>
                        <button className='menuButton' onClick={() => {setLocation(value); changeFilter(7);}}>
                           {value}
                        </button><br/>
                     </div>
                  )
               }
               </div>
            </div>

            {/* Date Filter Section */}
            <div className='filters'>
               <h3 className='filterTitle'>When</h3><br/>
               <input className='filterInput' value={date} onClick={() => changeFilter(1)}></input><span className='arrowDown' onClick={() => changeFilter(1)}>▼</span>
               <div className={showOrNot(1)} id='dateDrop'>
               {
                  allDate.map(
                     (value)=>
                     <div>
                        <button className='menuButton' onClick={() => {setDate(value); changeFilter(7);}}>
                           {value}
                        </button><br/>
                     </div>
                  )
               }
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
               {
                  allPropertyType.map(
                     (value)=>
                     <div>
                        <button className='menuButton' onClick={() => {setType(value); changeFilter(7);}}>{value}</button><br/>
                     </div>
                  )
               }
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