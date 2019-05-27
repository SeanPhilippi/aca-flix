import initialState from '../state.js';

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LIST_LOADED':
      return {
        ...state,
        myList: action.payload
      }
    case 'SEARCH_RESULTS_LOADED':
      return {
        ...state,
        searchResults: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;