import React from 'react'
import PropTypes from 'prop-types';
import './CardSlider2.css'
import LinkButton from '../LinkButton/LinkButton'

const CardSlider2s =({heading,description,img,src,href,dataFields}) =>{

return(
<div>

 
<div className="img-card" >
<img src={img} alt={src}></img>
<h4>{heading}</h4>
<p>{description}</p>
                            
<LinkButton href={href} sizes='smalls' varient='secondarys'>Buy Now</LinkButton>
</div>
      
 </div>               
);
        
}

CardSlider2s.propTypes= {
    
    dataFields:PropTypes.array  
}
  
CardSlider2s.defaultProps= {
    
    dataFields: [
            {
                heading:'The Most Powerful iphone ',
                description:'Save Upto RM1,400 With Easy Phone', 
                img: 'https://media.istockphoto.com/photos/apple-iphone-11pro-silver-white-blank-screen-and-front-view-picture-id1188222371?b=1&k=6&m=1188222371&s=170667a&w=0&h=hw6r9UEt-hj98WnRdRRmizOnOshfU3wrhpc8HJnIUUA=',
                href:'https://www.instagram.com/?hl=en'
            },
            {
                heading:'The Most Powerful iphone ',
                description:'Save Upto RM1,400 With Easy Phone', 
                img: 'https://media.istockphoto.com/photos/apple-iphone-11pro-silver-white-blank-screen-and-front-view-picture-id1188222371?b=1&k=6&m=1188222371&s=170667a&w=0&h=hw6r9UEt-hj98WnRdRRmizOnOshfU3wrhpc8HJnIUUA=',
                href:'https://www.facebook.com/'
            }
        ]
    }
  
  export default CardSlider2s;