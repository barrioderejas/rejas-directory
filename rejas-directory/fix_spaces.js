const fs = require('fs');
let content = fs.readFileSync('data.js', 'utf8');
content = content.replace(/image:\s*"(.*?)"/g, (match, p1) => {
    if (!p1.startsWith('http')) {
        return 'image: "' + p1.replace(/ /g, '-') + '"';
    }
    return match;
});
fs.writeFileSync('data.js', content);
console.log('Done!');
