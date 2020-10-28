import React, { Component } from 'react'
import axios from 'axios';  
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

const HookList = (props) => {
   const [data, setData] = useState([]); 
    const history = useHistory(); 
        
        useEffect(() => {  
            
                const GetData = async () => {            
                  const result = await axios('http://127.0.0.1:8000/books/');            
                  setData(result.data);      
                          
                };            
                GetData();            
              }, []); 
              
            
                    
              const deletestudent = (id) => {             
                if(window.confirm("Are You Sure")){
                  debugger;         
                axios.delete('http://127.0.0.1:8000/books/'+id+'/',{
                  method:'DELETE',
                  header:{'Accept':'application/json',
                  'content-Type':'application/json'
                }
                
                })             
                  .then((result) => {   
                    history.push('/shop');
                                                                      
                  });
                }              
              }; 
            
              

              const editstudent = (id) => {              
                props.history.push({              
                  pathname: '/hookedit/' + id 
                }); 
        }
      
        

    return (
        <div className="container">
            <table className="table">  

                <thead>  

                  <tr>  

                    <th>id</th>  

                    <th>frameworks</th>  
                    <th>Images</th>  

                    

                  </tr>  

                </thead>  

                <tbody>  

                  {  

                    data.map((item, idx) => {  

                      return <tr>  

                        <td>{item.id}</td>  

                        <td>{item.title}</td>  
                        <td><img src={`http://127.0.0.1:8000${item.covers}`}alt={item.title} height="150" width="150" /></td>  

                                             

                         

                        <td>  

                          <div className="btn-group">  

                            <button className="btn btn-warning" onClick={() => { editstudent(item.id) }}>Edit</button>  

                            <button className="btn btn-warning" onClick={() => { deletestudent(item.id) }}>Delete</button>  

                          </div>  

                        </td>  

                      </tr>  

                    })}  

                </tbody>  

              </table> 
        </div>
    )
}

export default HookList
