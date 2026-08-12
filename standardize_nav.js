const fs = require('fs');
const path = require('path');

const dir = 'c:\\interactiveflatplanel\\';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const cssToAdd = `
        /* Custom Neo-Brutalist Dropdown */
        .neo-dropdown {
            border: 2px solid #000 !important;
            box-shadow: 4px 4px 0px 0px #000 !important;
            border-radius: 0.75rem !important;
            padding: 0.5rem !important;
            background-color: #fff !important;
        }
        .neo-dropdown .dropdown-item {
            font-family: 'Satoshi', sans-serif;
            font-weight: 700;
            border-radius: 0.5rem;
            transition: all 0.2s;
            border: 2px solid transparent;
            padding: 0.5rem 1rem;
            color: #000;
            text-shadow: none;
        }
        .neo-dropdown .dropdown-item:hover {
            background-color: var(--primary) !important;
            color: #fff !important;
            border: 2px solid #000;
            box-shadow: 2px 2px 0px 0px #000;
        }`;

const jsToAdd = `
        // Efek hover untuk dropdown menu
        const dropdownItems = document.querySelectorAll('.neo-dropdown .dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.backgroundColor = 'var(--primary)';
                item.style.color = '#fff';
            });
            item.addEventListener('mouseleave', () => {
                item.style.backgroundColor = 'transparent';
                item.style.color = '#000';
            });
        });`;

const headerTemplate = `    <!-- Navigation -->
    <header class="fixed-top h-20 bg-primary-custom border-bottom-black-2 z-3 px-4 d-flex align-items-center" style="height: 80px;">
        <div class="container-fluid d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
                <div class="bg-black d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                    <svg class="text-white" style="width: 24px; height: 24px;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clip-rule="evenodd"></path></svg>
                </div>
                <span class="font-cabinet fw-bolder fs-4 text-white" style="letter-spacing: -1px; text-shadow: 2px 2px 0 #000;">PANELPRO</span>
            </div>
            
            <nav class="d-none d-lg-flex align-items-center gap-4 fw-medium text-white" style="text-shadow: 1px 1px 0 #000;">
                <a href="index.html" class="text-white text-decoration-none LINK_BERANDA">Beranda</a>
                <a href="about.html" class="text-white text-decoration-none LINK_TENTANG">Tentang kami</a>
                
                <!-- Dropdown Produk -->
                <div class="dropdown">
                    <a href="#" class="text-white text-decoration-none dropdown-toggle LINK_PRODUK pb-1" id="dropdownProduk" data-bs-toggle="dropdown" aria-expanded="false">
                        Produk
                    </a>
                    <ul class="dropdown-menu neo-dropdown mt-3" aria-labelledby="dropdownProduk" style="min-width: 250px;">
                        <li><span class="dropdown-item-text text-secondary fw-bold" style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;">Kategori Panel</span></li>
                        <li><a class="dropdown-item mb-1" href="index.html#panel-65">PanelPro 65" Edu</a></li>
                        <li><a class="dropdown-item mb-1" href="index.html#panel-75">PanelPro 75" Pro</a></li>
                        <li><a class="dropdown-item mb-1" href="index.html#panel-86">PanelPro 86" Corp</a></li>
                        <li><hr class="dropdown-divider" style="border-top: 2px solid #000; opacity: 1; margin: 0.5rem 0;"></li>
                        <li><span class="dropdown-item-text text-secondary fw-bold" style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;">Aksesoris & Modul</span></li>
                        <li><a class="dropdown-item mb-1" href="modul-ops.html">Modul PC (OPS Windows)</a></li>
                        <li><a class="dropdown-item" href="stand.html">Stand Beroda (Mobile Stand)</a></li>
                    </ul>
                </div>
                
                <a href="package.html" class="text-white text-decoration-none LINK_PAKET">Paket</a>
                <a href="blog.html" class="text-white text-decoration-none LINK_BLOG">Blog</a>
                <a href="#kontak" class="text-white text-decoration-none">Kontak</a>
            </nav>
            
            <a href="https://wa.me/6281234567890" class="btn btn-dark text-white px-4 py-2 border-black-2 shadow-neo-4 neo-btn fw-bold rounded-3 text-decoration-none">
                WhatsApp
            </a>
        </div>
    </header>`;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Replace header
    const headerRegex = /<!-- Navigation -->[\s\S]*?<\/header>/;
    const headerRegex2 = /<header class="fixed-top.*?<\/header>/s;

    let activeClass = 'border-bottom border-2 border-white';
    let newHeader = headerTemplate
        .replace('LINK_BERANDA', file === 'index.html' ? activeClass : 'hover:underline')
        .replace('LINK_TENTANG', file === 'about.html' ? activeClass : 'hover:underline')
        .replace('LINK_PRODUK', file === 'produk.html' || file === 'modul-ops.html' || file === 'stand.html' ? activeClass : '')
        .replace('LINK_PAKET', file === 'package.html' ? activeClass : 'hover:underline')
        .replace('LINK_BLOG', file === 'blog.html' ? activeClass : 'hover:underline');

    if (content.match(headerRegex)) {
        content = content.replace(headerRegex, newHeader);
    } else if (content.match(headerRegex2)) {
        content = content.replace(headerRegex2, newHeader);
    }

    // Add CSS if missing
    if (!content.includes('.neo-dropdown')) {
        content = content.replace(/<\/style>/, cssToAdd + '\n    </style>');
    } else {
        // We'll trust existing CSS, except maybe standardizing it?
        // Actually, some files have slightly differing neo-dropdown CSS. 
        // Let's replace the whole block if possible, or just leave it since it works.
    }

    // Add JS if missing
    if (!content.includes('const dropdownItems')) {
        content = content.replace(/<\/body>/, '<script>\n' + jsToAdd + '\n    </script>\n</body>');
    }

    // Fix missing bootstrap bundle if missing (some files might lack it?)
    if (!content.includes('bootstrap.bundle.min.js')) {
        content = content.replace(/<\/body>/, '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>\n</body>');
    }

    fs.writeFileSync(path.join(dir, file), content);
    console.log('Processed ' + file);
});
