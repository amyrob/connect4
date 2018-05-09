import React, {Component} from 'react';
import Game from '../models/game.js';

const game = new Game();

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rackData: game.resetRack(),
      currentPlayer: 1
    };
  }

render() {
  return (
    <p> BOB </p>
  )
}




};


export default GameContainer;
