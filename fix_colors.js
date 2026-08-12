const fs = require('fs');

function updateColors(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace primary color
    content = content.replace(/--primary:\s*#0055ff;/g, '--primary: #00bfff;');
    
    // Replace rgba color in bg-dots
    content = content.replace(/rgba\(0,\s*85,\s*255,\s*0\.9\)/g, 'rgba(0, 191, 255, 0.9)');
    
    fs.writeFileSync(file, content);
    console.log('Updated colors in ' + file);
}

updateColors('c:\\interactiveflatplanel\\modul-ops.html');
updateColors('c:\\interactiveflatplanel\\stand.html');
