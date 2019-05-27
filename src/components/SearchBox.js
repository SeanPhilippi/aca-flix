import React, { Component } from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }

  onTextChange = e => {
    console.log('text changes!')
    this.setState({searchText: e.target.value});
    console.log('text in state', this.state.searchText)
  }

  render() {
    return (
      <div id="search" className="Search">
        <input
          onChange={this.onTextChange}
          onKeyUp={
            (e) => {
              /* this is so the search will only be done on enter key */
              if (this.props.loadSearch && e.key === "Enter" && this.state.searchText) {
                this.props.loadSearch(this.state.searchText);
              }
            }
          }
          type="search"
          placeholder="Search for a title..." />
      </div>
    );
  }
}
export default SearchBox;

