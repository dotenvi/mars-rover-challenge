import { Coordinates } from "../Coordinates";
import { East } from "./East";
import { IDirection } from "./IDirection";
import { West } from "./West";

export class South extends IDirection {
  turnLeft() {
    return new East();
  }
  turnRight() {
    return new West();
  }
  move(coordinate) {
    return new Coordinates(coordinate.x, coordinate.y - 1);
  }
  toString() {
    return "S";
  }
}
