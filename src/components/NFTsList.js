import React from "react";
import Nftcontainer from "./NFTContainer";
import amaz from "../assets/images/amazebox.jpg";
import pretty5 from "../assets/images/pretty image (5).jpg";
import battle4 from "../assets/images/battle4.jpg";
import pretty1 from "../assets/images/pretty_image.jpg";

import "../assets/css/nft.css";
const Nftslist = (props) => {
  const { sqr, cir } = props;
  const list = [
    {
      title: "GREEN MANDALA",
      logo: sqr,
      rating: "3.33Ξ",
      author: "LZY.LAD",
      authorImg: cir,
    },
    {
      title: "JOSH WEIDE",
      logo: amaz,
      rating: "1.27Ξ",
      author: "SMRPN",
      authorImg: pretty5,
    },
    {
      title: "ROBERT CARRY",
      logo: battle4,
      rating: "0.25Ξ",
      author: "GITE",
      authorImg: pretty1,
    },
  ];
  return list.map((nft, i) => (
    <div key={i} className=" m-4">
      <Nftcontainer {...nft}></Nftcontainer>
    </div>
  ));
};

export default Nftslist;
