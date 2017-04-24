import React from 'react';

class SongName extends React.Component {

  showYoutube( evt ){
    evt.preventDefault();
    this.props.onSearch( this.props.name, evt.target );
  }

  render(){
    let songNameStyle = {
      display: 'block',
      paddingLeft: '50px',
      lineHeight: '20px',
      color: '#999',
      textDecoration: 'none'
    }
      return (
        <a
          style={ songNameStyle }
          href="#"
          onClick={ ( evt ) => { this.showYoutube( evt ) } }>
          { this.props.name }
        </a>
      );
  }
}

export default SongName;
