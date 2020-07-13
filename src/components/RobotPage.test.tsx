import React from 'react';
import { render } from '@testing-library/react';
import RobotPage from './RobotPage';

describe('RobotPage', () => {
  it('should render 5 buttons', () => {
    const { getAllByRole } = render(<RobotPage />);
    const buttons = getAllByRole('button');

    expect(buttons.length).toEqual(5);
  });

  it('should render 2 inputs', () => {
    const { getAllByRole } = render(<RobotPage />);
    const inputs = getAllByRole('spinbutton');

    expect(inputs.length).toEqual(2);
  });

  it('should render single select', () => {
    const { getAllByRole } = render(<RobotPage />);
    const selects = getAllByRole('combobox');

    expect(selects.length).toEqual(1);
  });
});
