import React from 'react';
import './Track.css';

class Track extends React.Component {

  // Constructor
  constructor(props) {
    super(props);
    // Bind this to the methods
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  // + or - depending
  renderAction() {
    if (this.props.isRemoval) {
      return <a href="" className="Track-action" onClick={this.removeTrack}>-</a>
    } else {
      return <a href="" className="Track-action" onClick={this.addTrack}>+</a>
    }
  }

  // Add a track
  addTrack() {
    this.props.onAdd(this.props.track);
  }

  // Remove a track
  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  // Render
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
