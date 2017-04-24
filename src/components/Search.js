import React from 'react';

class Search extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {value: ''};

    this.onKeyPress = this.onKeyPress.bind( this );
    this.onChange = this.onChange.bind( this );
  }

  onKeyPress( evt ) {
    if ( evt.which === 13 ) {
      evt.preventDefault();
      this.props.onSearch( evt.target.value );
    }
  }

  onChange( evt ) {

    this.setState({
      value: evt.target.value
    });
    if ( evt.key === 'Enter' ) {
      evt.preventDefault();
      this.props.onSearch( evt.target.value );
    }

  }

  render(){

    let searchStyle = {
      position: 'fixed',
      top: '40px',
      right: '10px',
      zIndex: '10000'
    }

    let searchInputStyle = {
      width: '100px',
      padding: '5px',
      fontSize: '20px',
      color: '#4e88cf',
      border: '3px solid #eee',
      borderRadius: '3px'
    }

    return (
      <div style={ searchStyle }>
        <input style={ searchInputStyle }
          type="text"
          value={ this.state.value }
          placeholder="search..."
          onKeyPress={ this.onKeyPress }
          onChange={ this.onChange }
        />
      </div>
    );
  }
}

export default Search;
