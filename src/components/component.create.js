// create.component.js

import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    //Define Props and set intitial state
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
        axios.post('http://localhost:4000/employee/add', obj)
        .then(res => console.log(res.data));
        
        this.setState({
            employee_id: '',
            first_name: '',
            last_name: '',
            email_address: '',
            phone_number: '',
            employee_salary: ''
        })
    
    
    }
    
    render() {
        return(
            <div style={{marginTop: 10}}>
                <h3 align="center">Add New Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Employee ID number:  </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.employee_id}
                                onChange={this.onChangeEmployeeID}
                                />
                    </div>
                    <div className="form-group">
                        <label>Add First Name: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.first_name}
                                onChange={this.onChangeFirstName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Add Last Name: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.last_name}
                                onChange={this.onChangeLastName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Add Email Address: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email_address}
                                onChange={this.onChangeEmailAddress}
                            />
                    </div>
                    <div className="form-group">
                        <label>Add Phone Number: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.phone_number}
                                onChange={this.onChangePhoneNumber}
                            />
                    <div className="form-group">
                        <label>Add Salary: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.employee_salary}
                                onChange={this.onChangeEmployeeSalary}
                            />
                    </div>          
                    <div className="form-group">
                        <input type="submit" 
                        value="Add Employee" 
                        className="btn btn-primary"/>
                    </div>
                </div>
                </form>
            </div>
            
        )
    }
}

