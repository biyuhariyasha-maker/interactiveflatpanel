const fs = require('fs');
const path = require('path');

const dir = 'c:\\interactiveflatplanel\\';

function addGallerySection(file, imageSrc, imageAlt, title, desc, injectionMarker) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    const gallerySection = `    <!-- Galeri Produk -->
    <section class="py-5 bg-sage border-bottom-black-2">
        <div class="container py-4 text-center">
            <h2 class="font-cabinet fw-bolder display-5 mb-3 text-dark">${title}</h2>
            <p class="fs-5 fw-medium text-secondary mb-5 mx-auto" style="max-width: 700px;">
                ${desc}
            </p>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <img src="${imageSrc}" alt="${imageAlt}" class="img-fluid border-black-2 rounded-3xl shadow-neo-12 w-100" style="max-height: 600px; object-fit: cover; display: block;">
                </div>
            </div>
        </div>
    </section>

`;

    if (content.includes(injectionMarker)) {
        content = content.replace(injectionMarker, gallerySection + injectionMarker);
        fs.writeFileSync(filePath, content);
        console.log('Added gallery to ' + file);
    } else {
        console.log('Could not find injection marker in ' + file);
    }
}

addGallerySection(
    'modul-ops.html',
    'img/blog1.webp',
    'Galeri Modul PC OPS',
    'Visualisasi Modul PC (OPS)',
    'Lihat lebih dekat bagaimana integrasi Modul PC (OPS) menyempurnakan kemampuan layar pintar Anda menjadi pusat komputasi yang bertenaga.',
    '<!-- Spesifikasi / Varian Produk -->'
);

addGallerySection(
    'stand.html',
    'img/blog3.webp',
    'Galeri Stand Beroda',
    'Tampilan Nyata Stand Beroda',
    'Dirancang dengan material baja berkualitas, Stand Beroda kami memastikan layar interaktif Anda aman, stabil, dan siap dipindahkan ke mana saja.',
    '<!-- Varian Stand Beroda -->'
);
