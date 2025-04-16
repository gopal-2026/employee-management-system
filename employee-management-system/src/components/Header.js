import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Employee Management System</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add Employee</Link>
      </nav>
    </header>
  );
};

export default Header;
