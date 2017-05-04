import React from 'react';
import Header from './Header';
import SongList from './SongList';
import Search from './Search';
import YoutubeFrame from './YoutubeFrame';

class App extends React.Component {
  constructor( props ) {

    super( props );
    this.state = { query: '', target: '' };
  }

  render(){
      return (
        <div>
          <Header />
          <Search />
          <SongList/>
          <YoutubeFrame query={ this.state.query } target={ this.state.target }/>
        </div>
      );
  }
}

export default App;
