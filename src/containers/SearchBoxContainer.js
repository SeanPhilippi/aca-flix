import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import { loadSearch } from '../actions/actions.js';

const mapDispatchToProps = dispatch => ({
  loadSearch: searchText => dispatch(loadSearch(searchText))
})

export default connect(null, mapDispatchToProps)(SearchBox);
