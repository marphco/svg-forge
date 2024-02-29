const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./examples/lib/shapes.js");

async function promptUser() {
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
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (keyword or hex):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (keyword or hex):",
    },
    {
      type: "list",
      name: "fontSize",
      message: "Choose the font size:",
      choices: ["small", "medium", "large"],
    },
    {
      type: "list",
      name: "fontFamily",
      message: "Choose the font family:",
      choices: ["serif", "sans-serif", "monospace", "cursive", "fantasy"],
    },
  ]);

  return answers;
}

function generateSVG({
  text,
  textColor,
  shape,
  shapeColor,
  fontSize,
  fontFamily,
}) {
  const fontSizeMap = {
    small: "12px",
    medium: "24px",
    large: "36px",
  };

  const shapeObj = {
    circle: new Circle(shapeColor),
    square: new Square(shapeColor),
    triangle: new Triangle(shapeColor),
  }[shape];

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeObj.render()}
      <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${
    fontSizeMap[fontSize]
  }" font-family="${fontFamily}, fantasy">${text}</text>
    </svg>
  `;
  fs.writeFileSync("logo.svg", svgContent);
  console.log("Generated logo.svg");
}

async function main() {
  const userInput = await promptUser();
  generateSVG(userInput);
}

main();
