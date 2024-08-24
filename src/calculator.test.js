import { sum } from "./calculator";

describe("adding multiple numbers", () => {
  expect(sum("1,2")).toBe(3);
});
