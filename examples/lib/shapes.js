// Base class for all shapes, providing common properties and methods
class Shape {
  // Constructor to set the initial color of the shape
  constructor(color) {
    this.color = color;
  }

  // Method to update the color of the shape
  setColor(color) {
    this.color = color;
  }
}

// Class representing a square, inherits from Shape
class Square extends Shape {
  // Method to generate SVG string for a square with specified properties
  render() {
    return `<rect x="75" y="50" width="150" height="150" fill="${this.color}" />`;
  }
}

// Class representing a circle, inherits from Shape
class Circle extends Shape {
  // Method to generate SVG string for a circle with specified properties
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Class representing a triangle, inherits from Shape
class Triangle extends Shape {
  // Method to generate SVG string for a triangle with specified properties
  render() {
    return `<polygon points="150,10 250,190 50,190" fill="${this.color}" />`;
  }
}

// Exporting the Circle, Square, and Triangle classes for external use
module.exports = { Circle, Square, Triangle };
