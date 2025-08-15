import { RunRoverSimulation } from "../../src/app/RunRoverSimulation.js";

describe("RunRoverSimulation Use Case", () => {
  it("should return an array of success results when all rovers are valid", () => {
    const parserWithOnlyValidRovers = {
      parse: (filePath) => ({
        plateauDimensions: { x: 5, y: 5 },
        roverData: [
          { position: { x: 1, y: 2, direction: "N" }, instructions: "LMLMLMLMM" },
          { position: { x: 3, y: 3, direction: "E" }, instructions: "MMRMMRMRRM" },
        ],
      }),
    };

    const simulation = new RunRoverSimulation(parserWithOnlyValidRovers);
    const results = simulation.execute("any/fake/path.txt");

    const expectedResults = [
      { status: "success", roverNumber: 1, output: "1 3 N" },
      { status: "success", roverNumber: 2, output: "5 1 E" },
    ];

    expect(results).toEqual(expectedResults);
  });

  it("should handle individual rover failures without stopping the simulation", () => {
    const parserWithMixedData = {
      parse: (filePath) => ({
        plateauDimensions: { x: 2, y: 2 },
        roverData: [
          // Rover 1: Válido
          { position: { x: 1, y: 2, direction: "N" }, instructions: "LM" },
          // Rover 2: Posição inicial inválida
          { position: { x: 3, y: 3, direction: "E" }, instructions: "MMRMMRMRRM" },
          // Rover 3: Válido
          { position: { x: 0, y: 0, direction: "E" }, instructions: "M" },
        ],
      }),
    };

    const simulation = new RunRoverSimulation(parserWithMixedData);
    const results = simulation.execute("any/fake/path.txt");

    const expectedResults = [
      { status: "success", roverNumber: 1, output: "0 2 W" },
      {
        status: "error",
        roverNumber: 2,
        output:
          "Rover #2 mission failed: Initial deployment failed: Position (3, 3) is off the plateau.",
      },
      { status: "success", roverNumber: 3, output: "1 0 E" },
    ];

    expect(results).toEqual(expectedResults);
  });
});
