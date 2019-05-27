export const loadList = () => (dispatch, getState) => {
  // type: 'LOAD_LIST',
  fetch('movies')
    .then(res => res.json())
    .then(movies => {
      dispatch(listLoaded(movies));
    })
    .catch(err => console.error(err));
}

export const listLoaded = () => ({
  type: 'LIST_LOADED',
  payload: movies
})

export const loadSearch = () => (dispatch, getState) => {
  // type: 'LOAD_SEARCH',
  fetch('https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=yourkey')
    .then(res => res.json())
    .then(movies => {
      dispatch(searchLoaded(movies))
    })
    .catch(err => console.error(err));
}

export const searchLoaded = () => ({
  type: 'SEARCH_RESULTS_LOADED',
  payload: movies.results
})

export const saveMovie = movie => dispatch => {
  // * console.log this, will probably need some rearranging,
  // * not sure stringify is necessary
  fetch('/movies', {
    method: 'post',
    body: JSON.stringify(movie)
  }).then((res) => {
    dispatch(loadList(res));
  })
}

export const removeMovie = id => dispatch => {
  fetch('/movies', {
    method: 'delete',
    body: JSON.stringify(id)
  }).then((res) => {
    dispatch(loadList(res));
  })
}