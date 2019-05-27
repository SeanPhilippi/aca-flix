import ListToggle from '../components/ListToggle';
import { connect } from 'react-redux';
import { saveMovie, removeMovie } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  saveMovie : movie => dispatch(saveMovie(movie)),
  removeMove: id => dispatch(removeMovie(id))
})

export default connect(null, mapDispatchToProps)(ListToggle);