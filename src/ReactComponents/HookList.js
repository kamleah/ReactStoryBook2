import React from 'react'
import axios from 'axios';  
import { useState, useEffect } from 'react'

const HookList = (props) => {
    const [data, setData] = useState([]);  
        
        useEffect(() => {  
            
                const GetData = async () => {            
                  const result = await axios('http://127.0.0.1:8000/');            
                  setData(result.data);              
                };            
                GetData();            
              }, []);       
                    
              const deletestudent = (id) => {             
                debugger;         
                axios.delete('http://localhost/ReactJs/delete.php?id=' + id)             
                  .then((result) => {             
                    props.history.push('/hooklist')             
                  });              
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

                    

                  </tr>  

                </thead>  

                <tbody>  

                  {  

                    data.map((item, idx) => {  

                      return <tr>  

                        <td>{item.id}</td>  

                        <td>{item.frameworks}</td>  

                                             

                         

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
