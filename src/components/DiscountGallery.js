import React from "react";
import img2 from "../imgs/2.jpg";
import img3 from "../imgs/3.jpg";
import img4 from "../imgs/4.jpg";
import img5 from '../imgs/5.jpg';
import img6 from '../imgs/6.jpg';

const DiscountGallery = () => {
  return (
    <div className="principal-discountGallery">
      <div className="gallery">
        <img src={img2} className="img2 img"></img>
        <img src={img3} className="img3 img"></img>
        <img src={img4} className="img4 img"></img>
      </div>
      <div>
      <div className="gallery-2">
                <img src={img5} className="img5 img-2"/>
                <img src={img6} className="img6 img-2"/>
            </div>
      </div>
    </div>
  );
};

export default DiscountGallery;
