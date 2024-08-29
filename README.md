# Calculator Kata

A utility function to calculate the sum of numbers from a string input along with react frontend, supporting custom delimiters, handling negative numbers, and ignoring numbers greater than 1000.

I have created a step by step js project of calculator with test cases in jest.
Each commit will be a step in creating or fixing a new test case.

## Problem statement link

The following is a TDD Kata for sum function - an exercise in coding, refactoring and test-first approach.

[calculator kata link](https://osherove.com/tdd-kata-1/)

## Running project

To run this project

```bash
  npm start
```

To run test cases

```bash
  npm test
```

## Features

- **Custom Delimiters:** Handle custom delimiters of any length and multiple delimiters.
- **Error Handling:** Throws an error for negative numbers.
- **Ignore Large Numbers:** Numbers greater than 1000 are ignored.

## Installation

To use the `sum` function in your project, import it as follows:

```javascript
import sum from "./calculator";
```

## Basic Usage

```javascript
console.log(sum("1,2,3")); // Output: 6
```

## Custom Delimiters

Specify custom delimiters using the format //[delimiter]\n[numbers]:

```javascript
console.log(sum("//;\n1;2;3")); // Output: 6
console.log(sum("//[***]\n1***2***3")); // Output: 6
console.log(sum("//[;][|]\n1;2|3")); // Output: 6
```
