import React from "react";
import "../css/SingleGift.css";

function SingleGift({ title, image, description }) {
  return (
    <div className="singleGift">
      <h1 className="singleGift__title">{title}</h1>
      <p className="singleGift__description">{description}</p>
      <img src={image} alt="giftImage" className="singleGift__image" />
      <hr />
    </div>
  );
}

export default SingleGift;
