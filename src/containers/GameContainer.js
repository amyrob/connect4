import React, {Component} from 'react';
import Game from '../models/game.js';
import Rack from '../components/Rack.js'

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
    <Rack
      rackData = {this.state.rackData}
      onDropButtonClick ={game.makeMove}
      // onDropButtonClick={game.makeMove}
    />
  )
}




};


export default GameContainer;
