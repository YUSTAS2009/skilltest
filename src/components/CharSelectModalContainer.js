import React, { Component } from 'react';
import { store } from '../index';
import { XButton, OButton, CharSelectModal } from '../layouts/Layouts';
import { chooseCharFirstMove } from '../actions/actionCreators';

class CharSelectModalContainer extends Component {
  render() {
    const modalVisible = !store.getState().cpu;
    if (modalVisible) {
      return (
        <g>
          <CharSelectModal />
          <XButton onClick={() => store.dispatch(chooseCharFirstMove('x'))} />
          <OButton onClick={() => store.dispatch(chooseCharFirstMove('o'))} />
        </g>
      );
    }
    return null;
  }
}

export default CharSelectModalContainer;
