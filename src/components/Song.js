import React from 'react';
import Rank from './Rank';
import SongName from './SongName';
import Artist from './Artist';

class Song extends React.Component {
    render(){
      let songStyle = {
        position: 'relative',
        margin: '0 10px 8px',
        paddingTop: '10px',
        borderTop: '1px solid #eee'
      };

      return (
        <li style={ songStyle }>
          <Rank rank={ this.props.rank } />
          <SongName name={ this.props.songName } onSearch={ this.props.onSearch }/>
          <Artist name={ this.props.artistName } />
        </li>
      );
    }
}

export default Song;
