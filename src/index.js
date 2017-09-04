import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import './css/style.css';
import registerServiceWorker from './registerServiceWorker';

import { reducer } from './reducers/checkWinner';
import Cells from './components/Cells';
import Shapes from './components/Shapes';
import WinModalContainer from './components/WinModalContainer';
import DrawGameModalContainer from './components/DrawGameModalContainer';
import CharSelectModalContainer from './components/CharSelectModalContainer';
// import {centerCell} from './layouts/Layouts';


// Initial State
export const initialState = {
  availableCells: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  xCells: [],
  oCells: [],
  activePlayer: 'x',
  winner: null,
  drawGame: false,
  cpu: null,
};


/** *********************** Store ************************** */

export const store = createStore(reducer, applyMiddleware(thunk));

console.log(store.getState());

const GameBoard = props => (
  <div className="game-board">
    <svg viewBox={'0 0 600 600'} >
      <Shapes />
      <Cells />
      <CharSelectModalContainer />
      <WinModalContainer />
      <DrawGameModalContainer />
    </svg>
  </div>
);


/** ********** Root Render Function************* */
const render = () => {
  ReactDOM.render(
    <GameBoard />,
    document.getElementById('root'),
  );
};

render();
store.subscribe(render);

registerServiceWorker();
