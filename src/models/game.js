class Game {
  resetRack() {
    const rackData = Array(7);
    for( let i = 0; i < rackData.length; i++ ) {
      rackData[i] = Array(6).fill(0);
    }
    return rackData;
  }

  makeMove(rackData, columnIndex) {
    //check move is legal, does someone
    console.log(columnIndex);
    // return newRackData;
  }

  checkForWinner() {

  }

  checkRackIsFull() {

  }

}

export default Game;
