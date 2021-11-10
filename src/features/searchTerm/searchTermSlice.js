// REDUCER
const initialState = "";

export const searchTermReducer = (state = initialState, action) => {
  switch (action.type) {
    case "searchTerm/setSearchTerm":
      return action.payload;
    case "searchTerm/clearSearchTerm":
      return "";
    default:
      return state;
  }
};

// FUNCTION CREATORS
export function setSearchTerm(term) {
  return {
    type: "searchTerm/setSearchTerm",
    payload: term
  };
}

export function clearSearchTerm() {
  return {
    type: "searchTerm/clearSearchTerm"
  };
}

// SELECTORS
export const selectSearchTerm = (state) => state.searchTerm;
