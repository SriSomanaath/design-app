import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <div className="flex flex-col m-4 sm:flex-row sm:justify-center">
        <div className="bg-orange-400 w-full sm:w-60 h-96 rounded-none sm:rounded-l-lg flex flex-col justify-between">
          <div className="p-4">
            <img src="./icon-sedans.svg" alt="sedans" />
            <h1 className="font-bold text-white">SEDANS</h1>
            <p className="text-white p-5">
              Sedans Choose a sedan for its 
              <br/>
              affordability and excellent 
              fuel economy. Ideal for 
              cruising in the city or on 
              your next road trip.
            </p>
          </div>
          <button className="bg-gray-100 rounded-lg p-2 w-full sm:w-1/2 m-5">Learn more</button>
        </div>
        
        <div className="bg-teal-700 w-full sm:w-60 h-96 flex flex-col justify-between"> 
          <div className="p-4">
            <img src="./icon-suvs.svg" alt="suvs" />
            <h1 className="font-bold text-white">SUVS</h1>
            <p className="text-white p-5">
              SUVs Take an SUV for its spacious 
              interior, power, and 
              <br/>
              versatility. Perfect for your 
              next family vacation and 
              off-road adventures. 
            </p>
          </div>
          <button className="bg-gray-100 rounded-lg p-2 w-full sm:w-1/2 m-5">Learn more</button>
        </div>
        
        <div className="bg-cyan-950 w-full sm:w-60 h-96 rounded-none sm:rounded-r-lg flex flex-col justify-between">
          <div className="p-4">
            <img src="./icon-luxury.svg" alt="luxury" />
            <h1 className="font-bold text-white">LUXURY</h1>
            <p className="text-white p-5">
              Luxury Cruise in the best car brands
              without the bloated prices. 
              Enjoy the enhanced comfort 
              of a luxury rental and arrive in style.
            </p>
          </div>
          <button className="bg-gray-100 rounded-lg p-2 w-full sm:w-1/2 m-5">Learn more</button>
        </div>
      </div>
    </>
  );
  
}

export default App;
