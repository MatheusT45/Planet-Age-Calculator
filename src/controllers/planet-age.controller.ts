import { planets } from '../models/planets.model';
import { capitalize } from '../utils/capitalization.util';

export const getYears = (initialDate: string, planetName: string): string => {
  const now = new Date().getTime();
  const seconds = (now - new Date(initialDate).getTime()) / 1000;

  const planet = planets.find(
    (planet) => planet.name === planetName.toLowerCase()
  );

  if (!planet) {
    throw new Error('Error: You must provide valid planet');
  }

  const { orbitalPeriod, operator } = planet || {
    orbitalPeriod: 1,
    operator: 'multiply',
  };

  return (
    (operator === 'multiply'
      ? seconds * orbitalPeriod
      : seconds / orbitalPeriod) /
    60 /
    60 /
    24 /
    365.25
  ).toFixed(2);
};

export const getAgeOnPlanet = (birthDay: string, planet: string) => {
  if (!birthDay || typeof birthDay !== 'string') {
    return { response: 'Error: You must provide your birthday', error: true };
  }

  if (!planet || typeof planet !== 'string') {
    return { response: 'Error: You must provide planet', error: true };
  }

  if (planets.find((p) => p.name === planet.toLowerCase()) === undefined) {
    return { response: 'Error: You must provide a valid planet', error: true };
  }

  return {
    response: `You are ${getYears(birthDay, planet)} ${capitalize(
      planet
    )}-years-old`,
    error: false,
  };
};
