const fs = require('fs');
const file = 'c:\\interactiveflatplanel\\index.html';
let content = fs.readFileSync(file, 'utf8');

// I need to insert the row g-5 back into <div class="container py-5"> under <h2 class="font-cabinet fw-bolder display-5 mb-5 text-white text-center">Produk Unggulan</h2>

const target = `<h2 class="font-cabinet fw-bolder display-5 mb-5 text-white text-center">Produk Unggulan</h2>
            <div class="row g-5">
                </div>
            </div>`;

const replacement = `<h2 class="font-cabinet fw-bolder display-5 mb-5 text-white text-center">Produk Unggulan</h2>
            <div class="row g-5">
                <div class="col-md-6">
                    <div class="bg-white border-black-2 p-4 rounded-3xl shadow-neo-8 h-100 neo-card">
                        <div class="bg-light border-black-2 rounded-2xl mb-4 d-flex align-items-center justify-content-center overflow-hidden" style="height: 250px;">
                            <div class="bg-dark border-black-2 rounded" style="width: 80%; height: 60%;"></div>
                        </div>
                        <h3 class="font-cabinet fw-bold fs-3 mb-2 text-dark">PanelPro 65" Edu</h3>
                        <p class="fw-medium text-dark mb-4">Layar interaktif ukuran menengah yang sangat cocok untuk ruang kelas modern dan studio diskusi.</p>
                        <ul class="list-unstyled fw-medium text-dark mb-4">
                            <li>✔ Resolusi 4K</li>
                            <li>✔ Anti-Glare Glass</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-primary-custom border-black-2 p-4 rounded-3xl shadow-neo-8 h-100 neo-card">
                        <div class="bg-white border-black-2 rounded-2xl mb-4 d-flex align-items-center justify-content-center overflow-hidden" style="height: 250px;">
                            <div class="bg-dark border-black-2 rounded" style="width: 90%; height: 70%;"></div>
                        </div>
                        <h3 class="font-cabinet fw-bold fs-3 mb-2 text-dark">PanelPro 86" Corp</h3>
                        <p class="fw-medium text-dark mb-4">Layar raksasa untuk ruang rapat eksekutif. Menjamin setiap sudut ruangan dapat melihat presentasi dengan jelas.</p>
                        <ul class="list-unstyled fw-medium text-dark mb-4">
                            <li>✔ Kamera & Mic Built-in</li>
                            <li>✔ Wireless Casting</li>
                        </ul>
                    </div>
                </div>
            </div>`;

// Use regex in case indentation or lines differ slightly
content = content.replace(/<h2 class="font-cabinet fw-bolder display-5 mb-5 text-white text-center">Produk Unggulan<\/h2>\s*<div class="row g-5">\s*<\/div>\s*<\/div>/m, replacement);

fs.writeFileSync(file, content);
console.log('Restored and updated Produk Unggulan section in index.html');
