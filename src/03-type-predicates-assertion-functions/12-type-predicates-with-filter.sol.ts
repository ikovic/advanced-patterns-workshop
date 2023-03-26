import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

export const values = ["a", "b", undefined, "c", undefined];

function isString(value: unknown): value is string {
  return typeof value === "string";
}

const filteredValues = values.filter(isString);

it("Should filter out the undefined values", () => {
  expect(filteredValues).toEqual(["a", "b", "c"]);
});

it('Should be of type "string[]"', () => {
  type test1 = Expect<Equal<typeof filteredValues, string[]>>;
});
