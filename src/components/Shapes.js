import React, { Component } from 'react';
import { store } from '../index';
import { XShape, OShape } from '../layouts/Layouts';


class Shapes extends Component {
  render() {
    const xCells = store.getState().xCells;
    const oCells = store.getState().oCells;
    return (
      <g className="shapes">
        {xCells.map((cellId, i) => <XShape id={cellId} key={i} />)}
        {oCells.map((cellId, i) => <OShape id={cellId} key={i} />)}
      </g>
    );
  }
}


export default Shapes;
