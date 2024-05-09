const chroma = require('chroma-js');

function generatePalette(baseColor, numColors) {
    const palette = chroma.scale([baseColor, 'white']).mode('lab').colors(numColors);
    return palette.map(color => color.hex());
}

module.exports = generatePalette;