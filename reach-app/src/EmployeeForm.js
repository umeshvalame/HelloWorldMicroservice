import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    department: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call Spring Boot API to create a new employee
    axios.post('http://<backend-api-url>/api/employees', employee)
      .then(response => {
        alert('Employee created successfully!');
        setEmployee({
          name: '',
          department: '',
          salary: ''
        });
      })
      .catch(error => {
        console.error('There was an error creating the employee!', error);
      });
  };

  return (
    <div className="employee-form">
      <h1>Create Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
