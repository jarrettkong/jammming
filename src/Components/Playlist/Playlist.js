import React from 'react';
import './Playlist.css';
// Component imports
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {

  // Constructor
  constructor(props) {
    super(props);

    // Bind methods
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  // Handles the name change
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  // Render
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onNameChange={this.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
