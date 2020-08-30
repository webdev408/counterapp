import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       initialCount: 5
    }
  }
  nowIncreasing = () => {
    const{initialCount} = this.state
      this.setState({
        initialCount: initialCount + 1*5
      });
     }
  nowDecreasing = () => {
    const{initialCount} = this.state
      this.setState({
        initialCount: initialCount - 1*5
      });
  };

  
  render() {
    return (
      <div>
        <h1>Your initial numbers are: {this.state.initialCount}</h1>
        <button className='btn btn-outline-primary px-2 mx-2' onClick={this.nowIncreasing}>increasing</button>
        <button className='btn btn-outline-primary px-2 mx-2' onClick={this.nowDecreasing}>decreasing</button>
         <img className='px-3' src="http://randomuser.me/api/portraits/men/59.jpg" alt="men"/>
         <img className='px-3' src="http://randomuser.me/api/portraits/women/59.jpg" alt="women"/>
         <img className='px-3' src="http://randomuser.me/api/portraits/women/19.jpg" alt="dana"/>
         <img className='px-3' src="http://randomuser.me/api/portraits/men/79.jpg" alt="david"/>
      </div>
      )
     }
      
}

export default Clock;
