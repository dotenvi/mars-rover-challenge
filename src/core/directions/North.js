import { Coordinates } from "../Coordinates.js";
import { East } from "./East.js";
import { IDirection } from "./IDirection.js";
import { West } from "./West.js";

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
