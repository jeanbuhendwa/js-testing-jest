const stringLength = require("./index");

test("string", () => {
  expect(stringLength("Hello")).toBe(5);
});

test("empty string", () => {
  expect(() => stringLength("")).toThrow("The string cannot be empty");
});

test("longer string", () => {
  expect(() => stringLength("hsgfjgskfsjfsjlf")).toThrow(
    "The string cannot be longer than 10"
  );
});
