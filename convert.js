const sharp = require('sharp');
const path = require('path');

const srcDir = 'C:\\Users\\ACER ASPIRE\\.gemini\\antigravity\\brain\\910b7ae2-ef6f-49a3-9864-b7b3a79cbf6a\\';
const destDir = 'c:\\interactiveflatplanel\\img\\';

const files = [
    { name: 'hero_indonesia_1786533271479.jpg', dest: 'hero.webp', width: 800 },
    { name: 'blog_1_tips_1786533293586.jpg', dest: 'blog1.webp', width: 600 },
    { name: 'blog_2_corp_1786533308169.jpg', dest: 'blog2.webp', width: 600 },
    { name: 'blog_3_edu_1786533525205.jpg', dest: 'blog3.webp', width: 600 }
];

async function convertAll() {
    for (const file of files) {
        const srcPath = path.join(srcDir, file.name);
        const destPath = path.join(destDir, file.dest);
        try {
            await sharp(srcPath)
                .resize({ width: file.width })
                .webp({ quality: 75 })
                .toFile(destPath);
            console.log(`Successfully converted ${file.name} to ${file.dest}`);
        } catch (err) {
            console.error(`Failed to convert ${file.name}:`, err);
        }
    }
}

convertAll();
