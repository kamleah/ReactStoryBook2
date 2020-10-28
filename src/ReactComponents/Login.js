import React from 'react'
import axios from 'axios';  
import { useState, useEffect } from 'react'
import CardHeader from '../stories/StoriesComponents/CardHeader/CardHeader'
import Input from '../stories/StoriesComponents/Input/Input';

const Login = (props) => {
     const [email, setEmail]= useState('');
     const [password, setPassword]= useState('');     
     
     const handlesubmit = (e) =>{
        
         e.preventDefault();
         const LoginData = new FormData();
         LoginData.append('email',email);
         LoginData.append('password',password);
         alert(email+password+"Datas");
         console.log(email,password,LoginData);
     }     
     
    return (    
        <div className="container">
            <div className="card mt-4">
                <form onSubmit={handlesubmit}>
                <CardHeader HeaderText="Login" borderColor="green" HeaderBackground="yellow"></CardHeader>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <label>Email</label>
                            </div>
                            <div className="col-sm-6">
                                <Input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />                                
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-6">
                                <label>Password</label>
                            </div>
                            <div className="col-sm-6">
                            <Input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />                            
                            </div>
                        </div>
                        <div className="row mt-2">                    
                            <div className="col-sm-12">
                                <Input type="submit" placeholder="Submit" background="rgba(100,85,172,1)"  ></Input>                               
                            </div>
                        </div>
                    </div>
                </form>            
            </div>
        </div>          
    );
  }
 
 export default Login
 