// Import shape classes for testing, including the SVGCreator for full SVG generation
const { camelCase } = require("yargs-parser");
const { Circle, Square, Triangle, SVGCreator } = require("./shapes");

// Test suite for individual shape classes
describe("Shape classes", () => {
  test("Triangle class renders the correct SVG string", () => {
    const triangle = new Triangle("blue");
    expect(triangle.render()).toEqual('<polygon points="150,10 250,190 50,190" fill="blue" />');
  });

  test("Circle class renders the correct SVG string", () => {
    const circle = new Circle("red");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test("Square class renders the correct SVG string", () => {
    const square = new Square("green");
    expect(square.render()).toEqual('<rect x="75" y="50" width="150" height="150" fill="green" />');
  });
});

// Test suite for SVGCreator integration
describe("SVGCreator integration", () => {
  test("correctly applies text color and content", () => {
    // Instantiate SVGCreator with explicit font size and family to avoid undefined values
    const svgCreator = new SVGCreator("Hello", "blue", new Circle("red"), "16px", "Arial");
    const output = svgCreator.render();
    // Ensure the output includes the specified text element with all attributes, including font properties
    expect(output).toContain('<text x="150" y="100" fill="blue" dominant-baseline="middle" text-anchor="middle" font-size="16px" font-family="Arial">Hello</text>');
    expect(output).toContain('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test("renders a complete SVG with shape and text", () => {
    // Instantiate SVGCreator with explicit font size and family for the test
    const svgCreator = new SVGCreator("SVG", "green", new Square("blue"), "18px", "Verdana");
    const output = svgCreator.render();
    // Check for the rect element from Square and the text element with specified properties
    expect(output).toContain('<rect x="75" y="50" width="150" height="150" fill="blue" />');
    expect(output).toContain('<text x="150" y="100" fill="green" dominant-baseline="middle" text-anchor="middle" font-size="18px" font-family="Verdana">SVG</text>');
  });
});

// New test suite for checking font properties specifically
describe("SVGCreator font properties", () => {
  test("correctly applies font size and font family", () => {
    // This test ensures that font properties are explicitly checked
    const svgCreator = new SVGCreator("Text", "black", new Circle("yellow"), "20px", "Times New Roman");
    const output = svgCreator.render();
    // The expectation is that the font properties are correctly applied in the SVG output
    expect(output).toContain('<text x="150" y="100" fill="black" dominant-baseline="middle" text-anchor="middle" font-size="20px" font-family="Times New Roman">Text</text>');
  });
});