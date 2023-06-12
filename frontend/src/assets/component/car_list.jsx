import axios from "axios";
import { useEffect, useState } from 'react';
import './car_list.css'


function CarList() {
 const [cardata, setdata] = useState(null)
 const [searchNumber, setSearchNumber] = useState('');
 const [searchDate, setSearchDate] = useState('')
 function GetCars() {

 axios.get("http://localhost:8000/getdata")
    .then((response) => {
      console.log(response.data);
      setdata(response.data)
    });
  }
  
  useEffect(()=>{
   GetCars() 
  },[])


return (
  <>
  <div className="list_container">
  <div>
        <input
          className="input_search"
          type="text"
          placeholder="Search Number Plate"
          value={searchNumber}
          onChange={(e) => setSearchNumber(e.target.value)}
        />
        <input
          className="input_search"
          type="Date"
          placeholder="Search Date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />

  </div>
  <div className="table-container">
  <table>
  <thead>
    <tr>    
            <th>Number Plate</th>
            <th>Date</th>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Car Model</th>
            <th>Milage</th>              
    </tr>
  </thead>
  <tbody>
  {/* conditional render */}
   {cardata ==null?(null):(

    // map data
    cardata.filter((item) =>{
      const filteredNumber = item.numberPlate.toLowerCase().includes(searchNumber.toLowerCase())
      const filteredDate =item.date.toLowerCase().includes(searchDate.toLowerCase())
      return filteredNumber && filteredDate;
    }).map((item, index)=>{ 

       return <tr key={index}>
      <td>{item.numberPlate}</td> 
      <td>{item.date}</td>
      <td>{item.customerId}</td> 
      <td>{item.name}</td> 
      <td>{item.carModel}</td> 
      <td>{item.milage}</td>
      
       
       </tr> 
    })
   )}
  </tbody>

  </table>  
  </div>
  </div>
    </>
  )
}

export default CarList