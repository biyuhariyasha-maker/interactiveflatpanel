const fs = require('fs');
const path = require('path');

const dir = 'c:\\interactiveflatplanel\\';
const filesToFix = ['modul-ops.html', 'stand.html'];

const correctCSS = `    <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        :root {
            /* Warna Capri */
            --primary: #00bfff; 
            --charcoal: #171e19;
            --sage: #cce0ff;
            --dark: #272727;
            --star: #ffbc2e;
        }

        /* Prevent Horizontal Scroll / Goyang Kanan Kiri */
        body { 
            font-family: 'Satoshi', sans-serif; 
            overflow-x: hidden;
            width: 100%;
        }
        
        h1, h2, h3, h4, h5, h6, .font-cabinet { 
            font-family: 'Cabinet Grotesk', sans-serif; 
        }

        /* Custom Colors & Borders */
        .bg-primary-custom { background-color: var(--primary) !important; }
        .bg-charcoal { background-color: var(--charcoal) !important; color: white; }
        .bg-sage { background-color: var(--sage) !important; }
        .bg-dark-custom { background-color: var(--dark) !important; color: white; }
        .text-sage { color: var(--sage) !important; }
        .text-star { color: var(--star) !important; }
        
        .border-black-2 { border: 2px solid #000 !important; }
        .border-bottom-black-2 { border-bottom: 2px solid #000 !important; }
        .border-y-black-2 { border-top: 2px solid #000 !important; border-bottom: 2px solid #000 !important; }
        .border-dashed { border: 2px dashed #6c757d !important; }

        /* Hard Shadows */
        .shadow-neo-4 { box-shadow: 4px 4px 0px 0px #000 !important; }
        .shadow-neo-8 { box-shadow: 8px 8px 0px 0px #000 !important; }
        .shadow-neo-12 { box-shadow: 12px 12px 0px 0px #000 !important; }

        /* Radial Dot Pattern */
        .bg-dots {
            background-image: radial-gradient(black 1px, transparent 1px);
            background-size: 32px 32px;
            background-position: 0 0;
            background-color: var(--primary);
            position: relative;
            z-index: 1;
        }
        .bg-dots::before {
            content: ''; position: absolute; inset: 0;
            background-color: rgba(0, 191, 255, 0.9);
            z-index: -1;
        }

        /* Stroke Text Effect */
        .text-stroke {
            -webkit-text-stroke: 2px black;
`;

filesToFix.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Replace the corrupted area.
    // The corrupted area is everything between <!-- Fontshare: Cabinet Grotesk & Satoshi --> and color: transparent;
    const regex = /<!-- Fontshare: Cabinet Grotesk & Satoshi -->[\s\S]*?color: transparent;/m;
    content = content.replace(regex, '<!-- Fontshare: Cabinet Grotesk & Satoshi -->\n' + correctCSS + '            color: transparent;');
    
    fs.writeFileSync(path.join(dir, file), content);
    console.log('Restored and updated ' + file);
});
