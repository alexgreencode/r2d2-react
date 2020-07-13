import {
  Direction,
  Position,
} from '../common/types';

const ROTATION_LEFT = {
  [Direction.East]: Direction.North,
  [Direction.North]: Direction.West,
  [Direction.West]: Direction.South,
  [Direction.South]: Direction.East,
}

const ROTATION_RIGHT = {
  [Direction.East]: Direction.South,
  [Direction.South]: Direction.West,
  [Direction.West]: Direction.North,
  [Direction.North]: Direction.East,
}

export const DIMENSION = 5;

export function rotateLeft(f: Direction): Direction {
  return ROTATION_LEFT[f];
}

export function rotateRight(f: Direction): Direction {
  return ROTATION_RIGHT[f];
}

export function calculateMovedPosition(position: Position): Position {
  switch (position.f) {
    case Direction.East: {
      return {
        ...position,
        x: position.x === DIMENSION - 1 ? position.x : position.x + 1
      }
    }
    case Direction.North: {
      return {
        ...position,
        y: position.y === DIMENSION - 1 ? position.y : position.y + 1
      }
    }
    case Direction.South: {
      return {
        ...position,
        y: position.y === 0 ? position.y : position.y - 1
      }
    }
    case Direction.West: {
      return {
        ...position,
        x: position.x === 0 ? position.x : position.x - 1
      }
    }

    default:
      return position;
  }
}

export function isCurrentPositionByIndex(index: number, x: number, y: number): boolean {
  const xByIndex = index - Math.trunc(index / DIMENSION) * DIMENSION;
  const yByIndex = DIMENSION - Math.trunc(index / DIMENSION) - 1;

  return x === xByIndex && y === yByIndex;
}
