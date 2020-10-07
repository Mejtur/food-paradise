import React, { useState, useEffect } from "react";
import "../css/GiftGuide.css";
import logo from "../images/logo.png";
import { database } from "../firebase";
import SingleGift from "./SingleGift";

function GiftGuide() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ref = database.ref("gifts");
    ref.on("value", (snapshot) => {
      const dbdata = snapshot.val();
      setData(dbdata);
    });
  }, []);

  return (
    <div className="giftGuide">
      <div className="giftGuide__header">
        <p className="giftGuide__small">GIFT GUIDE</p>
        <h1 className="giftGuide__title">
          The Best Holiday Gifts for Cooks, Hosts, and Everyone In-Between
        </h1>
        <p className="giftGuide__welcome">Welcome to dream kitchen</p>
        <img src={logo} alt="logo" className="giftGuide__logo" />
      </div>
      <div className="giftGuide__giftContainer">
        {data
          ? data.map((gift) => (
              <SingleGift
                key={gift.title}
                title={gift.title}
                image={gift.image}
                description={gift.description}
              />
            ))
          : "loadding"}
      </div>
    </div>
  );
}

export default GiftGuide;
