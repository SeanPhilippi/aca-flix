export const listLoaded = movies => ({
  type: 'LIST_LOADED',
  payload: movies
})

export const loadList = () => dispatch => {
  // type: 'LOAD_LIST',
  fetch('movies')
    .then(res => res.json())
    .then(movies => {
      dispatch(listLoaded(movies));
    })
    .catch(err => console.error(err));
}

export const searchLoaded = movies => ({
  type: 'SEARCH_RESULTS_LOADED',
  payload: movies.results
})

export const loadSearch = () => dispatch => {
  // type: 'LOAD_SEARCH',
  fetch('https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=db0fb828044fb9954101dd9eef659794')
    .then(res => res.json())
    .then(movies => {
      dispatch(searchLoaded(movies))
    })
    .catch(err => console.error(err));
}

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