import React, { Component } from 'react';
import Sound from 'react-sound';

export class Sound extends Component {
  render() {
    return (
      <Sound
      url="mozart.mp3"
      playStatus={Sound.status.PLAYING}
      />
    )
  }
}

export default Sound
