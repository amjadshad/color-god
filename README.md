
# color-god

A package for generating color palettes.

## Installation

You can install `color-god` via npm:

```bash
npm install color-god
```

## Usage

```javascript
const generatePalette = require('color-god');

// Example usage
const baseColor = '#3498db'; // Base color in hex format
const numColors = 5; // Number of colors in the palette

const colorPalette = generatePalette(baseColor, numColors);
console.log('Generated Color Palette:', colorPalette);
```

## License

This package is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

