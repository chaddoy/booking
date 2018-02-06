import React from 'react';
import ReactDOM from 'react-dom';
import Schedules from 'containers/Schedules';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Schedules />, div);
  ReactDOM.unmountComponentAtNode(div);
});
