import React from 'react';
import ReactDOM from 'react-dom';
import BookInquiry from 'components/BookInquiry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookInquiry />, div);
  ReactDOM.unmountComponentAtNode(div);
});
