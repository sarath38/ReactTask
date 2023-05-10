import sortedData from "./utils";

const initialState = {
  movies: false,
};

// a Redux reducer function called movieReducer. The state parameter has a default value of initialState, which is an object that contains a movies property.

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, movies: sortedData };
    default:
      return { ...state };
  }
}

export default movieReducer;
