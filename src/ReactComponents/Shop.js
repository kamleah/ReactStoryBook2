import React, { Component } from 'react'
import axios from 'axios';  
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import ShopDetailsCard from '../stories/StoriesComponents/ShopDetailsCard/ShopDetailsCard'

const Shop = (props) => {
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
        <div className="shop">
         {
             data.map((items)=>
             <ShopDetailsCard  ShopName={items.title} ShopAddress={items.address} CardBackgroundImage={items.covers} SmallCardBackgroundImage={items.covers}/>
             )
         }
                
        </div>
    )
    
}

export default Shop
