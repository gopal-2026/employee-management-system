import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EmployeeProvider } from './context/EmployeeContext';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import './App.css';

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <div className="app">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<EmployeeList />} />
              <Route path="/add" element={<AddEmployee />} />
              <Route path="/edit/:id" element={<EditEmployee />} />
            </Routes>
          </div>
        </div>
      </Router>
    </EmployeeProvider>
  );
}

export default App;

