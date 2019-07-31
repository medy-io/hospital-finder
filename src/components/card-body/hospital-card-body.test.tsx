
import React from 'react';
import ReactDOM from 'react-dom';
import HospitalCardBody from './hospital-card-body.component.tsx';

it('hospital card header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HospitalCardBody />, div);
  ReactDOM.unmountComponentAtNode(div);
});
