import { Rover } from "../../src/core/Rover.js";
import { Coordinates } from "../../src/core/Coordinates.js";
import { North, East } from "../../src/core/directions/index.js";

describe("Rover", () => {
  const mockPlateau = {
    isWithinBounds: (position) =>
      position.x >= 0 && position.y >= 0 && position.x <= 5 && position.y <= 5,
  };

  it("should correctly process a sequence of turning instructions", () => {
    const rover = new Rover(new Coordinates(0, 0), new North());
    rover.processInstructions("RRL", mockPlateau); // R->East, R->South, L->East
    expect(rover.getFinalState()).toBe("0 0 E");
  });

  it("should correctly process the first example sequence", () => {
    const rover = new Rover(new Coordinates(1, 2), new North());
    rover.processInstructions("LMLMLMLMM", mockPlateau);
    expect(rover.getFinalState()).toBe("1 3 N");
  });

  it("should correctly process the second example sequence", () => {
    const rover = new Rover(new Coordinates(3, 3), new East());
    rover.processInstructions("MMRMMRMRRM", mockPlateau);
    expect(rover.getFinalState()).toBe("5 1 E");
  });

  it("should not move if the next position is out of bounds", () => {
    const restrictivePlateau = { isWithinBounds: () => false };
    const rover = new Rover(new Coordinates(0, 0), new North());

    rover.processInstructions("M", restrictivePlateau);

    expect(rover.getFinalState()).toBe("0 0 N");
  });
});
