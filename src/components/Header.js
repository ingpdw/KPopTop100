import React from 'react';

class Header extends React.Component {
    render(){

      let headerStyle = {
        fontSize: '1.2em',
        color: '#4e88cf'
      }

      return (
        <h1 style={ headerStyle }>KPOP TOP 100</h1>
      );
    }
}

export default Header;
