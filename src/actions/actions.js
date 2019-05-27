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

export const loadSearch = searchText => dispatch => {
  // type: 'LOAD_SEARCH',
  fetch(`https://api.themoviedb.org/3/search/multi?query=${searchText}&api_key=db0fb828044fb9954101dd9eef659794`)
    .then(res => res.json())
    .then(movies => {
      console.log('movies in loadSearch', movies)
      dispatch(searchLoaded(movies))
    })
    .catch(err => console.error(err));
}

export const saveMovie = movie => dispatch => {
  fetch('/movies', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(movie)
  }).then((res) => {
    dispatch(loadList(res));
  })
}

export const removeMovie = id => dispatch => {
  fetch(`/movies/${id}`, {
    method: 'delete',
    headers: {'Content-Type': 'application/json'}
  }).then((res) => {
    dispatch(loadList(res));
  })
}