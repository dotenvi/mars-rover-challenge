import { Coordinates } from "../Coordinates.js";
import { East } from "./East.js";
import { IDirection } from "./IDirection.js";
import { West } from "./West.js";

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
