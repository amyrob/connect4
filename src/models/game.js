class Game {
  resetRack() {
    const rackData = Array(7);
    for( let i = 0; i < rackData.length; i++ ) {
      rackData[i] = Array(6).fill(0);
    }
    return rackData;
  }

  makeMove(rackData, columnIndex) {
    // copy rack data
    const newRackData = Array(7);
    rackData.forEach((column, index) => {
      newRackData[index] = [...rackData[index]];
    });

    //check move is legal

    newRackData[columnIndex][0] = 1;

    return newRackData;
  }

  checkForWinner() {

  }

  checkRackIsFull() {

  }

}

export default Game;
