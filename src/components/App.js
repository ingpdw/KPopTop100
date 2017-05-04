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
    this.onFirst = this.onFirst.bind( this );
  }

  onFirst( value ) {
    this.onSearch( value );
  }

  onSearch( value, target ) {
    this.setState({
      query: value,
      target: target
    });
  }

  render(){
      return (
        <div>
          <Header />
          <Search />
          <SongList onSearch={ this.onSearch } onFirst={ this.onFirst }/>
          <YoutubeFrame query={ this.state.query } target={ this.state.target }/>
        </div>
      );
  }
}

export default App;
