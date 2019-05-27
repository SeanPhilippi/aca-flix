import App from '../components/App.js';
import { loadList } from '../actions';

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  myMovieList: state.myMovieList
})
const mapDispatchToProps = dispatch => ({
  loadList: () => dispatch(loadList())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
