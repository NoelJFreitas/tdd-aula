import getFactorial from "./factorial";
import { typeErrorMessage } from "./utils";

describe("Happy path", () => {
  test("getFacttorial should be a function", () => {
    expect(getFactorial).toBeInstanceOf(Function);
  });

  test("getFacttorial(3) should return 6", () => {
    const actual = getFactorial(3);
    const expected = 6;
    expect(actual).toBe(expected);
  });

  test("getFacttorial(6) should return 24", () => {
    const actual = getFactorial(4);
    const expected = 24;
    expect(actual).toBe(expected);
  });
});

describe("Unhappy Path", () => {
  test("getFactorial() shouyld throw a TypeError", () => {
    try {
      getFactorial();
    } catch ({ name }) {
      expect(name).toBe("TypeError");
    }
  });

  test(`getFactorial() shouyld throw a TypeError with message '${typeErrorMessage}'`, () => {
    try {
      getFactorial();
    } catch ({ message }) {
      expect(message).toBe(typeErrorMessage);
    }
  });

  test("getFactorial(0) should return 1", () => {
    const actual = getFactorial(0);
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
