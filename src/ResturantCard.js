import { IMG_CDN } from "./config";

const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  longMileTravelString,
}) => {
  return (
    <div className="w-[200px] flex-wrap px-5 m-2 bg-orange-100 ">
      <img src={IMG_CDN + cloudinaryImageId} />
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{longMileTravelString}</h4>
    </div>
  );
};

export default ResturantCard;
