// Extract readable text from a saved HTML file. Usage: node htmltext.cjs <file> [maxLines]
const fs = require('fs');
const file = process.argv[2];
const maxLines = parseInt(process.argv[3] || '400', 10);
let s = fs.readFileSync(file, 'utf8');
s = s
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x2F;/g, '/');
const lines = s.split('\n').map((x) => x.trim()).filter((x) => x.length > 1);
console.log(lines.slice(0, maxLines).join('\n'));
