import React, { Component } from 'react'
import './ImageCard.css'

export default class ImageSlider extends Component {    
    state = {
        data:[
            {
                "src":"https://cdn.pixabay.com/photo/2020/09/21/09/33/rose-5589514__340.jpg",
                "title":"Product 01",
                "description":"Tutorial of Slide Show"
            },
            {
                "src":"https://cdn.pixabay.com/photo/2020/09/21/21/24/landscape-5591270__340.jpg",
                "title":"Product 02",
                "description":"Tutorial of Slide Show"
            },
            {
                "src":"https://cdn.pixabay.com/photo/2020/09/18/13/05/lynx-5581792__340.jpg",
                "title":"Product 03",
                "description":"Tutorial of Slide Show"
            },
            {
                "src":"https://cdn.pixabay.com/photo/2020/09/24/16/12/roosters-5599141__340.jpg",
                "title":"Product 04",
                "description":"Tutorial of Slide Show"
            },
            {
                "src":"https://cdn.pixabay.com/photo/2020/09/21/16/08/seascape-5590487__340.jpg",
                "title":"Product 05",
                "description":"Tutorial of Slide Show"
            },
            {
                "src":"https://cdn.pixabay.com/photo/2020/09/11/17/01/landscape-5563684__340.jpg",
                "title":"Product 06",
                "description":"Tutorial of Slide Show"
            },
            {
                "src":"https://cdn.pixabay.com/photo/2020/09/22/07/27/gaillardia-5592172__340.jpg",
                "title":"Product 07",
                "description":"Tutorial of Slide Show"
            },
            {
                "src":"https://cdn.pixabay.com/photo/2020/09/27/12/21/children-5606512__340.jpg",
                "title":"Product 08",
                "description":"Tutorial of Slide Show"
            }
        ]
            
        
    }
    myRef = React.createRef();

    getData = async()=>{
        const res = await fetch('./data.json');
        const data = await res.json();
        this.setState({data:data});
    }
    componentDidMount(){
        this.getData();
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                <div className="wrapper">
                    <div className="app" ref={this.myRef}>
                        {
                            data.map((item ,index)=>(
                        
                                <div className="imgcard" key={index}>
                                    <img src={item.src} alt={item.src}></img>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <a href="/">Buy Now <span className="font">&#8250;</span></a>
                                </div>
                            ))
                        }
                    </div>                                            
                </div>
            </div>
        );
    };
}
