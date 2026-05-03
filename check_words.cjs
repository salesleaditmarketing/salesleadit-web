const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src', 'pages', 'resources');
const files = fs.readdirSync(directory).filter(f => f.endsWith('.jsx') && f !== 'ResourceLayout.jsx');

// Shuffle and pick 5
const shuffled = files.sort(() => 0.5 - Math.random());
const selected = shuffled.slice(0, 5);

console.log('--- WORD COUNT CHECK (5 RANDOM PAGES) ---');

selected.forEach(file => {
  const filePath = path.join(directory, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract content between <ResourceLayout> and </ResourceLayout>
  const startRegex = /<ResourceLayout[^>]*>/;
  const matchStart = content.match(startRegex);
  
  if (matchStart) {
    const startIdx = matchStart.index + matchStart[0].length;
    const endIdx = content.lastIndexOf('</ResourceLayout>');
    
    if (startIdx !== -1 && endIdx !== -1) {
      let bodyContent = content.substring(startIdx, endIdx);
      
      // Remove all HTML/JSX tags
      bodyContent = bodyContent.replace(/<[^>]+>/g, ' ');
      
      // Remove JSX expressions like {/* ... */}
      bodyContent = bodyContent.replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ');
      
      // Count words
      const words = bodyContent.trim().split(/\s+/).filter(w => w.length > 0);
      console.log(`${file}: ${words.length} words`);
    } else {
      console.log(`${file}: Could not parse layout tags.`);
    }
  } else {
    console.log(`${file}: No ResourceLayout found.`);
  }
});
