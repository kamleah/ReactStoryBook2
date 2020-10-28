import React from 'react';
import './App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import {BrowserRouter as Router,Switch,Route,NavLink} from 'react-router-dom';
import Home from './ReactComponents/Home';
import View from './ReactComponents/View';
import Update from './ReactComponents/Update';
import HookHome from './ReactComponents/HookHome'
import HookList from './ReactComponents/HookList'
import HookEdit from './ReactComponents/HookEdit'
import Image from './ReactComponents/Image'
import Login from './ReactComponents/Login'
import Index from './ReactComponents/Index';
import Shop from './ReactComponents/Shop'
import VendorRegistration from './ReactComponents/VendorRegistration'


import Header from '../src/stories/StoriesComponents/Header/Header';
import LinkHeader from '../src/stories/StoriesComponents/LinkHeader/LinkHeader'

import PropTypes from 'prop-types'
function App() {
  return (
    <Router>
    <div className="containersd">
    
           <Header></Header>
           <LinkHeader />
           </div>
    
    <Switch>
      <Route exact path="/" component={Index} />  
      <Route exact path="/view" component={View} />  
      <Route exact path="/update/:id" component={Update} />
      <Route exact path="/hookhome" component={HookHome} />
      <Route exact path="/shop" component={Shop} />  
      <Route exact path="/hookedit/:id" component={HookEdit} />
      <Route exact path="/image" component={Image} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/index" component={Index} />
      <Route exact path="/Vendor_Registration" component={VendorRegistration} />
      

    </Switch>
    </Router>
  );
}

LinkHeader.propTypes = {
    
  LinkHeaderData:PropTypes.array
}

LinkHeader.defaultProps={
  backgroundColor:"rgba(125,111,194,1)",
  color:"rgba(21,9,80,1)",
  LinkHeaderData:[
      {
          "HeaderName":"Home",
          "HeaderLink":"/",
      },
      {
          "HeaderName":"Shop",
          "HeaderLink":"/Shop",
      },
      {
          "HeaderName":"Vendor Registration",
          "HeaderLink":"/Vendor_Registration",
      },
      {
          "HeaderName":"My Accounts",
          "HeaderLink":"/accounts",
      },
      {
          "HeaderName":"Checkouts",
          "HeaderLink":"/checkouts",
      },
      {
          "HeaderName":"FAQs",
          "HeaderLink":"/faqs",
      },
      
]
}
export default App;
