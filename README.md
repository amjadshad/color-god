
# color-god

A package for color codes, color generation, color manupulation.

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


### hexToRgb

The `hexToRgb` function converts a color from hexadecimal format to RGB format.

```javascript
const hexToRgb = require('color-god');

// Example usage
const hexColor = '#3498db'; // Color in hex format

const rgbColor = hexToRgb(hexColor); 
```

This will output:

```bash
RGB Color: rgb(52, 152, 219)
```

 
### colorCode

The `colorCode` object contains color names mapped to their RGB values.

```javascript
const { colorCode } = require('color-god');

// Example usage
const colorName = 'red'; // Color name

const rgbColor = colorCode[colorName];
This will output:

```bash
RGB Color code: [255, 0, 0]
```

```
## License

This package is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

