const FilterOptions = ({ departments, filterDepartment, setFilterDepartment }) => {
    return (
      <div className="filter-options">
        <label>Filter by Department:</label>
        <select
          value={filterDepartment}
          onChange={(e) => setFilterDepartment(e.target.value)}
        >
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default FilterOptions;