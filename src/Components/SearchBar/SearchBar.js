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
  this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // Search the Spotify library
  search(search) {
    this.props.onSearch(this.state.term);
  }

  // Handles the change in the input
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  // Handles enter key press
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onSearch(this.state.term);
    }
  }

  // Render
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}/>
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
