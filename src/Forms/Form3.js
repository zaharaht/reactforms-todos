import { Select } from '@mui/material';
import React from 'react';
import { useState } from 'react';

export function SelectDropdownForm() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`name: ${age}`);
    
  };

  return (
    <div>
      <h2>Form 3</h2>
      <form onSubmit={handleSubmit}>
      <label id='next'>Select your age:</label>
        <div class="custom-select" style={{ width: '200px' }}>

          <select value={age} onChange={handleChange} >

            <option value="0">Select Age:</option>
            <option value="18-20">18-20</option>
            <option value="21-30">21-30</option>
            <option value="31-40">31-40</option>
            <option value="41-50">41-50</option>
            <option value="others">others</option>
        
          </select>
          <button className='btn'>submit</button>
        </div>
      </form>
    </div>
  );
}
