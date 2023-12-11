import { getAgeOnPlanet } from '../../src/controllers/planet-age.controller';

describe('Planet age controller', () => {
  test('Returns error when planet is not provided', async () => {
    const response = getAgeOnPlanet(1, '');

    expect(response).toEqual({
      response: 'Error: You must provide planet',
      error: true,
    });
  });

  test('Returns error when a planet name is invalid', async () => {
    const response = getAgeOnPlanet(1, 'asdf');

    expect(response).toEqual({
      response: 'Error: You must provide a valid planet',
      error: true,
    });
  });

  test('Returns error when seconds are not provided', async () => {
    const response = getAgeOnPlanet(0, 'earth');

    expect(response).toEqual({
      response: 'Error: You must provide seconds',
      error: true,
    });
  });

  test('Returns the correct year response', async () => {
    const response = getAgeOnPlanet(2500000000, 'earth');

    expect(response).toEqual({
      response: 'You are 79.22 Earth-years-old',
      error: false,
    });
  });
});
