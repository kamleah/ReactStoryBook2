import React from 'react';
import './App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import {BrowserRouter as Router,Switch,Route,NavLink} from 'react-router-dom';
import Home from './Components/Home';
import View from './Components/View';
import Update from './Components/Update';
import HookHome from './Components/HookHome'
import HookList from './Components/HookList'
import HookEdit from './Components/HookEdit'

function App() {
  return (
    <Router>
    <div className="container">
    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary justify-content-center">     
            <ul className="nav justify-content-center">
                <li className="nav-item">
                  
                <NavLink exact activeClassName="activate" className="nav-link text-white text-uppercase" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact activeClassName="activate" className="nav-link text-white text-uppercase" to="/view">View</NavLink>
                  
                </li>
                
                <li className="nav-item">
                <NavLink exact activeClassName="activate" className="nav-link text-white text-uppercase" to="/hookhome">HookHome</NavLink>
                  
                </li>
                <li className="nav-item">
                <NavLink exact activeClassName="activate" className="nav-link text-white text-uppercase" to="/hooklist">HookList</NavLink>
                  
                </li>
                
              </ul> 
          </nav>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />  
      <Route exact path="/view" component={View} />  
      <Route exact path="/update/:id" component={Update} />
      <Route exact path="/hookhome" component={HookHome} />
      <Route exact path="/hooklist" component={HookList} />  
      <Route exact path="/hookedit/:id" component={HookEdit} />

    </Switch>
    </Router>
  );
}

export default App;
