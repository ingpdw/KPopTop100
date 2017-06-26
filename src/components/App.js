import React from 'react';
import Header from './Header';
import SongList from './SongList';
import Search from './Search';
import YoutubeFrame from './YoutubeFrame';
import axios from 'axios';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { query: '', target: '' };
  }

  componentDidMount() {
    axios.get('/kpop/get', {
        params: {
          info: 'kpop'
        }
      })
      .then(function (response) {
        console && console.log && console.log(response);
      })
      .catch(function (error) {
        console && console.log && console.log(error);
      });
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
