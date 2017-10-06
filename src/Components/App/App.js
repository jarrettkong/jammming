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
      searchResults: [{name: 'Photograph', artist: 'Ed Sheeran', album: 'X'}, {name: 'Madness', artist: 'Muse', album: 'The 2nd Law'}],
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
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  // Add Track
  addTrack(track) {
    if (!this.state.playlistTracks.includes(track)) { // Checks to see if the track is not in the playlist
      let tracks = this.state.playlistTracks;
      tracks.push(track); // Adds to playlist
      this.setState({ playlistTracks: tracks }); // Updates state
    }
  }

  // Remove Track
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(newTrack => newTrack !== track); // Checks for the track in the playlist
    this.setState({ playlistTracks: tracks }); // Updates state
  }

  // Update the playlist name
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  // Saves and array of Spotify URIs to an array
  savePlaylist() {
    const trackURIs = this.playlistTracks.map(track => track.uri);
  }

  // Search the Spotify library
  search(search) {
    console.log(search);
  }

  // Render
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar /> {/*SearchBar component with appropriate props*/}
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} onSearch={this.search}/> {/*SearchResults component with appropriate props*/}
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/> {/*Playlist component with appropriate props*/}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
