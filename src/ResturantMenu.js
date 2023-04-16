import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "./config";
import ShimmerUI from "./Shimmer";
import useResturant from "./utils/useResturant";
import useOnline from "./utils/useOnline";
const ResturantMenu = () => {
  const { id } = useParams();

  const resturantMenu = useResturant(id);

  return !resturantMenu ? (
    <ShimmerUI />
  ) : (
    <div className="menu">
      <div>
        <h1>Resturant Id:{id}</h1>
        <h2>Name:{resturantMenu.name}</h2>
        <h3>City:{resturantMenu.city}</h3>
        <h3>
          Cusines:
          {resturantMenu?.cuisines?.join(", ")}
        </h3>
        <img src={IMG_CDN + resturantMenu?.cloudinaryImageId} />
      </div>
      <div>
        <h3>Menu</h3>
        <ul>
          {Object.values(resturantMenu?.menu?.items).map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <h5>Price:{item.price}</h5>
              <div className="menu-items">
                <img src={IMG_CDN + item.cloudinaryImageId} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ResturantMenu;
