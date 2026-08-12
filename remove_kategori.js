const fs = require('fs');
const path = require('path');

const dir = 'c:\\interactiveflatplanel\\';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const textToRemove = `                        <li><span class="dropdown-item-text text-secondary fw-bold" style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;">Kategori Panel</span></li>
                        <li><a class="dropdown-item mb-1" href="index.html#panel-65">PanelPro 65" Edu</a></li>
                        <li><a class="dropdown-item mb-1" href="index.html#panel-75">PanelPro 75" Pro</a></li>
                        <li><a class="dropdown-item mb-1" href="index.html#panel-86">PanelPro 86" Corp</a></li>
                        <li><hr class="dropdown-divider" style="border-top: 2px solid #000; opacity: 1; margin: 0.5rem 0;"></li>
`;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    if (content.includes(textToRemove.trim())) {
        // use replace with a relaxed regex in case of slight indentation differences
        const regex = /<li><span class="dropdown-item-text text-secondary fw-bold" style="font-size: 0\.85rem; text-transform: uppercase; letter-spacing: 1px;">Kategori Panel<\/span><\/li>[\s\S]*?<li><hr class="dropdown-divider" style="border-top: 2px solid #000; opacity: 1; margin: 0\.5rem 0;"><\/li>\s*/m;
        content = content.replace(regex, '');
        fs.writeFileSync(path.join(dir, file), content);
        console.log('Removed from ' + file);
    } else {
        console.log('Not found in ' + file);
    }
});
