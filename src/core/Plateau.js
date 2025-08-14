export class Plateau {
  constructor(xRange, yRange) {
    if (!xRange || !yRange) {
      throw new Error("Plateau requires x and y ranges.");
    }
    this.xRange = xRange;
    this.yRange = yRange;
  }

  isWithinBounds(position) {
    return this.xRange.contains(position.x) && this.yRange.contains(position.y);
  }
}
