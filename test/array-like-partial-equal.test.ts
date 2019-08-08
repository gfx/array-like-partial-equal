import { arrayLikePartialEqual } from "../src";

describe("arrayLikePartialEqual", () => {
  test("for Array", () => {
    const a = [99, 1, 2, 3, 98];
    const b = [10, 1, 2, 3, 20];

    expect(arrayLikePartialEqual(a, 1, b, 1, 3)).toBeTruthy();
    expect(arrayLikePartialEqual(a, 0, b, 0, 3)).toBeFalsy();
    expect(arrayLikePartialEqual(a, 1, b, 1, 4)).toBeFalsy();
  });

  test("for Uint8Array", () => {
    const a = Uint8Array.from([99, 1, 2, 3, 98]);
    const b = Uint8Array.from([10, 1, 2, 3, 20]);

    expect(arrayLikePartialEqual(a, 1, b, 1, 3)).toBeTruthy();
    expect(arrayLikePartialEqual(a, 0, b, 0, 3)).toBeFalsy();
    expect(arrayLikePartialEqual(a, 1, b, 1, 4)).toBeFalsy();
  });
});
