import React from 'react';
import { store } from '../index';
import { resetGame } from '../actions/actions';

export const centerCell = [
  [100, 100], [300, 100], [500, 100],
  [100, 300], [300, 300], [500, 300],
  [100, 500], [300, 500], [500, 500],
];

export const OShape = (props) => {
  const cellId = props.id;
  return (<circle
    className="o-shape"
    cx={centerCell[cellId - 1][0]}
    cy={centerCell[cellId - 1][1]}
  />);
};

export const XShape = (props) => {
  const cellId = props.id;
  const backslash = {
    x1: centerCell[cellId - 1][0] + 70,
    y1: centerCell[cellId - 1][1] - 70,
    x2: centerCell[cellId - 1][0] - 70,
    y2: centerCell[cellId - 1][1] + 70,
  };
  const fwdslash = {
    x1: centerCell[cellId - 1][0] - 70,
    y1: centerCell[cellId - 1][1] - 70,
    x2: centerCell[cellId - 1][0] + 70,
    y2: centerCell[cellId - 1][1] + 70,
  };
  return (
    <g className="x-shape">
      <line {...backslash} />
      <line {...fwdslash} />
    </g>
  );
};

export const Cell = props => <rect {...props} />;

export const XButton = props => (
  <g className="char-select-btn x-button">
    <rect className="baseLayer" x={190} />
    <text x={215} y={245} fontFamily="Arial" fontSize="40" fill="#fc3367">X</text>
    <rect className="clickLayer" x={190} fillOpacity={0} onClick={props.onClick} />
  </g>
);

export const OButton = props => (
  <g className="char-select-btn o-button">
    <rect className="baseLayer" x={330} />
    <text x={355} y={245} fontFamily="Arial" fontSize="40" fill="#4ea0f5">O</text>
    <rect className="clickLayer"x={330} fillOpacity={0} onClick={props.onClick} />
  </g>
);

export const WinModal = props => (
  <g className="win-modal modal">
    <rect className="cover" />
    <rect
      className="dialog-box"
      x={125}
      y={225}
      width={355}
      height={140}
    />
    <text
      x={150}
      y={320}
      fontFamily="Arial"
      fontSize="80"
      fill="black"
    > {props.value} WINS! </text>
    <rect
      onClick={() => store.dispatch(resetGame())}
      x={150}
      y={350}
      width="300"
      height="100"
      fill="#fc3367"
    />
    <text
      onClick={() => store.dispatch(resetGame())}
      x={200}
      y={415}
      fontFamily="Arial"
      fontSize="40"
      fill="white"
    > Play again</text>
  </g>
);

export const DrawGameModal = props => (
  <g className="win-modal modal">
    <rect className="cover" />
    <text
      x={200}
      y={320}
      fontFamily="Arial"
      fontSize="40"
      fill="gray"
    > DRAW! </text>
    <rect
      onClick={() => store.dispatch(resetGame())}
      x={150}
      y={350}
      width="300"
      height="100"
      fill="#fc3367"
    />
    <text
      onClick={() => store.dispatch(resetGame())}
      x={200}
      y={415}
      fontFamily="Arial"
      fontSize="40"
      fill="white"
    > Play again</text>
  </g>
);

export const CharSelectModal = () => (
  <g className="char-modal modal">
    <rect className="cover" />
    <rect
      className="dialog-box"
      x={150}
      y={120}
      width={300}
      height={230}
    />
    <text
      x={162}
      y={155}
      fontFamily="Arial"
      fontSize={24}
      fill="gray"
    > SELECT YOUR SYMBOL </text>
    <text
      x={210}
      y={320}
      fontFamily="Arial"
      fontSize={24}
      fill="gray"
    > 'X' GOES FIRST </text>
  </g>
);
