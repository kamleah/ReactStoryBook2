import React, { useState, useEffect } from 'react'  
import axios from 'axios';

const HookHome = (props) => {

  const [student, setstudent] = useState({id:'',fname: '', lname: '', email: '' });  
  const [showLoading, setShowLoading] = useState(false);  
  const apiUrl = "http://localhost/ReactJs/insert.php"; 

  const Insertstudent = (e) => {  
    e.preventDefault();  
    debugger;  
    const data = {first_name:student.fname,last_name:student.lname,email:student.email,  };
    axios.post(apiUrl, data)  
      .then((result) => {  
        props.history.push('/hooklist')  
      });  
  };  

  const onChange = (e) => { 
    e.persist();  
    debugger;  
    setstudent({...student, [e.target.name]: e.target.value}); 
  }  

    return (
    <div className="container">
        <div className="card">
            <div className="card-header">
                <h3>Update User</h3>
            </div>
            <div className="card-body">
                <form onSubmit={Insertstudent}>
                <label>First Name</label>
                <input type="text" id="fname" name="fname" className="form-control" value={student.fname} onChange={onChange}></input>
                <br></br>
                <label>Last Name</label>
                <input type="text" id="lname" name="lname" className="form-control"  value={student.lname} onChange={onChange}></input>
                <br></br>
                <label>Email</label>
                <input type="email" className="form-control" name="email"  id="name"value={student.email} onChange={onChange}></input>
                <br></br>
                <button type="submit" className="btn btn-primary">Add User</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default HookHome
