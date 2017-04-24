import React from 'react';
import ReactDom from 'react-dom';

class YoutubeFrame extends React.Component {

  componentDidUpdate( prevProps, prevState ) {
    let currentNode = ReactDom.findDOMNode( this );

    //@TODO hell.... hell... hell...
    if( this.props.target ){
      jQuery( this.props.target ).parent( 'li' ).append( currentNode );
    }else{
      jQuery( '#root' ).prepend( currentNode );
    }
  }

  render(){
    let youtubeUrl = 'http://www.youtube.com/embed';
    let youtubeParam = '?listType=search&autoplay=0&rel=0&hd=1&showinfo=0';
    let frameStyle = {
      margin: '10px 0 10px 0',
      padding: 0,
      width: '100%',
      height: '220px',
      border: 0
    };

    return (
      <iframe style = { frameStyle }
        frameBorder="0"
        scrolling="no"
        src={ youtubeUrl + youtubeParam + '&list=' + this.props.query }
        allowtTransparency="true">
      </iframe>
    );
  }
}

export default YoutubeFrame;
