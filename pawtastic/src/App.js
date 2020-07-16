import React from 'react';
import './App.css';
import PetBasics from "./components/PetBasics";

function App() {
  return (
    <div className="App">
      <div className="leftSide">
        <div className="name">
          <h1>Pawtastic</h1>
        </div>
        <nav>
          <ul className="nav">
            <li>Human Profile</li>
            <li>Pet Basics</li>
            <li>Pet Details</li>
            <li>Confirm</li>    
          </ul>
        </nav>
     </div>
     <div className="rightSide">
       <PetBasics />
     </div>
    </div>
  );
}

export default App;
