import { Link } from 'react-router-dom';

const Employee = ({ employee, onDelete }) => {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td>{employee.department}</td>
      <td>{employee.position}</td>
      <td>₹{employee.salary}</td>
      <td>
        <Link to={`/edit/${employee.id}`} className="btn btn-edit">Edit</Link>
        <button onClick={() => onDelete(employee.id)} className="btn btn-delete">Delete</button>
      </td>
    </tr>
  );
};

export default Employee;