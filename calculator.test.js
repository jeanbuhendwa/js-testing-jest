const simpleCalc = require("./calculator");

describe("Calculator", () => {
  test("addition test", () => {
    expect(simpleCalc(1, 2, "+")).toBe(3);
  });

  test("substract test", () => {
    expect(simpleCalc(1, 2, "-")).toBe(-1);
  });

  test("multiply test", () => {
    expect(simpleCalc(1, 2, "*")).toBe(2);
  });

  test("division test", () => {
    expect(simpleCalc(4, 2, "/")).toBe(2);
  });
  test("Error", () => {
    expect(simpleCalc()).toBe("Please enter valid number");
  });
});
