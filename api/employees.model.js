const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the collection and schema for Employees
let Employees = new Schema({
  employee_id: {
    type: Number
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email_address: {
    type: String
  },
  phone_number: {
    type: Number
  },
  employee_salary: {
    type: Number
  }
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employees', Employees);