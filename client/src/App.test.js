import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import MainContainer from './components/MainContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
})

test(`Player is found`, ()=>{
  const {getByText} = render(<MainContainer />);
  getByText(/player/i)
})