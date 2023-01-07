import React from "react";
import { FiHeart } from "react-icons/fi";


const CarItem = (props) => {
  const { category, type, rentPrice, imgUrl, carName, groupSize } = props.item;
  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3 className="car__item-name">{carName}</h3>
         
             {/* <i className="ri-heart-line">
             <FiHeart className="heart"></FiHeart>
             </i>  */}
             <FiHeart className="heart" />
         
        </div>
        <p>{category}</p>
      </div>

      <div className="car__img">
        <img src={imgUrl} alt="" />
      </div>

      <div className="car__item-bottom">
        <div className="car__bottom-left">
          <p>
            <i class="ri-user-line"></i> {groupSize}
          </p>
          <p>
            <i class="ri-repeat-line"></i>
            {type}
          </p>
        </div>

        <p className="car__rent">${rentPrice} <span>/d</span></p>
      </div>
    </div>
  );
};

export default CarItem;
