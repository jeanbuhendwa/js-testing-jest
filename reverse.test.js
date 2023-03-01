const reverseString = require("./reverse");

test("Reverse Test", () => {
  expect(reverseString("Hello")).toBe("olleH");
});
