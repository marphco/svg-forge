// Import the required modules: 'inquirer' for user input, 'fs' for writing to a file, and 'shapes' for the SVG shapes.
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./examples/lib/shapes.js");

// Define an asynchronous function to prompt the user for input using the 'inquirer' module.
async function promptUser() {
  // Prompt the user to enter up to three characters for the logo text.
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",
      validate: (input) => {
        if (input.length >= 1 && input.length <= 3) {
          return true;
        }
        return "Text must be between 1 and 3 characters long.";
      },
    },

    // Prompt the user to enter the text color as a keyword or hex value.
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (keyword or hex):",
    },

    // Prompt the user to choose a shape from a list of options.
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },

    // Prompt the user to enter the shape color as a keyword or hex value.
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (keyword or hex):",
    },

    // Prompt the user to choose the font size from a list of options.
    {
      type: "list",
      name: "fontSize",
      message: "Choose the font size:",
      choices: ["small", "medium", "large"],
    },

    // Prompt the user to choose the font family from a list of options.
    {
      type: "list",
      name: "fontFamily",
      message: "Choose the font family:",
      choices: ["serif", "sans-serif", "monospace", "cursive", "fantasy"],
    },
  ]);

  // Return the user's input as an object.
  return answers;
}

// Define a function to generate the SVG content based on the user's input.
function generateSVG({
  text,
  textColor,
  shape,
  shapeColor,
  fontSize,
  fontFamily,
}) {
  // Define a mapping of font size options to pixel values.
  const fontSizeMap = {
    small: "12px",
    medium: "24px",
    large: "36px",
  };

  // Create an instance of the chosen shape class and render it as an SVG path.
  const shapeObj = {
    circle: new Circle(shapeColor),
    square: new Square(shapeColor),
    triangle: new Triangle(shapeColor),
  }[shape];

  // Define the SVG content as a string, including the shape and text elements.
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeObj.render()}
      <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${
    fontSizeMap[fontSize]
  }" font-family="${fontFamily}, fantasy">${text}</text>
    </svg>
  `;

  // Write the SVG content to a file named 'logo.svg'.
  fs.writeFileSync("logo.svg", svgContent);
  console.log("Generated logo.svg");
}

// Define an asynchronous function to handle the user's input and generate the SVG content.
async function main() {
  const userInput = await promptUser();
  generateSVG(userInput);
}

main();
