import sum from "./calculator";

describe("adding multiple numbers", () => {
  test("sum of 2 numbers", () => expect(sum("1,2")).toBe(3));
});
