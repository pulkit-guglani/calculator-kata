import sum from "./calculator";

describe("adding multiple numbers", () => {
  test("sum of 2 numbers", () => expect(sum("1,2")).toBe(3));
  test("sum of empty string", () => expect(sum("")).toBe(0));
  test("sum of multiple numbers", () => expect(sum("1,2,3,4,5,6")).toBe(21));
  test("sum of multiple numbers separated by \n", () =>
    expect(sum("1,\n2,3")).toBe(6));
  test("sum with numbers separated by custom delimiter", () =>
    expect(sum("//;\n1;2")).toBe(3));
  test("sum of negative should give error", () =>
    expect(() => sum("-1,-2")).toThrow("negative numbers not allowed: -1,-2"));
  test("Numbers bigger than 1000 should be ignored", () =>
    expect(sum("2,1001")).toBe(2));
});
