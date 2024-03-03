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

// Hypothetical class for creating complete SVGs with shapes and text
class SVGCreator {
  constructor(text, textColor, shape, fontSize = '16px', fontFamily = 'Arial') {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
  }

  render() {
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${this.shape.render()}
  <text x="150" y="100" fill="${this.textColor}" dominant-baseline="middle" text-anchor="middle" font-size="${this.fontSize}" font-family="${this.fontFamily}">${this.text}</text>
</svg>
    `.trim();
  }
}

// Exporting the Circle, Square, Triangle, and SVGCreator classes for external use
module.exports = { Circle, Square, Triangle, SVGCreator };
