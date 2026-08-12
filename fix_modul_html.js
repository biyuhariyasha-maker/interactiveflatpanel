const fs = require('fs');

const file = 'c:\\interactiveflatplanel\\modul-ops.html';
let content = fs.readFileSync(file, 'utf8');

// I will insert it after the end of the Simple Hero Section
const heroEndMarker = `            </p>
        </div>
    </section>`;

const replacement = `            </p>
        </div>
    </section>

    <!-- Apa itu OPS Section -->
    <section class="py-5 bg-white border-bottom-black-2">
        <div class="container py-5">
            <div class="row align-items-center g-5">
                <div class="col-lg-6">
                    <img src="img/blog1.webp" alt="Modul PC OPS Windows" class="border-black-2 rounded-3xl shadow-neo-12 w-100" style="height: 400px; object-fit: cover; display: block;">
                </div>
                <div class="col-lg-6">
                    <h2 class="font-cabinet fw-bolder display-5 mb-4 text-dark">Apa itu Modul OPS?</h2>
                    <p class="fs-5 fw-medium text-secondary mb-4">
                        OPS (Open Pluggable Specification) adalah standar modul komputer mini yang dirancang khusus untuk disematkan langsung ke dalam slot di bagian belakang Interactive Flat Panel.
                    </p>`;

content = content.replace(heroEndMarker, replacement);
fs.writeFileSync(file, content);
console.log('Restored modul-ops.html content.');
