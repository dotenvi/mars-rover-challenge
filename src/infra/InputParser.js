import fs from "fs";

export class InputParser {
  parse(filePath) {
    const fileContent = fs.readFileSync(filePath, "utf8").trim();
    const lines = fileContent.split("\n").map((line) => line.trim());

    if (lines.length === 0 || lines[0] === "") {
      throw new Error("Input file is empty or invalid.");
    }

    // plateau validation
    const plateauLine = lines.shift();
    const plateauCoords = plateauLine.split(" ");
    if (plateauCoords.length !== 2) {
      throw new Error(`Invalid format for plateau dimensions: "${plateauLine}". Expected 2 numbers.`);
    }

    const [plateauX, plateauY] = plateauCoords.map(Number);
    if (isNaN(plateauX) || isNaN(plateauY)) {
      throw new Error(`Plateau dimensions must be numbers. Received: "${plateauLine}"`);
    }

    // rover validation
    if (lines.length % 2 !== 0) {
      throw new Error(
        "Invalid input format: Rover data must be in pairs of lines (position and instructions)."
      );
    }

    const roverMovement = [];
    for (let i = 0; i < lines.length; i += 2) {
      const positionLine = lines[i];
      const instructions = lines[i + 1];
      const positionParts = positionLine.split(" ");

      if (positionParts.length !== 3) {
        throw new Error(
          `Invalid format for rover position on line ${i + 2}: 
          "${positionLine}". Expected X Y D.`
        );
      }

      const [xStr, yStr, direction] = positionParts;
      const x = Number(xStr);
      const y = Number(yStr);

      if (isNaN(x) || isNaN(y)) {
        throw new Error(
          `Rover coordinates must be numbers on line ${i + 2}. Received: "${positionLine}"`
        );
      }

      if (!["N", "E", "S", "W"].includes(direction.toUpperCase())) {
        throw new Error(
          `Invalid rover direction on line ${i + 2}. Received: "${direction}". Expected N, E, S, or W.`
        );
      }

      roverMovement.push({
        position: { x, y, direction },
        instructions,
      });
    }

    return {
      plateauDimensions: { x: plateauX, y: plateauY },
      roverData: roverMovement,
    };
  }
}
