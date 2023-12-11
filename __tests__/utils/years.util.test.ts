import { planets } from '../../src/models/planets.model';
import { getYears } from '../../src/utils/years.util';

const mockedCorrectYears = [
  '19.08',
  '48.74',
  '79.22',
  '149.00',
  '939.76',
  '2332.84',
  '6655.83',
  '13054.80',
];

describe('Years util', () => {
  test('Returns the capitalized string when string is upper cased', async () => {
    const expectedResponse = () => getYears(2500000000, 'a');

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
      expect(getYears(2500000000, planetName)).toEqual(expectedYear);
    }
  );
});
