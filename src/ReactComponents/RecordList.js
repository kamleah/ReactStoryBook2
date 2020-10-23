import React, {Component} from 'react';
import axios from "axios";
import {BrowserRouter as Router,Switch,Link,Route,NavLink} from 'react-router-dom';
class RecordsList extends Component{

    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(){
        axios.get('http://localhost/ReactJs/delete.php?id='+this.props.obj.id)
        .then(console.log('Deleted ID : '+this.props.obj.id))
        .catch(err => console.log(err))
    }
    render(){
        return(
            
                
                <tr>
                    <td>
                        {this.props.obj.id}
                    </td>
                    <td>
                        {this.props.obj.frameworks}
                    </td>
                    <td>
                        {this.props.obj.email}
                    </td>
                    <td>
                        <Link to={"/update/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                    </td>
                    <td>
                        <button className="btn btn-danger" onClick={this.delete}>Delete</button>
                    </td>
                </tr>
                
           
        );
    }
}

export default RecordsList