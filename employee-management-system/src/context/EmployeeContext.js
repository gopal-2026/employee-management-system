import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(API_URL);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const addEmployee = async (employee) => {
    try {
      const response = await axios.post(API_URL, employee);
      setEmployees([...employees, response.data]);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setEmployees(employees.filter(employee => employee.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const updateEmployee = async (id, updatedEmployee) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedEmployee);
      setEmployees(employees.map(employee => 
        employee.id === id ? response.data : employee
      ));
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <EmployeeContext.Provider 
      value={{ employees, addEmployee, deleteEmployee, updateEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};