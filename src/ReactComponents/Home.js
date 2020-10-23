import React,{ Component } from "react";
import axios from "axios";
 
// import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';

class  Home extends Component {
    constructor(props){
        super(props);
            this.onChangeFirstName = this.onChangeFirstName.bind(this);
            this.onChangeLastName = this.onChangeLastName.bind(this);
            this.onChangeEmail = this.onChangeEmail.bind(this);
            this.onSubmit = this.onSubmit.bind(this);

            this.state = {
                first_name: '',
                last_name: '',
                email:''
            }
    }

    onChangeFirstName(e){
        this.setState({
            first_name:e.target.value
        });
    }

    onChangeLastName(e){
        this.setState({
            last_name:e.target.value
        })
    };

    onChangeEmail(e){
        this.setState({
            email:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const obj = {
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email
        }
        axios.post('http://localhost/ReactJs/insert.php',obj)
        .then(res => console.log(res.data));
        console.log(obj);
    }
    render(){
  return (
    
    <div>
        <div className="container">
            <div className="card">
                <div className="card-header">
                <h3>Add New User</h3>
                </div>
                <div className="card-body">
                <form onSubmit={this.onSubmit}>
                <label>First Name</label>
                <input type="text" id="fname" className="form-control" value={this.state.first_name} onChange={this.onChangeFirstName}></input>
                <br></br>
                <label>Last Name</label>
                <input type="text" id="lname" className="form-control"  value={this.state.last_name} onChange={this.onChangeLastName}></input>
                <br></br>
                <label>Email</label>
                <input type="email" className="form-control"  id="name"value={this.state.email} onChange={this.onChangeEmail}></input>
                <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            
            </div>            
        </div>
    </div>
    )
  }
}

export default Home
