import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('render with expected text', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Mr Yum Robot Task - Alex Tkachuk');

    expect(linkElement).toBeInTheDocument();
  });
});
