const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

// CSS input and output paths
const inputFile = 'src/styles/index.css';
const outputFile = 'public/styles.css';

// Read the CSS file
const css = fs.readFileSync(inputFile, 'utf8');

// Process the CSS with PostCSS and plugins
postcss([
  tailwindcss,
  autoprefixer,
])
  .process(css, { from: inputFile, to: outputFile })
  .then((result) => {
    // Create the output directory if it doesn't exist
    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write the processed CSS to the output file
    fs.writeFileSync(outputFile, result.css);
    console.log(`CSS processed and saved to ${outputFile}`);
  })
  .catch((error) => {
    console.error('Error processing CSS:', error);
  });

