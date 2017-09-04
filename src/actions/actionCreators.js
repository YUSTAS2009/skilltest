import { checkDrawGame, checkWinner, claimCell, chooseChar } from './actions';


/** ****************** (thunk) Action Creators *********************** */


const cpuTurn = availableCells => (dispatch) => {
  // CPU turn logic: if cpu's turn, choose a random unclaimed cell, recurse
  const randomIndex = Math.floor(Math.random() * (availableCells.length));
  const randomAvailable = availableCells[randomIndex];
  dispatch(claimCellIfAvailable(randomAvailable));
};

export const claimCellIfAvailable = cellId => (dispatch, getState) => {
  // 1. claim cell
  dispatch(claimCell(cellId));

  {
    // 2-a check winner
    const { xCells, oCells } = getState();
    if ([...xCells, ...oCells].length >= 5) {
      dispatch(checkWinner());
    }
  }

  { // 2-b check draw game
    const { availableCells } = getState();
    if (availableCells.length === 0) {
      dispatch(checkDrawGame());
    }
  }

  // 3. if cpu turn, dispatch cpuTurn
  const { cpu, activePlayer, availableCells } = getState();
  if (cpu === activePlayer && availableCells.length !== 0) {
    dispatch(cpuTurn(availableCells));
  }
};


// if player chooses O, CPU (X) will choose random cell for first move
export const chooseCharFirstMove = char => (dispatch, getState) => {
  dispatch(chooseChar(char));
  const { cpu, activePlayer } = getState();
  if (cpu === activePlayer) {
    const randomIndex = Math.floor(Math.random() * 9);
    const randomUnclaimed = [1, 2, 3, 4, 5, 6, 7, 8, 9][randomIndex];
    dispatch(claimCellIfAvailable(randomUnclaimed));
  }
};

