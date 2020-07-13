export enum Direction {
  East = 'East',
  North = 'North',
  South = 'South',
  West = 'West',
}

export interface Position {
  x: number,
  y: number,
  f: Direction,
}
