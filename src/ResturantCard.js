const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  longMileTravelString,
}) => {
  return (
    <div className="rcard">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{longMileTravelString} stars</h4>
    </div>
  );
};

export default ResturantCard;
