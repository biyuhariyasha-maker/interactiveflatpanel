const fs = require('fs');
const path = require('path');

const dir = 'c:\\interactiveflatplanel\\';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const oldWa = 'https://wa.me/6281234567890';
const newWa = 'https://wa.me/6288989643555';

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Replace all #kontak with the WA link
    content = content.replace(/href="#kontak"/g, `href="${newWa}"`);
    
    // Replace the old WhatsApp link with the new one
    content = content.replace(new RegExp(oldWa, 'g'), newWa);
    
    fs.writeFileSync(path.join(dir, file), content);
    console.log('Updated contact links in ' + file);
});
