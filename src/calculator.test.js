import sum from "./calculator";

describe("adding multiple numbers", () => {
  test("sum of 2 numbers", () => expect(sum("1,2")).toBe(3));
  test("sum of empty string", () => expect(sum("")).toBe(0));
  test("sum of multiple numbers", () => expect(sum("1,2,3,4,5,6")).toBe(21));
  test("sum of multiple numbers separated by \n", () =>
    expect(sum("1,\n2,3")).toBe(6));
});
