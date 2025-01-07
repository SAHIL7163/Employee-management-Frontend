import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeList({search,SetSearch,employees}) {
  return (
    <> 
    {/*  <label htmlFor='search'></label> */}
     <input 
       id="search"
       type="text"
       placeholder="Search Employees"
       className=''
       value={search}
       autoComplete='off'
       onChange={(e) => SetSearch(e.target.value)}
     />
    <div>
     
     <h2>Employee List</h2>
      <table border="1" style={{ width: '100%', marginTop: '10px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default EmployeeList;
