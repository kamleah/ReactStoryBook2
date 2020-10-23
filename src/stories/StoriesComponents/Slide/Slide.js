import React,{useState} from 'react'
import PropTypes from 'prop-types'

function Slide({SlideImages,SlideAlt,TextOne,TextTwo}) {
    const [x,setX] = useState(0);
    
    
    return (
       
                    <div className="slideWithText" style={{transform:`translateX(${x}%)`} }>
                        <img src={SlideImages} alt={SlideAlt} />
                        <div className="TextOne">
                            <p>{TextOne}</p>
                        </div>
                        <div className="TextTwo">
                            <p>{TextTwo}</p>
                        </div>
                    </div>
    )

}

Slide.propTypes = {
    SlideImages:PropTypes.string,
    SlideAlt:PropTypes.string,
    TextOne:PropTypes.string,
    TextTwo:PropTypes.string
}
Slide.defaultProps ={
    SlideImages:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    SlideAlt:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    TextOne:"Text One",
    TextTwo:"Text Two"
}
export default Slide

