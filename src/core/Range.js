export class Range {
  constructor(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      throw new TypeError("Range boundaries for the Plateau must be integers.");
    }

    if (min > max) {
      throw new Error("The 'min' boundary cannot be greater than the 'max' boundary.");
    }

    this.min = min;
    this.max = max;
    Object.freeze(this);
  }

  /**
   * Determines if a value is within this range (inclusive).
   * @param {number} value
   * @returns {boolean}
   */
  contains(value) {
    return value >= this.min && value <= this.max;
  }
}
