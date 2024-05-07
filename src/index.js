
// Importing necessary modules
const chroma = require('chroma-js');

// Function to generate color palette
function generatePalette(baseColor, numColors) {
    const palette = chroma.scale([baseColor, 'white']).mode('lab').colors(numColors);
    return palette.map(color => color.hex());
}

// Exporting the generatePalette function
module.exports = generatePalette;
