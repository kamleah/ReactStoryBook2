import React,{useState} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
function Image() {
    const [title,setTitle] = useState("");
    const [covers,setCover] = useState("");
    const history = useHistory(); 
    const newBook = () =>{
        const uploadData =  new FormData();
        uploadData.append('title',title);
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
        <div className="card">
            <div className="card-header">
                <h4>Upload Images</h4>
            </div>
            <div className="card-body">
                <input type="text" value={title} onChange={(evt)=>setTitle(evt.target.value)} />
                <input type="file"  onChange={(evt)=>setCover(evt.target.files[0])} />
                <button className="btn btn-primary" onClick={() => newBook() }>New Book</button>
            </div>
        </div>
    )
}

export default Image
