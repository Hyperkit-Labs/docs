const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

async function convertFavicon() {
  try {
    const pngPath = path.join(__dirname, '../public/Hyperkit Abstract.png');
    const icoPath = path.join(__dirname, '../app/favicon.ico');
    
    // Resize to common favicon sizes and convert to buffers
    const sizes = [16, 32, 48];
    const buffers = await Promise.all(
      sizes.map(size => 
        sharp(pngPath)
          .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png()
          .toBuffer()
      )
    );
    
    // Convert to ICO
    const icoBuffer = await toIco(buffers);
    
    // Write the ICO file
    fs.writeFileSync(icoPath, icoBuffer);
    console.log('Successfully converted PNG to ICO and replaced favicon.ico');
  } catch (error) {
    console.error('Error converting favicon:', error);
    process.exit(1);
  }
}

convertFavicon();

