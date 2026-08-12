const fs = require('fs');
const file = 'c:\\interactiveflatplanel\\modul-ops.html';
let content = fs.readFileSync(file, 'utf8');

const target = `                    <ul class="list-unstyled fw-bold text-dark fs-5 mb-4 d-grid gap-3">`;

const replacement = `    <!-- Apa itu OPS Section -->
    <section class="py-5 bg-white border-bottom-black-2">
        <div class="container py-5">
            <div class="row align-items-center g-5">
                <div class="col-lg-6">
                    <div class="bg-sage border-black-2 rounded-3xl shadow-neo-12 p-4 d-flex align-items-center justify-content-center" style="height: 400px;">
                        <!-- Ilustrasi Modul OPS -->
                        <div class="bg-dark border-black-2 rounded-2xl shadow-neo-4 w-75 position-relative" style="height: 60%;">
                            <div class="bg-white border-black-2 rounded-circle position-absolute" style="width: 20px; height: 20px; top: 15px; right: 15px;"></div>
                            <div class="bg-white border-black-2 rounded-circle position-absolute" style="width: 15px; height: 15px; top: 18px; right: 45px;"></div>
                            <div class="bg-primary-custom border-black-2 position-absolute bottom-0 start-0 w-100" style="height: 40px; border-bottom-left-radius: 0.8rem; border-bottom-right-radius: 0.8rem;"></div>
                            <div class="text-white font-cabinet fw-bold fs-3 position-absolute top-50 start-50 translate-middle">Intel Inside</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h2 class="font-cabinet fw-bolder display-5 mb-4 text-dark">Apa itu Modul OPS?</h2>
                    <p class="fs-5 fw-medium text-secondary mb-4">
                        OPS (Open Pluggable Specification) adalah standar modul komputer mini yang dirancang khusus untuk disematkan langsung ke dalam slot di bagian belakang Interactive Flat Panel.
                    </p>
                    <ul class="list-unstyled fw-bold text-dark fs-5 mb-4 d-grid gap-3">`;

content = content.replace(target, replacement);
fs.writeFileSync(file, content);
console.log('Restored the original mockup to modul-ops.html successfully!');
