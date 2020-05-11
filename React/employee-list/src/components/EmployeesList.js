import React from 'react';

class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterStr: '',
    };
  }

  onChangeFilter = e => {
    this.setState({
      filterStr: e.target.value.toLowerCase(),
    });
  }

  render() {
    const { employees } = this.props;
    const { filterStr } = this.state;

    const filteredEmployees = filterStr ?
      employees.filter(e => e.name.toLowerCase().indexOf(filterStr) > -1) :
      employees;

    return (
      <React.Fragment>
        <div className="controls">
          <input
            type="text"
            value={filterStr}
            onChange={this.onChangeFilter}
            className="filter-input"
            data-testid="filter-input" />
        </div>
        <ul className="employees-list">
          { filteredEmployees.map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
