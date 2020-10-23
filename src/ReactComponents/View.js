import React,{Component} from 'react';
import axios from "axios";
import RecordsList from './RecordList'

// import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';

class View extends Component {
  constructor(props){
    super(props);
    this.state = {student:[]}
  }
  componentDidMount(){
    axios.get('http://127.0.0.1:8000/')
    .then(response =>{
      this.setState({student:response.data});
    })
    .catch(function(error){
      console.log(error)
    })
  }

  userList(){
    return this.state.student.map(function(object, i){
      return <RecordsList obj = {object} key={i} />;
    })
  }
  render(){
    return (
    
      <div>
          <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {this.userList()}
            </tbody> 
              
              
          </table>
          </div>
      </div>
      
    );
  }
  
}

export default View;
