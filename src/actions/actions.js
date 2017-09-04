
export const chooseChar = char => ({
  type: 'CHOOSE_CHAR',
  payload: {
    char,
  },
});

export const claimCell = cellId => ({
  type: 'CLAIM_CELL',
  payload: {
    cellId,
  },
});

export const checkWinner = () => ({ type: 'CHECK_WINNER' });

export const checkDrawGame = () => ({ type: 'CHECK_DRAWGAME' });

export const toggleActivePlayer = () => ({ type: 'TOGGLE_PLAYER' });

export const resetGame = () => ({ type: 'RESET_GAME' });
