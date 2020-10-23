import React from 'react'
import PropTypes from 'prop-types'
import './Dots.css'
function Dots({slider,activeIndex}) {
    return (
        <div className="activedots">
            <span className="dotsspan"></span>
            {
                slider.map((slider,i)=>(
                    <span className="dotsspan" key={slider} active={activeIndex === i} />
                ))
            }
        </div>
    )
}

Dots.propTypes = {
slider:PropTypes.array
}
Dots.defaultProps ={
    slider:[
        {             
            "Image": "https://cdn.pixabay.com/photo/2020/10/02/21/06/dome-5622133__340.jpg"
        },
      
        {             
            "Image": "https://cdn.pixabay.com/photo/2020/10/11/20/15/floating-islands-5646926__340.jpg"
        },
      
        {            
            "Image": "https://cdn.pixabay.com/photo/2020/08/14/15/22/canal-5488271_960_720.jpg"
        },
        {             
            "Image": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
      
        {            
            "Image": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        }
    ]

}

export default Dots

