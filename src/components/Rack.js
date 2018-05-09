import React, {Component} from 'react';

const mapSlots = function(column) {
  return column.map((playerToken, rowIndex) => {
    return (
      <p className="row" key={rowIndex} playerToken={playerToken}>bob</p>
    )
  });
}

const Rack = ({rackData}) => {
  const columns = rackData.map((column, columnIndex) => {
    return (
      <div className="column" key={columnIndex}>
        {
          mapSlots(column)
        }
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
