import React from 'react';

class Artist extends React.Component {
    render(){
      let artistStyle = {
        paddingLeft: '50px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#4e88cf'
      }
      return (
        <span style={ artistStyle }>{ this.props.name }</span>
      );
    }
}

export default Artist;
