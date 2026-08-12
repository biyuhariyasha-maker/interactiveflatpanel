const fs = require('fs');

const file = 'c:\\interactiveflatplanel\\modul-ops.html';
let content = fs.readFileSync(file, 'utf8');

const target = `<img src="img/blog1.webp" alt="Modul PC OPS Windows" class="border-black-2 rounded-3xl shadow-neo-12 w-100" style="height: 400px; object-fit: cover; display: block;">`;

const replacement = `<div class="bg-sage border-black-2 rounded-3xl shadow-neo-12 p-4 d-flex align-items-center justify-content-center" style="height: 400px;">
                        <!-- Ilustrasi Modul OPS -->
                        <div class="bg-dark border-black-2 rounded-2xl shadow-neo-4 w-75 position-relative" style="height: 60%;">
                            <div class="bg-white border-black-2 rounded-circle position-absolute" style="width: 20px; height: 20px; top: 15px; right: 15px;"></div>
                            <div class="bg-white border-black-2 rounded-circle position-absolute" style="width: 15px; height: 15px; top: 18px; right: 45px;"></div>
                            <div class="bg-primary-custom border-black-2 position-absolute bottom-0 start-0 w-100" style="height: 40px; border-bottom-left-radius: 0.8rem; border-bottom-right-radius: 0.8rem;"></div>
                            <div class="text-white font-cabinet fw-bold fs-3 position-absolute top-50 start-50 translate-middle">Intel Inside</div>
                        </div>
                    </div>`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(file, content);
    console.log('Restored the original mockup to modul-ops.html');
} else {
    console.log('Target image tag not found in modul-ops.html');
}
