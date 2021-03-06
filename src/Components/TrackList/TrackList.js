import React from 'react';
import './TrackList.css';
// Component imports
import Track from '../Track/Track';

class TrackList extends React.Component {

  // Render
  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(track => <Track track={track} key={track.id} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>) /*Creates a list of Track components by looping through the tracks prop.*/
        }
      </div>
    );
  }
}

export default TrackList;
