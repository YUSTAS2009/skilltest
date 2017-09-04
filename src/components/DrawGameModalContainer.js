import React, { Component } from 'react';
import { store } from '../index';
import { DrawGameModal } from '../layouts/Layouts';

class DrawGameModalContainer extends Component {
  render() {
    if (store.getState().drawGame) {
      return <DrawGameModal />;
    }
    return null;
  }
}

export default DrawGameModalContainer;
