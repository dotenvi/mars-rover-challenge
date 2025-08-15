import { Plateau } from "../../src/core/Plateau.js";
import { Coordinates } from "../../src/core/Coordinates.js";

describe("Plateau", () => {
  const mockXRange = { contains: (val) => val >= 0 && val <= 5 };
  const mockYRange = { contains: (val) => val >= 0 && val <= 5 };

  const plateau = new Plateau(mockXRange, mockYRange);

  it("should be within bounds for a valid position", () => {
    expect(plateau.isWithinBounds(new Coordinates(3, 4))).toBe(true);
  });

  it("should be out of bounds if x is too large", () => {
    expect(plateau.isWithinBounds(new Coordinates(6, 4))).toBe(false);
  });

  it("should be out of bounds if y is too small", () => {
    expect(plateau.isWithinBounds(new Coordinates(3, -1))).toBe(false);
  });

  it("should throw an error if created without valid ranges", () => {
    expect(() => new Plateau(mockXRange, null)).toThrow("Plateau requires x and y ranges.");
  });
});
