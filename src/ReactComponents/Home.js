import React,{ Component } from "react";
import axios from "axios";
 
// import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';

class  Home extends Component {
    constructor(props){
        super(props);
            this.onChangeFirstName = this.onChangeFirstName.bind(this);
            this.onChangeLastName = this.onChangeLastName.bind(this);
            this.onChangeEmail = this.onChangeEmail.bind(this);
            this.onChangeMiddleName=this.onChangeMiddleName.bind(this);
            this.onChangeContactNo=this.onChangeContactNo.bind(this);
            this.onChangePassword=this.onChangePassword.bind(this);
            this.onChangeAddress=this.onChangeAddress.bind(this);
            this.onSubmit = this.onSubmit.bind(this);

            this.state = {
                first_name: '',
                last_name: '',
                email:'',
                middle_name:'',
                contactno:'',
                password:'',
                address:''
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
    onChangeMiddleName(e){
        this.setState({
            middle_name:e.target.value
        })
    };
    onChangeContactNo(e){
        this.setState({
            contactno:e.target.value
        })
    };
    onChangeAddress(e){
        this.setState({
            address:e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const obj = {
            UserFirstName:this.state.first_name,
            UserMiddleName:this.state.middle_name,
            UserLastName:this.state.last_name,
            UserContactNo:this.state.contactno,
            UserAddress:this.state.address,
            UserEmail:this.state.email,
            UserPassword:this.state.password

        }
        axios.post('http://127.0.0.1:8000/',obj)
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
                <label>Middle Name</label>
                <input type="text" id="mname" className="form-control"  value={this.state.middle_name} onChange={this.onChangeMiddleName}></input>
                <br></br>
                <label>Last Name</label>
                <input type="text" id="lname" className="form-control"  value={this.state.last_name} onChange={this.onChangeLastName}></input>
                <br></br>
                <label>Contact No</label>
                <input type="text" id="contactno" className="form-control"  value={this.state.contactno} onChange={this.onChangeContactNo}></input>
                <br></br>
                <label>Address</label>
                <input type="text" id="address" className="form-control"  value={this.state.address} onChange={this.onChangeAddress}></input>
                <br></br>
                <label>Email</label>
                <input type="email" className="form-control"  id="name"value={this.state.email} onChange={this.onChangeEmail}></input>
                <br></br>
                <label>password</label>
                <input type="password" id="password" className="form-control"  value={this.state.password} onChange={this.onChangePassword}></input>
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
