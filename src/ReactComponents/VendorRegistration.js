import React,{useState} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import CardHeader from '../stories/StoriesComponents/CardHeader/CardHeader'
import Input from '../stories/StoriesComponents/Input/Input'
function Image() {
    const [title,setTitle] = useState("");
    const [address,setAddress] = useState("");
    const [covers,setCover] = useState("");
    const history = useHistory(); 
    const newBook = () =>{
        const uploadData =  new FormData();
        uploadData.append('title',title);
        uploadData.append('address',address);
        uploadData.append('covers',covers,covers.name);
        console.log(title,covers);
        fetch ('http://127.0.0.1:8000/books/',{
            method:'POST',
            body:uploadData
        })
        .then(res=>console.log(res))
        .catch(error=>console.log(error));
        history.push('/hooklist');
    }
    return (
        <div className="shop">
            <CardHeader HeaderText="Vendor Registration" />            
            <div className="border-primary card-body">
               <div className="row mt-4">
                    <div className="col-sm-6">
                        <label>Enter Shop Name</label>
                    </div>
                    <div className="col-sm-6">
                        <Input type="text" value={title} onChange={(evt)=>setTitle(evt.target.value)} placeholder="Enter Shop Name" ></Input>
                    </div>
               </div>
               <div className="row mt-4">
                    <div className="col-sm-6">
                        <label>Enter Shop Address</label>
                    </div>
                    <div className="col-sm-6">
                    <Input type="text" value={address} onChange={(evt)=>setAddress(evt.target.value)} placeholder="Enter Shop Address" ></Input>
                    </div>
               </div>
               <div className="row mt-4">
                    <div className="col-sm-6">
                        <label>Enter Shop Address</label>
                    </div>
                    <div className="col-sm-6">
                    <Input type="file"  onChange={(evt)=>setCover(evt.target.files[0])} placeholder="Select Shop Images"></Input>
                    </div>
               </div>
               <div className="row mt-4">
                    <div className="col-sm-12">
                        <Input type="submit" background="#4285f4" onClick={() => newBook() }></Input>
                    </div>
               </div>
                
                    
                    
                    {/* <input type="file"  onChange={(evt)=>setCover(evt.target.files[0])} /> */}
                    {/* <button className="btn btn-primary" onClick={() => newBook() }>New Book</button> */}
                
            </div>
        </div>
    )
}

export default Image
