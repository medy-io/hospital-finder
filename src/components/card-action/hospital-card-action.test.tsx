import React from 'react';
import ReactDOM from 'react-dom';
import HospitalCardAction from './hospital-card-action.component.tsx';

it('hospital card action renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HospitalCardAction />, div);
  ReactDOM.unmountComponentAtNode(div);
});
