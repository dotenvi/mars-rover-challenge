import { North, East, South, West } from "../../src/core/directions/index.js";
import { Coordinates } from "../../src/core/Coordinates.js";

describe("Direction Polymorphism Strategy", () => {
  describe("North", () => {
    const north = new North();
    const currentPosition = new Coordinates(1, 1);

    it("should turn left to West", () => {
      expect(north.turnLeft()).toBeInstanceOf(West);
    });

    it("should turn right to East", () => {
      expect(north.turnRight()).toBeInstanceOf(East);
    });

    it("should move forward by incrementing Y", () => {
      const newPosition = north.move(currentPosition);
      expect(newPosition).toEqual(new Coordinates(1, 2));
    });
  });

  describe("East", () => {
    const east = new East();
    const currentPosition = new Coordinates(1, 1);

    it("should turn left to North", () => {
      expect(east.turnLeft()).toBeInstanceOf(North);
    });

    it("should turn right to South", () => {
      expect(east.turnRight()).toBeInstanceOf(South);
    });

    it("should move forward by incrementing X", () => {
      const newPosition = east.move(currentPosition);
      expect(newPosition).toEqual(new Coordinates(2, 1));
    });
  });

  describe("South", () => {
    const south = new South();
    const currentPosition = new Coordinates(1, 1);

    it("should turn left to East", () => {
      expect(south.turnLeft()).toBeInstanceOf(East);
    });

    it("should turn right to West", () => {
      expect(south.turnRight()).toBeInstanceOf(West);
    });

    it("should move forward by decrementing Y", () => {
      const newPosition = south.move(currentPosition);
      expect(newPosition).toEqual(new Coordinates(1, 0));
    });
  });

  describe("West", () => {
    const west = new West();
    const currentPosition = new Coordinates(1, 1);

    it("should turn left to South", () => {
      expect(west.turnLeft()).toBeInstanceOf(South);
    });

    it("should turn right to North", () => {
      expect(west.turnRight()).toBeInstanceOf(North);
    });

    it("should move forward by decrementing X", () => {
      const newPosition = west.move(currentPosition);
      expect(newPosition).toEqual(new Coordinates(0, 1));
    });
  });
});
