import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
    // Bind the methods
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  // Search the Spotify library
  search(search) {
    console.log(search.state);
    this.props.onSearch(search.state.term);
  }

  handleTermChange(event) {
    this.state.term = event.target.value;
  }

  // Render
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
