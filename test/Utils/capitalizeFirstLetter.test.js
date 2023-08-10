import { capitalizeFirstLetter } from "../../src/Utils/capitalizeFirstLetter";

describe('function capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a regular word', () => {
    expect(capitalizeFirstLetter('apple')).toBe('Apple');
  });

  it('should return an empty string when the input is an empty string', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });
});
