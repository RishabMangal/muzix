import React from "react";
import sqr from "../assets/images/sqr.jpg";
import Profileaudiocard from "./ProfileAudiocard";
import { Link } from "react-router-dom";
const Profileaudiolist = (props) => {
  const list = Array(10).fill({
    logo: sqr,
    title: "GREEN MANDALA",
  });
  return (
    <div className="list-container row mx-0 bg-danger">
      {list.map((card, i) => (
        <div className="list-card col-sm-3 bg-primary" key={i}>
          <Link to={"/PREVIEW-NFT"}>
            <Profileaudiocard {...card}></Profileaudiocard>
          </Link>
        </div>
      ))}
    </div>

    // <div className="list-container row ">

    // </div>
  );
};

export default Profileaudiolist;
