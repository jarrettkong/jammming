import React from 'react';
import './Track.css';

class Track extends React.Component {

  // Constructor
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this); // Bind this to the addTrack method
  }

  // + or - depending
  renderAction() {
    if (this.isRemoval) {
      return <a href="" className="Track-action">-</a>
    } else {
      return <a href="" className="Track-action">+</a>
    }
  }

  // Add a track
  addTrack() {
    this.props.onAdd(this.props.track);
  }

  // Render
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action">{this.renderAction}</a>
      </div>
    );
  }
}

export default Track;
