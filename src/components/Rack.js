import React, {Component} from 'react';
import Slot from './Slot.js';

const mapSlots = function(column) {
  return column.map((playerToken, rowIndex) => {
    return (
      <Slot
        key={rowIndex}
        playerToken={playerToken}    
      />
    )
  });
}

const Rack = ({rackData}) => {
  const columns = rackData.map((column, columnIndex) => {
    return (
      <div className="column" key={columnIndex}>
        {mapSlots(column)}
      </div>
    )
  });

  return (
    <div className="rack">
      {columns}
    </div>
  );
}

export default Rack;
