import React from 'react'
import PropTypes from 'prop-types'
import './BannerSlider.css'
import LinkButton from '../LinkButton/LinkButton'
import ImgComponent from '../ImgComponent/ImgComponent'
const BannerSlider = ({href,buttonName,ImgSrc,alt,title,Heading,description}, {...rest}) => {
    
    return (
        
        <div className="MainBanner">
            <div className="Bannerapp" > 
                <div className="BannerHeading">
                    <h2>{Heading}</h2>
                </div>
                 {/* {
                    BannerDataFields.map((item,index)=>(
                        key={index}  */}
                    <div className="BannerSlider" >
                        <div className="BannerSliderImg">
                            <ImgComponent ImgSrc={ImgSrc} alt={alt} height={250} width={450}></ImgComponent>
                         
                        
                        </div>
                        <div className="BannerSliderText">
                            <div className="BannerHeading">
                                <h3>
                                    {title}
                                </h3>
                            </div>
                            <div className="Bannerparagraph">
                                <p>{description}</p>
                            </div>
                            <div className="BannerButton">
                    <LinkButton href={href} size='smalls' varient='primarys'>{buttonName}</LinkButton>
                            </div>
                        </div>
                    </div>
                     {/* ))
                 } */}
            </div> 
                {/* <button className="prev " onClick={prevClick}>&#8249;</button>
                <button className="next " onClick={nextClick}>&#8250;</button>    */}
               
            
        </div>
        
    );
}

BannerSlider.propTypes = {

    BannerDataFields:PropTypes.array,
    
}

BannerSlider.defaultProps = {
    
    BannerDataFields:[
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/21/09/33/rose-5589514__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/21/21/24/landscape-5591270__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/18/13/05/lynx-5581792__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/24/16/12/roosters-5599141__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/21/16/08/seascape-5590487__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/11/17/01/landscape-5563684__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/22/07/27/gaillardia-5592172__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/27/12/21/children-5606512__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        }
    ]
}

export default BannerSlider