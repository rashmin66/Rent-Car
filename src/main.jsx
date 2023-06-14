import React, { useState } from 'react';
import App from './App.jsx';
import './index.css';
import CarList from './assets/component/car_list.jsx';
import { createRoot } from 'react-dom/client';


function Navbar() {
  const [componentToRender, setComponentToRender] = useState('App');

  const handleButtonClick = (component) => {
    setComponentToRender(component);
  };

  return (
    <>
      <div className='navbar'>
        <button className='submit_button' onClick={() => handleButtonClick('App')}>
          Rent a Car
        </button>
        <button className='submit_button' onClick={() => handleButtonClick('CarList')}>
          Car List
        </button>
      </div>
      {componentToRender === 'App' && <App />}
      {componentToRender === 'CarList' && <CarList />}
    </>
  );
}

createRoot(document.getElementById('root')).render(<Navbar />);