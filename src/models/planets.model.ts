export type Planet = {
  name: string;
  orbitalPeriod: number;
  operator: 'divide' | 'multiply';
};

export const planets: Planet[] = [
  {
    name: 'mercury',
    orbitalPeriod: 0.2408467,
    operator: 'divide',
  },
  {
    name: 'venus',
    orbitalPeriod: 0.61519726,
    operator: 'divide',
  },
  {
    name: 'earth',
    orbitalPeriod: 1,
    operator: 'multiply',
  },
  {
    name: 'mars',
    orbitalPeriod: 1.8808158,
    operator: 'divide',
  },
  {
    name: 'jupiter',
    orbitalPeriod: 11.862615,
    operator: 'multiply',
  },
  {
    name: 'saturn',
    orbitalPeriod: 29.447498,
    operator: 'multiply',
  },
  {
    name: 'uranus',
    orbitalPeriod: 84.016846,
    operator: 'multiply',
  },
  {
    name: 'neptune',
    orbitalPeriod: 164.79132,
    operator: 'multiply',
  },
];
