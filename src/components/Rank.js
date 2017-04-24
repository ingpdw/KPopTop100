import React from 'react';

class Rank extends React.Component {
    render(){

      let rankStyle = {
        position: 'absolute',
        top: '12px',
        left: 0,
        width: '20px',
        color: '#4e88cf',
        fontSize: '24px',
        fontWeight: 'bolder'
      }
        return (
          <span style={ rankStyle }>{ this.props.rank }.</span>
        );
    }
}

export default Rank;
