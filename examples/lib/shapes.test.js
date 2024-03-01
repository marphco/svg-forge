// Import shape classes for testing
const { Circle, Square, Triangle } = require("./shapes");

// Test suite for shape classes
describe("Shape classes", () => {
  // Test for Triangle's SVG output
  test("Triangle class renders the correct SVG string", () => {
    const triangle = new Triangle("blue");
    expect(triangle.render()).toEqual(
      '<polygon points="150,10 250,190 50,190" fill="blue" />'
    );
  });

  // Test for Circle's SVG output
  test("Circle class renders the correct SVG string", () => {
    const circle = new Circle("red");
    expect(circle.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="red" />'
    );
  });

  // Test for Square's SVG output
  test("Square class renders the correct SVG string", () => {
    const square = new Square("green");
    expect(square.render()).toEqual(
      '<rect x="75" y="50" width="150" height="150" fill="green" />'
    );
  });
});
