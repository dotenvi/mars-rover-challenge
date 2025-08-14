import { Coordinates } from "../Coordinates";
import { East } from "./East";
import { IDirection } from "./IDirection";
import { West } from "./West";

export class North extends IDirection {
  turnLeft() {
    return new West();
  }
  turnRight() {
    return new East();
  }
  move(coordinate) {
    return new Coordinates(coordinate.x, coordinate.y + 1);
  }
  toString() {
    return "N";
  }
}
