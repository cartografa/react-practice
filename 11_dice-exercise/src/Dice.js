import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <i className={`Dice fas fa-dice-${this.props.face} ${this.props.rolling && 'shaking'}`}/>
            </div>
          );
    }
}
 
export default Dice;