import React, { useRef } from 'react';

import './App.css';
import axios from 'axios';

function App() {
 // const [count, setCount] = useState(0)
    const formRef = useRef(null);
    function onSubmited(event){
        //  event.preventDefault(); // remove auto submit
        console.log("clicked",event);
        callApi()
    }
    
    //catch the input data (api call)
   function callApi() {
    console.log("call api");
    let NumberPlate = document.getElementById("Number-Plate").value;
    let date = document.getElementById("date").value;
    let CustomerId = document.getElementById("CustomerId").value;
    let name = document.getElementById("name").value;
    let CarModel = document.getElementById("Car-model").value;
    let Milage = document.getElementById("Milage").value;
    
try {
    axios.post("http://localhost:8000/postdata", {
    NumberPlate: NumberPlate,
    date: date,
    CustomerId: CustomerId,
    name: name,
    CarModel: CarModel,
    Milage: Milage,


  })
    .then((response) => {
      console.log(response);
    });
  
} catch (error) {
  console.log(error);
}

}

  return (
    <>
    <div className='navbar'></div> {/* navbar */}

     <div className='form_container'>{/* form container */}
  

     <form ref={formRef} className='form' onSubmit={onSubmited}> {/* form start */}
       
              <div className='h1_div'> <h1>Rent a Car</h1></div>
              <label className='form_label' htmlFor="Number-Plate" >Number-Plate</label>
              <input className='form_input' type="text" id="Number-Plate" name="Number-Plate" placeholder="Number-Plate" required/><br/>

              <label className='form_label' htmlFor="Date" >Date</label>
              <input className='form_input' type="Date" id="date" name="date" placeholder="Date" required/><br/>

              <label className='form_label' htmlFor="CustomerID" >CustomerID Number</label>
              <input className='form_input' type="text" id="CustomerId" name="CustomerID" placeholder='CustomerID' required/><br/>
             
              <label className='form_label' htmlFor="Name" >Name</label>
              <input className='form_input' type="text" id="name" name="name" placeholder='Name' required/><br/>
             
              <label className='form_label' htmlFor="Car-model">Car model</label>
              <input className='form_input' type="text" id="Car-model" name="Car-model" placeholder='Car model' required/><br/>
            
              <label className='form_label' htmlFor="Milage">Milage</label>
              <input className='form_input' type="text" id="Milage" name="Milage" placeholder='Milage' required/>
            <br/>
            <div className='button_div'>
            <button className='submit_button'>Submit</button></div>
            
             </form>{/* form end */}
     </div>
    </>
  )
}

export default App
