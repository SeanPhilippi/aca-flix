import ListToggle from '../components/ListToggle';
import { connect } from 'react-redux';
import { saveMovie, removeMovie } from '../actions/actions.js';

const mapDispatchToProps = dispatch => ({
  saveMovie : movie => dispatch(saveMovie(movie)),
  removeMovie: id => dispatch(removeMovie(id))
})

export default connect(null, mapDispatchToProps)(ListToggle);