import React, { useState } from 'react';

function AddDepartment({department ,setDepartment,handleDepartment,departmentsubmit,error}) {
  return (
    <form autocomplete="off" onSubmit={departmentsubmit}>
      <h2>Add Department</h2>
      {error && 
      <p className="error-message">{error.response.data.message}</p>}
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={department.id}
        onChange={handleDepartment}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={department.name}
        onChange={handleDepartment}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={department.description}
        onChange={handleDepartment}
              />
      <button type="submit">Add Department</button>
    </form>
  );
}

export default AddDepartment;
