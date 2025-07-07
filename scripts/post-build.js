const fs = require('fs');
const path = require('path');

// Define source and destination paths
const srcDir = path.resolve(__dirname, '../src');
const distDir = path.resolve(__dirname, '../dist');

// Files to copy
const filesToCopy = [
  'manifest.json',
  'background.js'
];

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy each file
filesToCopy.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(distDir, file);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to dist directory`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});

console.log('Post-build process completed successfully');
