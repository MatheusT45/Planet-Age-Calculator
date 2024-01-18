import {
  getAgeOnPlanet,
  getYears,
} from '../../src/controllers/planet-age.controller';
import { planets } from '../../src/models/planets.model';

const mockedCorrectYears = [
  '141.36',
  '55.34',
  '34.05',
  '18.10',
  '403.87',
  '1002.55',
  '2860.39',
  '5610.40',
];

describe('Planet age controller', () => {
  describe('getYears', () => {
    test('Returns the capitalized string when string is upper cased', async () => {
      const expectedResponse = () => getYears('1990-01-01T00:00:00.000Z', 'a');

      expect(expectedResponse).toThrow(
        new Error('Error: You must provide valid planet')
      );
    });

    const expectedPlanetYears = planets.map((p, i) => [
      mockedCorrectYears[i],
      p.name,
    ]);

    test.each(expectedPlanetYears)(
      'Should get %f years on planet %s',
      (expectedYear, planetName) => {
        expect(getYears('1990-01-01T00:00:00.000Z', planetName)).toEqual(
          expectedYear
        );
      }
    );
  });

  describe('getAgeOnPlanet', () => {
    test('Returns error when planet is not provided', async () => {
      const response = getAgeOnPlanet('1990-01-01T00:00:00.000Z', '');

      expect(response).toEqual({
        response: 'Error: You must provide planet',
        error: true,
      });
    });

    test('Returns error when a planet name is invalid', async () => {
      const response = getAgeOnPlanet('1990-01-01T00:00:00.000Z', 'asdf');

      expect(response).toEqual({
        response: 'Error: You must provide a valid planet',
        error: true,
      });
    });

    test('Returns error when seconds are not provided', async () => {
      const response = getAgeOnPlanet('', 'earth');

      expect(response).toEqual({
        response: 'Error: You must provide your birthday',
        error: true,
      });
    });

    test('Returns the correct year response', async () => {
      const response = getAgeOnPlanet('1990-01-01T00:00:00.000Z', 'earth');

      expect(response).toEqual({
        response: 'You are 34.05 Earth-years-old',
        error: false,
      });
    });
  });
});
