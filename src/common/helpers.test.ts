import { Direction } from './types';

import {
  calculateMovedPosition,
  rotateLeft,
  rotateRight,
  isCurrentPositionByIndex,
} from './helpers';

describe('helpers', () => {
  describe('rotateLeft', () => {
    it('given East. Should return North', () => {
      const res = rotateLeft(Direction.East);

      expect(res).toEqual(Direction.North);
    });

    it('given North. Should return West', () => {
      const res = rotateLeft(Direction.North);

      expect(res).toEqual(Direction.West);
    });

    it('given West. Should return South', () => {
      const res = rotateLeft(Direction.West);

      expect(res).toEqual(Direction.South);
    });

    it('given South. Should return East', () => {
      const res = rotateLeft(Direction.South);

      expect(res).toEqual(Direction.East);
    });
  });

  describe('rotateRight', () => {
    it('given East. Should return South', () => {
      const res = rotateRight(Direction.East);

      expect(res).toEqual(Direction.South);
    });

    it('given South. Should return West', () => {
      const res = rotateRight(Direction.South);

      expect(res).toEqual(Direction.West);
    });

    it('given West. Should return North', () => {
      const res = rotateRight(Direction.West);

      expect(res).toEqual(Direction.North);
    });

    it('given North. Should return East', () => {
      const res = rotateRight(Direction.North);

      expect(res).toEqual(Direction.East);
    });
  });

  describe('calculateMovedPosition', () => {
    it('given default position. Should return 0, 1, North', () => {
      const expected = {
        x: 0,
        y: 1,
        f: Direction.North
      }
      const res = calculateMovedPosition({ x: 0, y: 0, f: Direction.North});

      expect(res).toEqual(expected);
    });

    it('given "0, 0, West" position. Should return the same', () => {
      const expected = {
        x: 0,
        y: 0,
        f: Direction.West
      }
      const res = calculateMovedPosition({ x: 0, y: 0, f: Direction.West});

      expect(res).toEqual(expected);
    });

    it('given "0, 4, North" position. Should return the same', () => {
      const expected = {
        x: 0,
        y: 4,
        f: Direction.North
      }
      const res = calculateMovedPosition({ x: 0, y: 4, f: Direction.North});

      expect(res).toEqual(expected);
    });

    it('given "4, 0, East" position. Should return the same', () => {
      const expected = {
        x: 4,
        y: 0,
        f: Direction.East
      }
      const res = calculateMovedPosition({ x: 4, y: 0, f: Direction.East});

      expect(res).toEqual(expected);
    });

    it('given "2, 0, South" position. Should return the same', () => {
      const expected = {
        x: 2,
        y: 0,
        f: Direction.South
      }
      const res = calculateMovedPosition({ x: 2, y: 0, f: Direction.South});

      expect(res).toEqual(expected);
    });
  });

  describe('isCurrentPositionByIndex', () => {
    it('given index 20, 0, 0. Should return true', () => {
      const res = isCurrentPositionByIndex(20, 0, 0);

      expect(res).toEqual(true);
    });

    it('given index 0, 0, 0. Should return false', () => {
      const res = isCurrentPositionByIndex(0, 0, 0);

      expect(res).toEqual(false);
    });

    it('given index 0, 0, 4. Should return true', () => {
      const res = isCurrentPositionByIndex(0, 0, 4);

      expect(res).toEqual(true);
    });
  });
});