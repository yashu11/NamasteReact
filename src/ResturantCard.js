import { IMG_CDN } from "./config";

const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  longMileTravelString,
}) => {
  return (
    <div className="rcard">
      <img src={IMG_CDN + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{longMileTravelString} stars</h4>
    </div>
  );
};

export default ResturantCard;
