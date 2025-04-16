import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EmployeeContext } from '../context/EmployeeContext';

const EditEmployee = () => {
  const { employees, updateEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    position: '',
    salary: ''
  });

  useEffect(() => {
    const employeeToEdit = employees.find(emp => emp.id === id);
    if (employeeToEdit) {
      setEmployee(employeeToEdit);
    }
  }, [id, employees]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, employee);
    navigate('/');
  };

  return (
    <div className="edit-employee">
      <h2>Edit Employee</h2>
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
        
        <button type="submit" className="btn btn-submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;