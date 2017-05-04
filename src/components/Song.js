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
        <li style={ songStyle } key={ this.props.key }>
          <Rank rank={ this.props.rank } />
          <SongName name={ this.props.songName }/>
          <Artist name={ this.props.artistName } />
        </li>
      );
    }
}

export default Song;
