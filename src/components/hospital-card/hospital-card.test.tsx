import React from 'react';
import ReactDOM from 'react-dom';
import HospitalCard from './hospital-card.component';

it('hospital card header renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HospitalCard />, div);
    ReactDOM.unmountComponentAtNode(div);
});
