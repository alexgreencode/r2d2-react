import React, { useState, ChangeEvent } from 'react';

import {
  Direction,
  Position,
} from '../common/types';
import {
  calculateMovedPosition,
  DIMENSION,
  isCurrentPositionByIndex,
  rotateLeft,
  rotateRight,
} from '../common/helpers';
import './RobotPage.scss';

const INITIAL_POSITION: Position = {
  x: 0,
  y: 0,
  f: Direction.North,
};

function RobotPage() {
  const [isActionsEnabled, setIsActionsEnabled] = useState(false);
  const [position, setPosition] = useState(INITIAL_POSITION);
  const [inputs, setInputs] = useState(INITIAL_POSITION);
  const [report, setReport] = useState(INITIAL_POSITION);


  const onClickPlace = () => {
    setPosition({
      ...inputs,
    });
    setIsActionsEnabled(true);
  };

  const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    if (target) {
      setInputs((curr) => ({
        ...curr,
        [target.name]: +target.value || target.value,
      }));
    }
  };

  const onClickMove = () => {
    setPosition(calculateMovedPosition);
  };

  const onClickLeft = () => {
    setPosition((curr) => ({
      ...curr,
      f: rotateLeft(curr.f),
    }))
  };

  const onClickRight = () => {
    setPosition((curr) => ({
      ...curr,
      f: rotateRight(curr.f),
    }))
  };

  const onClickReport = () => {
    setReport(position);
  }

  return (
    <div className="RobotPage">
      <div className="RobotPage__inputs-box">
        <div className="field has-addons has-addons-centered">
          <p className="control">
            <input
              className="input"
              name="x"
              placeholder="X"
              type="number"
              min="0"
              max={DIMENSION - 1}
              value={inputs.x}
              onChange={onChangeInput}
            />
          </p>
          <p className="control">
            <input
              className="input"
              name="y"
              placeholder="Y"
              type="number"
              min="0"
              max={DIMENSION - 1}
              value={inputs.y}
              onChange={onChangeInput}
            />
          </p>
          <div className="control">
            <div className="select">
              <select name="f" value={inputs.f} onChange={onChangeInput}>
                <option value={Direction.East}>{Direction.East}</option>
                <option value={Direction.North}>{Direction.North}</option>
                <option value={Direction.South}>{Direction.South}</option>
                <option value={Direction.West}>{Direction.West}</option>
              </select>
            </div>          
          </div>
          <p className="control">
            <button className="button is-success" onClick={onClickPlace}>
              Place
            </button>
          </p>
        </div>
        <div className="buttons">
          <button className="button is-success" disabled={!isActionsEnabled} onClick={onClickMove}>&#8679; Move</button>
          <button className="button is-info" disabled={!isActionsEnabled} onClick={onClickLeft}>&#8678; Left</button>
          <button className="button is-info" disabled={!isActionsEnabled} onClick={onClickRight}>&#8680; Right</button>
        </div>
        <button className="button is-danger" disabled={!isActionsEnabled} onClick={onClickReport}>Report</button>
        <div className="RobotPage__report">
          {`${report.x}, ${report.y}, ${report.f}`}
        </div>
      </div>
      <div className="RobotPage__table">
        {
          new Array(DIMENSION * DIMENSION).fill(0).map((v, index) => {
            const robotClassName = `robot_${position.f}`;
            const isVisible = isCurrentPositionByIndex(index, position.x, position.y);

            return (
              <div
                key={`s-${index}`}
                className={`robot ${isVisible ? robotClassName : ''}`}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default RobotPage;
