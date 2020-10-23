import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import Input from '../Input/Input'
import Search from '../Search/Search'
import Badges from '../Badges/Badges'
import LinkHeader from '../LinkHeader/LinkHeader'
import Logo from '../Logo/Logo'
import Cart from '../Cart/Cart'
import ProductCart from '../ProductCard/ProductCart'
import SliderWithText from '../SliderWithText/SliderWithText'
import Slide from '../Slide/Slide'
import Slider from '../Slider/Slider'
function Header({backgroundColor,productCardData,slider,SlideShow}) {
    return (
        <>
           <div className="iskartHeader">
                <div className="LogoSection">
                    <Logo />
                </div>
                <div className="HeaderSection">
                    <Input /><Search />
                </div>
                <div className="cartSection">
                    <Cart /><Badges items="5" />
                </div>
           </div>
        </>
    )
}

Header.propTypes = {
    backgroundColor:PropTypes.string,
    productCardData:PropTypes.array,
    SlideShow:PropTypes.array
}
Header.defaultProps = {
    backgroundColor:null,
    SlideShow:[
        {             
            "Image": "https://images.pexels.com/photos/2109755/pexels-photo-2109755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "TextOne":"Testing is Going On 10",
            "TextTwo":"Teasting is Done Succeefully 10",
        },
      
        {             
            "Image": "https://cdn.pixabay.com/photo/2020/10/11/20/15/floating-islands-5646926__340.jpg",
            "TextOne":"Testing is Going On 20",
            "TextTwo":"Teasting is Done Succeefully 9",
        },
      
        {            
            "Image": "https://cdn.pixabay.com/photo/2020/08/14/15/22/canal-5488271_960_720.jpg",
            "TextOne":"Testing is Going On 30",
            "TextTwo":"Teasting is Done Succeefully 8",
        },
        {             
            "Image": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "TextOne":"Testing is Going On 40",
            "TextTwo":"Teasting is Done Succeefully 7",
        },
      
        {            
            "Image": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
            "TextOne":"Testing is Going On 50",
            "TextTwo":"Teasting is Done Succeefully 6",
        }
    ],
    productCardData:
        [
            {
                backgroundColor:"red",
                productImg:"https://c8.alamy.com/comp/D0WPK8/bottle-of-corona-mexican-beer-D0WPK8.jpg",
                productName:"Jaadu Ki Bootle",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"Out of Stock",
                offPercentage:"25"
            },
            {
                backgroundColor:"green",
                productImg:"https://cdn.pixabay.com/photo/2020/10/12/06/16/goose-5647807__340.jpg",
                productName:"Goose",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"2"
            },
            {
                backgroundColor:"yellow",
                productImg:"https://cdn.pixabay.com/photo/2020/10/11/07/59/sunflowers-5645039__340.jpg",
                productName:"Sunflower",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"5"
            },
            {
                backgroundColor:"Brown",
                productImg:"https://cdn.pixabay.com/photo/2020/10/11/09/58/boats-5645356__340.jpg",
                productName:"Sunflower",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"45"
            },
            {
                backgroundColor:"red",
                productImg:"https://c8.alamy.com/comp/D0WPK8/bottle-of-corona-mexican-beer-D0WPK8.jpg",
                productName:"Jaadu Ki Bootle",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"Out of Stock",
                offPercentage:"10"
            },
            {
                backgroundColor:"green",
                productImg:"https://cdn.pixabay.com/photo/2020/10/12/06/16/goose-5647807__340.jpg",
                productName:"Goose",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"9"
            },
            {
                backgroundColor:"yellow",
                productImg:"https://cdn.pixabay.com/photo/2020/10/11/07/59/sunflowers-5645039__340.jpg",
                productName:"Sunflower",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"78"
            },
            {
                backgroundColor:"Brown",
                productImg:"https://cdn.pixabay.com/photo/2020/10/11/09/58/boats-5645356__340.jpg",
                productName:"Sunflower",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"25"
            },
            {
                backgroundColor:"red",
                productImg:"https://c8.alamy.com/comp/D0WPK8/bottle-of-corona-mexican-beer-D0WPK8.jpg",
                productName:"Jaadu Ki Bootle",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"Out of Stock",
                offPercentage:"50"
            },
            {
                backgroundColor:"green",
                productImg:"https://cdn.pixabay.com/photo/2020/10/12/06/16/goose-5647807__340.jpg",
                productName:"Goose",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"58"
            },
            {
                backgroundColor:"yellow",
                productImg:"https://cdn.pixabay.com/photo/2020/10/11/07/59/sunflowers-5645039__340.jpg",
                productName:"Sunflower",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"48"
            },
            {
                backgroundColor:"Brown",
                productImg:"https://cdn.pixabay.com/photo/2020/10/11/09/58/boats-5645356__340.jpg",
                productName:"Sunflower",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"78"
            },
            {
                backgroundColor:"red",
                productImg:"https://c8.alamy.com/comp/D0WPK8/bottle-of-corona-mexican-beer-D0WPK8.jpg",
                productName:"Jaadu Ki Bootle",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"Out of Stock",
                offPercentage:"58"
            },
            {
                backgroundColor:"green",
                productImg:"https://cdn.pixabay.com/photo/2020/10/12/06/16/goose-5647807__340.jpg",
                productName:"Goose",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"25"
            },
            {
                backgroundColor:"yellow",
                productImg:"https://cdn.pixabay.com/photo/2020/10/11/07/59/sunflowers-5645039__340.jpg",
                productName:"Sunflower",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"78"
            },
            {
                backgroundColor:"Brown",
                productImg:"https://cdn.pixabay.com/photo/2020/10/11/09/58/boats-5645356__340.jpg",
                productName:"Sunflower",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"25"
            },
            {
                backgroundColor:"red",
                productImg:"https://c8.alamy.com/comp/D0WPK8/bottle-of-corona-mexican-beer-D0WPK8.jpg",
                productName:"Jaadu Ki Bootle",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"Out of Stock",
                offPercentage:"45"
            },
            {
                backgroundColor:"green",
                productImg:"https://cdn.pixabay.com/photo/2020/10/12/06/16/goose-5647807__340.jpg",
                productName:"Goose",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"69"
            },
            {
                backgroundColor:"yellow",
                productImg:"https://cdn.pixabay.com/photo/2020/10/11/07/59/sunflowers-5645039__340.jpg",
                productName:"Sunflower",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"12"
            },
            {
                backgroundColor:"Brown",
                productImg:"https://cdn.pixabay.com/photo/2020/10/11/09/58/boats-5645356__340.jpg",
                productName:"Sunflower",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"24"
            },
            {
                backgroundColor:"red",
                productImg:"https://c8.alamy.com/comp/D0WPK8/bottle-of-corona-mexican-beer-D0WPK8.jpg",
                productName:"Jaadu Ki Bootle",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"Out of Stock",
                offPercentage:"36"
            },
            {
                backgroundColor:"green",
                productImg:"https://cdn.pixabay.com/photo/2020/10/12/06/16/goose-5647807__340.jpg",
                productName:"Goose",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"96"
            },
            {
                backgroundColor:"yellow",
                productImg:"https://cdn.pixabay.com/photo/2020/10/11/07/59/sunflowers-5645039__340.jpg",
                productName:"Sunflower",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"27"
            },
            {
                backgroundColor:"Brown",
                productImg:"https://cdn.pixabay.com/photo/2020/10/11/09/58/boats-5645356__340.jpg",
                productName:"Sunflower",
                productPriceNew:"100",
                productPriceOld:"25895",
                productStock:"In of Stock",
                offPercentage:"5"
            },

        ]
    
}

export default Header
