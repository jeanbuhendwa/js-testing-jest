const stringLength = require("./index");

test("string", () => {
  expect(stringLength("Hello")).toBe(true);
});

test("empty string", () => {
  expect(() => stringLength("")).toThrow("The string cannot be empty");
});

test("Long string", () => {
  expect(() => stringLength("sdbfkjskjfsfjslf")).toThrow(
    "The string is too long"
  );
});
