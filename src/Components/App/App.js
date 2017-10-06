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
      searchResults: [{name: 'Photograph', artist: 'Ed Sheeran', album: 'X'}],
      playlistName: 'My playlist',
      playlistTracks: [
        {name: "Black Balloon", artist: "Goo Goo Dolls", album: "Dizzy Up the Girl"},
        {name: "The Stable Song", artist: "Gregory Alan Isakov", album: "That Sea, The Gambler"},
        {name: "Immigrant Song", artist: "Led Zepplin", album: "Led Zepplin III"}
      ]
    };
    // Bind this to the methods
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  // Add Track
  addTrack(track) {
    if (!this.state.playlistTracks.includes(track.key)) { // Checks to see if the track is not in the playlist
      this.state.playlistTracks.push(track); // Adds to playlist
      this.setState({ playlistTracks: this.state.playlistTracks }); // Adds track to playlist and updates state
    }
  }

  // Remove Track
  removeTrack(track) {
    if (this.state.playlistTracks.includes(track.key)) { // Checks for the track in the playlist
      this.state.playlistTracks.remove(track) // Remove from playlist
      this.setState({ playlistTracks: this.state.playlistTracks }); // See line 30
    }
  }

  // Render
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar /> {/*SearchBar component with appropriate props*/}
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/> {/*SearchResults component with appropriate props*/}
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/> {/*Playlist component with appropriate props*/}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
