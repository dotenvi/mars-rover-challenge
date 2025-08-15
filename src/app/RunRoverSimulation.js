import { North, East, South, West } from "../../src/core/directions/index.js";
import { Plateau } from "../core/Plateau.js";
import { Coordinates } from "../core/Coordinates.js";
import { Range } from "../core/Range.js";
import { Rover } from "../core/Rover.js";

export class RunRoverSimulation {
  constructor(parser) {
    this.parser = parser;
    this.directionFactory = {
      N: new North(),
      E: new East(),
      S: new South(),
      W: new West(),
    };
  }

  execute(filePath) {
    const parsedData = this.parser.parse(filePath);

    const xRange = new Range(0, parsedData.plateauDimensions.x);
    const yRange = new Range(0, parsedData.plateauDimensions.y);
    const plateau = new Plateau(xRange, yRange);

    const results = [];
    let roverIndex = 1;

    for (const data of parsedData.roverData) {
      try {
        const initialPosition = new Coordinates(data.position.x, data.position.y);

        if (!plateau.isWithinBounds(initialPosition)) {
          throw new Error(
            `Initial deployment failed: Position (${initialPosition.x}, ${initialPosition.y}) is off the plateau.`
          );
        }

        const initialDirection = this.directionFactory[data.position.direction];
        const rover = new Rover(initialPosition, initialDirection);

        rover.processInstructions(data.instructions, plateau);

        results.push({
          status: "success",
          roverNumber: roverIndex,
          output: rover.getFinalState(),
        });
      } catch (error) {
        results.push({
          status: "error",
          roverNumber: roverIndex,
          output: `Rover #${roverIndex} mission failed: ${error.message}`,
        });
      }

      roverIndex++;
    }

    return results;
  }
}
