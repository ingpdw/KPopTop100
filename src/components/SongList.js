import React from 'react';
import Song from './Song';

class SongList extends React.Component {

  componentDidMount() {
    const planetKey = '97ab7564-88ff-3038-8c7f-ad6257ec2684';
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

      this.onFirst();

    }.bind(this) );
  }

  onFirst() {

    this.props.onFirst &&
      this.props.onFirst( this.state.songs[ 0 ].songName );
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
            onSearch = { this.props.onSearch }
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

export default SongList;
