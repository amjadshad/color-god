
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


## Usage

### hexToRgb

The `hexToRgb` function converts a color from hexadecimal format to RGB format.

```javascript
const hexToRgb = require('color-god');

// Example usage
const hexColor = '#3498db'; // Color in hex format

const rgbColor = hexToRgb(hexColor);
console.log('RGB Color:', rgbColor);
```

This will output:

```bash
RGB Color: rgb(52, 152, 219)
```


## Usage

### colorNames

The `colorNames` object contains color names mapped to their RGB values.

```javascript
const { colorNames } = require('color-god');

// Example usage
const colorName = 'red'; // Color name

const rgbColor = colorNames[colorName];
console.log('RGB Color for', colorName, ':', rgbColor);

## License

This package is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

