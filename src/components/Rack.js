import React, {Component} from 'react';
import Slot from './Slot.js';
import DropButton from './DropButton.js';

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

const Rack = ({rackData, onDropButtonClick}) => {
  const columns = rackData.map((column, columnIndex) => {
    return (
      <div className="column" key={columnIndex}>
        {mapSlots(column)}
        <DropButton
          key={columnIndex}
          onClick={() => onDropButtonClick(rackData, columnIndex)}
        />
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
