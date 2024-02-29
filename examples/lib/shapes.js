// Square class with constructor and render method for SVG rect
class Square {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect x="75" y="50" width="150" height="150" fill="${this.color}" />`;
    }
  }
  
  // Circle class with constructor and render method for SVG circle
  class Circle {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  // Triangle class with constructor and render method for SVG polygon
  class Triangle {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="150,10 250,190 50,190" fill="${this.color}" />`;
    }
  }
  
  // Export the Circle, Square, and Triangle classes as an object
  module.exports = { Circle, Square, Triangle };
  