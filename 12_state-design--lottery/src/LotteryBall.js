import React, { Component } from 'react';
import './LotteryBall.css';

class LotteryBall extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <div className='LotteryBall'>{this.props.num}</div>
         );
    }
}
 
export default LotteryBall;