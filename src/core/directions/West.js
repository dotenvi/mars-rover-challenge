import { Coordinates } from "../Coordinates";
import { IDirection } from "./IDirection";
import { North } from "./North";
import { South } from "./South";

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
