import { Coordinates } from "../Coordinates.js";
import { IDirection } from "./IDirection.js";
import { North } from "./North.js";
import { South } from "./South.js";

export class West extends IDirection {
  turnLeft() {
    return new South();
  }
  turnRight() {
    return new North();
  }
  move(coordinate) {
    return new Coordinates(coordinate.x - 1, coordinate.y);
  }
  toString() {
    return "W";
  }
}
