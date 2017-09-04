import React, { Component } from 'react';
import { store } from '../index';
import { WinModal } from '../layouts/Layouts';


class WinModalContainer extends Component {
  render() {
    const modalVisible = !!store.getState().winner;
    if (modalVisible) {
      const winner = store.getState().winner.toUpperCase();
      return <WinModal value={winner} />;
    }
    return null;
  }
}

export default WinModalContainer;
