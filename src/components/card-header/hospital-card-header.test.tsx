import React from 'react';
import ReactDOM from 'react-dom';
import HospitalCardHeader from './hospital-card-header.component.tsx';

it('hospital card header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HospitalCardHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
