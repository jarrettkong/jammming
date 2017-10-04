import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {

  // Begin render method
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          // Add  a SearchBar component
          <div className="App-playlist">
            // Add SearchResults component
            // Add Playlist component
          </div>
        </div>
      </div>
    );
  }
}

export default App;
