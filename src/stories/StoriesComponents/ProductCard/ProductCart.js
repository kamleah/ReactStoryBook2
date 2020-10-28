import React from "react";
import PropTypes from "prop-types";
import "./ProductCart.css";
import Button from "../Button/Button";
import Badges2 from "../Badges2/Badges2";
function ProductCart({ backgroundColor, ProductCardData }) {
  return ProductCardData.map((items) => (
    <div className="productCard" style={backgroundColor && { backgroundColor }}>
      <div className="offPercentage">
        <Badges2 items={items.offPercentage} />
      </div>
      <div className="productImg">
        <img src={items.productImg} alt={items.productImgalt}></img>
      </div>
      <div className="productDetails">
        <div className="productName">
          <h5>{items.productName}</h5>
        </div>
        <div className="productStock">
          <h5>{items.productStock}</h5>
        </div>
        <div className="productPrice">
          <del>{items.productPriceOld}</del>
        </div>
        <div className="productPrice">
          <p>{items.productPriceNew}</p>
        </div>
        <div className="productAdd">
          <Button buttonTitle="Buy Now" />
        </div>
      </div>
    </div>
  ));
}
ProductCart.propTypes = {
  backgroundColor: PropTypes.string,
  productImg: PropTypes.string,
  productName: PropTypes.string,
  productStock: PropTypes.string,
  productPriceOld: PropTypes.string,
  productPriceNew: PropTypes.string,
  offPercentage: PropTypes.string,
};
ProductCart.defaultProps = {
  backgroundColor: "red",
  productImg:
    "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  productName: "Shampoo",
  productStock: "In Stock",
  productPriceOld: "150",
  productPriceNew: "100",
  offPercentage: "17",
  
  ProductCardData: [
    {
      backgroundColor: "red",
      productImg:
        "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      productName: "Shampoo",
      productStock: "In Stock",
      productPriceOld: "150",
      productPriceNew: "100",
      offPercentage: "17",
    },
    {
      backgroundColor: "yellow",
      productImg:
        "https://images-na.ssl-images-amazon.com/images/I/51J5UtPYQkL._SX569_.jpg",
      productName: "Wine Bottle",
      productStock: "In Stock",
      productPriceOld: "450",
      productPriceNew: "400",
      offPercentage: "15",
    },
  ],
};
export default ProductCart;
