const chroma = require('chroma-js');

function hexToRgb(hex) {
    const rgb = chroma(hex).rgb();
    return `rgb(${rgb.join(', ')})`;
}

module.exports = hexToRgb;


