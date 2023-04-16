import { useEffect, useState } from "react";
const useResturant = (id) => {
  const [resturantMenu, setResturantMenu] = useState(null);
  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=13.0055113&lng=77.5692358&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setResturantMenu(json.data);
  }

  return resturantMenu;
};
export default useResturant;
