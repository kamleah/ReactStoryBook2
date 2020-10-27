import React from 'react'
import './BuynowCard.css'
import PropTypes from 'prop-types'
export const BuynowCard =({
    Img,
    Imgalt,
    BadgesTitle,
    ProductTitle,
    Price,
    ProductName,
    Days,
    ProductTitle2,
    ButtonTitle
}) => {
    
    
    
        return (
            <div>
                <div className="cards">
                    <div className="card-top">
                        <div className="card-img">
                            <img src={Img} alt={Imgalt}></img>
                        </div>
                        <div className="card-details">
                            <div className="card-badget">
                                <h4>{BadgesTitle}</h4>
                            </div>
                            <div className="details">
                                <h4>{ProductTitle}</h4>
                                <p>{Price}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-botton-left">
                            <h4>EasyPhone<sup>TM</sup> OWN</h4>
                            <p>From</p>
                            <h3>{ProductName}</h3>
                            <p>/{Days}</p>
                        </div>
                        <div className="card-botton-right">
                            <h4>Device Bundle</h4>
                            <p>From</p>
                            <h3>{ProductTitle2}</h3>
                            <p>/{Days}</p>
                        </div>
                    </div>
                    <div>
                        <button className="buyNow">{ButtonTitle}</button>
                    </div>
                </div>
            </div>
        )
    }



    BuynowCard.propTypes = {
        Img: PropTypes.string,
        Imgalt: PropTypes.string,
        ProductTitle: PropTypes.string,
        BadgesTitle: PropTypes.string,
        Price: PropTypes.string,
        ProductName:PropTypes.string,
        Days:PropTypes.string,
        ProductTitle2:PropTypes.string,
        ButtonTitle:PropTypes.string,
        BuynowCardData:PropTypes.array
      };
      
      BuynowCard.defaultProps = {
        Img:"https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY218_.jpg",
        Imgalt:"image",
        ProductTitle:"Samasung Galaxy Note20 Ultra 5g",
        BadgesTitle:"New Phone",
        Price:"RRP RMS 199.00",
        ProductName:"RM129",
        Days:"month",
        ProductTitle2:"RM2998",
        ButtonTitle:"Buy Now",
        
        BuynowCardData: [
          {
            Img:"https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY218_.jpg",
            Imgalt:"image",
            ProductTitle:"Samasung Galaxy Note20 Ultra 5g",
            BadgesTitle:"New Phone",
            Price:"RRP RMS 199.00",
            ProductName:"RM129",
            Days:"month",
            ProductTitle2:"RM2998",
            ButtonTitle:"Buy Now",
          },
          {
            Img:"https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY218_.jpg",
            Imgalt:"image",
            ProductTitle:"Samasung Galaxy Note20 Ultra 5g",
            BadgesTitle:"New Phone",
            Price:"RRP RMS 199.00",
            ProductName:"RM129",
            Days:"month",
            ProductTitle2:"RM2998",
            ButtonTitle:"Buy Now",
          },
          {
            Img:"https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY218_.jpg",
            Imgalt:"image",
            ProductTitle:"Samasung Galaxy Note20 Ultra 5g",
            BadgesTitle:"New Phone",
            Price:"RRP RMS 199.00",
            ProductName:"RM129",
            Days:"month",
            ProductTitle2:"RM2998",
            ButtonTitle:"Buy Now",
          },
          {
            Img:"https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY218_.jpg",
            Imgalt:"image",
            ProductTitle:"Samasung Galaxy Note20 Ultra 5g",
            BadgesTitle:"New Phone",
            Price:"RRP RMS 199.00",
            ProductName:"RM129",
            Days:"month",
            ProductTitle2:"RM2998",
            ButtonTitle:"Buy Now",
          }
        ]
      };
      
      export default BuynowCard;