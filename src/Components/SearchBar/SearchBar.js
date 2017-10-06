import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  // Constructor
  constructor(props) {
    super(props);
    
  // Bind the methods
  this.search = this.search.bind(this);
  }

  // Search the Spotify library
  search(search) {
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
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
