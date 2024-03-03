# SVG Forge
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
SVG Forge is a command-line application designed to streamline the process of creating simple, yet customizable logos for developers, freelancers, and small business owners. By eliminating the need for advanced graphic design skills or software, this tool allows users to quickly generate logos with basic shapes (circle, square, triangle) and text, tailored to their branding needs.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test Instructions](#test-instructions)
- [Credits](#credits)
- [Questions](#questions)

## Installation
To install SVG Forge, follow these steps:
1. Clone the repository to your local machine using `git clone https://github.com/marphco/svg-logo-maker.git`
2. Initialize a project and create the package.json file: `npm init -y`
3. Install the required dependencies: `npm i inquirer@8.2.4`

## Usage
Using SVG Forge is straightforward. After installing, follow these steps to create your custom logo:
1. **Launch the Application**: Run `node index.js` in your terminal within the SVG Forge directory.
2. **Follow Prompts**: 
   - **Logo Text**: Enter up to three characters.
   - **Text Color**: Choose a color (name or hex).
   - **Shape**: Select from 'circle', 'triangle', or 'square'.
   - **Shape Color**: Choose a color for the shape.
   - **Font Size**: Pick 'small', 'medium', or 'large'.
   - **Font Family**: Choose from listed options.

3. **Save and View**: After making your selections, the app generates `logo.svg`. Open this file in a browser to view your logo.

That's it! You've created a custom logo with SVG Forge.

https://github.com/marphco/svg-forge/assets/5993166/c33d1578-9bc6-4b06-9092-2a0af679522a

## License
This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

## Contributing
Contributions to SVG Forge are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request.

## Test Instructions

Running tests for SVG Forge is straightforward with Jest. Follow these easy steps:
1. **Ensure Jest is Installed**: If not, install it with `npm install --save-dev jest`.
2. **Run the Tests**: In the project's root directory, execute `npm test` in your terminal.
3. **Review the Results**: Jest will report the test outcomes. Successes are marked, and failures are detailed for troubleshooting.
- **No Tests Running?** Check your `package.json` to ensure it includes a test script `"test": "jest"`.
- **Seeing Failures?** Examine the output for why a test failed and adjust your code or tests accordingly.

This simple process helps ensure your SVG Forge functions correctly.


## Credits
- [w3schools.com](https://w3schools.com)
- [developer.mozilla.org](https://developer.mozilla.org/en-US/)
- [shields.io](https://shields.io/)
- [npmjs.com](https://docs.npmjs.com/)
- [stackoverflow.com](https://stackoverflow.com/questions/)
- [wikipedia.org](https://en.wikipedia.org/wiki/SVG)
- [VS Code SVG Extension Documentation](https://github.com/lishu/vscode-svg2)

## Questions
For any questions, please reach out via:
- GitHub: [marphco](https://github.com/marphco)
- Email: [marphco@gmail.com](mailto:marphco@gmail.com)
