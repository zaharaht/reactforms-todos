import React from 'react';
import { useState } from "react";


export function TextAreaForm() {
  const [textarea, setTextArea] = useState("");

  const handleChange = (event) => {
    setTextArea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`textarea: ${TextAreaForm}`);
  };
  return (
    <div id='second'>
      <h2>Form 2</h2>
      <form onSubmit={handleSubmit}>
      <label >Message:</label>
        <textarea value={textarea}  onChange={handleChange}/> <br/><br/>
      
        <button className='btn'>submit</button>
      </form>
    </div>
  );
}
