import getFactorial from "./factorial";

test("getFacttorial should be a function", () => {
  console.log("*********", getFactorial);
  expect(getFactorial).toBeInstanceOf(Function);
});

test("getFacttorial(3) should return 6", () => {
  const actual = getFactorial(3);
  const expected = 6;
  expect(actual).toBe(expected);
});

test("getFacttorial(6) should return 24", () => {
  const actual = getFactorial(3);
  const expected = 6;
  expect(actual).toBe(expected);
});
