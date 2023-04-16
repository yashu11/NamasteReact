export function filterData(searchTxt, resturant) {
  console.log(resturant);
  return resturant.filter((r) =>
    r?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase())
  );
}
