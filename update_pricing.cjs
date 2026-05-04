const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function findAndReplace(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findAndReplace(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('$1,349')) {
        content = content.replace(/\$1,349/g, '$2,499');
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

findAndReplace(srcDir);
console.log('Mass replacement complete.');
