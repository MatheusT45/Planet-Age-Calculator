import { capitalize } from '../../src/utils/capitalization.util';

describe('Capitalization util', () => {
  test('Returns empty when argument is undefined', async () => {
    expect(capitalize(undefined)).toEqual('');
  });

  test('Returns the capitalized string when string is lower cased', async () => {
    expect(capitalize('earth')).toEqual('Earth');
  });

  test('Returns the capitalized string when string is upper cased', async () => {
    expect(capitalize('EARTH')).toEqual('Earth');
  });
});
