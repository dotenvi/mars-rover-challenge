import { RunRoverSimulation } from "./app/RunRoverSimulation.js";
import { InputParser } from "./infra/InputParser.js";

const parser = new InputParser();
const simulation = new RunRoverSimulation(parser);

try {
  const simulationResult = simulation.execute("input.txt");

  console.log("--- Mission Report ---");
  simulationResult.forEach((result) => {
    if (result.status === "success") console.log(result.output);
    else console.log(result.output);
  });
  console.log("----------------------");
} catch (error) {
  console.error("A fatal error occurred during simulation setup:", error.message);
}
