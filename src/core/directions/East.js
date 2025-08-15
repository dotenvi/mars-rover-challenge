import { Coordinates } from "../Coordinates.js";
import { IDirection } from "./IDirection.js";
import { North } from "./North.js";
import { South } from "./South.js";

export class East extends IDirection {
  turnLeft() {
    return new North();
  }
  turnRight() {
    return new South();
  }
  move(coordinate) {
    return new Coordinates(coordinate.x + 1, coordinate.y);
  }
  toString() {
    return "E";
  }
}
