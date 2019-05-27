import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
import SearchBoxContainer from "./containers/SearchBoxContainer";
import Nav from "./components/Nav";
import UserProfile from "./components/UserProfile";

class App extends Component {

  componentDidMount() {
    this.props.loadList();
    console.log('list', this.props.myList);
    console.log('results', this.props.searchResults)
  }

  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Nav>
            <div id="navigation" className="Navigation">
              <nav>
                <ul>
                  <li>Browse</li>
                  <li>My list</li>
                  <li>Top picks</li>
                  <li>Recent</li>
                </ul>
              </nav>
            </div>
          </Nav>
          <div>some text</div>
          <SearchBoxContainer />
          <UserProfile>
            <div className="UserProfile">
              <div className="User">
                <div className="name">Jack Oliver</div>
                <div className="image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg" alt="profile" />
                </div>
              </div>
            </div>
          </UserProfile>
        </header>
        <Hero />
        <TitleList
          title="Search Results"
          movies={this.props.searchResults} />
        <TitleList
          title="My Movies"
          movies={this.props.myList} />
      </div>
    );
  }
}

App.propTypes = {
  searchResults: PropTypes.array.isRequired,
  myList: PropTypes.array.isRequired,
}

export default App;
