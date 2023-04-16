import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";

const Body = () => {
  //in JS
  // const searchText = "Burger King";
  //in React
  //Array Destructuring
  const [searchTxt, setsearchxt] = useState("");
  const [filteredResturants, setfilteredResturants] = useState([]);
  const [allResturants, setAllResturants] = useState([]);

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0055113&lng=77.5692358&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredResturants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allResturants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="search-container p-5 m-2 bg-purple-100 border-4">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setsearchxt(e.target.value);
          }}
        ></input>
        <button
          className="search-btn p-2 bg-red-500 border-4 rounded-2xl hover:bg-red-800"
          onClick={() => {
            const data = filterData(searchTxt, allResturants);
            setfilteredResturants(data);
          }}
        >
          Search
        </button>
        {filteredResturants.length === 0 ? (
          <h1>No resturant match your search</h1>
        ) : filteredResturants.length === allResturants.length ? (
          <h2>{allResturants.length} resturants in total</h2>
        ) : (
          <h1>
            {filteredResturants.length}{" "}
            {filteredResturants.length === 1 ? (
              <span>resturant match your search </span>
            ) : (
              <span> resturants match your search</span>
            )}
          </h1>
        )}
      </div>
      <div className="flex flex-wrap">
        {filteredResturants.map((resturant) => {
          return (
            <Link
              to={"/resturant/" + resturant.data.id}
              key={resturant.data.id}
            >
              <ResturantCard {...resturant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
