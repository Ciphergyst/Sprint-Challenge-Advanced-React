import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react'
import { worldCup } from "./App"
import App from './App';

import {
  getByText,
} from '@testing-library/dom'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('it returns "Title"', () => {
  expect(worldCup()).toBe("Womens World Cup Players 2019");
  expect(worldCup()).not.toBe("");
});

test('Country" link text', () => {
  const container = render(<App />);
  container.queryAllByAltText("country");
});

test('More" link text', () => {
  const container = render(<App />);
container.queryAllByText("More...")
});



it('renders without crashing', () => {
  render(<App />);
});

// Testing for failure
test(`ActiveCard is not in use`, ()=>{
  const {getByText} = render(<App />);
  getByText("ActiveCard")
})

test(`Player is found`, ()=>{
  const {getByText} = render(<App />);
  getByText(/player/i)
})



// const container = document.body
// const inputNode = getByLabelText(container, 'name', {
//   selector: 'input',
// })