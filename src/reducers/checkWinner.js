import { initialState } from '../index';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLAIM_CELL':
      const cellToAdd = action.payload.cellId;

      // 1--- pop cellToAdd from availableCells
      const currAvailableCells = [...state.availableCells];
      const availableCellIndex = currAvailableCells.indexOf(cellToAdd);
      let nextPlayer = '';

      if (availableCellIndex > -1) {
        currAvailableCells.splice(availableCellIndex, 1);
        state.activePlayer === 'x' ? nextPlayer = 'o' : nextPlayer = 'x';
      } else {
        // TODO: popup message "duplicate, try again"
        return state;
      }

      const newAvailableCells = [...currAvailableCells];

      // 3. Append new cell to xCells or oCells
      if (state.activePlayer === 'x') {
        return {
          ...state,
          availableCells: newAvailableCells,
          xCells: [...state.xCells, cellToAdd],
          activePlayer: nextPlayer,
        };
      }

      return {
        ...state,
        availableCells: newAvailableCells,
        oCells: [...state.oCells, cellToAdd],
        activePlayer: nextPlayer,
      };

    case 'CHECK_WINNER':
      const winCheck = (winArr) => {
        const player = state.activePlayer;
        const playerCellsSorted = state[`${player}Cells`].sort();
        for (let i = 0; i < winArr.length; i++) {
          if (playerCellsSorted.indexOf(winArr[i]) === -1) { return false; }
        }
        return true;
      };

      if (winCheck([1, 2, 3]) || winCheck([4, 5, 6]) || winCheck([7, 8, 9]) ||
          winCheck([1, 4, 7]) || winCheck([2, 5, 8]) || winCheck([3, 6, 9]) ||
          winCheck([1, 5, 9]) || winCheck([3, 5, 7])) {
        return { ...state, winner: state.activePlayer };
      }
      return state;

    case 'CHECK_DRAWGAME':
      if (!state.winner) {
        return { ...state, drawGame: true };
      }
      return state;

    case 'RESET_GAME':
      return {
        ...state,
        availableCells: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        xCells: [],
        oCells: [],
        activePlayer: 'x',
        winner: null,
        drawGame: false,
        cpu: null,
      };

    case 'CHOOSE_CHAR':
      const char = action.payload.char;
      let cpu;
      char === 'x' ? cpu = 'o' : cpu = 'x';
      return { ...state, cpu };

    default:
      return state;
  }
};
