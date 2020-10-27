import React from 'react'
import BannerSlider from '../BannerSlider/BannerSlider'
import PropTypes from 'prop-types'
import CardSlider2s from '../CardSlider2/CardSlider2'
import Header2 from '../Header2/Header2' 
import Footer2 from '../Footer2/Footer2'
import FooterLink from '../FooterLink/FooterLink'
import BuynowCard from '../BuyNowCard/BuynowCard'
import { BuynowCard1 } from '../BuyNowCard/BuynowCard.stories'

export const AllComponent = ({DataFields,HeaderData,BuynowCardData}) => {
    
    return (
        
        <>
            
{/* 


       <div className="stock-container">
        {DataFields.map((item,index)=>
        <div key={index}>
        <BannerSlider
        Heading={item.title}
        ImgSrc={item.src}
        buttonName="Click Me"
        description={item.description}
        />
        </div>
        )
            
        
        }
      </div> 

      {DataFields.map((item,index)=>
        <div key={index}>
        <CardSlider2s
        heading={item.title}
        img={item.src}        
        description={item.description}
        href={item.src}
        />
        </div>
        )
        } */}
            
{/* <Footer2 

title="giffgaff runs on the o2 network"
subtitle="Copyright © 2020 giffgaff"
bottomContent="giffgaff Limited is authorised and regulated by the Financial Conduct Authority and is listed on the Financial Services Register. Firm Reference Number - 680957. Registered address – giffgaff Limited, 260 Bath Road, Slough SL1 4DX. Company Number - 04196996."

/> */}

{
    BuynowCardData.map((item,index)=>
    <div key={index}>
        <BuynowCard 
        Img={item.Img}
        Imgalt={item.Imgalt}
        BadgesTitle={item.BadgesTitle}
        ProductTitle={item.ProductTitle}
        Price={item.Price}
        ProductName={item.ProductName}
        Days={item.Days}
        ProductTitle2={item.ProductTitle2}
        ButtonTitle={item.ButtonTitle}


        />
    </div>
    )
}

    </>
        
    );
}

AllComponent.propTypes = {

    DataFields:PropTypes.array,
    HeaderData:PropTypes.array,
    BuynowCardData:PropTypes.array
    
}

AllComponent.defaultProps = {
    HeaderData:[ 
        {
            "title":"Find & WatchTv",
            "href":"abc.com"
        },
        {
            "title":"Products & Packages",
            "href":"abcd.com"
        },
        {
            "title": "My Account",
            "href":"nhju.com"
        },
        {
            "title":"Help",
            "href":"ljfs.com"
        },
        {
            "title":"Contact",
            "href":"ljfs.com"
        },   
    
        {
            "title":"About",
            "href":"ljfs.com"
        }
     ],
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
          Img:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase1/CatPage/Oct10/Note10lite.jpg",
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
          Img:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase1/CatPage/Oct9/Nord5g.jpg",
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
          Img:"https://images-na.ssl-images-amazon.com/images/I/71HUEnUfnOL._SL1500_.jpg",
          Imgalt:"image",
          ProductTitle:"Samasung Galaxy Note20 Ultra 5g",
          BadgesTitle:"New Phone",
          Price:"RRP RMS 199.00",
          ProductName:"RM129",
          Days:"month",
          ProductTitle2:"RM2998",
          ButtonTitle:"Buy Now",
        }
      ],

    
     DataFields:[
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

export default AllComponent