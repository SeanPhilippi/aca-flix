import App from '../App.js';
import { connect } from 'react-redux';
import { loadList } from '../actions/actions.js';

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  myMovieList: state.myMovieList
})
const mapDispatchToProps = dispatch => ({
  loadList: () => dispatch(loadList())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
