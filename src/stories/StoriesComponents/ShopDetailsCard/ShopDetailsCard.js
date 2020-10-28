import React from "react";
import PropTypes from "prop-types";
import "./ShopDetailsCard.css";
function ShopDetailsCard({
  ShopName,
  ShopAddress,
  Card,
  SmallImage,
  ShopNameColor,
  ShopAddressColor,
  CardBackgroundImage,
  SmallCardBackgroundImage,
}) {
  return (
    <div className="cardmain">
      <div
        className="card"
        style={{
          borderColor: Card,
          backgroundImage: "url(" + CardBackgroundImage + ")",
        }}
      >
        <div className="shopName">
          <p style={{ color: ShopNameColor }}>{ShopName}</p>
        </div>
        <div className="shopAddress">
          <p style={{ color: ShopAddressColor }}>{ShopAddress}</p>
        </div>
        <div
          className="smallImagecontent"
          style={{
            borderColor: SmallImage,
            backgroundImage: "url(" + SmallCardBackgroundImage + ")",
          }}
        ></div>
      </div>
    </div>
  );
}

ShopDetailsCard.propTypes = {
  ShopName: PropTypes.string,
  ShopAddress: PropTypes.string,
  Card: PropTypes.string,
  SmallImage: PropTypes.string,
  ShopNameColor: PropTypes.string,
  ShopAddressColor: PropTypes.string,
  CardBackgroundImage: PropTypes.string,
  SmallCardBackgroundImage: PropTypes.string,
};
ShopDetailsCard.defaultProps = {
  ShopName: "GuptaJI VadaPav Center",
  ShopAddress: "Bhandari Compound",
  Card: "cadetblue",
  SmallImage: "cadetblue",
  ShopNameColor: "Wheat",
  ShopAddressColor: "Wheat",
  CardBackgroundImage:
    "https://media.istockphoto.com/photos/vada-pav-very-famous-street-food-of-india-specially-in-the-state-of-picture-id1248187163",
  SmallCardBackgroundImage:
    "https://media.istockphoto.com/photos/vada-pav-picture-id1157170530?b=1&k=6&m=1157170530&s=170667a&w=0&h=fHgSovtk2BRkcsy7zDu_fOw-xxDx3HPg4j9HsA_ym3o=",
};
export default ShopDetailsCard;
