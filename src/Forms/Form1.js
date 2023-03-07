import React from 'react';
import { useState } from "react";



export function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
  };

  return (
    <div>
      <h2>Form 1</h2>
      <form onSubmit={handleSubmit} className='form1'>
        <label>Name:
        <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        </label>
         
        <label>Email: <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        
        </label>
       
        <label>password:
          <input type='password' 
          value={password}
          onChange={(e) => setPass(e.target.value)}
          />
          </label>
       <button className='btn2'>submit</button>
      </form>
    </div>
  );
}
