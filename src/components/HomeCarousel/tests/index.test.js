import React from 'react';
import ReactDOM from 'react-dom';
import HomeCarousel from 'components/HomeCarousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeCarousel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
