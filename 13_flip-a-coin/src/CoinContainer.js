import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side: 'ceca', imgSrc: 'https://i.imgur.com/Tgdtgkm.png'},
            {side: 'cara', imgSrc: 'https://i.imgur.com/GLgI3kJ.png'}
        ]
    }
    constructor(props) {
        super(props);
        this.state = { 
            currCoin: null,
            nFlips: 0,
            nCara: 0,
            nCeca: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            // creo un nuevo obj. estado desestructurando el anterior
            let newState = {
                ...st,
                // modifico lo que necesito
                currCoin: newCoin,
                nFlips: st.nFlips + 1, 
            }
            // pregunto por la moneda actual para actualizar valores
            newCoin.side === 'cara'
                ? newState.nCara += 1
                : newState.nCeca += 1;

            return newState;
        })
    }
    handleClick(e) {
        this.flipCoin();
    }
    render() { 
        return ( 
            <div className="CoinContainer">
                <h2>¿Cara o Ceca?</h2>
                {this.state.currCoin ? <Coin info={this.state.currCoin}/> : ''}
                <button onClick={this.handleClick}>Tirá la moneda</button>
                <p>De {this.state.nFlips} rondas, salieron {this.state.nCara} caras y {this.state.nCeca} cecas.</p>
            </div>
         );
    }
}
 
export default CoinContainer;