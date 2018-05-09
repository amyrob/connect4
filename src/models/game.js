class Game {
  resetRack() {
    const rackData = Array(7);
    for( let i = 0; i < rackData.length; i++ ) {
      rackData[i] = Array(6).fill(0);
    }
    return rackData;
  }
}

export default Game;
