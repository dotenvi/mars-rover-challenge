export class Rover {
  constructor(initialPosition, initialDirection) {
    this.position = initialPosition;
    this.direction = initialDirection;
  }

  processInstructions(instructions, plateau) {
    for (const command of instructions) {
      if (command === "L") {
        this.direction = this.direction.turnLeft();
      } else if (command === "R") {
        this.direction = this.direction.turnRight();
      } else if (command === "M") {
        this.move(plateau);
      }
    }
  }

  move(plateau) {
    const nextPosition = this.direction.move(this.position);
    if (plateau.isWithinBounds(nextPosition)) {
      this.position = nextPosition;
    }
  }

  getFinalState() {
    return `${this.position.x} ${this.position.y} ${this.direction.toString()}`;
  }
}
