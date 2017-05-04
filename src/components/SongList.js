import React from 'react';
import Song from './Song';
import { searching } from '../actions';
import { connect } from 'react-redux';

class SongList extends React.Component {

  componentDidMount() {
    const planetKey = 'b9f9b551-2f2a-319d-8ad1-beacf0086402';
    const planetApi = 'http://apis.skplanetx.com/melon/charts/todaytopsongs';
    PlanetX.init({
      appkey : planetKey,
      savingToken : true
    });
    PlanetX.api( 'get', planetApi, 'JSON', {
        'version' : 1,
        'page': 1,
        'count': 100
    }, function( data ){
      if( !data ) return;

      this.setState({
        songs: data.melon.songs.song
      });

      this.props.onSearch( this.state.songs[ 0 ].songName );

    }.bind(this) );
  }

  constructor( props ) {
    super( props );
    this.state = {
      songs: []
    };
  }

  render(){
    let olStyle = {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }

    return (
      <ol style={ olStyle }>
        { this.state.songs.map( ( item, index ) => {
          return ( <Song
            key = { item.songId.toString() }
            rank={ index + 1 }
            songName={ item.songName }
            artistName={ item.artists.artist[ 0 ].artistName }
            /> );
        })
        }
      </ol>
    );
  }
}

let mapDispatchToProps = ( dispatch ) => {
    return {
      onSearch: ( sname ) => dispatch( searching( sname ) ),
    }
}

SongList = connect( undefined, mapDispatchToProps )( SongList );

export default SongList;
