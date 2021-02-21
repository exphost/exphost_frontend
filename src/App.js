//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './sb-admin-2.css'
import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Sidebar from './sidebar'
import Topnav from './topnav'
import Dashboard from './pages/dashboard'
import Instances from './pages/instances'
import MariaDB from './pages/mariadb'

class App extends Component {
  render() {
      return (
        <Router>
          <div id='wrapper'>
            <Sidebar />
            <div id='content-wrapper' className="d-flex flex-column">
              <div id="content">
                <Topnav />
                <div className="container-fluid">
                    <Route exact path = "/" component = {Dashboard} />
                    <Route path = "/dashboard" component = {Dashboard} />
                    <Route path = "/component/instances" component = {Instances} />
                    <Route path = "/component/mariadb" component = {MariaDB} />
                </div>
              </div>
            </div>
          </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
        </Router>
      )
  };
  componentDidMount () {
      const script = document.createElement("script");
      script.src = "/sb-admin-2.js";
      script.async = true;
      document.body.appendChild(script);
  }
}

export default App;
