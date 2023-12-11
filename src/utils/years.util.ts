import { planets } from '../models/planets.model';

export const getYears = (seconds: number, planetName: string): string => {
  const orbitalPeriod = planets.find(
    (planet) => planet.name === planetName.toLowerCase()
  )?.orbitalPeriod;

  if (!orbitalPeriod) {
    throw new Error('Error: You must provide valid planet');
  }

  return ((seconds * orbitalPeriod) / 60 / 60 / 24 / 365.25).toFixed(2);
};
