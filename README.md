# Number Float32 Base ULP Difference: Measure Floating-Point Distances

![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue.svg)
![Releases](https://img.shields.io/badge/Releases-latest-orange.svg)

## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Topics](#topics)
- [Contributing](#contributing)
- [License](#license)

## Overview
The `number-float32-base-ulp-difference` repository offers a simple yet powerful tool to compute the number of representable single-precision floating-point values that separate two single-precision floating-point numbers along the real number line. This calculation is essential for understanding the precision and limits of floating-point arithmetic in programming and numerical analysis.

You can find the latest releases [here](https://github.com/kutty0820/number-float32-base-ulp-difference/releases). Download and execute the necessary files to get started.

## Installation
To use this package, you need Node.js installed on your machine. If you haven't installed Node.js yet, visit [Node.js official website](https://nodejs.org/) for the installation instructions.

Once Node.js is set up, you can install the package via npm:

```bash
npm install number-float32-base-ulp-difference
```

Alternatively, you can clone the repository directly:

```bash
git clone https://github.com/kutty0820/number-float32-base-ulp-difference.git
cd number-float32-base-ulp-difference
npm install
```

## Usage
To compute the ULP (Unit in the Last Place) difference between two floating-point numbers, you can use the provided function in your JavaScript code.

### Example Code
```javascript
const { ulpDifference } = require('number-float32-base-ulp-difference');

const num1 = 1.5;
const num2 = 2.0;

const difference = ulpDifference(num1, num2);
console.log(`The ULP difference between ${num1} and ${num2} is ${difference}.`);
```

This code will calculate the number of representable floating-point values that separate `1.5` and `2.0`.

## Examples
Here are a few examples to illustrate the usage of the ULP difference function:

### Example 1: Basic Calculation
```javascript
const { ulpDifference } = require('number-float32-base-ulp-difference');

const numA = 3.14;
const numB = 3.14159;

const result = ulpDifference(numA, numB);
console.log(`ULP difference between ${numA} and ${numB}: ${result}`);
```

### Example 2: Edge Cases
```javascript
const { ulpDifference } = require('number-float32-base-ulp-difference');

const numX = 1.0;
const numY = 1.0000001;

const edgeResult = ulpDifference(numX, numY);
console.log(`ULP difference between ${numX} and ${numY}: ${edgeResult}`);
```

### Example 3: Negative Numbers
```javascript
const { ulpDifference } = require('number-float32-base-ulp-difference');

const negNum1 = -2.5;
const negNum2 = -2.499999;

const negResult = ulpDifference(negNum1, negNum2);
console.log(`ULP difference between ${negNum1} and ${negNum2}: ${negResult}`);
```

## Topics
This repository covers various topics related to floating-point arithmetic, including:

- **abs**: Absolute values.
- **diff**: Differences between numbers.
- **distance**: The distance between two values.
- **error**: Error analysis in calculations.
- **float**: Floating-point numbers.
- **float32**: Single-precision floating-point representation.
- **javascript**: The programming language used.
- **math**: Mathematical operations and concepts.
- **mathematics**: The study of numbers and their relationships.
- **node**: Node.js environment.
- **node-js**: Another reference to Node.js.
- **nodejs**: Node.js, a JavaScript runtime.
- **numbers**: General number theory.
- **relative**: Relative comparisons between numbers.
- **stdlib**: Standard libraries in programming.
- **ulp**: Unit in the Last Place.

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Open a pull request with a clear description of your changes.

Please ensure that your code follows the existing style and includes tests where applicable.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

For the latest releases, visit [this link](https://github.com/kutty0820/number-float32-base-ulp-difference/releases). Download and execute the necessary files to start using the tool.