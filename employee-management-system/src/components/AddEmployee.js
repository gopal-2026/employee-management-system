import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../context/EmployeeContext';
import { v4 as uuidv4 } from 'uuid';

const AddEmployee = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();
  
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    position: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      ...employee,
      id: uuidv4()
    };
    addEmployee(newEmployee);
    navigate('/');
  };

  return (
    <div className="add-employee">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={employee.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={employee.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Phone:</label>
          <input 
            type="tel" 
            name="phone" 
            value={employee.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Department:</label>
          <input 
            type="text" 
            name="department" 
            value={employee.department} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Position:</label>
          <input 
            type="text" 
            name="position" 
            value={employee.position} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Salary:</label>
          <input 
            type="number" 
            name="salary" 
            value={employee.salary} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <button type="submit" className="btn btn-submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;