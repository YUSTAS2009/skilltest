import React, { Component } from 'react';
import { store } from '../index';
import { Cell } from '../layouts/Layouts';
import { claimCellIfAvailable } from '../actions/actionCreators';


class Cells extends Component {
  render() {
    const cellCoords = [
      [5, 5], [205, 5], [405, 5],
      [5, 205], [205, 205], [405, 205],
      [5, 405], [205, 405], [405, 405],
    ];

    return (
      <g className="cells">
        {cellCoords.map((curr, i) =>
          (<Cell
            x={curr[0]}
            y={curr[1]}
            id={i + 1}
            key={`cell${i}${1}`}
            onClick={() => store.dispatch(claimCellIfAvailable(i + 1))}
          />),
        )}
      </g>
    );
  }
}

export default Cells;
