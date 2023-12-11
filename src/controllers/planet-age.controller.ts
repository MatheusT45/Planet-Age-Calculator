import { planets } from '../models/planets.model';
import { capitalize } from '../utils/capitalization.util';
import { getYears } from '../utils/years.util';

export const getAgeOnPlanet = (seconds: number, planet: string) => {
  if (!seconds || seconds <= 0 || typeof seconds !== 'number') {
    return { response: 'Error: You must provide seconds', error: true };
  }

  if (!planet || typeof planet !== 'string') {
    return { response: 'Error: You must provide planet', error: true };
  }

  if (planets.find((p) => p.name === planet.toLowerCase()) === undefined) {
    return { response: 'Error: You must provide valid planet', error: true };
  }

  return {
    response: `You are ${getYears(seconds, planet)} ${capitalize(
      planet
    )}-years-old`,
    error: false,
  };
};
