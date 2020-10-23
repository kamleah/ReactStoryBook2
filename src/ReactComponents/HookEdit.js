import React, { useState, useEffect } from 'react'  
import axios from 'axios';

const HookEdit = (props) => {
    const [student, setstudent]= useState({id:'',fname: '', lname: '', email: '' });  
        const Url = "http://localhost/ReactJs/getById.php?id=" + props.match.params.id;          

        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setstudent(result.data);  
          };  
          GetData();  
        }, []);          

        const Updatestudent = (e) => { 
          e.preventDefault();  
          const data = {id:props.match.params.id, first_name:student.fname,last_name:student.lname,email:student.email,  }; 
          axios.post('http://localhost/ReactJs/update.php?id='+ props.match.params.id, data)  
            .then((result) => {  
              props.history.push('/hooklist')  
            });  
        };  

        const onChange = (e) => {  
          e.persist();  
          setstudent({...student, [e.target.name]: e.target.value});  
        }  
        
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>Update User</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={Updatestudent}>
                        <label>First Name</label>
                        <input type="text" id="fname" name="fname" className="form-control" value={student.fname} onChange={onChange}></input>
                        <br></br>
                        <label>Last Name</label>
                        <input type="text" id="lname" name="lname" className="form-control"  value={student.lname} onChange={onChange}></input>
                        <br></br>
                        <label>Email</label>
                        <input type="email" className="form-control" name="email"  id="name"value={student.email} onChange={onChange}></input>
                        <br></br>
                        <button type="submit" className="btn btn-primary">Update User</button>
                        </form>
                    </div>
                </div>
            </div>            
        </div>
    
    )
}

export default HookEdit

