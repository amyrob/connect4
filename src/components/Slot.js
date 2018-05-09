import React, {Component} from 'react';

const Slot = ({playerToken}) => {

  let tokenColor;
  if (playerToken === 0) {
    tokenColor = "white";
  }
  else if (playerToken === 1) {
    tokenColor = "red";
  }
  else {
    tokenColor = "yellow";
  }

  return (
    <div className="slot-container">
      <svg height="80" width="80">
        <circle
          cx="40"
          cy="40"
          r="35"
          fill={tokenColor} />
      </svg>
    </div>
  )
}

export default Slot
