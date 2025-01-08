import React, { useEffect, useState } from 'react';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import AddDepartment from './components/AddDepartment';
import axios from './api/axios'


function App() {
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [employee, setEmployee] = useState({
    id : '',
    name: '',
    department: '',
    address: '',
  });
  const [employees , setEmployees] = useState([{}]);
  const [showAddDepartment, setShowAddDepartment] = useState(false);
  const [department, setDepartment] = useState({
    id : '',
    name: '',
    description: '',
  });
  const [departments , setDepartments] = useState([{}]);
  const [search,SetSearch] = useState('');
  const [searchresult,SetSearchresult] = useState([{}]);
  const [error ,Seterror] = useState('');

  useEffect(() =>
  {
     const fetchEmployees = async() =>{
      
      try{
      const response = await axios.get("/employees");
      console.log(response.data);
      if (response && response.data) { 
        SetSearchresult(response.data)
        setEmployees(response.data);
      }
      console.log(employees);
      }
      catch(err)
      {
        console.log(`Error: ${err.message}`);
      }
     }

     const fetchDepartments = async() =>{
      
      try{
      const response = await axios.get("/departments");
      console.log(response.data);
      if (response && response.data) setDepartments(response.data);
        /* console.log(response.data.map((dep) => dep.name)); */
    
      }
      catch(err)
      {
        console.log(`Error: ${err.message}`);
      }
     }


     fetchEmployees();
     fetchDepartments();

  },[])

  useEffect(() => {
    const searchEmployees = employees.filter((employee) => 
      (employee.name && employee.name.toLowerCase().includes(search.toLowerCase())) ||
      (employee.department && employee.department.toLowerCase().includes(search.toLowerCase()))
    );
    SetSearchresult(searchEmployees);
  }, [search]);
  

 

  const handleemployee = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(`${name}  : ${value}`);
    setEmployee({ ...employee, [name]: value });
  };
 
  const emplyeeSubmit = async(e) =>
  {
    e.preventDefault();
    console.log(employee);

      try{
        const response = await axios.post("/employees", employee);
        console.log(response.data);
        setEmployees([...employees ,response.data]);
        SetSearchresult([...employees ,response.data]);
        setShowAddEmployee(false);
        setEmployee({
          id : '',
          name: '',
          department: '',
          address: '',
        })
        Seterror("");
      }catch(err){
        Seterror(err);
        console.log(`Error :${err.message}`);
      } 
     
  }

  const handleDepartment = async(e) => {
    const { name, value } = e.target;
    console.log(`${name}  : ${value}`);
    setDepartment({ ...department, [name]: value });
  }

  const departmentsubmit = async (e) => {
    e.preventDefault();
    console.log(department);

      try{
        const response = await axios.post("/departments",department );
        console.log(department);
        console.log(response.data);
        setDepartments([...departments ,response.data]);
        setShowAddDepartment(false);
        setDepartment({
          id : '',
          name: '',
          description: '',
        })
        Seterror("");
      } catch(err)
      { 
        Seterror(err);
        console.log(err);
      }

  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Employee Management System</h1>
       <EmployeeList employees ={searchresult} search ={search} SetSearch ={SetSearch}/> 
      <button
       onClick={() => {
        setShowAddEmployee(!showAddEmployee)
        setShowAddDepartment(false) 
        Seterror('');
      } 
        }>
        Add Employee
       </button>
      <button 
      onClick={() =>  {
        setShowAddDepartment(!showAddDepartment)
        setShowAddEmployee(false)
         Seterror('');
      }
      }>
        Add Department
        </button>

      {showAddEmployee && 
       <AddEmployee employee ={employee} setEmployee={setEmployee} departments={departments} handleemployee = {handleemployee} emplyeeSubmit ={emplyeeSubmit} error = {error}/>}
      {showAddDepartment &&
       <AddDepartment department={department} setDepartment={setDepartment} handleDepartment={handleDepartment} departmentsubmit ={departmentsubmit} error = {error}/>
      }
      
    </div>
  );
}

export default App;

