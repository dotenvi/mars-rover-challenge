import { Range } from "../../src/core/Range.js";

describe("Range", () => {
  it("should throw an error if boundaries are not integers", () => {
    expect(() => new Range(0.5, 5)).toThrow(TypeError);
    expect(() => new Range(0, "5")).toThrow("Range boundaries for the Plateau must be integers.");
  });

  it("should throw an error if min boundary is greater than max boundary", () => {
    expect(() => new Range(10, 5)).toThrow(
      "The 'min' boundary cannot be greater than the 'max' boundary."
    );
  });

  it("should be created successfully with valid integer boundaries", () => {
    expect(() => new Range(0, 5)).not.toThrow();
  });

  describe("contains", () => {
    const range = new Range(0, 10);

    it("should return true for a value within the range", () => {
      expect(range.contains(5)).toBe(true);
    });

    it("should return true for a value at the lower boundary", () => {
      expect(range.contains(0)).toBe(true);
    });

    it("should return true for a value at the upper boundary", () => {
      expect(range.contains(10)).toBe(true);
    });

    it("should return false for a value below the range", () => {
      expect(range.contains(-1)).toBe(false);
    });

    it("should return false for a value above the range", () => {
      expect(range.contains(11)).toBe(false);
    });
  });
});
