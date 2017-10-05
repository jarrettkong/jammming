import React from 'react';
import './App.css';
// Component imports
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: {name: 'Photograph', artist: 'Ed Sheeran', album: 'X'},
      playlistName: 'My playlist',
      playlistTracks: [
        {name: "Black Baloon", artist: "Goo Goo Dolls", album: "Dizzy Up the Girl"},
        {name: "The Stable Song", artist: "Gregory Alan Isakov", album: "That Sea, The Gambler"},
        {name: "Immigrant Song", artist: "Led Zepplin", album: "Led Zepplin III"}
      ]
    };
  }

  // Render
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar /> // SearchBar component with appropriate props
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/> // SearchResults component with appropriate props
            <Playlist /> // Playlist component with appropriate props
          </div>
        </div>
      </div>
    );
  }
}

export default App;
