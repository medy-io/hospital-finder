import React from 'react';
import ReactDOM from 'react-dom';
import HospitalCardButton from './hospital-card-button.component.tsx';

it('hospital card header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HospitalCardButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
