// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmployeeID = this.onChangeEmployeeID.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeEmployeeSalary = this.onChangeEmployeeSalary.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        employee_id: '',
        first_name: '',
        last_name: '',
        email_address: '',
        phone_number: '',
        employee_salary: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/employee/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                  employee_id: response.data.employee_id,
                  first_name: response.data.first_name,
                  last_name: response.data.last_name,
                  email_address: response.data.email_address,
                  phone_number: response.data.phone_number,
                  employee_salary: response.data.employee_salary });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

     onChangeEmployeeID(e) {
        this.setState({
            employee_id: e.target.value
      }); 
     }

     onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
      }); 
     }

     onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
      }); 
     }

     onChangeEmailAddress(e) {
        this.setState({
            email_address: e.target.value
      }); 
     }

     onChangePhoneNumber(e) {
        this.setState({
            phone_number: e.target.value
      }); 
     }

     onChangeEmployeeSalary(e) {
        this.setState({
            employee_salary: e.target.value
      }); 
     }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      employee_id: this.state.employee_id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email_address: this.state.email_address,
      phone_number: this.state.phone_number,
      employee_salary: this.state.employee_salary
    };
    axios.post('http://localhost:4000/employee/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  //Render the updated values for an employee
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Employee ID</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Employee ID:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.employee_id}
                      onChange={this.onChangeEmployeeID}
                      />
                </div>
                <div className="form-group">
                    <label>First Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.first_name}
                      onChange={this.onChangeFirstName}
                      />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.last_name}
                      onChange={this.onChangeLastName}
                      />
                </div>
                <div className="form-group">
                <label>Email Address: </label>
                <input type="text" 
                  className="form-control"
                  value={this.state.email_address}
                  onChange={this.onChangeEmailAddress}
                  />
                </div>
                <div className="form-group">
                <label>Phone Number: </label>
                <input type="text" 
                  className="form-control"
                  value={this.state.phone_number}
                  onChange={this.onChangePhoneNumber}
                  />
                </div>
                <div className="form-group">
                <label>Employee Salary: </label>
                <input type="text" 
                  className="form-control"
                  value={this.state.employee_salary}
                  onChange={this.onChangeEmployeeSalary}
                  />
                </div>
            
                <div className="form-group">
                    <input type="submit" 
                      value="Update Employee" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}