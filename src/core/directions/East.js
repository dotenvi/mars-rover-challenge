import { Coordinates } from "../Coordinates";
import { IDirection } from "./IDirection";
import { North } from "./North";
import { South } from "./South";

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
