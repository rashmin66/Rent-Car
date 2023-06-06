//import { useState } from 'react'
import React, { useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.css';
import axios from 'axios';

function App() {
 // const [count, setCount] = useState(0)
    const formRef = useRef(null);
    function onSubmited(event){
        //  event.preventDefault();
        console.log("clicked");
        callApi()
    }
    
    //catch the input data (api call)
   function callApi() {
    
    let CustomerID = document.getElementById("CustomerID").value;
    let NumberPlate = document.getElementById("Number-Plate").value;
    let name = document.getElementById("name").value;
    let CarModel = document.getElementById("Car-model").value;
    let Milage = document.getElementById("Milage").value;

   axios.post("http://localhost:4000/gethelloworld", {
    name: name,
    CustomerID: CustomerID,
    NumberPlate: NumberPlate,
    CarModel: CarModel,
    Milage: Milage,


  })
    .then((response) => {
      console.log(response);
    });
}



  return (
    <>
    <div className='navbar'></div>
     <div className='form_container'>
      
     <form ref={formRef} className={styles.form} onSubmit={onSubmited}> {/* form start */}
              <label className='form_label' htmlFor="Number-Plate" >Number-Plate</label>
               <input className='form_input' type="text" id="Number-Plate" name="Number-Plate" placeholder="Number-Plate" required/><br/>
                
               <label className='form_label' htmlFor="CustomerID" >CustomerID</label>
               <input className='form_input' type="text" id="CustomerID" name="CustomerID" placeholder='CustomerID' required/><br/>
             
              <label className='form_label' htmlFor="Name" >Name</label>
               <input className='form_input' type="text" id="name" name="name" placeholder='Name' required/><br/>
             
              <label className='form_label' htmlFor="Car-model">Car model</label>
               <input className='form_input' type="text" id="Car-model" name="Car-model" placeholder='Car model' required/><br/>
            
             <label className='form_label' htmlFor="Milage">Milage</label>
               <input className='form_input' type="text" id="Milage" name="Milage" placeholder='Milage' required/>
            <br/>
            <div className='button_div'>
            <button className='submit_button' onClick={()=>{onSubmited()}}>Submit</button></div>
            
             </form>{/* form end */}
     </div>
    </>
  )
}

export default App
