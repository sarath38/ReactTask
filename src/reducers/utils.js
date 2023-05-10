import MOVIELIST from "../mocks/top5MoviesAssessement.json";


// The MOVIELIST object is converted to a JSON string using JSON.stringify(), and then parsed back into a JavaScript object using JSON.parse(). This is done to create a deep copy of the MOVIELIST object, so that any changes made to the list object will not affect the original MOVIELIST object.

const list = JSON.parse(JSON.stringify(MOVIELIST));
const movieData = list?.components[1]?.items;
const sortedData = movieData.sort((a, b) => {
  return a.rank - b.rank > 0 ? 1 : -1;
});

export default sortedData;
