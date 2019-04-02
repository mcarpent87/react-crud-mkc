//Import bootstrap 4 and browser router
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import hr_pic from "./img/hr.jpg"

//Import React components for this App
import Create from './components/component.create';
import Edit from './components/component.edit';
import Index from './components/component.index';

//Navbar that routes to different pages in the app
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={'/'} className="navbar-brand">Employee Management Portal </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Employee Information</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2 className="text-center">Welcome to the Employee Management Portal</h2> <br/>
          <img
            className="responsive-img"
            src={hr_pic}
            alt="HR pic"  
            width="1100px"
            height="250px"              
          />
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
