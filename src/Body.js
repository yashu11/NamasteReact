import ResturantCard from "./ResturantCard";
import { resturantList } from "./config";
import { useState } from "react";

function filterData(searchTxt, resturant) {
  return resturant.filter((r) => r.data.name.includes(searchTxt));
}

const Body = () => {
  //in JS
  // const searchText = "Burger King";
  //in React
  //Array Destructuring
  const [searchTxt, setsearchxt] = useState("");
  const [resturants, setResturant] = useState(resturantList);

  return (
    <>
      <div className="serach-container">
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
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, resturants);
            setResturant(data);
          }}
        >
          Search
        </button>
        {searchTxt}
      </div>
      <div className="resturant-list">
        {resturants.map((resturant) => {
          return <ResturantCard {...resturant.data} key={resturant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
