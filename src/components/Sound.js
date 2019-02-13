import React, { Component } from 'react';
import Sound from 'react-sound';

export class Sound extends Component {
  render() {
    return (
        <Sound
          url="mozart.mp3"
          playStatus={Sound.status.PLAYING}
          playFromPosition={300 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
    );
    // return (
    //   <Sound
    //   url="mozart.mp3"
    //   playStatus={Sound.status.PLAYING}
    //   />
    // )
  }
}

export default Sound

// I want a component that I can show or hide and play music from