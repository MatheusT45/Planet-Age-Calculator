export type Planet = {
  name: string;
  orbitalPeriod: number;
};

export const planets: Planet[] = [
  {
    name: 'mercury',
    orbitalPeriod: 0.2408467,
  },
  {
    name: 'venus',
    orbitalPeriod: 0.61519726,
  },
  {
    name: 'earth',
    orbitalPeriod: 1,
  },
  {
    name: 'mars',
    orbitalPeriod: 1.8808158,
  },
  {
    name: 'jupiter',
    orbitalPeriod: 11.862615,
  },
  {
    name: 'saturn',
    orbitalPeriod: 29.447498,
  },
  {
    name: 'uranus',
    orbitalPeriod: 84.016846,
  },
  {
    name: 'neptune',
    orbitalPeriod: 164.79132,
  },
];
