import { describe,expect, test } from "vitest";

import { alpha, bp,mq, rem } from "./Utilities.styled";


describe("Properly convert from px to rem", () => {
  test("0 returns 0, not 0rem", () => expect(rem(0)).toBe(0));

  test("16px returns 1rem", () => expect(rem(16)).toBe("1rem"));

  test("48px returns 3rem", () => expect(rem(48)).toBe("3rem"));

  test("-48px returns -3rem", () => expect(rem(-48)).toBe("-3rem"));

  test("32px with omitUnit flag as true returns 2", () =>
    expect(rem(32, true)).toBe("2"));

  test("16px with omitUnit flag as true appended with another unit returns 1 + appended unit", () =>
    expect(rem(16, true) + "vh").toBe("1vh"));
});

describe("Properly add alpha values to hex and hsl colors", () => {
  test("Throw error if hex value is wrong", () => {
    expect(() => alpha("#g125ff")).toThrow(Error); // wrap expected error function to prevent it from executing and failing the test
  });

  test("Throw error if hex value is less than 6 characters", () => {
    expect(() => alpha("#fff")).toThrow(Error);
  });

  test("Throw error if hex value is more than 6 characters", () => {
    expect(() => alpha("#fffffff")).toThrow(Error);
  });

  test("Properly add opacity to hex values", () => {
    expect(alpha("#ffffff", 0)).toBe("#ffffff00");
  });

  test("Throw error if opacity argument for alpha function is greater than 1", () => {
    expect(() => alpha("hsl(0,0%,0%)", 2)).toThrow(Error);
  });

  test("Throw error if opacity argument for alpha function is less than 0", () => {
    expect(() => alpha("hsl(0,0%,0%)", -1)).toThrow(Error);
  });

  test("Throw error if rgb or any other wrong format is provided", () => {
    expect(() => alpha("rgb(0,0%,0%)", 0.3)).toThrow(Error);
  });

  test("Alpha function should accept and convert hsl values", () => {
    expect(alpha("hsl(0,0%,0%)", 0.2)).toBe("hsl(0,0%,0%,0.2)");
  });

  test("Alpha function should accept and convert hsl values with opacity already provided", () => {
    expect(alpha("hsl(0, 0%, 0%, 0.5)", 0.1)).toBe("hsl(0, 0%, 0%,0.1)"); // "hsl" and "hsla" are aliases and both support alpha values so I'll stick with "hsl"
  });
});

describe("Media queries work as intended", () => {
  test("bp.small returns 375px => 23.4375em", () =>
    expect(bp.small).toBe("23.4375em"));
  test("mq.small returns the right query", () =>
    expect(mq.small).toBe("min-width: 23.4375em"));
});
