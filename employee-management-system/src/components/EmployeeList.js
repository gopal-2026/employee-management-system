import { useContext, useState } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import Employee from './Employee';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';

const EmployeeList = () => {
  const { employees, deleteEmployee } = useContext(EmployeeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');

  const departments = ['All', ...new Set(employees.map(emp => emp.department))];

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'All' || 
                             employee.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="employee-list">
      <h2>Employee Directory</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterOptions 
        departments={departments} 
        filterDepartment={filterDepartment} 
        setFilterDepartment={setFilterDepartment} 
      />
      
      {filteredEmployees.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(employee => (
              <Employee key={employee.id} employee={employee} onDelete={deleteEmployee} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;