import React from 'react';
import Header from './Header';
import SongList from './SongList';
import Search from './Search';
import YoutubeFrame from './YoutubeFrame';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { query: '', target: '' };
    this.onSearch = this.onSearch.bind( this );
  }

  onSearch( value, target ) {
    this.setState({
      query: value,
      target: target
    })
  }

  render(){
      return (
        <div>
          <Header />
          <Search onSearch={ this.onSearch }/>
          <SongList onSearch={ this.onSearch }/>
          <YoutubeFrame query={ this.state.query } target={ this.state.target }/>
        </div>

      );
  }
}

export default App;
