import React, { useState } from 'react';
import axios from '../api/axios';

function AddEmployee({employee , setEmployee ,departments,handleemployee ,emplyeeSubmit,error }) {
  
    
  return (
    <form autocomplete="off" onSubmit={emplyeeSubmit}>
      <h2>Add Employee</h2>
      {error && 
      <p className="error-message">{error.response.data.message}</p>}
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={employee.id}
        onChange={handleemployee}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleemployee}
        required
      />

     
    <select
        name="department"
        value={employee.department}
        onChange={handleemployee}
        required
      >
        <option value="" disabled>
          Select Department
        </option>
        {departments.map((dept) => (
          <option key={dept.name} value={dept.name}>
            {dept.name}
          </option>
        ))}
      </select>
      
      <input
        type="text"
        name="address"
        placeholder="address"
        value={employee.address}
        onChange={handleemployee}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployee;
