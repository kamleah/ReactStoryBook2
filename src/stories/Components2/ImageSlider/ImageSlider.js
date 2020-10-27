import React, { Component } from 'react'
import './ImageSlider.css'

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

    prevClick = () =>{
        console.log(this.myRef.current)
        const slide = this.myRef.current;
        slide.scrollLeft -= slide.offsetWidth;
        if(slide.scrollLeft <= 0){
            slide.scrollLeft = slide.scrollWidth;
        }
    };
    nextClick = () =>{
        const slide = this.myRef.current;
        slide.scrollLeft += slide.offsetWidth;
        if(slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)){
            slide.scrollLeft = 0;
        }
    };
    render() {
        const {data} = this.state;
        return (
            <div>
                <div className="wrapper">
                    <div className="app" ref={this.myRef}>
                        {
                            data.map((item ,index)=>(
                        
                                <div className="card" key={index}>
                                    <img src={item.src} alt={item.src}></img>
                                    <p>{item.title}</p>
                                    <p>{item.description}</p>
                                    <a href="/">RadMore</a>
                                    
                                </div>
                                
                            ))
                        }
                        
                    </div>
                                  
                    <button className="prev " onClick={this.prevClick}>&#8249;</button>
                    <button className="next " onClick={this.nextClick}>&#8250;</button>    

                            


                </div>
            </div>
        );
    };
}
