import React from 'react';
import './SearchResults.css';
// Component imports
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {

  // Render
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/> {/*Track component with appropriate props*/}
      </div>
    );
  }
}

export default SearchResults;
