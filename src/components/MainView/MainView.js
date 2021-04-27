import React from 'react';
import * as s from './MainView.styles';

const MainView = (props) => {
  return (
    <s.MainViewContainer>
      {props.children}
    </s.MainViewContainer>
  )
}

export default MainView